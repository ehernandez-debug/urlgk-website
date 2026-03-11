/* eslint-env node */
const functions = require("firebase-functions/v1");
const admin = require("firebase-admin");
const nodemailer = require("nodemailer");

admin.initializeApp();

// ─────────────────────────────────────────────────────────────────────────────
// FUNCIÓN 1: Notificación inmediata al recibir un nuevo lead de descarga PDF
// Trigger: Firestore onCreate en colección pdf_downloads
// ─────────────────────────────────────────────────────────────────────────────
exports.onPdfDownloadLead = functions
  .region("us-central1")
  .runWith({
    secrets: ["GMAIL_USER", "GMAIL_APP_PASSWORD"],
    timeoutSeconds: 30,
    memory: "128MB",
  })
  .firestore.document("pdf_downloads/{docId}")
  .onCreate(async (snap) => {
    const data = snap.data();
    const { nombre, email, downloadedAt, source, pdfName } = data;

    let fecha = "Fecha no disponible";
    try {
      if (downloadedAt && downloadedAt.toDate) {
        fecha = downloadedAt.toDate().toLocaleString("es-MX", {
          timeZone: "America/Mexico_City",
          dateStyle: "full",
          timeStyle: "short",
        });
      }
    } catch (e) {
      fecha = new Date().toLocaleString("es-MX", { timeZone: "America/Mexico_City" });
    }

    const gmailUser = process.env.GMAIL_USER;
    const gmailPass = process.env.GMAIL_APP_PASSWORD;

    if (!gmailUser || !gmailPass) {
      console.error("❌ Secrets GMAIL_USER o GMAIL_APP_PASSWORD no configurados");
      return;
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: { user: gmailUser, pass: gmailPass },
    });

    const mailOptions = {
      from: `"Urologik Website" <${gmailUser}>`,
      to: "ehernandez@urologik.com",
      subject: `🩺 Nuevo Lead PDF — ${nombre || "Médico sin nombre"}`,
      html: `
        <!DOCTYPE html>
        <html lang="es">
        <head>
          <meta charset="UTF-8">
          <style>
            body { font-family: Arial, sans-serif; color: #333; background: #f5f5f5; margin: 0; padding: 0; }
            .container { max-width: 600px; margin: 30px auto; background: #fff; border-radius: 8px; overflow: hidden; box-shadow: 0 2px 8px rgba(0,0,0,0.1); }
            .header { background: #0d6e7a; padding: 24px 32px; }
            .header h1 { color: #fff; margin: 0; font-size: 20px; }
            .header p { color: #a8d8df; margin: 4px 0 0; font-size: 14px; }
            .body { padding: 32px; }
            .label { font-size: 12px; color: #888; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 4px; }
            .value { font-size: 16px; font-weight: bold; color: #0d6e7a; margin-bottom: 20px; }
            .divider { border: none; border-top: 1px solid #eee; margin: 24px 0; }
            .cta { background: #0d6e7a; color: #fff !important; padding: 12px 24px; border-radius: 6px; text-decoration: none; display: inline-block; font-weight: bold; margin-top: 8px; }
            .footer { background: #f5f5f5; padding: 16px 32px; font-size: 12px; color: #999; text-align: center; }
            .badge { display: inline-block; background: #e8f5f7; color: #0d6e7a; padding: 4px 10px; border-radius: 20px; font-size: 12px; font-weight: bold; margin-bottom: 24px; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>🩺 Nuevo Lead — Descarga de Guía PDF</h1>
              <p>Un médico descargó la Guía del Programa de Colaboración en urologik.com</p>
            </div>
            <div class="body">
              <span class="badge">⚡ Seguimiento recomendado en 24 horas</span>
              <div class="label">Nombre del médico</div>
              <div class="value">${nombre || "No proporcionado"}</div>
              <div class="label">Email de contacto</div>
              <div class="value"><a href="mailto:${email}" style="color:#0d6e7a;">${email}</a></div>
              <div class="label">Fecha y hora (CDMX)</div>
              <div class="value">${fecha}</div>
              <div class="label">Fuente</div>
              <div class="value">${source || "para-medicos-page"}</div>
              <div class="label">Documento descargado</div>
              <div class="value">${pdfName || "urologik-modelo-colaboracion.pdf"}</div>
              <hr class="divider">
              <p style="font-size:14px; color:#555; margin-bottom: 20px;">
                Este médico ha mostrado interés en el <strong>Programa de Colaboración de Urologik</strong>.
                Se recomienda hacer seguimiento en las próximas <strong>24 horas</strong>.
              </p>
              <a href="mailto:${email}?subject=Seguimiento%20Programa%20de%20Colaboraci%C3%B3n%20Urologik&body=Hola%20${encodeURIComponent(nombre || "Dr.")}%2C%0A%0AGracias%20por%20descargar%20nuestra%20gu%C3%ADa..." class="cta">
                ✉️ Responder a ${nombre || "este médico"}
              </a>
            </div>
            <div class="footer">
              Urologik · urologik.com · Mensaje automático · ID: ${snap.id}
            </div>
          </div>
        </body>
        </html>
      `,
      text: `Nuevo Lead PDF\nNombre: ${nombre || "N/A"}\nEmail: ${email}\nFecha: ${fecha}\nFuente: ${source || "para-medicos-page"}\n\nID: ${snap.id}`,
    };

    try {
      await transporter.sendMail(mailOptions);
      console.log(`✅ Notificación enviada — Lead: ${email}`);
    } catch (error) {
      console.error("❌ Error al enviar notificación:", error.message);
      throw error;
    }
  });


// ─────────────────────────────────────────────────────────────────────────────
// FUNCIÓN 2: Informe mensual de leads — se ejecuta el 1ro de cada mes a las 8am CDMX
// Trigger: Cloud Scheduler (pubsub schedule)
// ─────────────────────────────────────────────────────────────────────────────
exports.monthlyLeadReport = functions
  .region("us-central1")
  .runWith({
    secrets: ["GMAIL_USER", "GMAIL_APP_PASSWORD"],
    timeoutSeconds: 120,
    memory: "256MB",
  })
  .pubsub.schedule("0 8 1 * *")           // Cron: día 1 de cada mes a las 8:00am
  .timeZone("America/Mexico_City")
  .onRun(async () => {
    const db = admin.firestore();
    const gmailUser = process.env.GMAIL_USER;
    const gmailPass = process.env.GMAIL_APP_PASSWORD;

    if (!gmailUser || !gmailPass) {
      console.error("❌ Secrets no configurados");
      return;
    }

    // Calcular rango del mes anterior
    const now = new Date();
    const firstDayThisMonth = new Date(now.getFullYear(), now.getMonth(), 1);
    const firstDayLastMonth = new Date(now.getFullYear(), now.getMonth() - 1, 1);
    const lastDayLastMonth = new Date(firstDayThisMonth.getTime() - 1);

    const mesNombre = firstDayLastMonth.toLocaleString("es-MX", {
      month: "long",
      year: "numeric",
      timeZone: "America/Mexico_City",
    });
    const mesNombreCapital = mesNombre.charAt(0).toUpperCase() + mesNombre.slice(1);

    console.log(`📊 Generando informe de leads para: ${mesNombreCapital}`);

    // Consultar Firestore: leads del mes anterior
    const snapshot = await db
      .collection("pdf_downloads")
      .where("downloadedAt", ">=", admin.firestore.Timestamp.fromDate(firstDayLastMonth))
      .where("downloadedAt", "<=", admin.firestore.Timestamp.fromDate(lastDayLastMonth))
      .orderBy("downloadedAt", "desc")
      .get();

    const leads = [];
    snapshot.forEach((doc) => {
      const d = doc.data();
      leads.push({
        id: doc.id,
        nombre: d.nombre || "Sin nombre",
        email: d.email || "Sin email",
        fecha: d.downloadedAt
          ? d.downloadedAt.toDate().toLocaleString("es-MX", {
              timeZone: "America/Mexico_City",
              dateStyle: "short",
              timeStyle: "short",
            })
          : "Sin fecha",
        source: d.source || "para-medicos-page",
      });
    });

    const totalLeads = leads.length;
    console.log(`📊 Total de leads encontrados: ${totalLeads}`);

    // Construir tabla HTML de leads
    const leadsTableRows = leads.length > 0
      ? leads.map((lead, i) => `
          <tr style="background: ${i % 2 === 0 ? "#f9fafb" : "#fff"};">
            <td style="padding: 10px 14px; font-size: 13px; color: #555;">${i + 1}</td>
            <td style="padding: 10px 14px; font-size: 13px; font-weight: bold; color: #1a1a1a;">${lead.nombre}</td>
            <td style="padding: 10px 14px; font-size: 13px;">
              <a href="mailto:${lead.email}?subject=Seguimiento%20Programa%20Colaboraci%C3%B3n%20Urologik&body=Hola%20${encodeURIComponent(lead.nombre)}%2C" style="color: #0d6e7a; text-decoration: none;">${lead.email}</a>
            </td>
            <td style="padding: 10px 14px; font-size: 13px; color: #555;">${lead.fecha}</td>
          </tr>
        `).join("")
      : `<tr><td colspan="4" style="padding: 24px; text-align: center; color: #999; font-style: italic;">No se registraron descargas en este período.</td></tr>`;

    // Estadísticas básicas
    const emailsUnicos = new Set(leads.map((l) => l.email)).size;

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: { user: gmailUser, pass: gmailPass },
    });

    const mailOptions = {
      from: `"Urologik Analytics" <${gmailUser}>`,
      to: "ehernandez@urologik.com",
      subject: `📊 Informe Mensual de Leads PDF — ${mesNombreCapital}`,
      html: `
        <!DOCTYPE html>
        <html lang="es">
        <head>
          <meta charset="UTF-8">
          <style>
            body { font-family: Arial, sans-serif; color: #333; background: #f0f4f5; margin: 0; padding: 0; }
            .container { max-width: 680px; margin: 30px auto; background: #fff; border-radius: 10px; overflow: hidden; box-shadow: 0 2px 12px rgba(0,0,0,0.1); }
            .header { background: linear-gradient(135deg, #0d6e7a 0%, #0a5563 100%); padding: 32px; }
            .header h1 { color: #fff; margin: 0 0 6px; font-size: 22px; }
            .header p { color: #a8d8df; margin: 0; font-size: 14px; }
            .stats { display: flex; gap: 0; border-bottom: 1px solid #eee; }
            .stat { flex: 1; padding: 20px 24px; text-align: center; border-right: 1px solid #eee; }
            .stat:last-child { border-right: none; }
            .stat-number { font-size: 32px; font-weight: bold; color: #0d6e7a; line-height: 1; }
            .stat-label { font-size: 12px; color: #888; margin-top: 4px; text-transform: uppercase; letter-spacing: 0.5px; }
            .section { padding: 24px 32px; }
            .section-title { font-size: 14px; font-weight: bold; color: #0d6e7a; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 16px; border-bottom: 2px solid #e8f5f7; padding-bottom: 8px; }
            table { width: 100%; border-collapse: collapse; font-size: 13px; }
            thead tr { background: #0d6e7a; }
            thead th { padding: 10px 14px; color: #fff; text-align: left; font-size: 12px; text-transform: uppercase; letter-spacing: 0.5px; }
            .cta-section { background: #f0f9fa; padding: 24px 32px; border-top: 1px solid #e8f5f7; text-align: center; }
            .cta { display: inline-block; background: #0d6e7a; color: #fff !important; padding: 12px 28px; border-radius: 6px; text-decoration: none; font-weight: bold; font-size: 14px; }
            .footer { background: #f5f5f5; padding: 16px 32px; font-size: 11px; color: #aaa; text-align: center; }
            .badge-green { display: inline-block; background: #d1fae5; color: #065f46; padding: 3px 8px; border-radius: 12px; font-size: 11px; font-weight: bold; }
            .badge-gray { display: inline-block; background: #f3f4f6; color: #6b7280; padding: 3px 8px; border-radius: 12px; font-size: 11px; }
          </style>
        </head>
        <body>
          <div class="container">
            <!-- Header -->
            <div class="header">
              <h1>📊 Informe Mensual de Leads</h1>
              <p>Descargas de Guía PDF del Programa de Colaboración · ${mesNombreCapital}</p>
            </div>

            <!-- Stats -->
            <div class="stats">
              <div class="stat">
                <div class="stat-number">${totalLeads}</div>
                <div class="stat-label">Descargas totales</div>
              </div>
              <div class="stat">
                <div class="stat-number">${emailsUnicos}</div>
                <div class="stat-label">Médicos únicos</div>
              </div>
              <div class="stat">
                <div class="stat-number">${totalLeads > 0 ? Math.round(totalLeads / 4) : 0}</div>
                <div class="stat-label">Promedio semanal</div>
              </div>
            </div>

            <!-- Tabla de leads -->
            <div class="section">
              <div class="section-title">Detalle de Leads — ${mesNombreCapital}</div>
              <table>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Nombre</th>
                    <th>Email</th>
                    <th>Fecha</th>
                  </tr>
                </thead>
                <tbody>
                  ${leadsTableRows}
                </tbody>
              </table>
            </div>

            <!-- CTA -->
            ${totalLeads > 0 ? `
            <div class="cta-section">
              <p style="margin: 0 0 16px; color: #555; font-size: 14px;">
                Tienes <strong>${totalLeads} lead${totalLeads !== 1 ? "s" : ""}</strong> pendiente${totalLeads !== 1 ? "s" : ""} de seguimiento del mes de ${mesNombreCapital}.
                Recuerda que el contacto oportuno aumenta significativamente la tasa de conversión.
              </p>
              <a href="https://urologik.com/para-medicos" class="cta">Ver Página Para Médicos</a>
            </div>
            ` : `
            <div class="cta-section">
              <p style="margin: 0 0 16px; color: #555; font-size: 14px;">
                No hubo descargas en ${mesNombreCapital}. Considera activar campañas de marketing para aumentar el tráfico a la página de médicos.
              </p>
              <a href="https://urologik.com/para-medicos" class="cta">Ver Página Para Médicos</a>
            </div>
            `}

            <!-- Footer -->
            <div class="footer">
              Urologik · urologik.com · Informe generado automáticamente el ${new Date().toLocaleString("es-MX", { timeZone: "America/Mexico_City", dateStyle: "long" })}<br>
              Período analizado: ${firstDayLastMonth.toLocaleDateString("es-MX", { timeZone: "America/Mexico_City" })} — ${lastDayLastMonth.toLocaleDateString("es-MX", { timeZone: "America/Mexico_City" })}
            </div>
          </div>
        </body>
        </html>
      `,
      text: `
INFORME MENSUAL DE LEADS — ${mesNombreCapital}
Urologik · urologik.com

RESUMEN:
- Total descargas: ${totalLeads}
- Médicos únicos: ${emailsUnicos}
- Promedio semanal: ${totalLeads > 0 ? Math.round(totalLeads / 4) : 0}

DETALLE:
${leads.length > 0
  ? leads.map((l, i) => `${i + 1}. ${l.nombre} | ${l.email} | ${l.fecha}`).join("\n")
  : "Sin leads en este período."}

Período: ${firstDayLastMonth.toLocaleDateString("es-MX")} — ${lastDayLastMonth.toLocaleDateString("es-MX")}
Generado automáticamente por Urologik Website.
      `.trim(),
    };

    try {
      await transporter.sendMail(mailOptions);
      console.log(`✅ Informe mensual enviado — ${mesNombreCapital} — ${totalLeads} leads`);
    } catch (error) {
      console.error("❌ Error al enviar informe mensual:", error.message);
      throw error;
    }
  });

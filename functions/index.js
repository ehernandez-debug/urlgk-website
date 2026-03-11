/* eslint-env node */
const functions = require("firebase-functions/v1");
const admin = require("firebase-admin");
const nodemailer = require("nodemailer");

admin.initializeApp();

/**
 * Firebase Function v1 — Trigger Firestore
 * Se dispara cuando un médico llena el formulario y descarga el PDF en /para-medicos.
 * Envía notificación por email a ehernandez@urologik.com.
 *
 * Secrets configurados en Firebase Secret Manager:
 *   - GMAIL_USER: ehernandez@urologik.com
 *   - GMAIL_APP_PASSWORD: contraseña de aplicación de Gmail
 */
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

    // Formatear fecha en zona horaria de México
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

    // Configurar transporter de Nodemailer con Gmail
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: gmailUser,
        pass: gmailPass,
      },
    });

    // Email HTML con diseño profesional de Urologik
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
                Se recomienda hacer seguimiento en las próximas <strong>24 horas</strong> para maximizar la tasa de conversión.
              </p>

              <a href="mailto:${email}?subject=Seguimiento%20Programa%20de%20Colaboraci%C3%B3n%20Urologik&body=Hola%20${encodeURIComponent(nombre || "Dr.")}%2C%0A%0AGracias%20por%20descargar%20nuestra%20gu%C3%ADa%20del%20Programa%20de%20Colaboraci%C3%B3n.%20Me%20gustar%C3%ADa%20agendar%20una%20llamada%20para%20contarte%20m%C3%A1s%20sobre%20c%C3%B3mo%20podemos%20trabajar%20juntos.%0A%0ASaludos%2C%0AErick%20Hern%C3%A1ndez%0AUrologik" class="cta">
                ✉️ Responder a ${nombre || "este médico"}
              </a>
            </div>
            <div class="footer">
              Urologik · urologik.com · Este email fue generado automáticamente por el sitio web.<br>
              ID del documento: ${snap.id}
            </div>
          </div>
        </body>
        </html>
      `,
      text: `
Nuevo Lead — Descarga de Guía PDF

Nombre: ${nombre || "No proporcionado"}
Email: ${email}
Fecha: ${fecha}
Fuente: ${source || "para-medicos-page"}
Documento: ${pdfName || "urologik-modelo-colaboracion.pdf"}

Recomendación: hacer seguimiento en las próximas 24 horas.
Responder a: ${email}

— Urologik Website (mensaje automático)
ID: ${snap.id}
      `.trim(),
    };

    try {
      const info = await transporter.sendMail(mailOptions);
      console.log(`✅ Email enviado a ehernandez@urologik.com — Lead: ${email} — MessageId: ${info.messageId}`);
    } catch (error) {
      console.error("❌ Error al enviar email:", error.message);
      throw error;
    }
  });

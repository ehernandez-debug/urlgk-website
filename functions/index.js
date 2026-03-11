/* eslint-env node */
const { setGlobalOptions } = require("firebase-functions/v2");
const { onDocumentCreated } = require("firebase-functions/v2/firestore");
const { defineSecret } = require("firebase-functions/params");
const admin = require("firebase-admin");
const nodemailer = require("nodemailer");

setGlobalOptions({ region: "us-central1" });

admin.initializeApp();

// Secrets para las credenciales de Gmail (configurar con: firebase functions:secrets:set GMAIL_USER)
const GMAIL_USER = defineSecret("GMAIL_USER");
const GMAIL_APP_PASSWORD = defineSecret("GMAIL_APP_PASSWORD");

/**
 * Función que se dispara cuando un médico descarga el PDF en /para-medicos.
 * Guarda el lead en Firestore (lo hace el frontend) y envía notificación por email.
 */
exports.onPdfDownloadLead = onDocumentCreated(
  {
    document: "pdf_downloads/{docId}",
    secrets: [GMAIL_USER, GMAIL_APP_PASSWORD],
  },
  async (event) => {
    const snap = event.data;
    if (!snap) {
      console.log("No hay datos en el evento.");
      return;
    }

    const data = snap.data();
    const { nombre, email, downloadedAt, source, pdfName } = data;

    // Formatear fecha
    const fecha = downloadedAt
      ? downloadedAt.toDate().toLocaleString("es-MX", {
          timeZone: "America/Mexico_City",
          dateStyle: "full",
          timeStyle: "short",
        })
      : "Fecha no disponible";

    // Configurar transporter de Nodemailer con Gmail
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: GMAIL_USER.value(),
        pass: GMAIL_APP_PASSWORD.value(),
      },
    });

    // Opciones del email
    const mailOptions = {
      from: `"Urologik Website" <${GMAIL_USER.value()}>`,
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
            .cta { background: #0d6e7a; color: #fff; padding: 12px 24px; border-radius: 6px; text-decoration: none; display: inline-block; font-weight: bold; margin-top: 8px; }
            .footer { background: #f5f5f5; padding: 16px 32px; font-size: 12px; color: #999; text-align: center; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>🩺 Nuevo Lead — Descarga de Guía PDF</h1>
              <p>Un médico descargó la Guía del Programa de Colaboración</p>
            </div>
            <div class="body">
              <div class="label">Nombre</div>
              <div class="value">${nombre || "No proporcionado"}</div>

              <div class="label">Email del médico</div>
              <div class="value"><a href="mailto:${email}" style="color:#0d6e7a;">${email}</a></div>

              <div class="label">Fecha y hora (CDMX)</div>
              <div class="value">${fecha}</div>

              <div class="label">Fuente</div>
              <div class="value">${source || "para-medicos-page"}</div>

              <div class="label">Documento descargado</div>
              <div class="value">${pdfName || "urologik-modelo-colaboracion.pdf"}</div>

              <hr class="divider">

              <p style="font-size:14px; color:#555;">
                Este médico ha mostrado interés en el Programa de Colaboración de Urologik.
                Se recomienda hacer seguimiento en las próximas <strong>24 horas</strong>.
              </p>

              <a href="mailto:${email}?subject=Seguimiento%20Programa%20de%20Colaboraci%C3%B3n%20Urologik&body=Hola%20${encodeURIComponent(nombre || "")}%2C%0A%0AGracias%20por%20descargar%20nuestra%20gu%C3%ADa..." class="cta">
                Responder a ${nombre || "este médico"}
              </a>
            </div>
            <div class="footer">
              Urologik · urologik.com · Este email fue generado automáticamente por el sitio web.
            </div>
          </div>
        </body>
        </html>
      `,
      // Versión texto plano como fallback
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
      `.trim(),
    };

    try {
      await transporter.sendMail(mailOptions);
      console.log(`✅ Email enviado a ehernandez@urologik.com — Lead: ${email}`);
    } catch (error) {
      console.error("❌ Error al enviar email:", error);
      throw error;
    }
  }
);

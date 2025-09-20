import { z } from "zod";
import { isValidPhoneNumber } from "libphonenumber-js";

export const medicoSchema = z.object({
  nombre: z.string().min(2, "Escribe tu nombre"),
  email: z.string().email("Escribe un correo válido"),
  country: z.string().min(1, "Selecciona país"),
  phoneRaw: z.string().min(6, "Teléfono requerido"),
  // token de captcha opcional
  cfTurnstileToken: z.string().optional(),
}).refine((data) => isValidPhoneNumber(data.phoneRaw), {
  message: "Teléfono inválido",
  path: ["phoneRaw"],
});

export type MedicoInput = z.infer<typeof medicoSchema>;
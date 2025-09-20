import { parsePhoneNumberFromString } from "libphonenumber-js";
export function toE164(raw: string) {
  const p = parsePhoneNumberFromString(raw);
  return p?.isValid() ? p.number : null; // E.164 o null
}
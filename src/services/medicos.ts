import { db } from "@/lib/firebase"; // respeta path del repo
import { collection, doc, runTransaction, serverTimestamp } from "firebase/firestore";

export async function createMedicoUniqueByPhone(payload: any, e164: string) {
  const mainCol = collection(db, "medicos_registros");
  const uniqCol = collection(db, "medicos_registros_uniq_phone");
  const uniqRef = doc(uniqCol, e164);

  return await runTransaction(db, async (tx) => {
    const exists = await tx.get(uniqRef);
    if (exists.exists()) throw new Error("duplicate_phone");

    const mainRef = doc(mainCol); // id auto
    tx.set(uniqRef, { medicoRef: mainRef, createdAt: serverTimestamp() });
    tx.set(mainRef, {
      ...payload,
      phoneE164: e164,
      createdAt: serverTimestamp(),
      source: "website",
    });
    return mainRef.id;
  });
}
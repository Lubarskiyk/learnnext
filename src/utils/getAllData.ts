import { collection, getDocs, query } from "firebase/firestore";
import { db } from "@/lib/firebase";
import { TypeTeacher } from "@/types/teacherType";

export const getAllData = async () => {
  const q = query(collection(db, "teachers"));
  const querySnapshot = await getDocs(q);

  const rawData: TypeTeacher[] = querySnapshot.docs.map(doc => ({
    id: doc.id,
    ...(doc.data() as Omit<TypeTeacher, "id">),
  }));

  return rawData;
};

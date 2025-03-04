import { collection, getDocs, query } from "firebase/firestore";
import { db } from "@/lib/firebase";
import { IAllFilters } from "@/types/allFilters";

export const getData = async () => {
  const q = query(collection(db, "teachers"));
  const querySnapshot = await getDocs(q);

  const rawData = querySnapshot.docs.map(doc => doc.data());

  const allLanguages = querySnapshot.docs.flatMap(
    doc => doc.data().languages || []
  );

  const allPrices = querySnapshot.docs
    .map(doc => doc.data().price_per_hour)
    .filter((price): price is number => price !== undefined);
  const allLevels = querySnapshot.docs.flatMap(doc => doc.data().levels || []);

  const uniqueFilters: IAllFilters = {
    languages: ["all", ...Array.from(new Set(allLanguages))],
    price: ["all", ...Array.from(new Set(allPrices)).sort().map(String)],
    levels: ["all", ...Array.from(new Set(allLevels))],
  };
  return uniqueFilters;
};

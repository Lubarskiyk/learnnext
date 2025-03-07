import { ReactNode } from "react";
import { IAllFilters } from "@/types/allFilters";
import { getData } from "@/utils/getFilterData";
import Filters from "@/components/Filters";

export default async function TeachersLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  const uniqueFilters: IAllFilters = await getData();
  return (
    <section>
      <Filters filters={uniqueFilters} />
      {children}
    </section>
  );
}

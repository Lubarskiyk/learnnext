"use client";

import Select from "@/components/ui/select";
import { IAllFilters } from "@/types/allFilters";
import Label from "@/components/ui/label";
interface FiltersProps {
  filters: IAllFilters;
}

export default function Filters({ filters }: FiltersProps) {
  return (
    <div className="mx-auto flex w-full max-w-[1440px] items-center gap-4 px-32 py-5 text-base">
      <Label text="Languages" className="flex flex-col gap-2">
        <Select
          name="languages"
          options={filters.languages}
          onChange={e => console.log(e.target.value)}
        />
      </Label>
      <Label text="Level of knowledge" className="flex flex-col gap-2">
        <Select
          name="levels"
          options={filters.levels}
          onChange={e => console.log(e.target.value)}
        />
      </Label>
      <Label text="Price" className="flex flex-col gap-2">
        <Select
          name="prices"
          options={filters.price}
          onChange={e => console.log(e.target.value)}
        />
      </Label>
    </div>
  );
}

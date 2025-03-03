import { BookOpen, Star } from "lucide-react";
import Divider from "@/components/ui/divider";
import { PickedTeacherInfo } from "@/types/teacherType";

interface IRatingAndPriceProps {
  info: PickedTeacherInfo;
}

export default function TeacherInfo({ info }: IRatingAndPriceProps) {
  return (
    <div className="mb-8 flex justify-between">
      <div className="leading-6 font-medium">
        <p className="mb-2 text-base text-[var(--color-label)]">Languages</p>
        <h2 className="text-2xl">
          {info.name} {info.surname}
        </h2>
      </div>

      <div className="flex gap-3">
        <div className="flex gap-3">
          <BookOpen />
          <p>Lessons online</p>
        </div>
        <Divider />
        <div className="flex gap-3">
          <p>Lessons done:</p>
          <p>{info.lessons_done}</p>
        </div>
        <Divider />
        <div className="flex gap-3">
          <Star />
          <p>Rating:</p>
          <p>{info.rating}</p>
        </div>
        <Divider />
        <div className="flex gap-3">
          <p>Price / 1 hour:</p>
          <p>{info.price_per_hour}$</p>
        </div>
      </div>
    </div>
  );
}

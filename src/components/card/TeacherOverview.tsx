import { PickedTeacherOverview } from "@/types/teacherType";

interface IRatingAndPriceProps {
  info: PickedTeacherOverview;
}

export default function TeacherOverview({ info }: IRatingAndPriceProps) {
  return (
    <div className="mb-4">
      <div className="mb-2 flex items-center gap-1">
        <p>Speaks:</p>
        <p>{info.languages.join(",")}</p>
      </div>
      <div className="mb-2 flex items-center gap-1">
        <p>Lesson Info:</p>
        <p>{info.lesson_info}</p>
      </div>
      <div className="mb-2 flex items-center gap-1">
        <p>Conditions:</p>
        <p>{info.conditions.join(" ")}</p>
      </div>
    </div>
  );
}

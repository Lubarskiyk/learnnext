import teacherData from "../../testdata/teastdata.json";
import AvatarTeacher from "@/components/card/AvatarTeacher";
import {
  PickedTeacherInfo,
  PickedTeacherOverview,
  TypeTeacher,
} from "@/types/teacherType";
import TeacherInfo from "@/components/card/TeacherInfo";
import TeacherOverview from "@/components/card/TeacherOverview";
import Details from "@/components/card/Details";

export default function CardTeacher({}) {
  const teacher: TypeTeacher = teacherData[0];

  const teacherInfo: PickedTeacherInfo = {
    name: teacher.name,
    surname: teacher.surname,
    lessons_done: teacher.lessons_done,
    rating: teacher.rating,
    price_per_hour: teacher.price_per_hour,
  };

  const teacherOverview: PickedTeacherOverview = {
    languages: teacher.languages,
    lesson_info: teacher.lesson_info,
    conditions: teacher.conditions,
  };

  const { avatar_url, name, surname, lessons_done, rating, price_per_hour } =
    teacherData[0];
  return (
    <div className="flex gap-12 rounded-3xl bg-[var(--background)] p-6">
      <AvatarTeacher avatarUrl={avatar_url} />
      <div className="grow">
        <TeacherInfo info={teacherInfo} />
        <TeacherOverview info={teacherOverview} />
        <Details />
      </div>
    </div>
  );
}

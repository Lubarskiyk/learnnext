import AvatarTeacher from "@/components/card/AvatarTeacher";
import {
  PickedDetails,
  PickedTeacherInfo,
  PickedTeacherOverview,
  TypeTeacher,
} from "@/types/teacherType";
import TeacherInfo from "@/components/card/TeacherInfo";
import TeacherOverview from "@/components/card/TeacherOverview";
import Details from "@/components/card/Details";

interface CardTeacherProps {
  data: TypeTeacher;
}
export default function CardTeacher({ data }: CardTeacherProps) {
  const teacherInfo: PickedTeacherInfo = {
      name: data.name,
      surname: data.surname,
      lessons_done: data.lessons_done,
      rating: data.rating,
      price_per_hour: data.price_per_hour,
    },
    teacherOverview: PickedTeacherOverview = {
      languages: data.languages,
      lesson_info: data.lesson_info,
      conditions: data.conditions,
    },
    teacherDetails: PickedDetails = {
      experience: data.experience,
      reviews: data.reviews,
    },
    { avatar_url, levels } = data;

  return (
    <div className="mb-15 flex gap-12 rounded-3xl bg-[var(--background)] p-6">
      <AvatarTeacher avatarUrl={avatar_url} />
      <div className="grow">
        <TeacherInfo info={teacherInfo} />
        <TeacherOverview info={teacherOverview} />
        <Details info={teacherDetails} levels={levels} />
      </div>
    </div>
  );
}

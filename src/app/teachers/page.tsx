import CardTeacher from "@/components/card/CardTeacher";
import { TypeTeacher } from "@/types/teacherType";
import { getAllData } from "@/utils/getAllData";

export default async function TeachersPage() {
  const rawData = await getAllData();

  return (
    <div className="mx-auto w-full max-w-[1440px] px-32">
      {rawData.map((item: TypeTeacher) => (
        <CardTeacher data={item} key={item.id} />
      ))}
    </div>
  );
}

import { PickedReviews } from "@/types/teacherType";
import { Star } from "lucide-react";

interface IReviewsProps {
  info: PickedReviews;
}

export default function Reviews({ info }: IReviewsProps) {
  return (
    <div className="mb-8">
      <div className="mb-4 flex gap-3">
        <p className="flex h-11 w-11 items-center justify-center rounded-full bg-[var(--secondary)] text-lg font-medium">
          {info.reviewer_name[0].toUpperCase()}
        </p>
        <div>
          <p className="text-base leading-6 font-medium text-[var(--color-label)]">
            {info.reviewer_name}
          </p>
          <div className="flex items-center gap-2">
            <Star size="16" color="#FFC531" />
            <p className="text-sm leading-[18px] font-medium">
              {info.reviewer_rating}
            </p>
          </div>
        </div>
      </div>
      <p className="text-base leading-6 font-medium">{info.comment}</p>
    </div>
  );
}

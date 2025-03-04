"use client";
import Reviews from "@/components/card/Reviews";
import { PickedDetails, PickedReviews } from "@/types/teacherType";
import { DetailsHTMLAttributes, ReactElement, useState } from "react";
import BookButton from "@/components/card/BookButton";
import LevelBadge from "@/components/card/LevelBadge";

interface IDetailsProps extends DetailsHTMLAttributes<HTMLDetailsElement> {
  info: PickedDetails;
  levels: string[];
}
export default function Details({ info, levels }: IDetailsProps): ReactElement {
  const [details, setDetails] = useState(false);

  function onToggleHandler() {
    setDetails(!details);
  }
  return (
    <>
      <details onToggle={onToggleHandler}>
        <summary className="mb-4 block cursor-pointer list-none underline select-none">
          Read more
        </summary>
        <div className="mb-8">
          <p>{info.experience}</p>
        </div>
        <div className="mb-8 h-full max-h-50 overflow-y-scroll">
          {info.reviews.map((item: PickedReviews, index) => (
            <Reviews info={item} key={index} />
          ))}
        </div>

        <div className="mb-8 flex items-center gap-2">
          {levels.map(level => (
            <LevelBadge level={level} key={level} />
          ))}
        </div>

        <BookButton />
      </details>
      {!details && (
        <div className="flex items-center gap-2">
          {levels.map(level => (
            <LevelBadge level={level} key={level} />
          ))}
        </div>
      )}
    </>
  );
}

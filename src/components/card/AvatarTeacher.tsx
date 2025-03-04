import Image from "next/image";
import { JSX } from "react";

interface IAvatarProps {
  avatarUrl: string;
}

export default function AvatarTeacher({
  avatarUrl,
}: IAvatarProps): JSX.Element {
  return (
    <div className="w-full max-w-30">
      <div className="relative flex items-center justify-center rounded-full border-2 border-[var(--border-avatar)] p-3">
        <Image
          src={`${avatarUrl}`}
          width={96}
          height={96}
          alt="Picture of the author"
          className="h-auto w-24 rounded-full"
        />
        <span className="absolute top-5 right-5 block h-3 w-3 rounded-full border-2 border-white bg-green-400"></span>
      </div>
    </div>
  );
}

import Link from "next/link";
import Image from "next/image";
import AppleLogo from "@/components/Icons/appel";

const statisticsData: { name: string; count: number }[] = [
  {
    name: "Experienced tutors",
    count: 32000,
  },
  {
    name: "5-star tutor reviews",
    count: 300000,
  },
  {
    name: "Subjects taught",
    count: 120,
  },
  {
    name: "Tutor nationalities",
    count: 200,
  },
];

export default function Home() {
  return (
    <section className="mx-auto w-full max-w-360 px-17">
      <div className="mb-8 flex h-132.5 items-center justify-between gap-4">
        <div className="h-full w-full max-w-182.5 rounded-[30px] bg-zinc-50 px-8 py-24.5">
          <h1 className="mb-8 w-137 text-5xl leading-[1.17] font-medium tracking-tight">
            Unlock your potential with the best{" "}
            <span className="rounded-lg bg-[var(--secondary)] font-normal italic">
              language
            </span>{" "}
            tutors
          </h1>
          <p className="mb-18 w-118 text-base leading-[1.37] font-normal tracking-tight">
            Embark on an Exciting Language Journey with Expert Language Tutors:
            Elevate your language proficiency to new heights by connecting with
            highly qualified and experienced tutors.
          </p>
          <Link
            href="#"
            className="rounded-xl bg-[var(--primary)] px-22 py-4 text-lg font-bold transition-colors duration-[250ms] ease-in-out hover:bg-[var(--secondary)]"
          >
            Get started
          </Link>
        </div>
        <div className="relative h-full w-full max-w-142 justify-center rounded-[30px] bg-[var(--secondary)]">
          <Image
            src="/sticker.png"
            width={339}
            height={339}
            alt="Picture"
            className="mx-auto pt-20"
          />
          <div className="absolute bottom-0 left-1/2 flex h-full max-h-44 w-full max-w-90 -translate-x-1/2 items-center justify-center rounded-t-lg bg-[var(--primary)] brightness-90 filter">
            <AppleLogo
              className="drop-shadow-[2px_2px_4px_rgba(0,0,0,0.3)] filter"
              color2="var(--primary)"
              color1="var(--secondary)"
            />
          </div>
        </div>
      </div>

      <ul className="flex items-center justify-between rounded-[30px] border-2 border-dashed px-30 py-10">
        {statisticsData.map(
          ({ name, count }: { name: string; count: number }, index) => (
            <li key={index} className="flex items-center gap-4">
              <p className="text-3xl leading-[1.13] font-medium tracking-tight">
                {Intl.NumberFormat("en-US").format(count)} +
              </p>
              <p className="w-24 text-sm leading-[1.30] font-normal tracking-tight">
                {name}
              </p>
            </li>
          )
        )}
      </ul>
    </section>
  );
}

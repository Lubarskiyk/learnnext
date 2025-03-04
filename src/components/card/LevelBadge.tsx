interface ILevelBadgeProps {
  level: string;
}
export default function LevelBadge({ level }: ILevelBadgeProps) {
  return (
    <div className="p flex items-center justify-center rounded-4xl border border-solid border-[rgba(18,20,23,0.20)] px-3 py-2">
      <p>{level}</p>
    </div>
  );
}

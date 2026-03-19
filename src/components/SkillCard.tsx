interface SkillCardProps {
  value: string;
  label: string;
}

export default function SkillCard({ value, label }: SkillCardProps) {
  return (
    <div className="card-hover bg-surface/80 border border-white/5 border-l-2 border-l-accent rounded-xl px-4 py-3.5 backdrop-blur-sm cursor-default">
      <p className="text-accent font-medium text-base leading-tight">{value}</p>
      <p className="text-gray-400 text-xs mt-0.5 font-light tracking-wide">{label}</p>
    </div>
  );
}

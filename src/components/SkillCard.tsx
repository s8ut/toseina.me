interface SkillCardProps {
  value: string;
  label: string;
}

export default function SkillCard({ value, label }: SkillCardProps) {
  return (
    <div className="glass-card w-[155px] h-[155px] flex flex-col items-start justify-center px-5 cursor-default" style={{ borderRadius: 30 }}>
      <p className="text-gradient font-semibold text-2xl leading-tight">{value}</p>
      <p className="text-gray-400 text-xs mt-1 font-light">{label}</p>
    </div>
  );
}

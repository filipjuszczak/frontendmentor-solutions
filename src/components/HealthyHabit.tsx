interface HealthyHabitProps {
  icon: string;
  title: string;
  description: string;
}

export default function HealthyHabit({
  icon,
  title,
  description
}: HealthyHabitProps) {
  return (
    <div className="flex flex-col md:flex-col md:gap-11">
      <img
        src={icon}
        alt=""
        width={64}
        height={64}
        className="pb-8 md:pb-0"
        role="presentation"
      />
      <div>
        <h3 className="pb-6 text-2xl font-semibold tracking-tighter text-gunMetal">
          {title}
        </h3>
        <p className="text-darkElectricBlue">{description}</p>
      </div>
    </div>
  );
}

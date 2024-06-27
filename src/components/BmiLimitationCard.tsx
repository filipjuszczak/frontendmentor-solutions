interface BmiLimitationCardProps {
  icon: string;
  title: string;
  description: string;
}

export default function BmiLimitationCard({
  icon,
  title,
  description
}: BmiLimitationCardProps) {
  return (
    <div className="flex flex-col gap-4 rounded-2xl p-6">
      <div className="flex gap-4">
        <img src={icon} alt="" width={32} height={32} role="presentation" />
        <h4 className="text-[1.25rem] font-semibold tracking-tighter text-gunMetal">
          {title}
        </h4>
      </div>

      <div>
        <p className="text-darkElectricBlue">{description}</p>
      </div>
    </div>
  );
}

// shadow-[16px_32px_56px_0_rgba(143,174,207,0.25)]

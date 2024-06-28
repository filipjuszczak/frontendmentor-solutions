interface BmiLimitationCardProps {
  icon: string;
  title: string;
  description: string;
  className?: string;
}

export default function BmiLimitationCard({
  icon,
  title,
  description,
  className = ""
}: BmiLimitationCardProps) {
  return (
    <div
      className={`col-span-full flex flex-col gap-4 rounded-2xl p-6 shadow-[16px_32px_56px_0_hsla(211,40%,69%,0.25)] md:col-span-6 ${className}`}
    >
      <div className="flex gap-4">
        <img
          src={icon}
          alt=""
          width={32}
          height={32}
          loading="lazy"
          role="presentation"
        />
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

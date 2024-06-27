import { UnitSystem } from "./Calculator";

interface UnitSelectProps {
  unitSystem: UnitSystem;
  onUnitChange: (unit: UnitSystem) => void;
}

export default function UnitSelect({
  unitSystem,
  onUnitChange
}: UnitSelectProps) {
  return (
    <div className="flex md:gap-6 [&>*]:w-full">
      <div>
        <input
          type="radio"
          name="unitSystem1"
          id="metric"
          onChange={() => onUnitChange("metric")}
          className="peer sr-only"
          checked={unitSystem === "metric"}
        />
        <label
          htmlFor="metric"
          className="group flex cursor-pointer items-center gap-[1.125rem] font-semibold text-gunMetal outline-blue peer-focus:outline peer-focus:outline-offset-4 peer-focus-visible:outline-4"
        >
          <span
            className={`relative h-8 w-8 rounded-full border border-darkElectricBlue after:left-1/2 after:top-1/2 after:h-4 after:w-4 after:-translate-x-1/2 after:-translate-y-1/2 after:rounded-full after:bg-blue after:content-[''] ${unitSystem === "metric" ? "border-none bg-blue/15 after:absolute" : ""} group-hover:border-blue`}
            role="presentation"
          ></span>
          Metric
        </label>
      </div>

      <div>
        <input
          type="radio"
          name="unitSystem2"
          id="imperial"
          onChange={() => onUnitChange("imperial")}
          className="peer sr-only"
          checked={unitSystem === "imperial"}
        />
        <label
          htmlFor="imperial"
          className="group flex cursor-pointer items-center gap-[1.125rem] font-semibold text-gunMetal outline-blue peer-focus:outline peer-focus:outline-offset-4 peer-focus-visible:outline-4"
        >
          <span
            className={`relative h-8 w-8 rounded-full border border-darkElectricBlue after:left-1/2 after:top-1/2 after:h-4 after:w-4 after:-translate-x-1/2 after:-translate-y-1/2 after:rounded-full after:bg-blue after:content-[''] ${unitSystem === "imperial" ? "border-none bg-blue/15 after:absolute" : ""} group-hover:border-blue`}
            role="presentation"
          ></span>
          Imperial
        </label>
      </div>
    </div>
  );
}

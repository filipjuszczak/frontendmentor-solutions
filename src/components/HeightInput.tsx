import { Height } from "./Calculator";
import ImperialHeightInput from "./ImperialHeightInput";
import MetricHeightInput from "./MetricHeightInput";

interface HeightInputProps {
  unitSystem: "metric" | "imperial";
  onChange: (height: Height) => void;
}

export default function HeightInput({
  unitSystem,
  onChange
}: HeightInputProps) {
  return (
    <div className="flex w-full flex-col gap-2">
      <label
        htmlFor={unitSystem === "metric" ? "heightCm" : "heightFt"}
        className="text-darkElectricBlue"
      >
        Height
      </label>

      <div className="flex gap-4">
        {unitSystem === "metric" ? (
          <MetricHeightInput onChange={onChange} />
        ) : (
          <ImperialHeightInput onChange={onChange} />
        )}
      </div>
    </div>
  );
}

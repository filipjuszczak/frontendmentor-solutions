import { Weight } from "./Calculator";
import ImperialWeightInput from "./ImperialWeightInput";
import MetricWeightInput from "./MetricWeightInput";

interface WeightInputProps {
  unitSystem: "metric" | "imperial";
  onChange: (weight: Weight) => void;
}

export default function WeightInput({
  unitSystem,
  onChange
}: WeightInputProps) {
  return (
    <div className="flex w-full flex-col gap-2">
      <label
        htmlFor={unitSystem === "metric" ? "weightKg" : "weightSt"}
        className="text-darkElectricBlue"
      >
        Weight
      </label>

      <div className="flex gap-4">
        {unitSystem === "metric" ? (
          <MetricWeightInput onChange={onChange} />
        ) : (
          <ImperialWeightInput onChange={onChange} />
        )}
      </div>
    </div>
  );
}

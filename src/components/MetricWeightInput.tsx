import { Weight } from "./Calculator";

interface MetricWeightInputProps {
  onChange: (weight: Weight) => void;
}

export default function MetricWeightInput({
  onChange
}: MetricWeightInputProps) {
  return (
    <div className="flex w-full justify-between rounded-xl border border-darkElectricBlue px-6 py-[1.25rem] text-2xl font-semibold hover:border-blue">
      <input
        type="number"
        min={1}
        max={999}
        name="weightKg"
        id="weightKg"
        className="mr-4 w-full text-gunMetal focus-visible:outline focus-visible:outline-4 focus-visible:outline-offset-4 focus-visible:outline-blue"
        onChange={e => onChange(Number(e.target.value))}
      />
      <span className="text-blue">kg</span>
    </div>
  );
}

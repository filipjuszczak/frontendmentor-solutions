import { Height } from "./Calculator";

interface MetricHeightInputProps {
  onChange: (height: Height) => void;
}

export default function MetricHeightInput({
  onChange
}: MetricHeightInputProps) {
  return (
    <div className="flex w-full justify-between rounded-xl border border-darkElectricBlue px-6 py-[1.25rem] text-2xl font-semibold hover:border-blue">
      <input
        type="number"
        minLength={1}
        min={1}
        maxLength={3}
        max={250}
        name="heightCm"
        id="heightCm"
        className="mr-4 w-full text-gunMetal focus-visible:outline focus-visible:outline-4 focus-visible:outline-offset-4 focus-visible:outline-blue"
        onChange={e => onChange(Number(e.target.value))}
      />
      <span className="text-blue">cm</span>
    </div>
  );
}

import { useState } from "react";
import { Weight } from "./Calculator";

interface ImperialWeightInputProps {
  onChange: (weight: Weight) => void;
}

export default function ImperialWeightInput({
  onChange
}: ImperialWeightInputProps) {
  const [weight, setHeight] = useState({ st: 0, lbs: 0 });

  function handleWeightChange(newWeight: { st?: number; lbs?: number }) {
    setHeight(w => ({ ...w, ...newWeight }));
    onChange({ ...weight, ...newWeight });
  }

  return (
    <>
      <div className="flex w-full justify-between rounded-xl border border-darkElectricBlue px-6 py-[1.25rem] text-2xl font-semibold hover:border-blue">
        <input
          type="number"
          min={0}
          max={100}
          name="weightSt"
          id="weightSt"
          placeholder="0"
          className="mr-4 w-full text-gunMetal focus-visible:outline focus-visible:outline-4 focus-visible:outline-offset-4 focus-visible:outline-blue"
          onChange={e => handleWeightChange({ st: Number(e.target.value) })}
        />
        <span className="text-blue">st</span>
      </div>

      <div className="flex w-full justify-between rounded-xl border border-darkElectricBlue px-6 py-[1.25rem] text-2xl font-semibold hover:border-blue">
        <input
          type="number"
          min={0}
          max={13.99}
          step={0.01}
          name="weightLbs"
          id="weightLbs"
          placeholder="0"
          className="mr-4 w-full text-gunMetal focus-visible:outline focus-visible:outline-4 focus-visible:outline-offset-4 focus-visible:outline-blue"
          onChange={e => handleWeightChange({ lbs: Number(e.target.value) })}
        />
        <span className="text-blue">lbs</span>
      </div>
    </>
  );
}

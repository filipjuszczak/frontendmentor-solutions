import { useState } from "react";
import { Height } from "./Calculator";

interface ImperialHeightInput {
  onChange: (height: Height) => void;
}

export default function ImperialHeightInput({ onChange }: ImperialHeightInput) {
  const [height, setHeight] = useState({ ft: 0, in: 0 });

  function handleHeightChange(newHeight: { ft?: number; in?: number }) {
    setHeight(h => ({ ...h, ...newHeight }));
    onChange({ ...height, ...newHeight });
  }

  return (
    <>
      <div className="flex w-full justify-between rounded-xl border border-darkElectricBlue px-6 py-[1.25rem] text-2xl font-semibold hover:border-blue">
        <input
          type="number"
          min={0}
          max={99}
          name="heightFt"
          id="heightFt"
          placeholder="0"
          className="mr-4 w-full text-gunMetal focus-visible:outline focus-visible:outline-4 focus-visible:outline-offset-4 focus-visible:outline-blue"
          onChange={e => handleHeightChange({ ft: Number(e.target.value) })}
        />
        <span className="text-blue">ft</span>
      </div>

      <div className="flex w-full justify-between rounded-xl border border-darkElectricBlue px-6 py-[1.25rem] text-2xl font-semibold hover:border-blue">
        <input
          type="number"
          min={0}
          max={11.99}
          step={0.01}
          name="heightIn"
          id="heightIn"
          placeholder="0"
          className="mr-4 w-full text-gunMetal focus-visible:outline focus-visible:outline-4 focus-visible:outline-offset-4 focus-visible:outline-blue"
          onChange={e => handleHeightChange({ in: Number(e.target.value) })}
        />
        <span className="text-blue">in</span>
      </div>
    </>
  );
}

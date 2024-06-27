import { useState, useCallback, useEffect } from "react";
import UnitSelect from "./UnitSelect";
import HeightInput from "./HeightInput";
import WeightInput from "./WeightInput";
import Result from "./Result";

export type UnitSystem = "metric" | "imperial";
export type Height = number | { ft: number; in: number };
export type Weight = number | { st: number; lbs: number };

function imperialToMetric(value: number): number {
  return value * 0.0254;
}

function imperialToMetricHeight(height: Height) {
  if (typeof height !== "number") {
    const inches = height.ft * 12 + height.in;
    return imperialToMetric(inches);
  }
}

function imperialToMetricWeight(weight: Weight) {
  if (typeof weight !== "number") {
    return weight.st * 6.35029 + weight.lbs * 0.453592;
  }
}

export default function Calculator() {
  const [unitSystem, setUnitSystem] = useState<UnitSystem>("metric");
  const [height, setHeight] = useState<Height | undefined>();
  const [weight, setWeight] = useState<Weight | undefined>();
  const [bmi, setBmi] = useState<number | undefined>();
  const [bmiDescription, setBmiDescription] = useState<string | undefined>();

  const determineBmiDescription = useCallback(() => {
    let healthyRangeMin: number;
    let healthyRangeMax: number;

    if (unitSystem === "metric") {
      const heightInM = (height as number) / 100;
      const weightInKg = weight as number;
      healthyRangeMin = Number((18.5 * Math.pow(heightInM, 2)).toFixed(2));
      healthyRangeMax = Number((25 * Math.pow(heightInM, 2)).toFixed(2));

      if (weightInKg < healthyRangeMin) {
        setBmiDescription(
          `Your BMI suggests you're underweight. Your ideal weight is between ${healthyRangeMin}kg - ${healthyRangeMax}kg.`
        );
      } else if (
        weightInKg >= healthyRangeMin &&
        weightInKg <= healthyRangeMax
      ) {
        setBmiDescription(
          `Your BMI suggests you're a healthy weight. Your ideal weight is between ${healthyRangeMin}kg - ${healthyRangeMax}kg.`
        );
      } else {
        setBmiDescription(
          `Your BMI suggests you're overweight. Your ideal weight is between ${healthyRangeMin}kg - ${healthyRangeMax}kg.`
        );
      }
    } else {
      const heightInM = imperialToMetricHeight(height!);
      const weightInKg = imperialToMetricWeight(weight!);
      healthyRangeMin = Number((18.5 * Math.pow(heightInM!, 2)).toFixed(2));
      healthyRangeMax = Number((25 * Math.pow(heightInM!, 2)).toFixed(2));

      if (weightInKg! < healthyRangeMin) {
        setBmiDescription(
          `Your BMI suggests you're underweight. Your ideal weight is between ${healthyRangeMin}kg - ${healthyRangeMax}kg.`
        );
      } else if (
        weightInKg! >= healthyRangeMin &&
        weightInKg! <= healthyRangeMax
      ) {
        setBmiDescription(
          `Your BMI suggests you're a healthy weight. Your ideal weight is between ${healthyRangeMin}kg - ${healthyRangeMax}kg.`
        );
      } else {
        setBmiDescription(
          `Your BMI suggests you're overweight. Your ideal weight is between ${healthyRangeMin}kg - ${healthyRangeMax}kg.`
        );
      }
    }
  }, [unitSystem, height, weight]);

  const calculateBmi = useCallback(() => {
    if (unitSystem === "metric") {
      const heightInM = height as number;
      const weightInKg = weight as number;
      const bmi = weightInKg / Math.pow(heightInM / 100, 2);
      setBmi(bmi);
      determineBmiDescription();
    } else {
      const heightInM = imperialToMetricHeight(height as Height);
      const weightInKg = imperialToMetricWeight(weight as Weight);
      const bmi = weightInKg! / Math.pow(heightInM!, 2);
      setBmi(bmi);
      determineBmiDescription();
    }
  }, [unitSystem, height, weight, determineBmiDescription]);

  useEffect(() => {
    if (height && weight) {
      calculateBmi();
    }
  }, [height, weight, calculateBmi]);

  function handleUnitChange(unit: UnitSystem) {
    setUnitSystem(unit);
    setHeight(undefined);
    setWeight(undefined);
    setBmi(undefined);
    setBmiDescription(undefined);
  }

  function handleHeightChange(height: Height) {
    setHeight(height);
  }

  function handleWeightChange(weight: Weight) {
    setWeight(weight);
  }

  return (
    <div className="space-y-6 rounded-2xl bg-white p-6 lg:pt-[12.1875rem]">
      <h2 className="text-2xl font-semibold tracking-tighter text-gunMetal">
        Enter your details below
      </h2>

      <UnitSelect unitSystem={unitSystem} onUnitChange={handleUnitChange} />

      <div className="space-y-6 md:space-y-8">
        <div
          className={`flex flex-col gap-4 ${unitSystem === "metric" ? "md:flex-row" : ""} md:gap-6`}
        >
          <HeightInput unitSystem={unitSystem} onChange={handleHeightChange} />
          <WeightInput unitSystem={unitSystem} onChange={handleWeightChange} />
        </div>

        <Result
          bmi={bmi}
          details={
            bmiDescription || "Enter your details to calculate your BMI."
          }
        />
      </div>
    </div>
  );
}

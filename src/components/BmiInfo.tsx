import BmiLimitations from "./BmiLimitations";
import BmiMeaning from "./BmiMeaning";
import HealthyHabits from "./HealthyHabits";

export default function BmiInfo() {
  return (
    <div>
      <BmiMeaning />
      <HealthyHabits />
      <BmiLimitations />
    </div>
  );
}

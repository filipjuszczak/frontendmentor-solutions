import BmiLimitations from "./BmiLimitations";
import BmiMeaning from "./BmiMeaning";
import HealthyHabits from "./HealthyHabits";

export default function BmiInfo() {
  return (
    <div className="relative lg:mx-auto lg:max-w-[72.5rem]">
      <img
        src="/images/pattern-curved-line-left.svg"
        alt=""
        width={85.831}
        height={200.501}
        className="hidden lg:absolute lg:right-[-5%] lg:top-[-8%] lg:block"
        role="presentation"
      />

      <BmiMeaning />
      <HealthyHabits />
      <BmiLimitations />
    </div>
  );
}

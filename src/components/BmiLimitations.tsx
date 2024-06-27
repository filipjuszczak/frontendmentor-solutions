import BmiLimitationCard from "./BmiLimitationCard";

export default function BmiLimitations() {
  return (
    <div className="px-6 pb-[4.5rem] md:px-[2.5625rem] lg:mx-auto lg:max-w-[72.5rem]">
      <h4 className="pb-8 text-center text-5xl font-semibold leading-[1.1] tracking-tighter text-gunMetal">
        Limitations of BMI
      </h4>

      <p className="pb-14 text-center text-darkElectricBlue lg:mx-auto lg:max-w-[65ch]">
        Although BMI is often a practical indicator of healthy weight, it is not
        suited for every person. Specific groups should carefully consider their
        BMI outcomes, and in certain cases, the measurement may not be
        beneficial to use.
      </p>

      <div className="grid gap-4 md:grid-cols-2 md:gap-x-4 md:gap-y-6">
        <BmiLimitationCard
          icon="/images/icon-gender.svg"
          title="Gender"
          description="The development and body fat composition of girls and boys vary with age. Consequently, a child's age and gender are considered when evaluating their BMI."
        />

        <BmiLimitationCard
          icon="/images/icon-age.svg"
          title="Age"
          description="In aging individuals, increased body fat and muscle loss may cause BMI to underestimate body fat content."
        />

        <BmiLimitationCard
          icon="/images/icon-muscle.svg"
          title="Muscle"
          description="BMI may misclassify muscular individuals as overweight or obese, as it doesn't differentiate muscle from fat."
        />

        <BmiLimitationCard
          icon="/images/icon-pregnancy.svg"
          title="Pregnancy"
          description="Expectant mothers experience weight gain due to their growing baby. Maintaining a healthy pre-pregnancy BMI is advisable to minimise health risks for both mother and child."
        />

        <BmiLimitationCard
          icon="/images/icon-race.svg"
          title="Race"
          description="Certain health concerns may affect individuals of some Black and Asian origins at lower BMIs than others. To learn more, it is advised to discuss this with your GP or practice nurse."
        />
      </div>
    </div>
  );
}

import BmiLimitationCard from "./BmiLimitationCard";

export default function BmiLimitations() {
  return (
    <section
      aria-describedby="limitations-heading"
      className="relative grid grid-cols-12 gap-x-4 gap-y-8 px-6 pb-[4.5rem] md:px-[2.5625rem] xl:px-0"
    >
      <img
        src="/images/pattern-curved-line-right.svg"
        alt=""
        width={85.831}
        height={200.501}
        className="hidden lg:absolute lg:left-[15%] lg:top-[35%] lg:block"
        role="presentation"
      />

      <div className="col-span-full text-center lg:col-span-5 lg:col-start-1 lg:text-start">
        <h4
          id="limitations-heading"
          className="pb-8 text-5xl font-semibold leading-[1.1] tracking-tighter text-gunMetal"
        >
          Limitations of BMI
        </h4>

        <p className="pb-14 text-darkElectricBlue lg:mx-auto lg:max-w-[65ch]">
          Although BMI is often a practical indicator of healthy weight, it is
          not suited for every person. Specific groups should carefully consider
          their BMI outcomes, and in certain cases, the measurement may not be
          beneficial to use.
        </p>
      </div>

      <BmiLimitationCard
        icon="/images/icon-gender.svg"
        title="Gender"
        description="The development and body fat composition of girls and boys vary with age. Consequently, a child's age and gender are considered when evaluating their BMI."
        className="lg:col-span-4 lg:col-start-8"
      />

      <BmiLimitationCard
        icon="/images/icon-age.svg"
        title="Age"
        description="In aging individuals, increased body fat and muscle loss may cause BMI to underestimate body fat content."
        className="lg:col-span-4 lg:col-start-5"
      />

      <BmiLimitationCard
        icon="/images/icon-muscle.svg"
        title="Muscle"
        description="BMI may misclassify muscular individuals as overweight or obese, as it doesn't differentiate muscle from fat."
        className="lg:col-span-4"
      />

      <BmiLimitationCard
        icon="/images/icon-pregnancy.svg"
        title="Pregnancy"
        description="Expectant mothers experience weight gain due to their growing baby. Maintaining a healthy pre-pregnancy BMI is advisable to minimise health risks for both mother and child."
        className="lg:col-span-4 lg:col-start-3"
      />

      <BmiLimitationCard
        icon="/images/icon-race.svg"
        title="Race"
        description="Certain health concerns may affect individuals of some Black and Asian origins at lower BMIs than others. To learn more, it is advised to discuss this with your GP or practice nurse."
        className="md:col-span-6 md:col-start-4 lg:col-span-4"
      />
    </section>
  );
}
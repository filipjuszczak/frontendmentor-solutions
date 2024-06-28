import Calculator from "./Calculator";

export default function Hero() {
  return (
    <main className="mx-auto flex max-w-[72.5rem] flex-col gap-12 px-6 pb-[4.5rem] pt-8 md:px-[2.5625rem] lg:flex-row lg:gap-[8.1875rem] lg:pt-[4.6875rem] xl:px-0 lg:[&>*]:w-full">
      <div className="flex flex-col items-center text-center lg:items-start lg:text-start">
        <img
          src="/images/logo.svg"
          alt=""
          width={64}
          height={64}
          className="max-w-[2.5rem] pb-6 lg:max-w-16 lg:pb-[8.1875rem]"
          role="presentation"
        />

        <h1 className="pb-6 text-6xl font-semibold leading-[1.1] tracking-tighter text-gunMetal md:max-w-[11ch] xl:pb-9">
          Body Mass Index Calculator
        </h1>

        <p className="text-darkElectricBlue">
          Better understand your weight in relation to your height using our
          body mass index (BM) calculator. While BMI is not the sole determinant
          of a healthy weight, it offers a valuable starting point to evaluate
          your overall health and well-being.
        </p>
      </div>

      <Calculator />
    </main>
  );
}

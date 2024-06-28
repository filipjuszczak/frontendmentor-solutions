export default function BmiMeaning() {
  return (
    <section
      aria-describedby="meaning-heading"
      className="flex flex-col gap-12 pb-[4.5rem] md:flex-row md:gap-[4.6875rem] md:pb-40 lg:mx-auto lg:max-w-[72.5rem] lg:items-center md:[&>*]:w-full"
    >
      <div>
        <img
          src="/images/image-man-eating.webp"
          alt="Smiling man eating a sushi roll with chopsticks."
          width={1128}
          height={1066}
        />
      </div>
      <div className="px-6 md:px-0 md:pr-[43px]">
        <h2
          id="meaning-heading"
          className="pb-9 text-5xl font-semibold leading-[1.1] tracking-tighter text-gunMetal"
        >
          What your BMI result means
        </h2>
        <p className="text-darkElectricBlue">
          A BMI range of 18.5 to 24.9 is considered a 'healthy weight.'
          Maintaining a healthy weight may lower your chances of experiencing
          health issues later on, such as obesity and type 2 diabetes. Aim for a
          nutritious diet with reduced fat and sugar content, incorporating
          ample fruits and vegetables. Additionally, strive for regular physical
          activity, ideally about 30 minutes daily for five days a week.
        </p>
      </div>
    </section>
  );
}

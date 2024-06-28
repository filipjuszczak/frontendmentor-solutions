export default function AboutSection() {
  return (
    <div className="flex flex-col lg:flex-row">
      <div className="lg:max-w-[26.25rem]">
        <img
          src="/images/image-about-dark.jpg"
          alt="Two black chairs next to a small wooden table, bed in the background."
          width={420}
          height={266}
          className="h-full w-full object-cover"
        />
      </div>

      <div className="px-8 pb-[2.5625rem] pt-[3.0625rem] lg:max-w-[36.25rem] lg:px-12 lg:pb-[3.625rem] lg:pt-[3.8125rem]">
        <h2 className="text-subHeading mb-4 font-semibold uppercase tracking-[5.83px] text-black">
          About our furniture
        </h2>
        <p className="tracking-[-0.33px]">
          Our multifunctional collection blends design and function to suit your
          individual taste. Make each room unique, or pick a cohesive theme that
          best express your interests and what inspires you. Find the furniture
          pieces you need, from traditional to contemporary styles or anything
          in between. Product specialists are available to help you create your
          dream space.{" "}
        </p>
      </div>

      <div className="lg:max-w-[27.5rem]">
        <img
          src="/images/image-about-light.jpg"
          alt="White chair in the middle of a white room, sunlight coming through the window."
          width={440}
          height={266}
          className="h-full w-full object-cover"
        />
      </div>
    </div>
  );
}

import LinkButton from "./LinkButton";

export default function HeroSection() {
  return (
    <header className="mb-36 flex flex-col items-center pt-8 text-center text-slate lg:pt-20">
      <img src="/logo.svg" alt="" className="relative mb-16 self-center" />
      <picture>
        <source srcSet="/tablet/image-hero.png" media="(max-width: 48em)" />
        <img src="/tablet/image-hero.png" alt="" className="mb-16 lg:hidden" />
      </picture>
      <div className="relative flex flex-col items-center lg:flex-row lg:gap-24">
        <div>
          <picture className="relative -left-6 -top-16">
            <source
              srcSet="/desktop/image-hero-left.png"
              media="(min-width: 64em)"
            />
            <img
              src="/desktop/image-hero-left.png"
              alt=""
              className="hidden lg:block"
            />
          </picture>
        </div>
        <div className="flex flex-col items-center">
          <p className="mb-6 max-w-[10ch] text-4xl font-bold text-darkSlate xl:text-6xl">
            Group Chat for Everyone
          </p>
          <p className="mb-6 max-w-[42ch] px-6">
            Meet makes it easy to connect with others face-to-face virtually and
            collaborate across any device.
          </p>
          <div className="flex flex-col gap-4 md:flex-row">
            <LinkButton href="#" variant="primary" className="self-center">
              Download <span className="text-lightBlue">v1.3</span>
            </LinkButton>
            <LinkButton href="#" variant="secondary" className="self-center">
              What is it?
            </LinkButton>
          </div>
        </div>
        <div>
          <picture className="relative -right-6">
            <source
              srcSet="/desktop/image-hero-right.png"
              media="(min-width: 64em)"
            />
            <img
              src="/desktop/image-hero-right.png"
              alt=""
              className="hidden lg:block"
            />
          </picture>
        </div>
      </div>
    </header>
  );
}

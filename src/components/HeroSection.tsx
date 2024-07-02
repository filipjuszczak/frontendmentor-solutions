import Button from "./Button";
import Container from "./Container";

export default function HeroSection() {
  return (
    <section
      className="mb-36 text-center lg:text-start"
      aria-describedby="hero-heading"
    >
      <Container className="mb-24 flex flex-col items-center justify-center lg:flex-row-reverse lg:gap-16 lg:*:flex-1">
        <img
          src="/images/illustration-hero.svg"
          alt=""
          width={657}
          height={466}
          role="presentation"
          className="relative z-10 w-full"
        />

        <div>
          <h1 id="hero-heading" className="mb-4 leading-snug">
            A Simple Bookmark Manager
          </h1>

          <p className="mb-8">
            A clean and simple interface to organize your favourite websites.
            Open a new browser tab and see your sites load instantly. Try it for
            free.
          </p>

          <div className="flex items-center gap-4 *:flex-1">
            <Button
              variant="primary"
              className="px-3 py-[0.625rem] lg:text-center"
            >
              Get it on Chrome
            </Button>
            <Button
              variant="secondary"
              className="px-4 py-[0.625rem] lg:text-center"
            >
              Get it on Firefox
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}

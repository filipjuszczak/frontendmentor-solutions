import Container from "./Container";
import LinkButton from "./LinkButton";

export default function Footer() {
  return (
    <footer className="bg-footer-mobile bg-top-center md:bg-footer-tablet lg:bg-footer-desktop relative bg-cover py-24 text-center text-white">
      <div className="bg-blue absolute inset-0 opacity-90"></div>
      <Container>
        <div className="relative z-10 flex flex-col items-center gap-12 px-8 lg:flex-row lg:justify-between lg:text-start xl:px-0">
          <h2 className="text-3xl font-bold leading-tight md:text-[2.5rem] lg:max-w-[12ch]">
            Experience more together
          </h2>
          <p className="max-w-[54ch] px-10 lg:max-w-[28ch] lg:px-0">
            Stay connected with reliable HD meetings and unlimited one-on-one
            and group video sessions.
          </p>
          <LinkButton href="#" variant="secondary" className="self-center">
            Download <span className="text-lightPurple">v1.3</span>
          </LinkButton>
        </div>
      </Container>
    </footer>
  );
}

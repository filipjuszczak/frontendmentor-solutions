import Container from "../Container";
import Features from "./Features";

export default function FeaturesSection() {
  return (
    <section
      className="mb-20 text-center lg:mb-60"
      aria-describedby="features-heading"
    >
      <Container>
        <h2 id="features-heading" className="leading-loose">
          Features
        </h2>

        <p className="mb-10">
          Our aim is to make it quick and easy for you to access your favourite
          websites. Your bookmarks sync between your devices so you can access
          them on the go.
        </p>
      </Container>

      <Features />
    </section>
  );
}

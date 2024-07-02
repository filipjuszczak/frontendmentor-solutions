import Container from "../Container";
import FAQ from "./FAQ";

export default function FAQSection() {
  return (
    <div className="text-center">
      <Container>
        <h3 className="mb-4 leading-tight">Frequently Asked Questions</h3>

        <p className="mb-16">
          Here are some of our FAQs. If you have any other questions you'd like
          answered please feel free to email us.
        </p>

        <FAQ />
      </Container>
    </div>
  );
}

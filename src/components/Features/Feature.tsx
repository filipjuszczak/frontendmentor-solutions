import Button from "../Button";
import Container from "../Container";

interface FeatureProps {
  image: {
    src: string;
    width: number;
    height: number;
  };
  title: string;
  body: string;
}

export default function Feature({ image, title, body }: FeatureProps) {
  return (
    <Container
      className="flex flex-col items-center justify-center lg:flex-row lg:gap-32 lg:*:flex-1"
      role="tabpanel"
    >
      <img
        src={image.src}
        alt=""
        width={image.width}
        height={image.height}
        className="relative z-10 mb-[4.3125rem]"
      />

      <div className="lg:text-start">
        <h2 className="leading-loose">{title}</h2>

        <p className="pb-4 lg:pb-8">{body}</p>

        <Button variant="primary" className="px-6 py-[0.625rem]">
          More Info
        </Button>
      </div>
    </Container>
  );
}

interface ImageProps {
  src: string;
  alt: string;
}

export default function Image({ src, alt }: ImageProps) {
  return <img src={src} alt={alt} className="rounded-xl" />;
}

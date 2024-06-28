interface ImageCarouselProps {
  currentImage: number;
  images: {
    mobile: string;
    desktop: string;
    mobileWidth: number;
    mobileHeight: number;
    alt: string;
  }[];
}

export default function ImageCarousel({
  currentImage,
  images
}: ImageCarouselProps) {
  return (
    <picture>
      <source
        srcSet={images[currentImage].mobile}
        media="(max-width:47.999em)"
      />
      <source srcSet={images[currentImage].desktop} media="(min-width:48em)" />
      <img
        src={images[currentImage].mobile}
        alt={images[currentImage].alt}
        width={images[currentImage].mobileWidth}
        height={images[currentImage].mobileHeight}
        className="absolute h-full w-full object-cover"
      />
    </picture>
  );
}

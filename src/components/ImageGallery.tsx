import Image from "./Image";

interface ImageGalleryProps {
  images: {
    id: string;
    src: string;
    alt: string;
  }[];
}

export default function ImageGallery({ images }: ImageGalleryProps) {
  return (
    <div className="my-16 grid grid-cols-2 gap-4 px-6 md:grid-cols-4 xl:px-0">
      {images.map(image => (
        <Image key={image.id} src={image.src} alt={image.alt} />
      ))}
    </div>
  );
}

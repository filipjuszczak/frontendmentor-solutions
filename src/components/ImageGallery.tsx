import { useState } from "react";
import { createPortal } from "react-dom";
import ButtonPrevious from "./ButtonPrevious";
import ButtonNext from "./ButtonNext";
import Thumbnails from "./Thumbnails";
import Lightbox from "./Lightbox";

interface ImageGalleryProps {
  images: {
    id: string;
    src: string;
    alt: string;
  }[];
  thumbnails: {
    id: string;
    src: string;
    alt: string;
  }[];
}

export default function ImageGallery({
  images,
  thumbnails
}: ImageGalleryProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  const imageCount = images.length;
  const handleSwitchImage = (direction: string) => {
    if (direction === "forward") {
      if (currentImageIndex + 1 >= imageCount) {
        setCurrentImageIndex(0);
      } else {
        setCurrentImageIndex(i => i + 1);
      }
    } else {
      if (currentImageIndex - 1 < 0) {
        setCurrentImageIndex(imageCount - 1);
      } else {
        setCurrentImageIndex(i => i - 1);
      }
    }
  };

  const handleNextImage = (idx: number) => setCurrentImageIndex(idx);
  const handleCloseLightbox = () => setIsLightboxOpen(false);

  return (
    <div className="relative flex flex-col gap-8">
      <div className="relative">
        <ButtonPrevious
          onClick={() => handleSwitchImage("backward")}
          className="absolute left-4 top-1/2 flex h-[2.5rem] w-[2.5rem] -translate-y-1/2 items-center justify-center rounded-full bg-white lg:hidden"
          ariaLabel="See previous product photo"
        />
        <button
          aria-label="Open product image gallery."
          onClick={() => setIsLightboxOpen(i => !i)}
          className="w-full"
        >
          <img
            src={images[currentImageIndex].src}
            alt={images[currentImageIndex].alt}
            width={1000}
            height={1000}
            className="max-h-[18.75rem] md:max-h-fit w-full object-cover object-center lg:max-h-[27.8125rem] lg:max-w-[27.8125rem] md:rounded-2xl"
          />
        </button>
        <ButtonNext
          onClick={() => handleSwitchImage("forward")}
          className="absolute right-4 top-1/2 flex h-[2.5rem] w-[2.5rem] -translate-y-1/2 items-center justify-center rounded-full bg-white lg:hidden"
          ariaLabel="See next product photo"
        />
      </div>
      <div className="hidden md:block">
        <Thumbnails
          onChangeImage={handleNextImage}
          currentImageIndex={currentImageIndex}
          items={thumbnails}
          className="flex gap-[1.9375rem] justify-between"
        />
      </div>
      {isLightboxOpen &&
        createPortal(
          <Lightbox
            currentImage={images[currentImageIndex]}
            currentImageIndex={currentImageIndex}
            thumbnails={thumbnails}
            onSwitchImage={handleSwitchImage}
            onChangeImage={handleNextImage}
            onClose={handleCloseLightbox}
          />,
          document.querySelector("#lightbox")!
        )}
    </div>
  );
}

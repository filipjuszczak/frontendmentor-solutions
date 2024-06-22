import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import ButtonPrevious from "./ButtonPrevious";
import ButtonNext from "./ButtonNext";
import Thumbnails from "./Thumbnails";
import { Lightbox } from "./Lightbox";

interface Image {
  id: string;
  src: string;
  alt: string;
}

interface ImageGalleryProps {
  images: Image[];
  thumbnails: Image[];
}

export enum Direction {
  FORWARD,
  BACKWARD
}

export default function ImageGallery({
  images,
  thumbnails
}: ImageGalleryProps) {
  const lightboxRef = useRef<HTMLDivElement | null>(null);

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  useEffect(() => {
    if (isLightboxOpen && lightboxRef.current) {
      const focusableElements = lightboxRef.current.querySelectorAll(
        'a[href], button, textarea, input, select, [tabindex]:not([tabindex="-1"])'
      );
      if (focusableElements.length > 0) {
        (focusableElements[0] as HTMLElement).focus();
      }
    }
  }, [isLightboxOpen]);

  const imageCount = images.length;
  const handleSwitchImage = (direction: Direction) => {
    switch (direction) {
      case Direction.FORWARD:
        if (currentImageIndex + 1 >= imageCount) {
          setCurrentImageIndex(0);
        } else {
          setCurrentImageIndex(i => i + 1);
        }
        break;
      case Direction.BACKWARD:
        if (currentImageIndex - 1 < 0) {
          setCurrentImageIndex(imageCount - 1);
        } else {
          setCurrentImageIndex(i => i - 1);
        }
        break;
      default:
        return;
    }
  };

  const handleShowNextImage = (idx: number) => setCurrentImageIndex(idx);
  const handleCloseLightbox = () => setIsLightboxOpen(false);

  return (
    <div className="relative flex flex-col gap-8">
      <div className="relative lg:max-h-[27.8125rem] lg:max-w-[27.8125rem]">
        <ButtonPrevious
          onClick={() => handleSwitchImage(Direction.BACKWARD)}
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
          onClick={() => handleSwitchImage(Direction.FORWARD)}
          className="absolute right-4 top-1/2 flex h-[2.5rem] w-[2.5rem] -translate-y-1/2 items-center justify-center rounded-full bg-white lg:hidden"
          ariaLabel="See next product photo"
        />
      </div>
      <div className="hidden md:block">
        <Thumbnails
          onThumbnailClick={handleShowNextImage}
          currentImageIndex={currentImageIndex}
          items={thumbnails}
          className="flex gap-[1.9375rem] justify-between"
        />
      </div>
      {isLightboxOpen &&
        createPortal(
          <Lightbox
            ref={lightboxRef}
            currentImage={images[currentImageIndex]}
            currentImageIndex={currentImageIndex}
            thumbnails={thumbnails}
            onSwitchImage={handleSwitchImage}
            onThumbnailClick={handleShowNextImage}
            onClose={handleCloseLightbox}
          />,
          document.querySelector("#lightbox")!
        )}
    </div>
  );
}

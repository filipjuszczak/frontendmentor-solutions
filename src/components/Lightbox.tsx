import ButtonNext from "./ButtonNext";
import ButtonPrevious from "./ButtonPrevious";
import Thumbnails from "./Thumbnails";

interface LightboxProps {
  currentImage: {
    id: string;
    src: string;
    alt: string;
  };
  currentImageIndex: number;
  thumbnails: {
    id: string;
    src: string;
    alt: string;
  }[];
  onSwitchImage: (direction: string) => void;
  onChangeImage: (idx: number) => void;
  onClose: () => void;
}

export default function Lightbox({
  currentImage,
  currentImageIndex,
  thumbnails,
  onSwitchImage,
  onChangeImage,
  onClose
}: LightboxProps) {
  return (
    <div className="absolute inset-0 z-[9999] bg-black/75 flex items-center justify-center">
      <div className="max-w-[min(90%,34.375rem)] flex flex-col">
        <button onClick={onClose} className="mb-6 self-end">
          <svg
            viewBox="0 0 14 14"
            width="20"
            height="20"
            xmlns="http://www.w3.org/2000/svg"
            className="fill-white hover:fill-orange w-[1.25rem] h-[1.25rem]"
          >
            <path
              d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z"
              fillRule="evenodd"
            />
          </svg>
        </button>
        <div>
          <div className="relative">
            <ButtonPrevious
              onClick={() => onSwitchImage("backward")}
              className="absolute left-0 top-1/2 flex h-[3.5rem] w-[3.5rem] md:-translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white"
              ariaLabel="See previous product photo"
            />
            <img
              src={currentImage.src}
              alt={currentImage.alt}
              className="rounded-[0.9375rem] mb-10"
            />
            <ButtonNext
              onClick={() => onSwitchImage("forward")}
              className="absolute right-0 top-1/2 flex h-[3.5rem] w-[3.5rem] md:translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white"
              ariaLabel="See next product photo"
            />
          </div>
          <div className="flex gap-[1.9375rem] justify-center">
            <Thumbnails
              onChangeImage={onChangeImage}
              currentImageIndex={currentImageIndex}
              items={thumbnails}
              className="flex gap-[1.9375rem] justify-center flex-wrap"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

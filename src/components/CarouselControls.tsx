interface SliderControlsProps {
  onSlideImage: (direction: "forward" | "backward") => void;
}

export default function SliderControls({ onSlideImage }: SliderControlsProps) {
  return (
    <div className="absolute bottom-0 right-0 grid h-[3.5rem] w-[7rem] grid-cols-2 xl:h-[5rem] xl:w-[10rem] xl:translate-x-full">
      <button
        className="grid cursor-pointer place-items-center bg-black transition-colors hover:bg-veryDarkGray focus-visible:outline focus-visible:outline-4 focus-visible:outline-offset-4 focus-visible:outline-black"
        onClick={() => onSlideImage("backward")}
        aria-label="Show previous image"
      >
        <img src="/images/icon-angle-left.svg" alt="" width={14} height={24} />
      </button>

      <button
        className="grid cursor-pointer place-items-center bg-black transition-colors hover:bg-veryDarkGray focus-visible:outline focus-visible:outline-4 focus-visible:outline-offset-4 focus-visible:outline-black"
        onClick={() => onSlideImage("forward")}
        aria-label="Show next image"
      >
        <img src="/images/icon-angle-right.svg" alt="" width={14} height={24} />
      </button>
    </div>
  );
}

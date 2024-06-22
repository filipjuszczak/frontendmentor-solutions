interface ThumbnailsProps {
  onThumbnailClick: (idx: number) => void;
  currentImageIndex: number;
  items: {
    id: string;
    src: string;
    alt: string;
  }[];
  className?: string;
}

export default function Thumbnails({
  onThumbnailClick,
  currentImageIndex,
  items,
  className
}: ThumbnailsProps) {
  return (
    <div className={className}>
      {items.map((item, idx) => (
        <button
          key={item.id}
          onClick={() => onThumbnailClick(idx)}
          aria-label={`Show product image ${idx + 1} of ${items.length}`}
        >
          <div className="relative">
            <div
              className={`absolute inset-0 rounded-[10px] ${currentImageIndex !== idx && "hover:bg-white/50"} ${currentImageIndex === idx && "border-2 border-orange bg-white/75"}`}
            ></div>
            <img
              src={item.src}
              alt=""
              className={`max-h-[5.5rem] max-w-[5.5rem] rounded-[10px] ${currentImageIndex === idx && "border-2 border-orange"}`}
            />
          </div>
        </button>
      ))}
    </div>
  );
}

interface AvatarProps {
  src: string;
  width: number;
  height: number;
}

export default function Avatar({ src, width, height }: AvatarProps) {
  return (
    <img
      src={src}
      alt=""
      width={width}
      height={height}
      className="max-w-[40px] rounded-full"
    />
  );
}

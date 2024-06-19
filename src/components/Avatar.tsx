interface AvatarProps {
  src: string;
}

export default function Avatar({ src }: AvatarProps) {
  return (
    <img src={src} alt="" className="mb-4 rounded-full border-4 border-white" />
  );
}

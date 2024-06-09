interface AvatarProps {
  src: string;
  alt: string;
}

export default function Avatar({ src, alt }: AvatarProps) {
  return <img src={src} alt={alt} className="h-24 rounded-full" />;
}

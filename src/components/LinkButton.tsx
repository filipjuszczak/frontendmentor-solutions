interface ButtonProps {
  href: string;
  variant: string;
  className?: string;
  children: React.ReactNode;
}

export default function Button({
  href,
  variant,
  className,
  children
}: ButtonProps) {
  return (
    <a
      href={href}
      className={`${variant === "primary" ? "bg-blue hover:bg-blue/90" : "bg-purple hover:bg-purple/90"} rounded-full px-8 py-4 text-white transition-colors lg:px-4 xl:px-8 ${className} font-bold`}
    >
      {children}
    </a>
  );
}

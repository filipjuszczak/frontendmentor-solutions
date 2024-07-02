import { useMemo } from "react";

interface ButtonProps {
  variant: "primary" | "secondary";
  className?: string;
  children: React.ReactNode;
}

export default function Button({ variant, className, children }: ButtonProps) {
  const background = useMemo(
    () =>
      variant === "primary"
        ? "bg-softBlue text-white hover:border-softBlue hover:bg-white hover:text-softBlue"
        : "bg-offWhite text-veryDarkBlue hover:border-[#5B6074] hover:bg-transparent hover:text-[#5B6074]",
    [variant]
  );

  return (
    <a
      href="#"
      className={`${background} inline-block rounded-md border-2 border-transparent shadow-button transition-colors ${className ? className : ""} text-sm font-medium leading-loose`}
    >
      {children}
    </a>
  );
}

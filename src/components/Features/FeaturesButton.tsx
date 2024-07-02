interface FeaturesButtonProps {
  onClick: () => void;
  isActive: boolean;
  children: string;
}

export default function FeaturesButton({
  onClick,
  isActive,
  children
}: FeaturesButtonProps) {
  return (
    <button
      className={`relative py-5 transition-colors hover:text-softRed ${isActive ? "text-veryDarkBlue after:absolute after:bottom-0 after:left-1/2 after:h-1 after:w-[40%] after:-translate-x-1/2 after:bg-softRed after:content-['']" : "text-grayishBlue"}`}
      onClick={onClick}
      role="tab"
    >
      {children}
    </button>
  );
}

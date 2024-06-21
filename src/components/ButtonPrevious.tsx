interface ButtonPreviousProps {
  onClick: () => void;
  className?: string;
  ariaLabel?: string;
}

export default function ButtonPrevious({
  onClick,
  className,
  ariaLabel
}: ButtonPreviousProps) {
  return (
    <button
      className={`${className} [&>svg]:hover:stroke-orange`}
      onClick={onClick}
      aria-label={ariaLabel}
    >
      <svg
        width="12"
        height="18"
        xmlns="http://www.w3.org/2000/svg"
        className="stroke-veryDarkBlue"
      >
        <path
          d="M11 1 3 9l8 8"
          strokeWidth="3"
          fill="none"
          fillRule="evenodd"
        />
      </svg>
    </button>
  );
}

interface NavToggleProps {
  isNavOpen: boolean;
  onNavToggle: () => void;
}

export default function NavToggle({ isNavOpen, onNavToggle }: NavToggleProps) {
  return (
    <button
      onClick={onNavToggle}
      aria-label={`${isNavOpen ? "Close" : "Open"} navigation.`}
      aria-controls="primary-navigation"
      className="relative z-50 lg:hidden"
    >
      {isNavOpen ? (
        <img
          src="/images/icon-close.svg"
          alt=""
          width={16}
          height={15}
          role="presentation"
        />
      ) : (
        <img
          src="/images/icon-hamburger.svg"
          alt=""
          width={18}
          height={15}
          role="presentation"
        />
      )}
    </button>
  );
}

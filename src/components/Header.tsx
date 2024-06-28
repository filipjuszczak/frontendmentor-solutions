import { useCallback, useState } from "react";
import { createPortal } from "react-dom";
import Logo from "./Logo";
import NavBar from "./NavBar";

function Overlay() {
  return <div className="absolute inset-0 bg-black/60"></div>;
}

export default function Header() {
  const [isNavigationOpen, setIsNavigationOpen] = useState(false);

  const toggleNavigation = useCallback(() => {
    setIsNavigationOpen(i => !i);
  }, []);

  return (
    <>
      <header className="absolute flex w-full items-center justify-center px-6 py-12 lg:gap-14 lg:p-16">
        <button
          onClick={toggleNavigation}
          className="absolute left-[24px] z-[9999] xl:hidden"
          aria-label={`${isNavigationOpen ? "Close" : "Open"} navigation`}
          aria-controls="primary-navigation"
        >
          {isNavigationOpen ? (
            <img src="/images/icon-close.svg" alt="" width={16} height={16} />
          ) : (
            <img
              src="/images/icon-hamburger.svg"
              alt=""
              width={20}
              height={14}
            />
          )}
        </button>

        <Logo />
        <NavBar isOpen={isNavigationOpen} />
      </header>

      {isNavigationOpen &&
        createPortal(<Overlay />, document.querySelector("#overlay-root")!)}
    </>
  );
}

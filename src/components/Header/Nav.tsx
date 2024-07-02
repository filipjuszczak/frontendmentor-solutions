import { useEffect } from "react";
import NavItem from "./NavItem";
import SocialMedia from "../SocialMedia";

interface NavProps {
  isOpen: boolean;
}

export default function Nav({ isOpen }: NavProps) {
  useEffect(() => {
    document.documentElement.classList.toggle("overflow-hidden");
  }, [isOpen]);

  return (
    <nav
      id="primary-navigation"
      aria-expanded={isOpen}
      className={`absolute inset-0 left-0 top-0 z-20 flex-col bg-veryDarkBlue/90 px-8 pb-12 pt-[6.5625rem] text-xl uppercase tracking-widest text-white transition-transform lg:static lg:flex lg:flex-row lg:gap-12 lg:bg-transparent lg:px-0 lg:py-0 lg:text-sm lg:text-veryDarkBlue ${isOpen ? "flex" : "hidden"}`}
    >
      <ul
        className="flex flex-col divide-y border-b border-t lg:flex-row lg:gap-11 lg:divide-none lg:border-none"
        role="list"
      >
        <NavItem href="#">Features</NavItem>
        <NavItem href="#">Pricing</NavItem>
        <NavItem href="#">Contact</NavItem>
      </ul>

      <a
        href="#"
        className="mt-6 rounded-md border-2 border-white py-4 text-center font-medium leading-none transition-colors lg:mt-0 lg:flex lg:items-center lg:justify-center lg:bg-softRed lg:px-8 lg:py-3 lg:text-white lg:hover:border-softRed lg:hover:bg-white lg:hover:text-softRed"
      >
        Login
      </a>

      <SocialMedia className="mx-auto mt-auto lg:hidden" />
    </nav>
  );
}

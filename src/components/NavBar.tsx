import NavItem from "./NavItem";

interface NavBarProps {
  isOpen: boolean;
}

export default function NavBar({ isOpen }: NavBarProps) {
  return (
    <nav
      id="primary-navigation"
      className={`absolute left-0 top-0 z-50 w-full -translate-x-full bg-white px-6 py-12 lg:gap-14 lg:p-16 ${isOpen ? "translate-x-0" : ""} xl:static xl:translate-x-0 xl:bg-transparent xl:px-0 xl:py-0`}
      aria-label="primary"
      aria-expanded={isOpen}
    >
      <ul className="flex justify-end gap-4 text-black md:justify-center md:gap-16 xl:justify-start xl:gap-8 xl:text-white">
        <NavItem href="#" text="home" />
        <NavItem href="#" text="shop" />
        <NavItem href="#" text="about" />
        <NavItem href="#" text="contact" />
      </ul>
    </nav>
  );
}

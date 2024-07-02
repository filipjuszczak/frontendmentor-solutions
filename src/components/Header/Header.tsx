import { useCallback, useState } from "react";
import Logo from "../Logo";
import NavToggle from "./NavToggle";
import Nav from "./Nav";

export default function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const handleToggleNav = useCallback(() => {
    setIsNavOpen(i => !i);
  }, []);

  return (
    <header className="max-w-container mx-auto mb-10 flex items-center justify-between py-10">
      <Logo isNavOpen={isNavOpen} />

      <Nav isOpen={isNavOpen} />

      <NavToggle isNavOpen={isNavOpen} onNavToggle={handleToggleNav} />
    </header>
  );
}

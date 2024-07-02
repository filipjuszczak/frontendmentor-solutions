interface NavItemProps {
  href: string;
  children: React.ReactNode;
}

export default function NavItem({ href, children }: NavItemProps) {
  return (
    <li className="text-center">
      <a
        href={href}
        className="inline-block w-full py-6 transition-colors lg:py-4 lg:hover:text-softRed"
      >
        {children}
      </a>
    </li>
  );
}

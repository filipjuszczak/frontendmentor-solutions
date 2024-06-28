interface NavItemProps {
  href: string;
  text: string;
}

export default function NavItem({ href, text }: NavItemProps) {
  return (
    <li>
      <a
        href={href}
        className="relative font-semibold hover:after:absolute hover:after:bottom-[-8px] hover:after:left-1/2 hover:after:h-[2px] hover:after:w-1/2 hover:after:-translate-x-1/2 hover:after:bg-white hover:after:content-[''] focus-visible:outline focus-visible:outline-4 focus-visible:outline-offset-4 focus-visible:outline-black"
      >
        {text}
      </a>
    </li>
  );
}

import Logo from "../Logo";
import SocialMedia from "../SocialMedia";

export default function Footer() {
  return (
    <footer className="flex flex-col items-center bg-veryDarkBlue py-10 lg:flex-row lg:justify-between lg:px-[10.3125rem]">
      <div className="flex flex-col lg:flex-row lg:items-center lg:gap-16">
        <Logo textColor="#FFFFFF" />

        <nav className="mb-12 mt-10 lg:my-0" aria-label="footer">
          <ul
            className="flex flex-col gap-8 text-center lg:flex-row"
            role="list"
          >
            <li>
              <a
                href="#"
                className="uppercase tracking-[1.73px] text-white transition-colors hover:text-softRed"
              >
                Features
              </a>
            </li>

            <li>
              <a
                href="#"
                className="uppercase tracking-[1.73px] text-white transition-colors hover:text-softRed"
              >
                Pricing
              </a>
            </li>

            <li>
              <a
                href="#"
                className="uppercase tracking-[1.73px] text-white transition-colors hover:text-softRed"
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>

      <SocialMedia />
    </footer>
  );
}

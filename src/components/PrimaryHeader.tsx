import { useContext, useState } from "react";
import { createPortal } from "react-dom";
import { CartContext } from "../context/CartContext";
import Cart from "./Cart";

export default function PrimaryHeader() {
  const { cart } = useContext(CartContext);
  const itemsInCartNumber = cart.reduce((acc, item) => acc + item.quantity, 0);

  const [isNavigationOpen, setIsNavigationOpen] = useState(false);
  const [isCartVisible, setIsCartVisible] = useState(false);

  return (
    <header className="relative flex justify-between border-[hsl(219,35%,92%)] px-6 py-[1.1875rem] lg:border-b lg:pb-9 lg:pt-[1.75rem] xl:px-0">
      <div className="flex items-center gap-4 lg:gap-14">
        <button
          aria-controls="main-navigation"
          className="relative z-50 lg:hidden"
          onClick={() => setIsNavigationOpen(i => !i)}
        >
          {isNavigationOpen ? (
            <img src="/images/icon-close.svg" alt="" width={14} height={15} />
          ) : (
            <img src="/images/icon-menu.svg" alt="" width={16} height={15} />
          )}
        </button>
        <a href="#">
          <img src="/images/logo.svg" alt="" width={138} height={20} />
        </a>
        <nav
          id="main-navigation"
          className={`absolute left-0 top-0 z-40 h-screen w-[15.625rem] -translate-x-full bg-white transition-transform ${isNavigationOpen && "translate-x-0"} lg:static lg:h-auto lg:w-auto lg:translate-x-0 lg:bg-transparent`}
          aria-expanded={isNavigationOpen}
        >
          <ul className="nav-list ml-[1.5625rem] mt-[5.75rem] flex flex-col gap-[1.25rem] text-lg font-bold text-veryDarkBlue lg:m-0 lg:flex-row lg:gap-8 lg:text-[0.9375rem] lg:font-normal lg:text-[hsl(219,9,45)]">
            <li>
              <a href="#" className="hover:text-veryDarkBlue">
                Collections
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-veryDarkBlue">
                Men
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-veryDarkBlue">
                Women
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-veryDarkBlue">
                About
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-veryDarkBlue">
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <div className="flex items-center gap-[1.375rem] lg:gap-12 relative">
        <button
          aria-label="Show cart."
          onClick={() => setIsCartVisible(i => !i)}
          className="relative"
        >
          {itemsInCartNumber > 0 && (
            <span className="bg-orange flex justify-center items-center absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 pointer-events-none rounded-md text-white w-[1.1875rem] h-[0.8125rem] text-[0.625rem]">
              {itemsInCartNumber}
            </span>
          )}
          <svg
            width="22"
            height="20"
            xmlns="http://www.w3.org/2000/svg"
            className="fill-[hsl(219,9%,45%)] hover:fill-black"
          >
            <path
              d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z"
              fillRule="nonzero"
            />
          </svg>
        </button>
        <Cart isVisible={isCartVisible} items={cart} />
        <a href="#" aria-label="Go to profile.">
          <img
            src="/images/image-avatar.png"
            alt=""
            width={100}
            height={100}
            className="w-6 lg:w-[3.125rem] hover:border-2 hover:border-orange rounded-full"
          />
        </a>
      </div>
      {isNavigationOpen &&
        createPortal(
          <div className="absolute inset-0 bg-black/75"></div>,
          document.querySelector("#backdrop")!
        )}
    </header>
  );
}

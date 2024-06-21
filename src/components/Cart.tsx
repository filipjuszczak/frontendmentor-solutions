import { useContext } from "react";
import { CartContext } from "../context/CartContext";

interface CartProps {
  isVisible: boolean;
  items: {
    id: string;
    name: string;
    price: number;
    currency: string;
    quantity: number;
    image: string;
  }[];
}

export default function Cart({ isVisible, items }: CartProps) {
  const { removeItem, clearCart } = useContext(CartContext);

  return (
    <div
      className={`${!isVisible ? "hidden" : ""} shadow-xl flex flex-col absolute bg-white w-[calc(100vw-16px)] min-h-64 top-full translate-y-8 translate-x-[1rem] right-0 z-50 rounded-md lg:w-[22.5rem] lg:-translate-x-1/2 lg:translate-y-0 lg:left-0 `}
    >
      <p className="font-bold p-6 pb-[1.6875rem]">Cart</p>
      <div
        className={`border-t border-[hsl(219,35%,92%)] flex flex-col ${items.length === 0 ? "items-center justify-center" : ""} grow`}
      >
        {items.length === 0 ? (
          <p className="font-bold text-[hsl(219,9%,45%)]">
            Your cart is empty.
          </p>
        ) : (
          <div className="px-6 py-6">
            {items.map(item => (
              <div
                key={item.id}
                className="flex items-center justify-between pb-6"
              >
                <img
                  src={item.image}
                  alt={`${item.name} image.`}
                  width={50}
                  height={50}
                  className="rounded-[4px]"
                />
                <div className="text-[hsl(219,9%,45%)]">
                  <p>{item.name}</p>
                  <p className="flex gap-2">
                    <span aria-hidden="true">
                      {`${item.currency}${item.price.toFixed(2)} x ${item.quantity}`}
                    </span>
                    <span className="sr-only">{`${item.quantity} ${item.quantity > 1 ? "items" : "item"} times ${item.currency}${item.price.toFixed(2)}`}</span>
                    <span
                      className="font-bold text-veryDarkBlue"
                      aria-hidden="true"
                    >
                      {`${item.currency}${(item.quantity * item.price).toFixed(2)}`}
                    </span>
                    <span className="sr-only">{`Total price of ${item} is ${item.currency}${(item.quantity * item.price).toFixed(2)}`}</span>
                  </p>
                </div>
                <button
                  onClick={() => removeItem(item.id)}
                  aria-label={`Remove ${item.name} from cart.`}
                >
                  <svg
                    width="14"
                    height="16"
                    xmlns="http://www.w3.org/2000/svg"
                    className="fill-[hsl(221,22%,81%)] hover:fill-veryDarkBlue transition-colors"
                    aria-hidden="true"
                  >
                    <path
                      d="M0 2.625V1.75C0 1.334.334 1 .75 1h3.5l.294-.584A.741.741 0 0 1 5.213 0h3.571a.75.75 0 0 1 .672.416L9.75 1h3.5c.416 0 .75.334.75.75v.875a.376.376 0 0 1-.375.375H.375A.376.376 0 0 1 0 2.625Zm13 1.75V14.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 1 14.5V4.375C1 4.169 1.169 4 1.375 4h11.25c.206 0 .375.169.375.375ZM4.5 6.5c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Zm3 0c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Zm3 0c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Z"
                      id="a"
                      fillRule="nonzero"
                    />
                  </svg>
                </button>
              </div>
            ))}
            <button
              aria-label="Checkout."
              className="font-bold bg-orange py-[1.125rem] w-full rounded-xl hover:bg-[hsl(26,100%,71%)] transition-colors"
              onClick={clearCart}
            >
              Checkout
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

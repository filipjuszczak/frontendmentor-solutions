import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";

interface ProductDetailsProps {
  id: string;
  manufacturer: string;
  name: string;
  description: string;
  currency: string;
  regularPrice: number;
  discount: number;
  image: string;
}

export default function ProductDetails({
  id,
  manufacturer,
  name,
  description,
  currency,
  regularPrice,
  discount,
  image
}: ProductDetailsProps) {
  const { addItem } = useContext(CartContext);
  const [quantity, setQuantity] = useState(1);
  const discountedPrice = regularPrice - regularPrice * discount;

  const addToCart = () => {
    addItem({
      id,
      name,
      price: discountedPrice,
      currency,
      quantity,
      image
    });
  };

  return (
    <section aria-labelledby="description" className="p-6 lg:p-0">
      <span
        aria-hidden="true"
        className="mb-4 block text-[clamp(0.75rem,0.728rem+0.0939vi,0.8125rem)] font-bold uppercase tracking-[0.15em] text-[hsl(219,9,45)]"
      >
        {manufacturer}
      </span>
      <span className="sr-only">{`Manufactured by ${manufacturer}`}</span>
      <h1
        id="description"
        className="mb-[0.9375rem] text-[clamp(1.75rem,1.3979rem+1.5023vi,2.75rem)] font-bold leading-none text-veryDarkBlue lg:mb-8"
      >
        {name}
      </h1>
      <p className="mb-6 text-[clamp(0.9375rem,0.9155rem+0.0939vi,1rem)] leading-relaxed text-[hsl(219,9,45)]">
        {description}
      </p>
      <div className="mb-6 flex items-center justify-between lg:mb-8 lg:flex-col lg:items-start lg:gap-[0.625rem]">
        <div className="flex items-center gap-4">
          <strong
            aria-hidden="true"
            className="text-[1.75rem] font-bold text-veryDarkBlue"
          >
            {`${currency}${discountedPrice.toFixed(2)}`}
          </strong>
          <span className="sr-only">{`Price: ${currency}${discountedPrice.toFixed(2)}`}</span>
          {discount > 0 && (
            <>
              <span
                aria-hidden="true"
                className="rounded-md bg-veryDarkBlue px-[0.625rem] py-1 font-bold text-white"
              >
                {`${discount * 100}%`}
              </span>
              <span className="sr-only">{`${discount * 100}% discount`}</span>
            </>
          )}
        </div>
        {discount > 0 && (
          <>
            <span className="font-bold text-[hsl(219,9,45)]">
              <del aria-hidden="true">{`${currency}${regularPrice.toFixed(2)}`}</del>
            </span>
            <span className="sr-only">{`Old price: ${currency}${regularPrice}`}</span>
          </>
        )}
      </div>
      <div className="flex flex-col lg:flex-row lg:gap-4">
        <div className="mb-4 flex items-center justify-between rounded-md bg-lightGrayishBlue lg:mb-0">
          <button
            className="px-6 py-[1.375rem] lg:px-4 [&>svg]:hover:fill-[hsl(26,100%,71%)]"
            onClick={() => setQuantity(q => Math.max(1, q - 1))}
            aria-label="Decrease quantity."
          >
            <svg
              width="12"
              height="4"
              xmlns="http://www.w3.org/2000/svg"
              className="fill-orange transition-colors"
              aria-hidden="true"
            >
              <path
                d="M11.357 3.332A.641.641 0 0 0 12 2.69V.643A.641.641 0 0 0 11.357 0H.643A.641.641 0 0 0 0 .643v2.046c0 .357.287.643.643.643h10.714Z"
                id="a"
                fillRule="nonzero"
              />
            </svg>
          </button>
          <span
            aria-hidden="true"
            className="font-bold text-veryDarkBlue lg:px-8"
          >
            <span className="sr-only">{`Current quantity: ${quantity}`}</span>
            {quantity}
          </span>
          <button
            className="px-6 py-[1.375rem] lg:px-4 [&>svg]:hover:fill-[hsl(26,100%,71%)]"
            onClick={() => setQuantity(q => q + 1)}
            aria-label="Increase quantity."
          >
            <svg
              width="12"
              height="12"
              xmlns="http://www.w3.org/2000/svg"
              className="fill-orange transition-colors"
              aria-hidden="true"
            >
              <path
                d="M12 7.023V4.977a.641.641 0 0 0-.643-.643h-3.69V.643A.641.641 0 0 0 7.022 0H4.977a.641.641 0 0 0-.643.643v3.69H.643A.641.641 0 0 0 0 4.978v2.046c0 .356.287.643.643.643h3.69v3.691c0 .356.288.643.644.643h2.046a.641.641 0 0 0 .643-.643v-3.69h3.691A.641.641 0 0 0 12 7.022Z"
                id="b"
                fillRule="nonzero"
              />
            </svg>
          </button>
        </div>
        <button
          aria-label={`Add ${quantity} product${quantity > 1 ? "s" : ""} to cart`}
          onClick={addToCart}
          className="flex w-full grow items-center justify-center gap-4 hover:bg-[hsl(26,100%,71%)] transition-colors rounded-md bg-orange py-[1.125rem] font-bold leading-none text-veryDarkBlue shadow-xl shadow-orange/30 lg:w-auto lg:shadow-none"
        >
          <svg
            width={22}
            height={20}
            xmlns="http://www.w3.org/2000/svg"
            className="fill-veryDarkBlue"
            aria-hidden="true"
          >
            <path
              d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z"
              fillRule="nonzero"
            />
          </svg>
          Add to cart
        </button>
      </div>
    </section>
  );
}

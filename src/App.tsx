import { useState } from "react";
import { CartContext } from "./context/CartContext";
import PrimaryHeader from "./components/PrimaryHeader";
import ImageGallery from "./components/ImageGallery";
import ProductDetails from "./components/ProductDetails";

export interface Product {
  id: string;
  name: string;
  price: number;
  currency: string;
  quantity: number;
  image: string;
}

export default function App() {
  const [cart, setCart] = useState<Product[]>([]);

  const addItem = (item: {
    id: string;
    name: string;
    price: number;
    currency: string;
    quantity: number;
    image: string;
  }) => {
    setCart(prevCart => {
      const cartItems = [...prevCart];
      const existingItemIdx = prevCart.findIndex(
        cartItem => cartItem.id === item.id
      );
      if (existingItemIdx !== -1) {
        cartItems[existingItemIdx].quantity += item.quantity;
      } else {
        cartItems.push({ ...item, quantity: item.quantity });
      }
      return cartItems;
    });
  };

  const removeItem = (id: string) => {
    setCart(prevCart => {
      return prevCart.filter(item => item.id !== id);
    });
  };

  const clearCart = () => {
    setCart([]);
  };

  const [product] = useState({
    id: "i1",
    manufacturer: "Sneaker Company",
    name: "Fall Limited Edition Sneakers",
    description:
      "These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer.",
    currency: "$",
    regularPrice: 250.0,
    discount: 0.5,
    images: [
      {
        id: "img1",
        src: "/images/image-product-1.webp",
        alt: "Sneakers on a table."
      },
      {
        id: "img2",
        src: "/images/image-product-2.webp",
        alt: "Sneaker on two rocks next to a branch and another sneaker."
      },
      {
        id: "img3",
        src: "/images/image-product-3.webp",
        alt: "Sneaker on two rocks."
      },
      {
        id: "img4",
        src: "/images/image-product-4.webp",
        alt: "Sneaker on two rocks."
      }
    ],
    thumbnails: [
      {
        id: "tmb1",
        src: "/images/image-product-1-thumbnail.webp",
        alt: "Sneakers on a table."
      },
      {
        id: "tmb2",
        src: "/images/image-product-2-thumbnail.webp",
        alt: "Sneaker on two rocks next to a branch and another sneaker."
      },
      {
        id: "tmb3",
        src: "/images/image-product-3-thumbnail.webp",
        alt: "Sneaker on two rocks."
      },
      {
        id: "tmb4",
        src: "/images/image-product-4-thumbnail.webp",
        alt: "Sneaker on two rocks."
      }
    ]
  });

  return (
    <CartContext.Provider value={{ cart, addItem, removeItem, clearCart }}>
      <div className="mx-auto max-w-[68.75rem]">
        <PrimaryHeader />
        <main className="mx-auto flex max-w-[69.375rem] flex-col [&>*]:md:w-full md:flex-row md:items-center lg:gap-[7.8125rem] md:px-4 lg:px-[2.96875rem] md:pt-12 lg:pt-24">
          <ImageGallery
            images={product.images}
            thumbnails={product.thumbnails}
          />
          <ProductDetails
            id={product.id}
            manufacturer={product.manufacturer}
            name={product.name}
            description={product.description}
            currency={product.currency}
            regularPrice={product.regularPrice}
            discount={product.discount}
            image={product.thumbnails[0].src}
          />
        </main>
      </div>
    </CartContext.Provider>
  );
}

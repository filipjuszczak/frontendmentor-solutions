import { createContext } from "react";
import { Product } from "../App";

export const CartContext = createContext<{
  cart: Product[];
  addItem: (item: {
    id: string;
    name: string;
    price: number;
    currency: string;
    quantity: number;
    image: string;
  }) => void;
  removeItem: (id: string) => void;
  clearCart: () => void;
}>({
  cart: [],
  addItem: () => {},
  removeItem: () => {},
  clearCart: () => {}
});

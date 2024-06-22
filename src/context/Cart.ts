import { createContext } from "react";
import { Product } from "../interfaces/Product";

export const CartContext = createContext<{
  cart: Product[];
  addItem: (item: Product) => void;
  removeItem: (id: string) => void;
  clearCart: () => void;
}>({
  cart: [],
  addItem: () => {},
  removeItem: () => {},
  clearCart: () => {}
});

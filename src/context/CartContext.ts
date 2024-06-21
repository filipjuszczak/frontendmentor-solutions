import { createContext } from "react";
import { Product } from "../App";

export const CartContext = createContext<{
  cart: Product[];
  addItem: (item) => void;
  removeItem: (id) => void;
  clearCart: () => void;
}>({
  cart: [],
  addItem: (item: any) => {},
  removeItem: (id: string) => {},
  clearCart: () => {}
});

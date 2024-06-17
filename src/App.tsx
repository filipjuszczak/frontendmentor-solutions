import { useState } from "react";
import Main from "./components/Main";
import Card from "./components/Card";

export default function App() {
  const [data] = useState({
    image: "/images/image-equilibrium.jpg",
    title: "Equilibrium #3429",
    content: "Our Equilibrium collection promotes balance and calm.",
    price: "0.041 ETH",
    priceCurrencyImage: "/images/icon-ethereum.svg",
    timeLeft: "3 days left",
    avatar: "/images/image-avatar.png",
    author: "Jules Wyvern"
  });

  return (
    <Main>
      <Card data={data} />
    </Main>
  );
}

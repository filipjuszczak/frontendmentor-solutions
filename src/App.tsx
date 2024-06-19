import { useState } from "react";
import ArticlePreview from "./components/ArticlePreview";

export default function App() {
  const [articlePreviewData] = useState({
    heading:
      "Shift the overall look and feel by adding these wonderful touches to furniture in your home",
    body: "Ever been in a room and felt like something was missing? Perhaps it felt slightly bare and uninviting. I've got some simple tips to help you make any room feel complete.",
    author: {
      fullName: "Michelle Appleton",
      avatar: {
        src: "/images/avatar-michelle.jpg",
        width: 175,
        height: 175
      },
      date: "28 Jun 2020"
    }
  });

  return (
    <div className="flex min-h-screen items-center justify-center bg-lightGrayishBlue">
      <main className="max-w-[min(90%,48rem)] rounded-xl bg-white">
        <ArticlePreview data={articlePreviewData} />
      </main>
    </div>
  );
}

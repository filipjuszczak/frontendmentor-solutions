import React from "react";
import Image from "./Image";
import Tag from "./Tag";
import Author from "./Author";
import headerImg from "../../public/illustration-article.svg";
import avatarImg from "../../public/image-avatar.webp";

function Card() {
  return (
    <div className="card rounded-2xl border border-black bg-white p-5">
      <Image src={headerImg} alt="" />
      <Tag text="Learning" />
      <p className="text-xs">Published 21 December 2023</p>
      <h1 className="text-xl font-bold text-black">HTML & CSS foundations</h1>
      <p className="text-grey">
        These languages are the backbone of every website, defining structure,
        content, and presentation.
      </p>
      <Author name="Greg Hooper" avatarUrl={avatarImg} />
    </div>
  );
}

export default Card;

import Image from "./Image";
import Tag from "./Tag";
import Author from "./Author";
import headerImg from "/images/illustration-article.svg";
import avatarImg from "/images/image-avatar.webp";

function Card() {
  return (
    <div className="max-w-[min(88%,24rem)] rounded-[20px] border border-black bg-white p-6 shadow-[10px_10px_0_black]">
      <Image src={headerImg} alt="" />
      <div className="mt-6 flex flex-col items-start gap-3">
        <Tag text="Learning" />
        <span className="text-[clamp(0.75rem,0.706rem+0.1878vi,0.875rem)]">
          Published 21 Dec 2023
        </span>
      </div>
      <h1 className="mt-3 text-[clamp(1.25rem,1.162rem+0.3756vi,1.5rem)] font-extrabold text-black">
        <a href="#" className="hover:text-yellow">
          HTML & CSS foundations
        </a>
      </h1>
      <p className="mt-3 text-[clamp(0.875rem,0.831rem+0.1878vi,1rem)] text-grey">
        These languages are the backbone of every website, defining structure,
        content, and presentation.
      </p>
      <Author name="Greg Hooper" avatarUrl={avatarImg} />
    </div>
  );
}

export default Card;

import { useState } from "react";
import Avatar from "./Avatar";
import facebookIcon from "../assets/icon-facebook.svg";
import twitterIcon from "../assets/icon-twitter.svg";
import pinterestIcon from "../assets/icon-pinterest.svg";

interface AuthorProps {
  fullName: string;
  date: string;
  avatar: {
    src: string;
    width: number;
    height: number;
  };
}

export default function Author({
  fullName,
  date,
  avatar: { src, width, height }
}: AuthorProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-4">
        <Avatar src={src} width={width} height={height} />
        <div>
          <p className="text-darkGrayishBlue mb-1 text-sm font-bold">
            {fullName}
          </p>
          <p className="text-darkBlue/50 text-xs">{date}</p>
        </div>
      </div>
      <button
        onClick={() => setIsMenuOpen(i => !i)}
        className={`bg-lightGrayishBlue rounded-full p-3 ${isMenuOpen && "bg-darkBlue"}`}
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="13">
          <path
            fill="#6E8098"
            d="M15 6.495L8.766.014V3.88H7.441C3.33 3.88 0 7.039 0 10.936v2.049l.589-.612C2.59 10.294 5.422 9.11 8.39 9.11h.375v3.867L15 6.495z"
          />
        </svg>
      </button>
      {isMenuOpen && (
        <div className="bg-darkGrayishBlue absolute bottom-0 left-0 right-0 flex justify-between rounded-b-xl p-8 text-white md:rounded-b-none md:rounded-br-xl">
          <div className="flex items-center gap-4">
            <p className="text-lightGrayishBlue/50 text-sm uppercase tracking-[0.3em]">
              Share
            </p>
            <button aria-label="Share on Facebook">
              <img src={facebookIcon} alt="" width={20} height={20} />
            </button>
            <button aria-label="Share on Twitter">
              <img src={twitterIcon} alt="" width={20} height={17} />
            </button>
            <button className="Share on Pinterest">
              <img src={pinterestIcon} alt="" width={20} height={20} />
            </button>
          </div>
          <button
            onClick={() => setIsMenuOpen(i => !i)}
            className="bg-darkBlue rounded-full p-3"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="13">
              <path
                fill="#fff"
                d="M15 6.495L8.766.014V3.88H7.441C3.33 3.88 0 7.039 0 10.936v2.049l.589-.612C2.59 10.294 5.422 9.11 8.39 9.11h.375v3.867L15 6.495z"
              />
            </svg>
          </button>
        </div>
      )}
    </div>
  );
}

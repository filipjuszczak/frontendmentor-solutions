import { useState } from "react";
import Header from "./Header";
import CarouselControls from "./CarouselControls";
import ImageCarousel from "./ImageCarousel";

const carouselImages = [
  {
    mobile: "/images/mobile-image-hero-1.jpg",
    desktop: "/images/desktop-image-hero-1.jpg",
    mobileWidth: 375,
    mobileHeight: 360,
    alt: "A small plant in a pot on a table next to two while chairs."
  },
  {
    mobile: "/images/mobile-image-hero-2.jpg",
    desktop: "/images/desktop-image-hero-2.jpg",
    mobileWidth: 375,
    mobileHeight: 360,
    alt: "Three different-colored chairs next to each other."
  },
  {
    mobile: "/images/mobile-image-hero-3.jpg",
    desktop: "/images/desktop-image-hero-3.jpg",
    mobileWidth: 375,
    mobileHeight: 360,
    alt: "Black chair in the middle of a room."
  }
];

export default function HeroSection() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleSwitchImage = (direction: "forward" | "backward") => {
    switch (direction) {
      case "forward":
        setCurrentImageIndex(prevSlide =>
          prevSlide + 1 > carouselImages.length - 1 ? 0 : prevSlide + 1
        );
        break;
      case "backward":
        setCurrentImageIndex(prevSlide =>
          prevSlide - 1 < 0 ? carouselImages.length - 1 : prevSlide - 1
        );
        break;
      default:
        return;
    }
  };

  return (
    <div className="flex flex-col xl:flex-row">
      <div className="relative min-h-[22.5rem] lg:min-w-[52.5rem]">
        <Header />
        <ImageCarousel
          currentImage={currentImageIndex}
          images={carouselImages}
        />
        <CarouselControls onSlideImage={handleSwitchImage} />
      </div>

      <div className="px-8 py-[3.75rem] xl:px-[6.25rem] xl:pb-[9.5625rem] xl:pt-[7.5rem]">
        <h1 className="text-mainHeading mb-4 font-semibold leading-none tracking-tighter text-black">
          Discover innovative ways to decorate
        </h1>

        <p className="mb-10 tracking-[-0.33px]">
          We provide unmatched quality, comfort, and style for property owners
          across the country. Our experts combine form and function in bringing
          your vision to life. Create a room in your own style with our
          collection and make your property a reflection of you and what you
          love.
        </p>

        <a
          href="#"
          className="relative uppercase tracking-[12.5px] text-black transition-colors after:ml-8 after:content-[url('/images/icon-arrow.svg')] hover:text-darkGray focus-visible:outline focus-visible:outline-4 focus-visible:outline-offset-4 focus-visible:outline-black"
        >
          Shop now
        </a>
      </div>
    </div>
  );
}
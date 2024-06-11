import Container from "./components/Container";
import HeroSection from "./components/HeroSection";
import Step from "./components/Step";
import ImageGallery from "./components/ImageGallery";
import Footer from "./components/Footer";

const images = [
  {
    id: "img1",
    src: "/desktop/image-woman-in-videocall.jpg",
    alt: "A woman in front of a laptop during a video call"
  },
  {
    id: "img2",
    src: "/desktop/image-women-videochatting.jpg",
    alt: "Three women videochatting on a phone"
  },
  {
    id: "img3",
    src: "/desktop/image-men-in-meeting.jpg",
    alt: "A man in front of a laptop during a video meeting"
  },
  {
    id: "img4",
    src: "/desktop/image-man-texting.jpg",
    alt: "A man sitting on a couch, texting on the phone"
  }
];

export default function App() {
  return (
    <div>
      <HeroSection />
      <main className="text-slate text-center">
        <Step>01</Step>
        <Container>
          <ImageGallery images={images} />
          <div className="mb-36 flex flex-col items-center gap-8">
            <p className="text-blue font-bold uppercase tracking-[0.25em]">
              Built for modern use
            </p>
            <h1 className="text-darkSlate max-w-[19ch] px-10 text-3xl font-bold leading-tight md:text-[2.5rem]">
              Smarter meetings, all in one place
            </h1>
            <p className="max-w-[60ch] text-pretty px-7">
              Send messages, share files, show your screen, and record your
              meetings — all in one workspace. Control who can join with
              invite-only team access, data encryption, and data export.
            </p>
          </div>
          <div className="relative">
            <Step className="absolute z-10 translate-y-1/2 bg-white">02</Step>
          </div>
        </Container>
      </main>
      <Footer />
    </div>
  );
}

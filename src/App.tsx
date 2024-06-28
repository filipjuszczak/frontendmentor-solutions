import AboutSection from "./components/AboutSection";
import HeroSection from "./components/HeroSection";

export default function App() {
  return (
    <main className="mx-auto grid max-w-[90rem] text-darkGray">
      <HeroSection />
      <AboutSection />
    </main>
  );
}

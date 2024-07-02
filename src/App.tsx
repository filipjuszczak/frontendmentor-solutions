import CTASection from "./components/CTASection";
import ExtensionSection from "./components/ExtensionSection";
import FAQSection from "./components/FAQ/FAQSection";
import FeaturesSection from "./components/Features/FeaturesSection";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import HeroSection from "./components/HeroSection";

export default function App() {
  return (
    <>
      <Header />

      <main>
        <HeroSection />
        <FeaturesSection />
        <ExtensionSection />
        <FAQSection />
        <CTASection />
      </main>

      <Footer />
    </>
  );
}

import { useMemo, useState } from "react";
import FeaturesControls from "./FeaturesControls";
import Feature from "./Feature";
import Container from "../Container";

export default function Features() {
  const tabsContent = useMemo(
    () => [
      {
        image: {
          src: "/images/illustration-features-tab-1.svg",
          width: 536,
          height: 346
        },
        title: "Bookmark in one click",
        body: "Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites."
      },
      {
        image: {
          src: "/images/illustration-features-tab-2.svg",
          width: 478,
          height: 416
        },
        title: "Intelligent search",
        body: "Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks."
      },
      {
        image: {
          src: "/images/illustration-features-tab-3.svg",
          width: 440,
          height: 380
        },
        title: "Share your bookmarks",
        body: "Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button."
      }
    ],
    []
  );

  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (tab: number) => {
    setActiveTab(tab);
  };

  return (
    <div>
      <Container>
        <FeaturesControls activeTab={activeTab} onTabClick={handleTabClick} />

        <Feature
          image={tabsContent[activeTab].image}
          title={tabsContent[activeTab].title}
          body={tabsContent[activeTab].body}
        />
      </Container>
    </div>
  );
}

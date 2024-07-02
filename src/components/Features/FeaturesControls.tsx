import FeaturesButton from "./FeaturesButton";

interface FeaturesButtonProps {
  activeTab: number;
  onTabClick: (tab: number) => void;
}

export default function FeaturesControls({
  activeTab,
  onTabClick
}: FeaturesButtonProps) {
  return (
    <div
      className="mb-[4.5rem] flex flex-col divide-y border-b border-t lg:mx-auto lg:max-w-[45.625rem] lg:flex-row lg:justify-center lg:gap-12 lg:divide-none lg:border-t-0"
      role="tablist"
    >
      <FeaturesButton isActive={activeTab === 0} onClick={() => onTabClick(0)}>
        Simple Bookmarking
      </FeaturesButton>

      <FeaturesButton isActive={activeTab === 1} onClick={() => onTabClick(1)}>
        Speedy Searching
      </FeaturesButton>

      <FeaturesButton isActive={activeTab === 2} onClick={() => onTabClick(2)}>
        Easy Sharing
      </FeaturesButton>
    </div>
  );
}

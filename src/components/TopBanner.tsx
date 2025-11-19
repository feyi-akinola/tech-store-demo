import SearchBar from "./SearchBar";
import TopBannerSection from "./TopBannerSection";

// Icons
import TwentyFourIcon from "../assets/svg/24.svg?react";
import WorldIcon from "../assets/svg/world.svg?react";

// Hooks
import { useMediaQuery } from "@uidotdev/usehooks";

interface Section {
  title: string;
  description: string;
  icon: any;
}

const TopBanner = () => {
  const topBannerSections: Section[] = [
    {
      title: "24/7 Support",
      description: "+1 212-334-0212",
      icon: <TwentyFourIcon
        className="w-8 h-8 fill-black/80" />,
    },
    {
      title: "Worldwide",
      description: "Free Shipping",
      icon: <WorldIcon
        className="w-8 h-8 fill-black/80" />,
    },
  ];

  const isLargeWidth = useMediaQuery("(max-width: 1024px)");

  return (
    <div 
      id="top-banner"
      className="flex justify-between gap-16 px-24 py-4"
    >
      <SearchBar />

      {
        !isLargeWidth && (
          <div className="flex gap-10">
            {
              topBannerSections.map((section, index) => (
                <TopBannerSection
                  key={index}
                  title={section.title}
                  description={section.description}
                  icon={section.icon}
                />
              ))
            }
          </div>
        )
      }
      
    </div>
  );
};

export default TopBanner;
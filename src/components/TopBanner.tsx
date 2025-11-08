import SearchBar from "./SearchBar";
import TopBannerSection from "./TopBannerSection";


interface Section {
  title: string;
  description: string;
  icon: string;
}

const TopBanner = () => {
  const topBannerSections: Section[] = [
    {
      title: "24/7 Support",
      description: "+1 212-334-0212",
      icon: "💰",
    },
    {
      title: "Worldwide",
      description: "Free Shipping",
      icon: "🚚",
    },
  ];

  return (
    <div 
      id="top-banner"
      className="flex justify-between gap-16 px-24 py-4"
    >
      <SearchBar />
      
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
    </div>
  );
};

export default TopBanner;
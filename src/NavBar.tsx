import SearchBar from "./components/SearchBar.tsx";
import TopBannerSection from "./components/TopBannerSection.tsx";

interface Section {
  title: string;
  description: string;
  icon: string;
}

const NavBar = () => {
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
    <nav className="w-screen">
      <div 
        id="top-banner"
        className="flex justify-between gap-12 px-6 py-2"
      >
        <SearchBar />
        
        <div className="flex gap-6">
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

      <div
        id="bottom-banner"
        className="w-full h-12 flex items-center justify-between bg-blue-100"
      >
        Bottom Banner
      </div>
    </nav>
  );
};

export default NavBar;
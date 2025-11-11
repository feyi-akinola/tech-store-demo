import BottomBanner from "../components/BottomBanner.tsx";
import TopBanner from "../components/TopBanner.tsx";

const NavBar = () => {
  return (
    <nav className="sticky bg-white top-0 z-50 w-full">
      <TopBanner />

      <BottomBanner />
    </nav>
  );
};

export default NavBar;
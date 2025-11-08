import BottomBanner from "./components/BottomBanner.tsx";
import TopBanner from "./components/TopBanner.tsx";

const NavBar = () => {
  return (
    <nav className="w-screen">
      <TopBanner />

      <BottomBanner />
    </nav>
  );
};

export default NavBar;
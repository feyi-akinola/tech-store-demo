import NavBar from "./sections/NavBar";
import MainSection from "./sections/MainSection";
import PopularCategoriesSection from "./sections/PopularCategoriesSection";

function App() {
  return (
    <div className="antialiased text-black/80">
      <NavBar />

      <MainSection />

      <PopularCategoriesSection />
    </div>
  );
};

export default App;

// TODO: Add slight smooth scroll
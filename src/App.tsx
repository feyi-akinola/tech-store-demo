// Sections imports
import NavBar from "./sections/NavBar";
import MainSection from "./sections/MainSection";
import PopularCategoriesSection from "./sections/PopularCategoriesSection";
import Footer from "./sections/Footer";
import Newsletter from "./sections/Newsletter";

// GSAP imports
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollSmoother from "gsap/ScrollSmoother";
import ScrollTrigger from "gsap/ScrollTrigger";

function App() {
  gsap.registerPlugin(ScrollSmoother, ScrollTrigger);

  useGSAP(() => {
    ScrollSmoother.create({
      wrapper: "#scroll-wrapper",
      content: "#scroll-content",
      smooth: 0.75,
      smoothTouch: 0.1,
    });
  }, []);

  return (
    <div id="scroll-wrapper">
      <div id="scroll-content" className="antialiased max-w-[2800px] mx-auto text-black/80">
        <NavBar />

        <MainSection />

        <PopularCategoriesSection />

        <Newsletter />

        <Footer />
      </div>
    </div>
  );
};

export default App;

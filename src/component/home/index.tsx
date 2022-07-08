import { HeroSection, About, Advantage, Products, Footer } from "component";
import AOS from "aos";
import "aos/dist/aos.css";
import * as React from "react";

const Home = () => {
  React.useEffect((): any => {
    AOS.init({
      duration: 1500,
      offset: 100,
      easing: "ease-in-out",
    });
    AOS.refresh();
  }, []);

  return (
    <main>
      <HeroSection />
      <About />
      <Advantage />
      <Products />
      <Footer />
    </main>
  );
};

export { Home };

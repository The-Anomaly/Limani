import { HeroSection, NavBar, Services, Footer } from "component";
import { Testimonials } from "component/testimonials";
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
    <>
      <main style={{ background: "#fff" }}>
        <NavBar />
        <HeroSection />
        <Services />
        <Testimonials />
      </main>
      <Footer />
    </>
  );
};

export { Home };

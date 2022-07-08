import { HeroSection } from "component";
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
      <main>
        <HeroSection />
      </main>
      {/* <Footer /> */}
    </>
  );
};

export { Home };

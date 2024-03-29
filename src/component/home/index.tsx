import { HeroSection, About, Advantage, Products, Footer } from "component";
import AOS from "aos";
import "aos/dist/aos.css";
import * as React from "react";
import { Preloader } from "component/preloader";

export interface HomeProps {
  getStarted: () => void;
}

const HomeUI: React.FC<HomeProps> = ({ getStarted }) => {
  const [loading, setLoading] = React.useState(true);
  React.useEffect((): any => {
    setTimeout(() => {
      setLoading(false);
    }, 2500);
    AOS.init({
      duration: 1500,
      offset: 100,
      easing: "ease-in-out",
    });
    AOS.refresh();
  }, []);

  return (
    <main>
      <Preloader loading={loading} />
      <HeroSection getStarted={getStarted} />
      <About getStarted={getStarted} />
      <Advantage getStarted={getStarted} />
      <Products />
      <Footer />
    </main>
  );
};

export { HomeUI };

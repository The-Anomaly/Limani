import { HeroSection, NavBar, Services, Footer } from "component";
import { Testimonials } from "component/testimonials";

const Home = () => {
  return (
    <>
      <NavBar />
      <HeroSection />
      <Services />
      <Testimonials />
      <Footer />
    </>
  );
};

export { Home };

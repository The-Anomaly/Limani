import { Button } from "component/button";
import * as React from "react";
import styles from "./styles.module.css";
import { ArrowDown, ArrowRight, Logo } from "assets";
import { HomeProps } from "component/home";

const HeroSection: React.FC<HomeProps> = ({ getStarted }) => {
  return (
    <section className={styles.heroBg}>
      <div className={`siteWrapper ${styles.heroContainer}`}>
        <Logo className={styles.logo} />
        <h1 className={styles.ttl}>
          The Nigerian Agro Exporter you can trust!
        </h1>
        <div
          data-aos="slide-up"
          data-aos-delay="2500"
          className={styles.txtWrap}
        >
          <p>
            Our company provides agricultural products to the market that meet
            quality standards.
          </p>
          <p>
            We have developed formidable knowledge in the agribusiness sector
            with a proven track record of over 10,000 farmers and suppliers with
            over 50,000 customers who have been pivotal to our success story.
          </p>
        </div>
        <Button Icon={ArrowRight} onClick={getStarted} size="large">
          Get started
        </Button>
        <span className={styles.getToKnow}>
          <ArrowDown /> Get to know more about us
        </span>
      </div>
    </section>
  );
};

export { HeroSection };

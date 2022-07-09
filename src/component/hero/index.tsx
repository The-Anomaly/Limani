import { Button } from "component/button";
import * as React from "react";
import styles from "./styles.module.css";
import Typewriter from "typewriter-effect";
import { useEffect } from "react";
import { ArrowDown, ArrowRight, Logo } from "assets";

const HeroSection = () => {
  return (
    <section className={styles.heroBg}>
      <div className={`siteWrapper ${styles.heroContainer}`}>
        <Logo className={styles.logo} />
        <h1 className={styles.ttl}>
          The Nigerian Agro Exporter you can trust!
        </h1>
        <div
          data-aos="slide-up"
          data-aos-delay="1500"
          className={styles.txtWrap}
        >
          <p>
            Our company provides agricultural products to the market that meet
            quality standards.
          </p>
          <p>
            We have learned the market well and have fantastic relationships
            with our suppliers, customers, and farmers which have contributed to
            our success.
          </p>
        </div>
        <Button Icon={ArrowRight} onClick={() => {}} size="large">
          Read more
        </Button>
        <span className={styles.getToKnow}>
          <ArrowDown /> Get to know more about us
        </span>
      </div>
    </section>
  );
};

export { HeroSection };

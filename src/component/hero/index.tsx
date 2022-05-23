import { CurvedArrow, FacebookIcon, InstagramIcon, TwitterIcon } from "assets";
import { Button } from "component/button";
import * as React from "react";
import styles from "./styles.module.css";

const HeroSection = () => {
  return (
    <section className={`siteWrapper ${styles.heroContainer}`}>
      <h1 className={styles.title}>
        From the <span>Skyline</span> to the <span>Shoreline</span>
      </h1>
      <p className={styles.text}>
        At Limani, we provide solutions to the many difficulties that come with
        logistics to make life easier and better for you. This is done by a
        variety of services we provide.
      </p>
      <Button
        text="Let’s get you started"
        type="filled"
        className={styles.heroBtn}
      />
      <p className={styles.iconTxt}>Get in touch</p>
      <div className={styles.iconWrap}>
        <InstagramIcon />
        <TwitterIcon /> <FacebookIcon />
        <CurvedArrow />
      </div>
    </section>
  );
};

export { HeroSection };

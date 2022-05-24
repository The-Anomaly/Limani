import {
  CurvedArrow,
  FacebookIcon,
  HeroBg,
  InstagramIcon,
  TwitterIcon,
} from "assets";
import { Button } from "component/button";
import * as React from "react";
import styles from "./styles.module.css";
import Typewriter from "typewriter-effect";
import { useEffect } from "react";

const HeroSection = () => {
  const [typing, setTyping] = React.useState(true);
  console.log(typing);

  useEffect(() => {
    setTyping(true);
  }, []);

  const onCreateTextNode = (character: string, textNode: Text): Text | null => {
    if (character === ".") {
      setTyping(false);
      return null;
    }
    return textNode;
  };
  return (
    <section className={`siteWrapper ${styles.heroContainer}`}>
      <h1 className={styles.title}>
        {typing ? (
          <Typewriter
            options={{
              strings: [
                "From the <span>Skyline</span> to the <span>Shoreline</span>.",
              ],
              autoStart: true,
              loop: false,
              delay: 50,
              onCreateTextNode: onCreateTextNode,
            }}
          />
        ) : (
          <>
            From the <span className={styles.titleColored}>Skyline</span> to the{" "}
            <span className={styles.titleColored}>Shoreline</span>
          </>
        )}
      </h1>
      <p className={styles.text} data-aos="fade-up" data-aos-duration="2000">
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
      <HeroBg data-aos="slide-up" className={styles.mobileImg} />
    </section>
  );
};

export { HeroSection };

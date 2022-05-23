import {
  FacebookIcon,
  InstagramIcon,
  LogoWithText,
  MessageIcon,
  PhoneIcon,
  TwitterIcon,
} from "assets";
import { Button } from "component";
import * as React from "react";
import styles from "./styles.module.css";

const Footer = () => {
  return (
    <footer className={styles.footerBg}>
      <div className={`siteWrapper ${styles.footerWrapper}`}>
        <LogoWithText />
        <div className={styles.footerList}>
          <div>
            <p className={styles.heading}>Happiness Delivered</p>
            <p className={styles.text}>
              We are exceptionally positioned to serve both international and
              domestic customers in the world’s fastest growing markets.
            </p>

            <p className={styles.heading}>Receive exciting offers</p>
            <form className={styles.offers}>
              <input type="email" placeholder="Enter your email"></input>
              <Button text="Join" type="filled" />
            </form>
          </div>
          <div>
            <p className={styles.heading}>Get in touch</p>
            <p className={styles.text}>
              Our customer service very welcome to give consult and services
              you. And you can Get a FREE Quote Within 24 hours
            </p>
            <div className={styles.contact}>
              <MessageIcon />{" "}
              <a href="mailto: info@limani.com">info@limani.com</a>
            </div>
            <div className={styles.contact}>
              <PhoneIcon /> <a href="tel: 2340300000000">070 300 000 000</a>
            </div>
          </div>
          <div>
            <p className={styles.heading}>Visit us anytime</p>
            <p className={styles.text}>
              D59 Landbridge avenue,
              <br />
              Victoria island,
              <br />
              Lagos, Nigeria.
            </p>
            <p className={styles.heading}>Socials</p>
            <div className={styles.socialIcons}>
              <InstagramIcon />
              <TwitterIcon />
              <FacebookIcon />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export { Footer };

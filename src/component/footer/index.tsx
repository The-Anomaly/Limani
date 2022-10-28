import {
  FacebookIcon,
  InstagramIcon,
  Logo,
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
        <Logo className={styles.logo} />
        <div className={styles.footerList}>
          <div>
            <p className={styles.heading}>Happiness Delivered</p>
            <p className={`${styles.text} ${styles.textMargBottom}`}>
              We are exceptionally positioned to serve both international and
              domestic customers in the world’s fastest growing market.
            </p>

            <p className={styles.heading}>Receive exciting offers</p>
            <form className={styles.offers}>
              <input type="email" placeholder="Join our newsletter"></input>
              <Button onClick={() => {}} size="small">
                Join
              </Button>
            </form>
          </div>
          <div>
            <p className={styles.heading}>Get in touch</p>
            <p className={styles.text}>
              Our customer service is available 24/7 to serve you. For a FREE
              quote, kindly send us an email and we would respond within 24hrs.
            </p>
            <div className={styles.contact}>
              <MessageIcon />{" "}
              <a href="mailto:info@limaninigeria.com">info@limaninigeria.com</a>
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

import { LogoWithText } from "assets";
import { Button } from "component/button";
import * as React from "react";
import styles from "./styles.module.css";

const NavBar = () => {
  return (
    <nav className={styles.navBg}>
      <div className={`${styles.navWrapper} siteWrapper`}>
        <LogoWithText />
        <Button text="Get in touch with us" type="outline" />
      </div>
    </nav>
  );
};

export { NavBar };

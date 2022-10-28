import * as React from "react";
import styles from "./styles.module.css";

interface PreloaderProps {
  loading: boolean;
  light?: boolean
}

const Preloader: React.FC<PreloaderProps> = ({ loading, light }) => {
  if (!loading) {
    return null;
  }

  return (
    <div className={`${styles.preloader} ${light ? styles.lightBg : ""}`}>
      <div className={styles.spinner}></div>
    </div>
  );
};

export { Preloader };

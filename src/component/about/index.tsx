import styles from "./styles.module.css";
import * as React from "react";
import { ArrowRight } from "assets";

const About = () => {
  return (
    <section className={`siteWrapper ${styles.about}`}>
      <p className={styles.numTag}>01 - About us</p>
      <h2 className={styles.ttl}>
        Well-connected to the <span>natural</span> world
      </h2>
      <div className={styles.info}>
        <div className={styles.stats}>
          <div className={styles.stat}>
            <p>20 +</p>
            <p>Farmers that are in good relationship with us </p>
          </div>
          <div className={styles.stat}>
            <p>90k +</p>
            <p>Customers that feel the benefit of joining us </p>
          </div>
        </div>
        <div className={styles.txt}>
          <p>
            We have built relationships with genuine farmers and suppliers over
            the years. We export items of the highest quality, such as Sesame
            seeds, Hardwood, Shea butter, Bitter kola and Cashew nuts, which
            meet international standards and are unequalled everywhere in the
            world.
          </p>
          <p>
            As a registered member of Nigerian export promotion council (NEPC)
            we are obligated to provide well certified global standard product
            to both local and foreign markets. Our storage and processing
            facilities are always treated and monitored to ensure product
            quality does not depreciate with time.
          </p>
          <a className={styles.readMore}>
            Read more <ArrowRight />{" "}
          </a>
        </div>
      </div>
    </section>
  );
};

export { About };

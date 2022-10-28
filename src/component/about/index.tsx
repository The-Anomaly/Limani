import styles from "./styles.module.css";
import * as React from "react";
import { ArrowRight } from "assets";
import { HomeProps } from "component/home";

const About: React.FC<HomeProps> = ({ getStarted }) => {
  const [stats, setStats] = React.useState({
    farmers: 1,
    customers: 1,
  });
  let i = 0;
  let j = 0;

  const increase = () => {
    if (i < 20 || j < 90) {
      if (i < 20) i += 1;
      if (j < 90) j += 5;

      setStats({
        farmers: i,
        customers: j,
      });
    }
  };

  React.useEffect(() => {
    setTimeout(() => {
      setInterval(increase, 60);
    }, 2600);
  }, []);

  return (
    <section className={`siteWrapper ${styles.about}`}>
      <p className={styles.numTag}>01 - About us</p>
      <h2 data-aos="fade-in" className={styles.ttl}>
        Well-connected to the <span>natural</span> world
      </h2>
      <div data-aos="slide-up" className={styles.info}>
        <div className={styles.stats}>
          <div className={styles.stat}>
            <p>{stats.farmers} +</p>
            <p>Farmers that are in good relationship with us </p>
          </div>
          <div className={styles.stat}>
            <p>{stats.customers}k +</p>
            <p>Customers that feel the benefit of joining us </p>
          </div>
        </div>
        <div className={styles.txt}>
          <p>
            We have built relationships with genuine farmers and suppliers over
            the years. We export items of the highest quality, such as Sesame
            seeds, Hardwood, Shea butter, Bitter kola and Cashew nuts, which
            meet international standards and are unequalled anywhere in the
            world.
          </p>
          <p>
            As a registered member of Nigerian Export Promotion Council (NEPC)
            we are obligated to provide well certified global standard product
            to both local and foreign markets. Our storage and processing
            facilities are always treated and monitored to ensure product
            quality does not depreciate with time.
          </p>
          <button onClick={getStarted} className={styles.readMore}>
            Get started <ArrowRight />{" "}
          </button>
        </div>
      </div>
    </section>
  );
};

export { About };

import styles from "./styles.module.css";
import * as React from "react";
import { ArrowRight, badge, box, harvest, saveTime } from "assets";
import { Button } from "component/button";

const Advantage = () => {
  const advantages = [
    {
      image: harvest,
      title: "Sourcing made easy",
      text: ` Due to the strategic location of our agents on the African
      continent, we are able to source the right products quickly and
      easily.`,
    },
    {
      image: saveTime,
      title: "Save time",
      text: `Sourcing products can be time-consuming. We can save you time by doing the work for you.`,
    },
    {
      image: badge,
      title: "Quality products",
      text: `All products are tested for quality and safety before shipping. Our agents are well trained to ensure our product meets your specifications.`,
    },
    {
      image: box,
      title: "Guaranteed Delivery",
      text: `We will work tirelessly to ensure that your products arrive at the exact time and location that you request.`,
    },
  ];
  return (
    <section className={`siteWrapper ${styles.advantage}`}>
      <p className={styles.numTag}>02 - Our Advantage</p>
      <h2 data-aos="fade-in" className={styles.ttl}>
        The easiest way to <span>source</span>
      </h2>
      <p className={styles.txt}>
        Let our team of professionals help you do the heavy work.
      </p>
      <p className={styles.txt}>
        We know how to source for genuine business in export contracts, that is
        why we provide these services for our clients and mostly what
        international buyers are looking you.
      </p>
      <div data-aos="slide-up" className={styles.cardWrap}>
        {advantages.map((item, index) => (
          <div key={index} className={styles.advCard}>
            <img src={item.image} alt="" />
            <p className={styles.txt1}>{item.title}</p>
            <p className={styles.txt2}>{item.text}</p>
          </div>
        ))}
      </div>
      <div data-aos="zoom-out" className={styles.output}>
        <h3>
          Increasing the output, Conserving more resources, Improving People’s
          Lives
        </h3>
        <p>
          Provide us with your product information and any other information
          that would help make sourcing accurate and easy.
        </p>
        <Button Icon={ArrowRight} onClick={() => {}} size="large">
          Get started now
        </Button>
      </div>
    </section>
  );
};

export { Advantage };

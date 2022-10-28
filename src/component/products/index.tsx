import styles from "./styles.module.css";
import * as React from "react";
import { cassava, charcoal, cotton, ginger, honey, sesame } from "assets";

const Products = () => {
  const products = [
    {
      image: cassava,
      title: "Cassava",
    },
    {
      image: ginger,
      title: "Ginger",
    },
    {
      image: sesame,
      title: "Sesame",
    },
    {
      image: honey,
      title: "Honey",
    },
    {
      image: cotton,
      title: "Cotton",
    },
    {
      image: charcoal,
      title: "Charcoal",
    },
  ];
  return (
    <>
      <section className={`siteWrapper ${styles.advantage}`}>
        <p className={styles.numTag}>03 - Our Offers</p>
        <h2 data-aos="fade-in" className={styles.ttl}>
          Our <span>Products</span>
        </h2>
        <p className={styles.txt}>
          Products are sourced directly from the farmers most of whom we have a
          relationship with which enables us to directly monitor products right
          from when they are harvested.
        </p>
        <p className={styles.txt}>
          We ensure that our products align with the best ethical standards for
          cultivation and planting of our produces ensuring that the quality is
          not compromised from farm to table.
        </p>
        <div data-aos="slide-up" className={styles.productsWrap}>
          {products.map((item, index) => (
            <div key={index} className={styles.product}>
              <img src={item.image} alt={item.title} />
              <p>{item.title}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export { Products };

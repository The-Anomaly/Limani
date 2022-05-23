import { airTransport, clearance, oceanTransport, roadTransport } from "assets";
import { Button } from "component/button";
import * as React from "react";
import styles from "./styles.module.css";

interface ServiceProps {
  reverse?: boolean;
  title1: string;
  title2: string;
  text1: string;
  Image: React.FunctionComponent<React.SVGProps<SVGSVGElement>> | string;
}

const ServiceCard = ({
  reverse,
  text1,
  title1,
  title2,
  Image,
}: ServiceProps) => {
  return (
    <div
      className={`${styles.serviceCard} ${reverse ? styles.reverseCard : ""}`}
    >
      <div className={styles.serviceTxtSec}>
        <h3>
          {title1} <span>{title2}</span>
        </h3>
        <p>{text1}</p>
        <Button className={styles.serviceBtn} text="Read more" type="filled" />
      </div>
      <div className={styles.serviceImgSec}>
        {typeof Image === "string" ? <img src={Image} alt="" /> : <Image />}
      </div>
    </div>
  );
};

const Services = () => {
  const Services: ServiceProps[] = [
    {
      title1: "Air",
      title2: "Transportation",
      text1: `Our dedication, professionalism, and commitment make up the foundation of our airfreight services. We specialize in transporting freight by air. We operate at all cargo airports in Nigeria.`,
      Image: airTransport,
    },
    {
      title1: "Ocean",
      title2: "Transportation",
      text1: `Our company can provide you with a tailored supply chain solution, whether you need distribution or fulfillment, defined freight forwarding, or complete supply chain management.	`,
      Image: oceanTransport,
      reverse: true,
    },
    {
      title1: "Road",
      title2: "Transportation",
      text1: `Our delivery services are available to all locations within the country. It is our pledge to provide timely and high-quality freight and warehousing services.	`,
      Image: roadTransport,
    },
    {
      title1: "Custom",
      title2: "Clearance",
      text1: `We have well-trained experts who handle the documentation and customs clearance process for our customers. `,
      Image: clearance,
      reverse: true,
    },
  ];
  return (
    <section className={`siteWrapper ${styles.servicesWrapper}`}>
      <div className={styles.intro}>
        <h2 className={styles.title}>
          Our <span>Services</span>
        </h2>
        <p className={styles.text1}>
          We are dedicated to simplifying and speeding up the transportation of
          goods and services. We offer customized cargo transportation solutions
          tailored to meet your specific needs and requirements with expertise
          in shipping, consolidation, packing, transport and logistics,
          warehousing and customs brokerage.
        </p>
        <p className={styles.text2}>
          We offer a wide range of services for you to enjoy.
        </p>
      </div>
      {Services.map((item, index) => (
        <ServiceCard {...item} key={index} />
      ))}
    </section>
  );
};

export { Services };

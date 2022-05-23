import * as React from "react";
import styles from "./styles.module.css";

interface TestimonialProps {
  text: string;
  name: string;
  role: string;
}

const TestimonialCard = (props: TestimonialProps) => {
  return (
    <div>
      <p className={styles.text1}>{props.text}</p>
      <p className={styles.text2}>{props.name}</p>
      <p className={styles.text3}>{props.role}</p>
    </div>
  );
};

const Testimonials = () => {
  const [card, setCard] = React.useState<number>(0);

  const unify = (e: React.TouchEvent<HTMLDivElement>): any => {
    return e?.changedTouches ? e?.changedTouches[0] : e;
  };

  let x0: number | null = null;

  const lock = (e: React.TouchEvent<HTMLDivElement>) => {
    x0 = unify(e).clientX;
  };

  const move = (e: React.TouchEvent<HTMLDivElement>) => {
    if (x0 || x0 === 0) {
      let dx = unify(e).clientX - x0,
        s = Math.sign(dx);
      // if change is significant and is +ve, s = -ve -> card++
      // if change is significant and is -ve, s = +ve -> card--

      if (s < 0) {
        setCard((prev) => (prev < 2 ? prev + 1 : prev));
      } else {
        setCard((prev) => (prev > 0 ? prev - 1 : prev));
      }

      x0 = null;
    }
  };

  const testimonials: TestimonialProps[] = [
    {
      text: "Pulvinar augue aliquet integer placerat feugiat quis sed enim sem sit gravida a orci quam viverra nulla urna tellus condimentum congue porttitor adipiscing vulputate proin aliquam condimentum nullam posuere purus amet enim nisl etiam eu, aliquet ullamcorper lectus enim nascetur nibh cras nibh mauris, condimentum odio quis ultricies pulvinar aliquam",
      name: "Mayaki Lawrence",
      role: "CEO META",
    },
    {
      text: "nulla urna tellus condimentum congue porttitor adipiscing vulputate proin aliquam condimentum nullam posuere purus amet enim nisl etiam eu, aliquet ullamcorper Pulvinar augue aliquet integer placerat feugiat quis sed enim sem sit gravida a orci quam viverra  lectus enim nascetur nibh cras nibh mauris, condimentum odio quis ultricies pulvinar aliquam",
      name: "Mable Lawrence",
      role: "CEO META",
    },
    {
      text: "aliquam condimentum nullam posuere purus amet enim nisl etiam eu, aliquet u Pulvinar augue aliquet integer placerat feugiat quis sed enim sem sit gravida a orci quam viverra nulla urna tellus condimentum congue porttitor adipiscing vulputate proin llamcorper lectus enim nascetur nibh cras nibh mauris, condimentum odio quis ultricies pulvinar aliquam",
      name: "John Doe",
      role: "CEO GOOGLE",
    },
  ];
  return (
    <section className={`siteWrapper ${styles.testimonialsWrapper}`}>
      <div className={styles.intro}>
        <h2 className={styles.title}>
          Customer <span>Testimonials</span>
        </h2>
        <div
          onTouchEnd={move}
          //   onMouseUp={move}
          onTouchStart={lock}
          //   onMouseDown={lock}
        >
          {testimonials.map((item, index) => {
            if (card === index) {
              return <TestimonialCard {...item} key={index} />;
            }
          })}
        </div>
      </div>
      <div className={styles.cardControl}>
        <div
          title="testimonial1"
          aria-label="testimonial1"
          className={card === 0 ? styles.activeCard : ""}
          onClick={() => setCard(0)}
          role="button"
        ></div>
        <div
          title="testimonial2"
          aria-label="testimonial2"
          className={card === 1 ? styles.activeCard : ""}
          onClick={() => setCard(1)}
          role="button"
        ></div>
        <div
          title="testimonial3"
          aria-label="testimonial3"
          className={card === 2 ? styles.activeCard : ""}
          onClick={() => setCard(2)}
          role="button"
        ></div>
      </div>
    </section>
  );
};

export { Testimonials };

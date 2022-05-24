import * as React from "react";
import styles from "./styles.module.css";

interface ButtonProps {
  text: string;
  type: "outline" | "filled";
  className?: string;
  dataAos?: string;
  dataAosDuration?: string;
}

const Button = ({
  text,
  type,
  className,
  dataAos,
  dataAosDuration,
}: ButtonProps) => {
  return (
    <button
      data-aos={dataAos}
      data-aos-duration={dataAosDuration}
      className={`${styles[type]} ${styles.btn} ${className}`}
    >
      {text}
    </button>
  );
};

export { Button };

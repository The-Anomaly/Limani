import * as React from "react";
import styles from "./styles.module.css";

interface ButtonProps {
  text: string;
  type: "outline" | "filled";
  className?: string;
}

const Button = ({ text, type, className }: ButtonProps) => {
  return (
    <button className={`${styles[type]} ${styles.btn} ${className}`}>
      {text}
    </button>
  );
};

export { Button };

import * as React from "react";
import styles from "./styles.module.css";

interface ButtonProps {
  children: any;
  className?: string;
  dataAos?: string;
  dataAosDuration?: string;
  onClick: () => void;
  Icon?: React.FunctionComponent<
    React.SVGProps<SVGSVGElement> & {
      title?: string | undefined;
    }
  >;
  size: "large" | "small";
}

const Button = ({
  children,
  className,
  dataAos,
  dataAosDuration,
  onClick,
  Icon,
  size,
}: ButtonProps) => {
  return (
    <button
      data-aos={dataAos}
      data-aos-duration={dataAosDuration}
      className={`${styles.filled} ${styles.btn} ${className} ${styles[size]}`}
      onClick={(e) => {
        e.preventDefault();
        onClick();
      }}
    >
      {children} {Icon ? <Icon className={styles.icon} /> : ""}
    </button>
  );
};

export { Button };

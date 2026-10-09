import type { ReactNode } from "react";
import styles from "./HomeBackdrop.module.css";

type HomeBackdropProps = {
  children: ReactNode;
};

export function HomeBackdrop({ children }: HomeBackdropProps) {
  return (
    <div className={styles.wrapper}>
      <div aria-hidden="true" className={styles.mountains} />
      <div aria-hidden="true" className={styles.glowLeft} />
      <div aria-hidden="true" className={styles.glowRight} />

      <div className={styles.content}>{children}</div>
    </div>
  );
}

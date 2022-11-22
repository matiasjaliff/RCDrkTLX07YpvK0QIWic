import styles from "./Quantity.module.css";

export default function Quantity({ number }) {
  return <div className={styles.container}>{number}</div>;
}

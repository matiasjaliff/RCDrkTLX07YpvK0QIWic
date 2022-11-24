import styles from "./Badge.module.css";

export default function Badge({ quantity }) {
  return <div className={styles.badge}>{quantity}</div>;
}

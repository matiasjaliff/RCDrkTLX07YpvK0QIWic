import styles from "./PriceTag.module.css";

export default function PriceTag({ price }) {
  return (
    <div className={styles.tag}>
      <p>$ {`${price}`}</p>
    </div>
  );
}

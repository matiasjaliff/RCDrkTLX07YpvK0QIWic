import styles from "./QuantityAndPriceTag.module.css";

export default function QuantityAndPriceTag({ quantity, price }) {
  return (
    <div className={styles.tag}>
      {quantity} x $ {price}
    </div>
  );
}

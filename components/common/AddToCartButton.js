import AddToCartIcon from "../../icons/AddToCartIcon";

import styles from "./Buttons.module.css";

export default function AddToCartButton({ handleAddItem }) {
  return (
    <div className={styles.button} onClick={handleAddItem}>
      <AddToCartIcon />
    </div>
  );
}

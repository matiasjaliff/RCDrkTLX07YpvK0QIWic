import AddToCartIcon from "../../icons/AddToCartIcon";

import styles from "./Buttons.module.css";

export default function AddToCartButton() {
  return (
    <div className={styles.button}>
      <AddToCartIcon />
    </div>
  );
}

import MinusIcon from "../../icons/MinusIcon";

import styles from "./Buttons.module.css";

export default function RemoveButton({ handleDecrease }) {
  return (
    <div className={styles.addremove} onClick={handleDecrease}>
      <MinusIcon />
    </div>
  );
}

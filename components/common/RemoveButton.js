import MinusIcon from "../../icons/MinusIcon";

import styles from "./Buttons.module.css";

export default function RemoveButton() {
  return (
    <div className={styles.addremove}>
      <MinusIcon />
    </div>
  );
}

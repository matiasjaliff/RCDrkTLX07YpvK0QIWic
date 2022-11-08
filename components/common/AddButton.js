import PlusIcon from "../../icons/PlusIcon";

import styles from "./Buttons.module.css";

export default function AddButton() {
  return (
    <div className={styles.addremove}>
      <PlusIcon />
    </div>
  );
}

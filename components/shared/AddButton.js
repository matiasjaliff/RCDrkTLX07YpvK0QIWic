import PlusIcon from "../../icons/PlusIcon";

import styles from "./Buttons.module.css";

export default function AddButton({ handleIncrease }) {
  return (
    <div className={styles.addremove} onClick={handleIncrease}>
      <PlusIcon />
    </div>
  );
}

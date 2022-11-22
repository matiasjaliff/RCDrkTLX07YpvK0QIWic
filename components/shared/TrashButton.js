import TrashIcon from "../../icons/TrashIcon";

import styles from "./Buttons.module.css";

export default function TrashButton({ handleDelete }) {
  return (
    <div className={styles.addremove} onClick={handleDelete}>
      <TrashIcon />
    </div>
  );
}

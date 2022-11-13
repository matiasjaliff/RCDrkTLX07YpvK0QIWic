import CheckIcon from "../../icons/CheckIcon";

import styles from "./Buttons.module.css";

export default function CheckButton({ toggle }) {
  return (
    <div className={styles.check} onClick={toggle} >
      <CheckIcon />
    </div>
  );
}

import XmarkIcon from "../../icons/XmarkIcon";

import styles from "./Buttons.module.css";

export default function XmarkButton({ toggle }) {
  return (
    <div className={styles.xmark} onClick={toggle}>
      <XmarkIcon />
    </div>
  );
}

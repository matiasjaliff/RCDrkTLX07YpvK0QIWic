import RemoveButton from "./RemoveButton";
import Quantity from "./Quantity";
import AddButton from "./AddButton";

import styles from "./QuantityButtons.module.css";

export default function QuantityButtons() {
  return (
    <div className={styles.container}>
      <RemoveButton />
      <Quantity number={1} />
      <AddButton />
    </div>
  );
}

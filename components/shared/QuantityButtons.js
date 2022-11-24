import RemoveButton from "./RemoveButton";
import Quantity from "./Quantity";
import AddButton from "./AddButton";

import styles from "./QuantityButtons.module.css";

export default function QuantityButtons({
  quantity,
  handleIncrease,
  handleDecrease,
}) {
  return (
    <div className={styles.container}>
      <RemoveButton handleDecrease={handleDecrease} />
      <Quantity number={quantity} />
      <AddButton handleIncrease={handleIncrease} />
    </div>
  );
}

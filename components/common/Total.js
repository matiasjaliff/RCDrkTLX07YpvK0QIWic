import { useRouter } from "next/router";

import styles from "./Total.module.css";

function calculateTotal(order) {
  return order.reduce(
    (accumulated, item) => (accumulated += item.details.price * item.quantity),
    0
  );
}

export default function Total({ order, credit }) {
  let total = calculateTotal(order);

  const router = useRouter();

  function handleConfirmation() {
    router.push("/confirmed");
  }

  return (
    <div className={styles.container}>
      <div className={styles.total}>Total: $ {total}</div>
      {total > 0 && total <= credit ? (
        <div className={styles.button} onClick={handleConfirmation}>
          Confirmar
        </div>
      ) : (
        <div className={styles.button_inactive}>Confirmar</div>
      )}
    </div>
  );
}

import styles from "./Total.module.css";

function total(order) {
  return order.reduce(
    (accumulated, item) => (accumulated += item.details.price * item.quantity),
    0
  );
}

export default function Total({ order, credit }) {
  return (
    <div className={styles.container}>
      <div className={styles.total}>Total: $ {total(order)}</div>
      {total(order) <= credit ? (
        <div className={styles.button}>Confirmar</div>
      ) : (
        <div className={styles.button_inactive}>Confirmar</div>
      )}
    </div>
  );
}

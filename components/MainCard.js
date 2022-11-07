import styles from "./MainCard.module.css";

function MainCard({ pizza }) {
  return (
    <article className={styles.card}>
      <h2>{pizza.name}</h2>
      <p>Precio: $ {`${pizza.price}`}</p>
    </article>
  );
}

export default MainCard;

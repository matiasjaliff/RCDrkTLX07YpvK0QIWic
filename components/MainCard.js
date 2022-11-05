import styles from "./MainCard.module.css";

function MainCard() {
  return (
    <article className={styles.card}>
      <h2>Documentation &rarr;</h2>
      <p>Find in-depth information about Next.js features and API.</p>
    </article>
  );
}

export default MainCard;

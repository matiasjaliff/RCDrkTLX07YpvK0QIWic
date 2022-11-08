import styles from "./Price.module.css";

function Price({ price }) {
  return (
    <div className={styles.tag}>
      <p>$ {`${price}`}</p>
    </div>
  );
}

export default Price;

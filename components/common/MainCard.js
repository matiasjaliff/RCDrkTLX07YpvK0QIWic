import Image from "next/image";

import Price from "./Price";

import styles from "./MainCard.module.css";

function MainCard({ name, price, image }) {
  return (
    <article className={styles.card}>
      <h2>{name}</h2>
      <div className={styles.details}>
        <div className={styles.price_image_container}>
          <Price price={price} />
          <Image
            src={`/images/${image}`}
            alt={name}
            height={200}
            width={400}
            className={styles.image}
          />
        </div>
        <div className={styles.buttons_container}>
          <h3>Buttons</h3>
        </div>
      </div>
    </article>
  );
}

export default MainCard;

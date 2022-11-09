import Image from "next/image";
import Link from "next/link";

import PriceTag from "./PriceTag";
import QuantityButtons from "./QuantityButtons";
import AddToCartButton from "./AddToCartButton";
import CustomizeButton from "./CustomizeButton";

import styles from "./MainCard.module.css";

export default function MainCard({ id, name, price, image }) {
  return (
    <article className={styles.card}>
      <h2>{name}</h2>
      <div className={styles.details}>
        <div className={styles.price_image_container}>
          <PriceTag price={price} />
          <div className={styles.image_container}>
            <Image
              src={`/images/${image}`}
              alt={name}
              height={200}
              width={400}
              className={styles.image}
            />
          </div>
        </div>
        <div className={styles.buttons_container}>
          <QuantityButtons />
          <AddToCartButton />
          <Link href={`/pizzas/${id}`}>
          <CustomizeButton />
          </Link>
        </div>
      </div>
    </article>
  );
}

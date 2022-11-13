import { useState } from "react";

import Image from "next/image";
import Link from "next/link";

import PriceTag from "./PriceTag";
import QuantityButtons from "./QuantityButtons";
import AddToCartButton from "./AddToCartButton";
import CustomizeButton from "./CustomizeButton";

import styles from "./MainCard.module.css";

export default function MainCard({ item, handleAddToCart }) {
  const [quantity, setQuantity] = useState(1);

  function handleIncrease() {
    if (quantity < 5) setQuantity(quantity + 1);
  }

  function handleDecrease() {
    if (quantity > 1) setQuantity(quantity - 1);
  }

  function handleAddItem() {
    handleAddToCart(item, quantity);
    setQuantity(1);
  }

  return (
    <article className={styles.card}>
      <h2>{item.name}</h2>
      <div className={styles.details}>
        <div className={styles.price_image_container}>
          <PriceTag price={item.price} />
          <div className={styles.image_container}>
            <Image
              src={`/images/${item.image}`}
              alt={item.name}
              height={200}
              width={400}
              className={styles.image}
            />
          </div>
        </div>
        <div className={styles.buttons_container}>
          <QuantityButtons
            quantity={quantity}
            handleIncrease={handleIncrease}
            handleDecrease={handleDecrease}
          />
          <AddToCartButton handleAddItem={handleAddItem} />
          <Link href={`/pizzas/${item.id}`}>
            <CustomizeButton />
          </Link>
        </div>
      </div>
    </article>
  );
}

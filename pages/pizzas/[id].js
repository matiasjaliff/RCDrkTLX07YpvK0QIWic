import { useState } from "react";

import Image from "next/image";

import { getAllItemIds, getItem } from "../../utils/menu";

import PriceTag from "../../components/common/PriceTag";
import Quantity from "../../components/common/Quantity";
import Ingredient from "../../components/common/Ingredient";
import QuantityButtons from "../../components/common/QuantityButtons";
import AddToCartButton from "../../components/common/AddToCartButton";

import styles from "./pizzas.module.css";

export default function PizzaDetails({ item, handleAddToCart }) {
  const [quantity, setQuantity] = useState(1);
  const [customItem, setCustomItem] = useState(item);

  function handleIncrease() {
    if (quantity < 5) setQuantity(quantity + 1);
  }

  function handleDecrease() {
    if (quantity > 1) setQuantity(quantity - 1);
  }

  function handleAddItem() {
    handleAddToCart(customItem, quantity);
    setQuantity(1);
  }

  return (
    <main className={styles.container}>
      <article className={styles.card}>
        <h2>{item.name}</h2>
        <div>
          <PriceTag price={item.price} />
          <Image
            src={`/images/${item.image}`}
            alt={item.name}
            height={200}
            width={400}
            priority
            className={styles.image}
          />
        </div>
        <p>{item.description}</p>
        <h3>Personaliza cada cuarto</h3>
        <div className={styles.numbers_container}>
          {[1, 2, 3, 4].map((slice) => (
            <Quantity key={slice} number={slice} />
          ))}
        </div>
        <div className={styles.ingredients_container}>
          {item.ingredients.map((ingredient) => (
            <Ingredient key={ingredient} name={ingredient} />
          ))}
        </div>
        <div className={styles.actions_container}>
          <div>
            <QuantityButtons
              quantity={quantity}
              handleIncrease={handleIncrease}
              handleDecrease={handleDecrease}
            />
          </div>
          <div>
            <AddToCartButton handleAddItem={handleAddItem} />
          </div>
        </div>
      </article>
    </main>
  );
}

export async function getStaticPaths() {
  const paths = getAllItemIds();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const item = getItem(params.id);
  return {
    props: {
      item,
    },
  };
}

import { useState } from "react";

import Image from "next/image";

import { getAllItemIds, getItem } from "../../utils/menu";

import PriceTag from "../../components/common/PriceTag";
import Slice from "../../components/common/Slice";
import Ingredient from "../../components/common/Ingredient";
import QuantityButtons from "../../components/common/QuantityButtons";
import AddToCartButton from "../../components/common/AddToCartButton";

import styles from "./pizzas.module.css";

export default function PizzaDetails({ item, handleAddToCart }) {
  const [quantity, setQuantity] = useState(1);
  const [customItem, setCustomItem] = useState(item);
  const [selectedSlice, setSelectedSlice] = useState(1);

  function handleIncrease() {
    if (quantity < 5) setQuantity(quantity + 1);
  }

  function handleDecrease() {
    if (quantity > 1) setQuantity(quantity - 1);
  }

  function toggleIngredient(name) {
    if (
      !customItem.slices[selectedSlice].find(
        (ingredient) => ingredient.name === name
      ).active ||
      customItem.slices[selectedSlice].reduce((accumulated, ingredient) => {
        return (accumulated += ingredient.active ? 0 : 1);
      }, 0) < 2
    ) {
      const modifiedItem = { ...customItem };
      modifiedItem.slices[selectedSlice].find(
        (ingredient) => ingredient.name === name
      ).active = !modifiedItem.slices[selectedSlice].find(
        (ingredient) => ingredient.name === name
      ).active;
      setCustomItem(modifiedItem);
    }
  }

  function resetItem() {
    const resettedItem = { ...customItem };
    for (let slice in resettedItem.slices) {
      for (let ingredient of resettedItem.slices[slice]) {
        ingredient.active = true;
      }
    }
    setCustomItem(resettedItem);
  }

  function handleAddItem() {
    handleAddToCart(customItem, quantity);
    setQuantity(1);
    setSelectedSlice(1);
    // resetItem();
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
            <Slice
              key={slice}
              number={slice}
              selectedSlice={selectedSlice}
              setSelectedSlice={setSelectedSlice}
            />
          ))}
        </div>
        <div className={styles.ingredients_container}>
          {customItem.slices[selectedSlice].map((ingredient) => (
            <Ingredient
              key={ingredient.name}
              ingredient={ingredient}
              toggleIngredient={toggleIngredient}
            />
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

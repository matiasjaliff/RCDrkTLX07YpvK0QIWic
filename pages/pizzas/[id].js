import Image from "next/image";

import { getAllPizzaNames } from "../../utils/getAllPizzaNames";
import { getPizzaData } from "../../utils/getPizzaData";

import PriceTag from "../../components/common/PriceTag";
import Quantity from "../../components/common/Quantity";
import Ingredient from "../../components/common/Ingredient";
import QuantityButtons from "../../components/common/QuantityButtons";
import AddToCartButton from "../../components/common/AddToCartButton";

import styles from "./pizzas.module.css";

export default function PizzaDetails({ pizzaData }) {
  return (
    <main className={styles.container}>
      <article className={styles.card}>
        <h2>{pizzaData.name}</h2>
        <div>
          <PriceTag price={pizzaData.price} />
          <Image
            src={`/images/${pizzaData.image}`}
            alt={pizzaData.name}
            height={200}
            width={400}
            className={styles.image}
          />
        </div>
        <p>{pizzaData.description}</p>
        <h3>Personaliza cada cuarto</h3>
        <div className={styles.numbers_container}>
          {[1, 2, 3, 4].map((slice) => (
            <Quantity number={slice} />
          ))}
        </div>
        <div className={styles.ingredients_container}>
          {pizzaData.ingredients.map((ingredient) => (
            <Ingredient name={ingredient} />
          ))}
        </div>
        <div className={styles.actions_container}>
          <div>
            <QuantityButtons />
          </div>
          <div>
            <AddToCartButton />
          </div>
        </div>
      </article>
    </main>
  );
}

export async function getStaticPaths() {
  const paths = await getAllPizzaNames();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const pizzaData = await getPizzaData(params.id);
  return {
    props: {
      pizzaData,
    },
  };
}

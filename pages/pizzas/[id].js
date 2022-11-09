import { getAllPizzaNames } from "../../utils/getAllPizzaNames";
import { getPizzaData } from "../../utils/getPizzaData";

export default function PizzaDetails({ pizzaData }) {
  return (
    <div>
      <h2>{pizzaData.name}</h2>
      <p>{pizzaData.description}</p>
    </div>
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

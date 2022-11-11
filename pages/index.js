import MainCard from "../components/common/MainCard";

import { createSlices } from "../utils/createSlices";

import styles from "./index.module.css";

import data from "../db/data.json";

export default function Home({ menu, handleAddToCart }) {
  return (
    <main className={styles.container}>
      {menu.map((item) => (
        <MainCard
          key={item.name}
          item={item}
          handleAddToCart={handleAddToCart}
        />
      ))}
    </main>
  );
}

export async function getStaticProps() {
  const menu = data.map((item) => createSlices(item, 4));

  return {
    props: { menu },
  };
}

import MainCard from "../components/common/MainCard";

import styles from "./index.module.css";

import data from "../db/data.json";

export default function Home({ menu, handleAddToCart }) {
  return (
    <main className={styles.container}>
      {menu.map((item) => (
        <MainCard key={item.name} item={item} handleAddToCart={handleAddToCart} />
      ))}
    </main>
  );
}

export async function getStaticProps() {
  const menu = data.map((item) => {
    const baseSlice = {};
    item.ingredients.forEach((ingredient) => (baseSlice[ingredient] = true));
    const slices = {};
    [1, 2, 3, 4].forEach((slice) => (slices[slice] = baseSlice));
    return { ...item, slices: slices };
  });

  return {
    props: { menu },
  };
}

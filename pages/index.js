import { getFullMenu } from "../lib/menu";

import MainCard from "../components/home/MainCard";

import styles from "./index.module.css";

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
  const menu = getFullMenu();
  return {
    props: { menu },
  };
}

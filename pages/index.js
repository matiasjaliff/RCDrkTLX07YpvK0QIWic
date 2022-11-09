import MainCard from "../components/common/MainCard";

import styles from "./index.module.css";

import menu from "../db/data.json";

export default function Home({ menu }) {
  return (
    <main className={styles.container}>
      {menu.map((pizza) => (
        <MainCard key={pizza.name} {...pizza} />
      ))}
    </main>
  );
}

export async function getStaticProps() {
  return {
    props: { menu },
  };
}

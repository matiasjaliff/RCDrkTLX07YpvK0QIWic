import MainCard from "../components/MainCard";

import styles from "./index.module.css";

import menu from "../db/data.json";

export async function getStaticProps() {
  return {
    props: { menu },
  };
}

export default function Home({ menu }) {
  return (
    <main className={styles.container}>
      {menu.map((pizza) => (
        <MainCard pizza={pizza} />
      ))}
    </main>
  );
}

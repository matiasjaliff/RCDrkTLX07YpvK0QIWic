import MainCard from "../components/MainCard";

import styles from "./index.module.css";

export default function Home() {
  return (
    <main className={styles.container}>
      <MainCard />
      <MainCard />
      <MainCard />
    </main>
  );
}

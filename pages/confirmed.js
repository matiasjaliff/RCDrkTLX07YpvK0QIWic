import { useRouter } from "next/router";
import { useEffect } from "react";

import styles from "./confirmed.module.css";

export default function confirmed({ setOrder }) {
  const router = useRouter();

  useEffect(() => {
    setOrder([]);
    setTimeout(() => {
      router.replace("/", undefined, { shallow: true });
    }, 5000);
  }, []);

  return <div className={styles.container}>¡Estamos preparando tu pedido!</div>;
}

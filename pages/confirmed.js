import { useRouter } from "next/router";
import { useEffect } from "react";

import styles from "./confirmed.module.css";

export default function confirmed() {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.replace("/");
    }, 5000);
  }, []);

  return <div className={styles.container}>¡Estamos preparando tu pedido!</div>;
}

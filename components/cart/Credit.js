import { useState } from "react";

import styles from "./Credit.module.css";

export default function Credit({ credit, setCredit }) {
  const [counter, setCounter] = useState(0);

  function handleClick() {
    setCounter(counter + 1);
    if (!((counter + 1) % 5)) {
      setCredit(credit + 5000);
    }
  }

  return (
    <div className={styles.container}>
      <div className={styles.credit}>
        <p>Tu saldo actual es de</p>
        <p>$ {credit}</p>
      </div>
      <div className={styles.button} onClick={handleClick}>Recargar</div>
    </div>
  );
}

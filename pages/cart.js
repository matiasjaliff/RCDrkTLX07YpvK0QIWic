import { useState } from "react";

import CartCard from "../components/common/CartCard";
import Credit from "../components/common/Credit";

import styles from "./cart.module.css";

export default function cart({ order }) {
  const [credit, setCredit] = useState(2000);
  
  return (
    <>
      <div className={styles.container}>
        {order.map((item, index) => (
          <CartCard key={index} item={item} />
        ))}
      </div>
      <Credit credit={credit} setCredit={setCredit} />
    </>
  );
}

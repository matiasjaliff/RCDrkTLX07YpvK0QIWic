import { useState } from "react";

import CartCard from "../components/common/CartCard";
import Total from "../components/common/Total";
import Credit from "../components/common/Credit";

import styles from "./cart.module.css";

export default function cart({ order, setOrder }) {
  const [credit, setCredit] = useState(2000);

  return (
    <>
      <div className={styles.container}>
        {order.length ? 
        order.map((item, index) => (
          <CartCard key={index} item={item} />
        )) :
        <p className={styles.empty}>El carrito aún está vacío</p>}
      </div>
      <Total order={order} setOrder={setOrder} credit={credit} />
      <Credit credit={credit} setCredit={setCredit} />
    </>
  );
}

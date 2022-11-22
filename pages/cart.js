import { useState } from "react";

import CartCard from "../components/cart/CartCard";
import Total from "../components/cart/Total";
import Credit from "../components/cart/Credit";

import styles from "./cart.module.css";

export default function cart({ order, setOrder }) {
  const [credit, setCredit] = useState(2000);

  return (
    <>
      <div className={styles.container}>
        {order.length ? 
        order.map((item, index) => (
          <CartCard key={index} item={item} order={order} setOrder={setOrder}/>
        )) :
        <p className={styles.empty}>El carrito está vacío</p>}
      </div>
      <Total order={order} setOrder={setOrder} credit={credit} />
      <Credit credit={credit} setCredit={setCredit} />
    </>
  );
}

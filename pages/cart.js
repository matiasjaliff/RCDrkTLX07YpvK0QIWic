import CartCard from "../components/common/CartCard";

import styles from "./cart.module.css";

export default function cart({ order }) {
  return (
    <div className={styles.container}>
      {order.map((item, index) => (
        <CartCard key={index} item={item} />
      ))}
    </div>
  );
}

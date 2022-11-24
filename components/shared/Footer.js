import Link from "next/link";

import HouseIcon from "../../icons/HouseIcon";
import CartIcon from "../../icons/CartIcon";
import Badge from "./Badge";

import styles from "./Footer.module.css";

export default function Footer({ order }) {
  const quantity = order.reduce(
    (accumulated, current) => (accumulated += current.quantity),
    0
  );

  return (
    <footer className={styles.container}>
      <Link href="/" aria-label="Link to home">
        <HouseIcon />
      </Link>
      <Link href="/cart" aria-label="Link to cart">
        <div className={styles.cart_icon_container}>
          <Badge quantity={quantity} />
          <CartIcon quantity={quantity} />
        </div>
      </Link>
    </footer>
  );
}

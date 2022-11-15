import Link from "next/link";

import HouseIcon from "../icons/HouseIcon";
import CartIcon from "../icons/CartIcon";

import styles from "./Footer.module.css";

export default function Footer({ order }) {
  return (
    <footer className={styles.container}>
      <Link href="/" aria-label="Link to home">
        <HouseIcon />
      </Link>
      <Link href="/cart" aria-label="Link to cart">
        <CartIcon />
      </Link>
    </footer>
  );
}

import Link from "next/link";

import HouseIcon from "../icons/HouseIcon";
import CartIcon from "../icons/CartIcon";

import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.container}>
      <Link href="/">
        <HouseIcon />
      </Link>
      <CartIcon />
    </footer>
  );
}

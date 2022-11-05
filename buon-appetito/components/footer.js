import Image from "next/image";

import HouseIcon from "./icons/house-icon";
import CartIcon from "./icons/cart-icon";

import styles from "./footer.module.css";

function Footer() {
  return (
    <footer className={styles.container}>
      <HouseIcon />
      <CartIcon />
    </footer>
  );
}

export default Footer;

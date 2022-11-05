import HouseIcon from "../icons/HouseIcon";
import CartIcon from "../icons/CartIcon";

import styles from "./Footer.module.css";

function Footer() {
  return (
    <footer className={styles.container}>
      <HouseIcon />
      <CartIcon />
    </footer>
  );
}

export default Footer;

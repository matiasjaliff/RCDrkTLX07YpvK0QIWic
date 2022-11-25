import Image from "next/image";

import styles from "./Header.module.css";

import logo from "../../public/images/logo2.png";

export default function Header() {
  return (
    <header className={styles.container}>
      <Image
        src={logo}
        alt="Buon APPetito logo"
        priority
        className={styles.logo}
      />
    </header>
  );
}

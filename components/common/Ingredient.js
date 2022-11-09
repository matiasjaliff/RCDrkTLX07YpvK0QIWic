import CheckButton from "./CheckButton";
import XmarkButton from "./XmarkButton";

import styles from "./Ingredient.module.css";

export default function Ingredient({ name }) {
  return (
    <div className={styles.container}>
      <h3>{name}</h3>
      {name.length > 10 ? <CheckButton /> : <XmarkButton />}
    </div>
  );
}

import CheckButton from "./CheckButton";
import XmarkButton from "./XmarkButton";

import styles from "./Ingredient.module.css";

export default function Ingredient({ ingredient, toggleIngredient }) {
  function toggle() {
    toggleIngredient(ingredient.name)
  }

  return (
    <div className={styles.container}>
      <h3>{ingredient.name}</h3>
      {ingredient.active ? <CheckButton toggle={toggle} /> : <XmarkButton toggle={toggle} />}
    </div>
  );
}

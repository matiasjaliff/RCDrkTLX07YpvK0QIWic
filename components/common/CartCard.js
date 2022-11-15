import QuantityAndPriceTag from "./QuantityAndPriceTag";
import SliceTag from "./SliceTag";
import IngredientsDetail from "./IngredientsDetail";

import styles from "./CartCard.module.css";

export default function CartCard({ item }) {
  return (
    <article className={styles.card}>
      <div className={styles.name_price_container}>
        <h2>{item.details.name}</h2>
        <QuantityAndPriceTag
          quantity={item.quantity}
          price={item.details.price}
        />
      </div>
      <div className={styles.slices_container}>
        {[1, 2, 3, 4].map((slice) => (
          <div key={slice} className={styles.slice}>
            <SliceTag slice={slice} />
            <IngredientsDetail
              ingredientsSelection={item.details.slices[slice]}
            />
          </div>
        ))}
      </div>
      <div className={styles.subtotal_quantity_container}>
        <div className={styles.subtotal}>
          Subtotal: $ {item.quantity * item.details.price}
        </div>
      </div>
    </article>
  );
}

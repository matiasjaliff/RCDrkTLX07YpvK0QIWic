import QuantityAndPriceTag from "./QuantityAndPriceTag";
import SliceTag from "./SliceTag";
import IngredientsDetail from "./IngredientsDetail";
import TrashButton from "./TrashButton";

import styles from "./CartCard.module.css";

function deepCopy(item) {
  return JSON.parse(JSON.stringify(item));
}

export default function CartCard({ item, order, setOrder }) {
  function handleDelete() {
    const modifiedOrder = deepCopy(order).filter(
      (element) => JSON.stringify(element) !== JSON.stringify(item)
    );
    setOrder(modifiedOrder);
  }

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
        <TrashButton handleDelete={handleDelete}/>
      </div>
    </article>
  );
}

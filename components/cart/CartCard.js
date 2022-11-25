import { deepCopy } from "../../lib/deepCopy";

import QuantityAndPriceTag from "./QuantityAndPriceTag";
import SliceTag from "./SliceTag";
import IngredientsDetail from "./IngredientsDetail";
import RemoveButton from "../shared/RemoveButton";
import AddButton from "../shared/AddButton";
import TrashButton from "../shared/TrashButton";

import styles from "./CartCard.module.css";

export default function CartCard({ item, order, setOrder }) {
  function handleDecrease() {
    if (item.quantity > 1) {
      const modifiedOrder = deepCopy(order);
      modifiedOrder.filter(
        (element) => JSON.stringify(element) === JSON.stringify(item)
      )[0].quantity--;
      setOrder(modifiedOrder);
    }
  }

  function handleIncrease() {
    if (item.quantity < 5) {
      const modifiedOrder = deepCopy(order);
      modifiedOrder.filter(
        (element) => JSON.stringify(element) === JSON.stringify(item)
      )[0].quantity++;
      setOrder(modifiedOrder);
    }
  }

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
        <div className={styles.buttons_container}>
          <RemoveButton handleDecrease={handleDecrease} />
          <AddButton handleIncrease={handleIncrease} />
          <TrashButton handleDelete={handleDelete} />
        </div>
      </div>
    </article>
  );
}

import { useState } from "react";

import { deepCopy } from "../lib/deepCopy";

import Layout from "../components/shared/Layout";

import "./globals.css";

export default function MyApp({ Component, pageProps }) {
  const [order, setOrder] = useState([]);

  function handleAddToCart(details, quantity) {
    if (
      order.find(
        (element) => JSON.stringify(element.details) === JSON.stringify(details)
      )
    ) {
      const modifiedOrder = deepCopy(order);
      if (
        !(
          modifiedOrder.filter(
            (element) =>
              JSON.stringify(element.details) === JSON.stringify(details)
          )[0].quantity +
            quantity >
          5
        )
      ) {
        modifiedOrder.filter(
          (element) =>
            JSON.stringify(element.details) === JSON.stringify(details)
        )[0].quantity += quantity;
      } else {
        modifiedOrder.filter(
          (element) =>
            JSON.stringify(element.details) === JSON.stringify(details)
        )[0].quantity = 5;
      }
      setOrder(modifiedOrder);
    } else {
      const itemToAdd = { details, quantity };
      setOrder([...order, itemToAdd]);
    }
  }

  return (
    <Layout order={order}>
      <Component
        {...pageProps}
        order={order}
        setOrder={setOrder}
        handleAddToCart={handleAddToCart}
      />
    </Layout>
  );
}

import { useState } from "react";

import Layout from "../components/Layout";

import "../styles/globals.css";

export default function MyApp({ Component, pageProps }) {
  const [order, setOrder] = useState([]);

  function handleAddToCart(details, quantity) {
    const itemToAdd = { details, quantity };
    setOrder([...order, itemToAdd]);
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

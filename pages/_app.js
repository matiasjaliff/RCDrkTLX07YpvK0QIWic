import { useState } from "react";

import Layout from "../components/Layout";

import "../styles/globals.css";

export default function MyApp({ Component, pageProps }) {
  const [order, setOrder] = useState({});

  function handleAddToCart(pizza) {
    setOrder({ ...order, pizza });
  }

  return (
    <Layout order={order}>
      <Component
        {...pageProps}
        order={order}
        handleAddToCart={handleAddToCart}
      />
    </Layout>
  );
}

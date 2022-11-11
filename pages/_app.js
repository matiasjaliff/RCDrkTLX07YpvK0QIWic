import { useState } from "react";

import Layout from "../components/Layout";

import "../styles/globals.css";

export default function MyApp({ Component, pageProps }) {
  const [order, setOrder] = useState([]);
  const [selectedItem, setSelectedItem] = useState({});

  function handleAddToCart(item, quantity) {
    const itemToAdd = { item, quantity };
    setOrder([...order, itemToAdd]);
  }

  function handleSelectItem(item) {
    setSelectedItem(item);
  }

  return (
    <Layout order={order}>
      <Component
        {...pageProps}
        order={order}
        selectedItem={selectedItem}
        handleAddToCart={handleAddToCart}
        handleSelectItem={handleSelectItem}
      />
    </Layout>
  );
}

import Head from "next/head";

import Header from "./Header";
import Footer from "./Footer";

export default function Layout({ children, order }) {
  return (
    <>
      <Head>
        <title>Buon APPetito</title>
        <meta name="description" content="Ordena las mejores pizzas de la galaxia" />
        <meta name="theme-color" content="#b42026"/>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicon/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>
      <Header />
      {children}
      <Footer order={order}/>
    </>
  );
}

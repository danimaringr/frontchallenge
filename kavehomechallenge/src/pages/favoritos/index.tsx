import Head from "next/head";
import styles from "@/styles/Home.module.css";
import FavoritesList from "@/components/FavoritesList";
import Header from "@/components/Header";


export default function Products() {
  return (
    <>
      <Head>
        <title>Kave Home Challenge</title>
        <meta name="description" content="Prueba de kave home" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header/>
      <main className={`${styles.main}`}>
      <FavoritesList/>
      </main>
    </>
  );
}
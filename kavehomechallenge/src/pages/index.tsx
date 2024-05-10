import Head from "next/head";
import styles from "@/styles/Home.module.css";
import Header from "@/components/Header";
import CategoryList from "@/components/CategoryList";
import Link from "next/link";


export default function Home() {
  return (
    <>
      <Head>
        <title>Kave Home Challenge</title>
        <meta name="description" content="Prueba de kave home" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main}`}>
        <Header/>
        <div className={styles.background}>
          <img src="/images/home.png" alt="Imagen de fondo" className={styles.backgroundImage} />
        </div>
        <div className={styles.overlay}>
          <p className={styles.subtitle}>PREMIUM COLLECTION</p>
          <p className={styles.title}>KaveHome</p>
        </div>
        <CategoryList/>
        <div>
          <Link href="/products" className={styles.button}>VER TODOS LOS PRODUCTOS</Link>
        </div>
      </main>
    </>
  );
}

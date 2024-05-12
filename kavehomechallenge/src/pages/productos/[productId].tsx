import { useRouter } from 'next/router';
import ProductDetail from '@/components/ProductDetail';
import Header from "@/components/Header";
import Head from "next/head";
import styles from "@/styles/Home.module.css";

const ProductPage = () => {
    const router = useRouter();
    const { productId, title, price, category, collection, imageUrl } = router.query;

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
            {productId && (
                <ProductDetail
                    productId={title as string}
                    title={title as string}
                    price={price as string}
                    category={category as string}
                    collection={collection as string}
                    imageUrl={imageUrl as string}
                />
            )}
        </main>
        </>
    );
}

export default ProductPage;
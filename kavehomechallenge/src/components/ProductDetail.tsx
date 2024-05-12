import styles from '../styles/ProductDetail.module.css';
import React, { useState, useEffect } from 'react';
import { useFavoritos } from '../contexts/FavoritosContext';
import Image from 'next/image';

interface ProductDetailProps {
    imageUrl: string;
    productId: string;
    title: string;
    price: string;
    category: string;
    collection: string;
}

const ProductDetail: React.FC<ProductDetailProps> = ({ imageUrl, productId, title, price, category, collection }) => {
    const { favoritos, toggleFavorito } = useFavoritos();
    const isFavorited = favoritos.some(product => product.productId === productId);

    const handleToggleFavorite = () => {
        toggleFavorito(productId, imageUrl, title, price, category, collection);
    };

    return (
        <div className={styles.productDetailContainer}>
            <div className={styles.imageContainer}>
            <button
                    type="button"
                    className={`${styles.favoritos} ${isFavorited ? styles.favorited : ''}`}
                    onClick={handleToggleFavorite}
                >
                    <Image src={isFavorited ? "/vectors/favoritos2.svg" : "/vectors/favoritos.svg"} alt="Icono" width={24} height={24}/>
                </button>
                {imageUrl && <img src={imageUrl} className={styles.image} />}
            </div>
            <div className={styles.details}>
                <h2 className={styles.collection}>{collection}</h2>
                <p className={styles.category}>{category}</p>
                <p className={styles.price}>{price}€</p>
                <p className={styles.desc}>{title}</p>
            </div>
        </div>
    );
}

export default ProductDetail;
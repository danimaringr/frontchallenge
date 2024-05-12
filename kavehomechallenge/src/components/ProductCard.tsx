import Link from 'next/link';
import styles from "../styles/ProductCard.module.css"
import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import { useFavoritos } from '../contexts/FavoritosContext';

interface ProductCardProps {
    imageUrl: string;
    title: string;
    price: string;
    productId: string;
    category: string;
    collection: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ imageUrl, title, price, productId, category, collection }) => {
    const { favoritos, toggleFavorito } = useFavoritos();
    const isFavorited = favoritos.some(product => product.productId === productId);

    const handleToggleFavorite = () => {
        toggleFavorito(productId, imageUrl, title, price, category, collection);
    };

    return (
            <div className={styles.card}>
                <button
                    type="button"
                    className={`${styles.favoritos} ${isFavorited ? styles.favorited : ''}`}
                    onClick={handleToggleFavorite}
                >
                    <Image src={isFavorited ? "/vectors/favoritos2.svg" : "/vectors/favoritos.svg"} alt="Icono" width={24} height={24}/>
                </button>
                <Link style={{ textDecoration: 'none' }} href={`/productos/${productId}?title=${encodeURIComponent(title)}&price=${encodeURIComponent(price)}&category=${encodeURIComponent(category)}&collection=${encodeURIComponent(collection)}&imageUrl=${encodeURIComponent(imageUrl)}`}>
                <div className={styles.product}>
                    <div className={styles.imageContainer}>
                        {imageUrl && <img src={imageUrl} alt={title} className={styles.image} />}
                    </div>
                    <div className={styles.title}>{title}</div>
                    <div>{price} €</div>
                </div>
                </Link>
            </div>
    );
}

export default ProductCard;
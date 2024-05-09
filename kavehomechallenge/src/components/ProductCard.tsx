import styles from "../styles/ProductCard.module.css"
import Image from 'next/image';
import React, { useState } from 'react';
import { useFavoritos } from '../contexts/FavoritosContext';

interface ProductCardProps {
    imageUrl: string | null;
    title: string;
    price: string;
    productId: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ imageUrl, title, price, productId }) => {
    const { favoritos, toggleFavorito } = useFavoritos();
    const [isFavorited, setIsFavorited] = useState(favoritos.includes(productId));

    const handleToggleFavorite = () => {
        toggleFavorito(productId);
        setIsFavorited(!isFavorited);
    };

    return (
        <li className={styles.card}>
            <button
                type="button"
                className={`${styles.favoritos} ${isFavorited ? styles.favorited : ''}`}
                onClick={handleToggleFavorite}
            >
                <Image src={isFavorited ? "/vectors/favoritos2.svg" : "/vectors/favoritos.svg"} alt="Icono" width={24} height={24}/>
            </button>
            <div className={styles.product}>
                <div className={styles.imageContainer}>
                    {imageUrl && <img src={imageUrl} alt={title} className={styles.image} />}
                </div>
                <div className={styles.title}>{title}</div>
                <div>{price} €</div>
            </div>
        </li>
    );
}

export default ProductCard;
import { useFavoritos } from '../contexts/FavoritosContext';
import ProductCard from './ProductCard';
import styles from '../styles/ProductList.module.css'
import { useState } from 'react';

const FavoritesList: React.FC = () => {
  const { favoritos } = useFavoritos();
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(20);

 
  const indexOfLastProduct = currentPage * productsPerPage;
 
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;

  const currentProducts = favoritos.slice(indexOfFirstProduct, indexOfLastProduct);
  
  const totalPages = Math.ceil(favoritos.length / productsPerPage);

  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

  const handleClick = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const prevPage = () => {
    setCurrentPage((prev) => prev - 1);
  };

  const nextPage = () => {
    setCurrentPage((prev) => prev + 1);
  };

  return (
    <div>
      <h1 className={styles.title}>Lista de Favoritos</h1>
      <ul className={styles.list}>
        {currentProducts.map((product) => (
          <ProductCard
            key={product.productId} 
            imageUrl={product.imageUrl}
            title={product.title}
            price={product.price}
            productId={product.productId}
            category={product.category}
            collection={product.collection}
          />
        ))}
      </ul>
      <div className={styles.paginationContainer}>
        <button onClick={prevPage} disabled={currentPage === 1} className={styles.paginationButton}>{'◄'}</button>
        {pageNumbers.map((number) => (
          <button
            key={number}
            onClick={() => handleClick(number)}
            className={`${styles.paginationButton} ${currentPage === number ? styles.active : ''}`}
          >
            {number}
          </button>
        ))}
        <button onClick={nextPage} disabled={currentPage === totalPages} className={styles.paginationButton}>{'►'}</button>
      </div>
    </div>
  );
};

export default FavoritesList;
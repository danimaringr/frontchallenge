import { useEffect, useState } from 'react';
import ProductCard from './ProductCard'
import styles from '../styles/ProductList.module.css'
import { FavoritosProvider } from '../contexts/FavoritosContext';
import React from 'react';

// Definimos la interfaz para la estructura de cada producto
interface Product {
    productSku: string;
    productName: string;
    productCollection: null | string;
    productCategoryHierarchy: null | string;
    productMeasurements: {
        height: null | string;
        width: null | string;
        length: null | string;
    };
    productPrice: string;
    productPriceDiscount: null | string;
    productImageUrl: null | string;
    store: null | string;
    ecoPart: null | string;
    productMaterials: null | string;
    productUsage: null | string;
    productAssemblyTime: null | string;
    productAssemblyDescription: null | string;
}

const ProductList = () => {

    const [products, setProducts] = useState<Product[]>([]);
    const [currentPage, setCurrentPage] = useState(1);
    const productsPerPage = 20;
    const maxPagesToShow = 8;

  
    useEffect(() => {
        const fetchProducts = async () => {
            try {
                // Hacemos la solicitud GET al endpoint
                const response = await fetch('https://kavehome.com/nfeeds/es/es/templatebuilder/20240426');

                if (!response.ok) {
                    throw new Error('No se pudieron obtener los datos');
                }

                // Convertimos la respuesta a JSON
                const data = await response.json();

                // Actualizamos el estado con los productos obtenidos
                setProducts(data.results);
            } catch (error) {
                console.error('Error al obtener los productos:', error);
            }
        };
        fetchProducts();
    }, []);

    // Calcular el número total de páginas
    const totalPages = Math.ceil(products.length / productsPerPage);

    // Calcular el rango de páginas a mostrar
    const startPage = Math.max(1, currentPage - Math.floor(maxPagesToShow / 2));
    const endPage = Math.min(totalPages, startPage + maxPagesToShow - 1);

    // Generar los números de página para la paginación
    const pageNumbers = [];
    for (let i = startPage; i <= endPage; i++) {
        pageNumbers.push(i);
    }

    // Cambiar a la página seleccionada
    const handleClick = (pageNumber: number) => {
        setCurrentPage(pageNumber);
    };

    // Cambiar a la página anterior
    const prevPage = () => {
        setCurrentPage(currentPage - 1);
    };

    // Cambiar a la página siguiente
    const nextPage = () => {
        setCurrentPage(currentPage + 1);
    };

    // Calcular el índice inicial y final de los productos a mostrar en la página actual
    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

    return (
        <FavoritosProvider>
        <div>
            <h1 className={styles.title}>Productos</h1>
            <ul className={styles.list}>
                    {currentProducts.map(product => (
                        <ProductCard
                            key={product.productSku}
                            imageUrl={product.productImageUrl}
                            title={product.productName}
                            price={product.productPrice}
                            productId={product.productSku}
                        />
                    ))}          
            </ul>
            <div className={styles.paginationContainer}>
                <button onClick={prevPage} disabled={currentPage === 1} className={styles.paginationButton}>{'◄'}</button>
                {pageNumbers.map(number => (
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
        </FavoritosProvider>
    );
}

export default ProductList;
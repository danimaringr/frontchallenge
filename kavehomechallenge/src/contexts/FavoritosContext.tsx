import React, { createContext, useContext, useState, PropsWithChildren } from 'react';

interface Favorito {
    productId: string;
    imageUrl: string;
    title: string;
    price: string;
    category: string;
    collection: string;
  }

  interface FavoritosContextType {
    favoritos: Favorito[];
    toggleFavorito: (productId: string, imageUrl: string, title: string, price: string, category: string, collection: string) => void;
}

const FavoritosContext = createContext<FavoritosContextType | undefined>(undefined);

export const FavoritosProvider: React.FC<PropsWithChildren<{}>> = ({ children }) => {
    const [favoritos, setFavoritos] = useState<Favorito[]>([]);

    const toggleFavorito = (productId: string, imageUrl: string, title: string, price: string, category: string, collection: string) => {
      const index = favoritos.findIndex(favorito => favorito.productId === productId);
      if (index !== -1) {
        // Si el producto ya está en favoritos, lo eliminamos
        const newFavoritos = [...favoritos];
        newFavoritos.splice(index, 1);
        setFavoritos(newFavoritos);
      } else {
        // Si el producto no está en favoritos, lo agregamos
        setFavoritos([...favoritos, { productId, imageUrl, title, price, category, collection }]);
      }
  };

  return (
    <FavoritosContext.Provider value={{ favoritos, toggleFavorito }}>
      {children}
    </FavoritosContext.Provider>
  );
};

export const useFavoritos = () => {
  const context = useContext(FavoritosContext);
  if (!context) {
    throw new Error('useFavoritos debe ser usado dentro de un FavoritosProvider');
  }
  return context;
};
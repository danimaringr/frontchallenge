import React, { createContext, useContext, useState, PropsWithChildren } from 'react';

interface FavoritosContextType {
    favoritos: string[];
    toggleFavorito: (productId: string) => void;
}

const FavoritosContext = createContext<FavoritosContextType | undefined>(undefined);

export const FavoritosProvider: React.FC<PropsWithChildren<{}>> = ({ children }) => {
    const [favoritos, setFavoritos] = useState<string[]>([]);

    const toggleFavorito = (productId: string) => {
        const index = favoritos.indexOf(productId);
        if (index !== -1) {
            const newFavoritos = [...favoritos];
            newFavoritos.splice(index, 1);
            setFavoritos(newFavoritos);
        } else {
            setFavoritos([...favoritos, productId]);
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
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import styles from '../styles/Header.module.css';

const Header = () => {

    const router = useRouter();
    const [isFavoritesPage, setIsFavoritesPage] = useState(false);

    useEffect(() => {
        setIsFavoritesPage(router.pathname === '/favoritos');
    }, [router.pathname]);

    return (
        <header className={styles.header}>
            <div className={styles.topbar}>
                <div className={styles.topMessage}>                                        
                    <p>Discover the new Outdoor collection</p>
                    <img src="/vectors/flecha.svg" alt="Icono"/>
                </div>
            </div>
            <div className={styles.bar}>
                <Link href="/">
            <img className={styles.logo} src="/vectors/kaveHome.svg" alt="Icono"/>
                </Link>
                <Link href="/favoritos">
                    <button className={styles.favoritos}>
                        <img src={isFavoritesPage ? "/vectors/favoritos2.svg" : "/vectors/favoritos.svg"} alt="Icono"/>
                    </button>
                </Link>
            </div>
        </header>
    );
}

export default Header;
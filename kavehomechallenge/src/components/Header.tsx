import Link from 'next/link';
import styles from '../styles/Header.module.css';

const Header = () => {
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
                <button className={styles.favoritos}>
                <img src="/vectors/favoritos.svg" alt="Icono"/>
                </button>
            </div>
        </header>
    );
}

export default Header;
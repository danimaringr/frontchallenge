import React from 'react';
import styles from '../styles/Header.module.css'; // Importa los estilos CSS del Header

function Header() {
    return (
      <header className={styles.header}>
        <div className={styles.logo}>
          <img src="/images/logo.png" alt="Logo" />
        </div>
        <nav className={styles.nav}>
          <ul>
            <li><a href="#">Inicio</a></li>
            <li><a href="#">Productos</a></li>
            <li><a href="#">Contacto</a></li>
          </ul>
        </nav>
      </header>
    );
  }
  
  export default Header;
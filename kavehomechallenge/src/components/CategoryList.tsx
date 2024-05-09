import styles from '../styles/CategoryList.module.css';

const CategoryList = () => {
  return (
    <ul className={styles.categoriaList}>
      <li>
        <div className={styles.categoria}>
            <span className={styles.textoCategoria}>We are Kave</span>
        </div>
      </li>
      <li>
        <div className={styles.categoria}>
            <span className={styles.textoCategoria}>Estancias</span>
        </div>
      </li>
      <li>
        <div className={styles.categoria}>
            <span className={styles.textoCategoria}>Muebles</span>
        </div>
      </li>
      <li>
        <div className={styles.categoria}>
            <span className={styles.textoCategoria}>Decoración</span>
        </div>
      </li>
      <li>
        <div className={styles.categoria}>
            <span className={styles.textoCategoria}>Proyectos</span>
        </div>
      </li>
      <li>
        <div className={styles.categoria}>
            <span className={styles.textoCategoria}>Estilos</span>
        </div>
      </li>
    </ul>
  );
};

export default CategoryList;
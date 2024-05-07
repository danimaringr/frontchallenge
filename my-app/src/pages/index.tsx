import Layout from '../components/Layout';
import ProductCard from '../components/ProductCard';
import Categories from '../components/Categories';

export default function Home() {
  return (
    <Layout>
      <h1>Productos Destacados</h1>
      <div className="product-list">
        {/* Agrega los ProductCard aquí */}
      </div>
      <Categories />
    </Layout>
  );
}

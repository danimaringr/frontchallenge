import { AppProps } from 'next/app';
import Layout from '../components/Layout'; // Importa el componente Layout
import '../styles/globals.css'; // Importa los estilos globales

function MyApp({ Component, pageProps }: AppProps) {
  // Utiliza el Layout como contenedor principal para todas las páginas
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
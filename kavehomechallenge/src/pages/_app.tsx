import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Poppins } from "next/font/google";
import { FavoritosProvider } from '../contexts/FavoritosContext';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400','600','700']
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <FavoritosProvider>
    <main className={poppins.className}>
      <Component {...pageProps} />
    </main>
    </FavoritosProvider>
  );
}

import Link from 'next/link';
import { FaHeart } from 'react-icons/fa';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <Link href="/">
          <a>
            <img src="/images/logo.png" alt="Kave Home" />
          </a>
        </Link>
      </div>
      <div className="favorites">
        <Link href="/favorites">
          <a>
            <FaHeart />
          </a>
        </Link>
      </div>
    </header>
  );
};

export default Header;
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

export default function Navbar() {
    const { totalItems } = useCart();

    return (
        <nav className="bg-white border-b border-gray-100 px-8 py-6 sticky top-0 z-50">
            <div className="max-w-7xl mx-auto flex justify-between items-center">
                <div className="flex gap-8 text-sm font-light tracking-wide text-gray-500 uppercase">
                    <Link to="/perfumes" className="hover:text-black transition-colors duration-300">Perfumes</Link>
                    <Link to="/descubrir" className="hover:text-black transition-colors duration-300">Descubrir</Link>
                </div>
                
                <Link to="/" className="text-3xl font-serif tracking-[0.2em] text-black">
                    LUCIANO'S
                </Link>

                <div className="flex gap-8 text-sm font-light tracking-wide text-gray-500 uppercase">
                    <button className="hover:text-black transition-colors duration-300">Cuenta</button>
                    <Link to="/cart" className="hover:text-black transition-colors duration-300">
                        Carrito ({totalItems})
                    </Link>
                </div>
            </div>
        </nav>
    );
}
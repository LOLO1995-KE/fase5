import { Link } from 'react-router-dom';

export default function Home() {
    return (
        <div className="flex flex-col items-center justify-center min-h-[80vh] px-6 text-center bg-white">
            <span className="text-sm tracking-[0.3em] text-gray-400 uppercase mb-8">Nueva Colección</span>
            
            <h1 className="text-6xl md:text-8xl font-serif font-normal mb-8 text-gray-900 leading-tight">
                Descubre tu <br/> Esencia
            </h1>
            
            <p className="text-lg md:text-xl text-gray-500 max-w-2xl font-light mb-12 leading-relaxed">
                Explora nuestra colección exclusiva de decants de alta perfumería nicho.
                El lujo, ahora en el tamaño perfecto para ti.
            </p>
            
            <Link to="/perfumes" className="inline-block border border-black bg-transparent text-black px-10 py-4 uppercase tracking-[0.2em] text-sm hover:bg-black hover:text-white transition-all duration-500 ease-in-out">
                Explorar Catálogo
            </Link>
        </div>
    );
}
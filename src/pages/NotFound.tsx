import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] px-6 text-center">
      <h1 className="text-8xl md:text-9xl font-serif text-gray-200 mb-6">404</h1>
      <h2 className="text-3xl md:text-4xl font-serif text-gray-900 mb-6">
        Página no encontrada
      </h2>
      <p className="text-gray-500 font-light mb-10 max-w-md mx-auto">
        La fragancia que buscas parece haberse evaporado. No hemos podido encontrar la página solicitada.
      </p>
      <Link 
        to="/" 
        className="inline-block bg-black text-white px-10 py-4 uppercase tracking-[0.2em] text-xs hover:bg-gray-800 transition-colors duration-300"
      >
        Volver a la tienda
      </Link>
    </div>
  );
}

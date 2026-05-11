import { Link } from 'react-router-dom';

export default function Success() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] px-6 text-center">
      <span className="text-sm tracking-[0.3em] text-gray-400 uppercase mb-8 block">Pedido Confirmado</span>
      <h1 className="text-4xl md:text-5xl font-serif font-normal text-gray-900 mb-6">
        Gracias por tu compra, Amante del Lujo
      </h1>
      <p className="text-lg text-gray-500 font-light mb-12 max-w-xl leading-relaxed">
        Tu pedido de alta perfumería está siendo preparado con el mayor de los cuidados. 
        Pronto recibirás un correo con los detalles de envío.
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

import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';

export default function Cart() {
  const { items, removeFromCart, clearCart } = useCart();
  const navigate = useNavigate();

  const subtotal = items.reduce((acc, item) => acc + item.price * item.quantity, 0);

  const handleCheckout = () => {
    clearCart();
    navigate('/success');
  };

  if (items.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[70vh] px-6 text-center">
        <h1 className="text-4xl font-serif mb-6 text-gray-900">Tu carrito está vacío</h1>
        <p className="text-gray-500 font-light mb-10">Aún no has añadido ninguna fragancia a tu colección.</p>
        <Link 
          to="/perfumes" 
          className="border border-black bg-transparent text-black px-10 py-4 uppercase tracking-[0.2em] text-xs hover:bg-black hover:text-white transition-all duration-500"
        >
          Volver al Catálogo
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-6 py-20 min-h-[80vh]">
      <h1 className="text-4xl md:text-5xl font-serif font-normal text-gray-900 mb-16 text-center">
        Tu Carrito
      </h1>

      <div className="flex flex-col lg:flex-row gap-16">
        {/* Lista de productos */}
        <div className="lg:w-2/3">
          <div className="hidden md:grid grid-cols-12 gap-4 pb-4 border-b border-gray-200 text-xs tracking-widest text-gray-400 uppercase">
            <div className="col-span-5">Producto</div>
            <div className="col-span-2 text-center">Tamaño</div>
            <div className="col-span-2 text-center">Cantidad</div>
            <div className="col-span-2 text-right">Total</div>
            <div className="col-span-1 text-right"></div>
          </div>

          <div className="flex flex-col gap-8 py-8">
            {items.map((item) => (
              <div key={item.id} className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center border-b border-gray-100 pb-8 relative group">
                <div className="col-span-1 md:col-span-5 flex items-center gap-6">
                  <div className="w-24 h-32 bg-gray-50 flex-shrink-0 flex items-center justify-center p-2">
                    <img src={item.image} alt={item.name} className="w-full h-full object-contain mix-blend-multiply" />
                  </div>
                  <div>
                    <span className="text-xs tracking-widest text-gray-400 uppercase block mb-1">{item.brand}</span>
                    <h3 className="text-lg font-serif text-gray-900">{item.name}</h3>
                  </div>
                </div>
                
                <div className="col-span-1 md:col-span-2 text-sm text-gray-500 md:text-center">
                  <span className="md:hidden text-xs text-gray-400 uppercase tracking-widest mr-2">Tamaño: </span>
                  {item.size}
                </div>
                
                <div className="col-span-1 md:col-span-2 text-sm text-gray-500 md:text-center">
                  <span className="md:hidden text-xs text-gray-400 uppercase tracking-widest mr-2">Cantidad: </span>
                  {item.quantity}
                </div>
                
                <div className="col-span-1 md:col-span-2 text-lg font-light text-gray-900 md:text-right">
                  <span className="md:hidden text-xs text-gray-400 uppercase tracking-widest mr-2">Total: </span>
                  ${item.price * item.quantity}
                </div>

                <div className="col-span-1 md:col-span-1 text-right mt-4 md:mt-0">
                  <button 
                    onClick={() => removeFromCart(item.id)}
                    className="text-xs tracking-widest uppercase text-gray-400 hover:text-black transition-colors"
                  >
                    Quitar
                  </button>
                </div>
              </div>
            ))}
          </div>
          
          <div className="flex justify-end mt-4">
            <button 
              onClick={clearCart}
              className="text-xs tracking-widest uppercase text-gray-400 hover:text-black transition-colors underline decoration-transparent hover:decoration-black underline-offset-4"
            >
              Vaciar carrito
            </button>
          </div>
        </div>

        {/* Resumen de Compra */}
        <div className="lg:w-1/3">
          <div className="bg-gray-50 p-10 rounded-sm sticky top-32">
            <h2 className="text-lg font-serif text-gray-900 mb-8 border-b border-gray-200 pb-4">Resumen de Compra</h2>
            
            <div className="flex justify-between items-center text-sm text-gray-600 mb-4">
              <span>Subtotal</span>
              <span>${subtotal}</span>
            </div>
            <div className="flex justify-between items-center text-sm text-gray-600 mb-8 pb-8 border-b border-gray-200">
              <span>Envío</span>
              <span>Calculado en el checkout</span>
            </div>
            
            <div className="flex justify-between items-center text-xl font-light text-gray-900 mb-10">
              <span>Total</span>
              <span>${subtotal}</span>
            </div>
            
            <button 
              onClick={handleCheckout}
              className="w-full bg-black text-white px-6 py-5 uppercase tracking-[0.2em] text-xs hover:bg-gray-800 transition-colors duration-300"
            >
              Finalizar Pedido
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

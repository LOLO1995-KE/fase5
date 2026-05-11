import { useState } from 'react';
import type { Perfume } from '../data/perfumes';
import { useCart } from '../context/CartContext';

interface PerfumeCardProps {
  perfume: Perfume;
}

type Size = '2ml' | '5ml' | '10ml';

export default function PerfumeCard({ perfume }: PerfumeCardProps) {
  const [selectedSize, setSelectedSize] = useState<Size>('5ml');
  const [isAdded, setIsAdded] = useState(false);
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart({
      perfumeId: perfume.id,
      name: perfume.name,
      brand: perfume.brand,
      image: perfume.image,
      size: selectedSize,
      price: perfume.prices[selectedSize]
    });
    
    // Provide visual feedback
    setIsAdded(true);
    setTimeout(() => {
      setIsAdded(false);
    }, 2000);
  };

  return (
    <div className="group flex flex-col items-center text-center transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl bg-white p-6 rounded-sm">
      {/* Imagen */}
      <div className="relative w-full h-80 bg-white p-8 mb-6 overflow-hidden flex items-center justify-center">
        <img 
          src={perfume.image} 
          alt={`${perfume.brand} ${perfume.name}`}
          className="object-contain w-full h-full group-hover:scale-105 transition-transform duration-700 ease-in-out mix-blend-multiply"
        />
      </div>

      {/* Info */}
      <span className="text-xs tracking-[0.2em] text-gray-400 uppercase mb-2">
        {perfume.brand}
      </span>
      <h3 className="text-2xl font-serif text-gray-900 mb-3">
        {perfume.name}
      </h3>
      <p className="text-sm text-gray-500 font-light leading-relaxed mb-6 line-clamp-2 px-4">
        {perfume.description}
      </p>

      {/* Selectors */}
      <div className="flex gap-3 mb-6">
        {(['2ml', '5ml', '10ml'] as Size[]).map((size) => (
          <button
            key={size}
            onClick={() => setSelectedSize(size)}
            className={`text-xs tracking-wider px-4 py-2 border transition-colors duration-300 ${
              selectedSize === size 
                ? 'border-black text-black bg-gray-50' 
                : 'border-transparent text-gray-400 hover:text-black'
            }`}
          >
            {size}
          </button>
        ))}
      </div>

      {/* Price & Add to Cart */}
      <div className="flex flex-col items-center w-full mt-auto">
        <span className="text-lg font-light mb-4">
          ${perfume.prices[selectedSize]}
        </span>
        <button 
          onClick={handleAddToCart}
          disabled={isAdded}
          className={`w-full px-6 py-4 uppercase tracking-[0.15em] text-xs transition-all duration-300 ${
            isAdded 
              ? 'bg-white text-black border border-black' 
              : 'bg-black text-white border border-transparent hover:bg-gray-800'
          }`}
        >
          {isAdded ? '✓ Añadido' : 'Añadir al carrito'}
        </button>
      </div>
    </div>
  );
}

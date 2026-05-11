import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export interface CartItem {
  id: string; // Unique id for the cart item combining perfume id and size
  perfumeId: string;
  name: string;
  brand: string;
  image: string;
  size: '2ml' | '5ml' | '10ml';
  price: number;
  quantity: number;
}

interface CartContextType {
  items: CartItem[];
  addToCart: (item: Omit<CartItem, 'id' | 'quantity'>) => void;
  removeFromCart: (id: string) => void;
  clearCart: () => void;
  totalItems: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
  // Initialize state from localStorage
  const [items, setItems] = useState<CartItem[]>(() => {
    const savedCart = localStorage.getItem('lucianos_cart');
    if (savedCart) {
      try {
        return JSON.parse(savedCart);
      } catch (e) {
        console.error('Error parsing cart data', e);
        return [];
      }
    }
    return [];
  });

  // Persist state to localStorage on every change
  useEffect(() => {
    localStorage.setItem('lucianos_cart', JSON.stringify(items));
  }, [items]);

  const addToCart = (newItem: Omit<CartItem, 'id' | 'quantity'>) => {
    setItems((prevItems) => {
      const cartItemId = `${newItem.perfumeId}-${newItem.size}`;
      const existingItem = prevItems.find(item => item.id === cartItemId);

      if (existingItem) {
        return prevItems.map(item =>
          item.id === cartItemId
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      return [...prevItems, { ...newItem, id: cartItemId, quantity: 1 }];
    });
  };

  const removeFromCart = (id: string) => {
    setItems((prevItems) => prevItems.filter(item => item.id !== id));
  };

  const clearCart = () => {
    setItems([]);
  };

  const totalItems = items.reduce((total, item) => total + item.quantity, 0);

  return (
    <CartContext.Provider value={{ items, addToCart, removeFromCart, clearCart, totalItems }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}

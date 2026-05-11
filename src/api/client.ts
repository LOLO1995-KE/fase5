export interface Perfume {
  id: string;
  brand: string;
  name: string;
  description: string;
  image: string;
  gender?: string;
  note?: string;
  prices: {
    '2ml': number;
    '5ml': number;
    '10ml': number;
  };
}

interface ApiResponse<T> {
  success: boolean;
  data: T;
  message: string;
}

// Datos de respaldo (Fallback Mock)
const MOCK_PERFUMES: Perfume[] = [
  {
    id: '1',
    brand: 'Creed',
    name: 'Aventus',
    description: 'Una fragancia icónica y sofisticada con notas de piña, abedul y almizcle. El epítome del éxito y la elegancia.',
    image: '/creed aventus.jpg',
    gender: 'Masculino',
    note: 'Cítrico',
    prices: { '2ml': 12, '5ml': 28, '10ml': 52 }
  },
  {
    id: '2',
    brand: 'Tom Ford',
    name: 'Oud Wood',
    description: 'Una composición cálida y envolvente basada en la exclusiva madera de oud, mezclada con especias exóticas y cardamomo.',
    image: '/oud wood TF.jpg',
    gender: 'Unisex',
    note: 'Amaderado',
    prices: { '2ml': 15, '5ml': 35, '10ml': 65 }
  },
  {
    id: '3',
    brand: 'Maison Francis Kurkdjian',
    name: 'Baccarat Rouge 540',
    description: 'Un aura luminosa y densa con notas de jazmín, azafrán, madera de cedro y ámbar gris. Auténtica alquimia sensorial.',
    image: '/baccarat rouge 540.jpg',
    gender: 'Unisex',
    note: 'Oriental',
    prices: { '2ml': 18, '5ml': 42, '10ml': 78 }
  },
  {
    id: '4',
    brand: 'Parfums de Marly',
    name: 'Layton',
    description: 'Elegancia pura de la corte real francesa que combina vainilla seductora, manzana caramelizada y maderas nobles.',
    image: '/Layton PdM.jpg',
    gender: 'Masculino',
    note: 'Dulce',
    prices: { '2ml': 14, '5ml': 32, '10ml': 58 }
  },
  {
    id: '5',
    brand: 'Xerjoff',
    name: 'Naxos',
    description: 'Un vibrante homenaje a Sicilia con notas dulces y envolventes de miel dorada, tabaco rico, lavanda y cítricos frescos.',
    image: '/naxos xerjoff.jpg',
    gender: 'Unisex',
    note: 'Gourmand',
    prices: { '2ml': 16, '5ml': 38, '10ml': 70 }
  },
  {
    id: '6',
    brand: 'Amouage',
    name: 'Reflection Man',
    description: 'Una fragancia floral amaderada que irradia una masculinidad refinada, combinando neroli, jazmín y sándalo.',
    image: '/reflexion man amouage.jpg',
    gender: 'Masculino',
    note: 'Floral',
    prices: { '2ml': 15, '5ml': 35, '10ml': 65 }
  }
];

export async function fetchPerfumes(): Promise<Perfume[]> {
  try {
    // Intentar obtener los datos del servidor real
    const response = await fetch('/api/perfumes');
    
    if (!response.ok) {
      throw new Error(`Servidor devolvió estado: ${response.status}`);
    }
    
    const json: ApiResponse<Perfume[]> = await response.json();
    
    if (!json.success) {
      throw new Error(json.message || 'Error en la respuesta de la API');
    }
    
    return json.data;
  } catch (error) {
    // Patrón Graceful Degradation: Proveer una experiencia fluida si el servidor cae
    console.warn('Servidor no disponible, usando datos de respaldo (Mock). Detalle:', error);
    
    // Retornar los datos estáticos tras simular la latencia de una red real (800ms)
    // Esto asegura que el usuario vea el 'Loading spinner' y la interfaz reaccione naturalmente
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(MOCK_PERFUMES);
      }, 800);
    });
  }
}

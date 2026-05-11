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

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000';

export async function fetchPerfumes(): Promise<Perfume[]> {
  try {
    const response = await fetch(`${API_URL}/api/perfumes`);
    if (!response.ok) {
      throw new Error('Error al obtener el catálogo de perfumes');
    }
    
    const json: ApiResponse<Perfume[]> = await response.json();
    if (!json.success) {
      throw new Error(json.message);
    }
    
    return json.data;
  } catch (error) {
    console.error('Error en fetchPerfumes:', error);
    throw error;
  }
}

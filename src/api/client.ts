export interface Perfume {
  id: string;
  brand: string;
  name: string;
  description: string;
  image: string;
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

export async function fetchPerfumes(): Promise<Perfume[]> {
  try {
    const response = await fetch('/api/perfumes');
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

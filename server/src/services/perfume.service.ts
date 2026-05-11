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

class PerfumeService {
  private perfumes: Perfume[] = [
    {
      id: '1',
      brand: 'Creed',
      name: 'Aventus',
      description: 'Una fragancia icónica y sofisticada con notas de piña, abedul y almizcle. El epítome del éxito y la elegancia.',
      image: '/creed aventus.jpg',
      prices: {
        '2ml': 12,
        '5ml': 28,
        '10ml': 52
      }
    },
    {
      id: '2',
      brand: 'Tom Ford',
      name: 'Oud Wood',
      description: 'Una composición cálida y envolvente basada en la exclusiva madera de oud, mezclada con especias exóticas y cardamomo.',
      image: '/oud wood TF.jpg',
      prices: {
        '2ml': 15,
        '5ml': 35,
        '10ml': 65
      }
    },
    {
      id: '3',
      brand: 'Maison Francis Kurkdjian',
      name: 'Baccarat Rouge 540',
      description: 'Un aura luminosa y densa con notas de jazmín, azafrán, madera de cedro y ámbar gris. Auténtica alquimia sensorial.',
      image: '/baccarat rouge 540.jpg',
      prices: {
        '2ml': 18,
        '5ml': 42,
        '10ml': 78
      }
    },
    {
      id: '4',
      brand: 'Parfums de Marly',
      name: 'Layton',
      description: 'Elegancia pura de la corte real francesa que combina vainilla seductora, manzana caramelizada y maderas nobles.',
      image: '/Layton PdM.jpg',
      prices: {
        '2ml': 14,
        '5ml': 32,
        '10ml': 58
      }
    },
    {
      id: '5',
      brand: 'Xerjoff',
      name: 'Naxos',
      description: 'Un vibrante homenaje a Sicilia con notas dulces y envolventes de miel dorada, tabaco rico, lavanda y cítricos frescos.',
      image: '/naxos xerjoff.jpg',
      prices: {
        '2ml': 16,
        '5ml': 38,
        '10ml': 70
      }
    },
    {
      id: '6',
      brand: 'Amouage',
      name: 'Reflection Man',
      description: 'Una fragancia floral amaderada que irradia una masculinidad refinada, combinando neroli, jazmín y sándalo.',
      image: '/reflexion man amouage.jpg',
      prices: {
        '2ml': 15,
        '5ml': 35,
        '10ml': 65
      }
    }
  ];

  getAllPerfumes(): Perfume[] {
    return this.perfumes;
  }
}

export const perfumeService = new PerfumeService();

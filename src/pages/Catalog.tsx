import { useState, useMemo, useEffect } from 'react';
import { fetchPerfumes } from '../api/client';
import type { Perfume } from '../api/client';
import PerfumeCard from '../components/PerfumeCard';

export default function Catalog() {
    const [perfumes, setPerfumes] = useState<Perfume[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    const [searchTerm, setSearchTerm] = useState('');
    const [selectedBrand, setSelectedBrand] = useState('Todos');

    useEffect(() => {
        const loadPerfumes = async () => {
            try {
                setIsLoading(true);
                const data = await fetchPerfumes();
                setPerfumes(data);
                setError(null);
            } catch (err) {
                setError('No se pudo cargar el catálogo de perfumes. Por favor, intenta de nuevo más tarde.');
            } finally {
                setIsLoading(false);
            }
        };

        loadPerfumes();
    }, []);

    // Extract unique brands dynamically
    const brands = ['Todos', ...Array.from(new Set(perfumes.map(p => p.brand)))];

    // Filter logic
    const filteredPerfumes = useMemo(() => {
        return perfumes.filter(perfume => {
            const matchesSearch = perfume.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                                  perfume.brand.toLowerCase().includes(searchTerm.toLowerCase());
            const matchesBrand = selectedBrand === 'Todos' || perfume.brand === selectedBrand;
            return matchesSearch && matchesBrand;
        });
    }, [perfumes, searchTerm, selectedBrand]);

    if (isLoading) {
        return (
            <div className="flex justify-center items-center min-h-[80vh]">
                <div className="animate-pulse flex flex-col items-center">
                    <div className="w-12 h-12 border-4 border-gray-200 border-t-black rounded-full animate-spin mb-4"></div>
                    <p className="text-gray-500 font-light tracking-widest uppercase text-xs">Cargando catálogo...</p>
                </div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="flex flex-col items-center justify-center min-h-[80vh] px-6 text-center">
                <p className="text-2xl font-serif text-red-900 mb-4">Ocurrió un error</p>
                <p className="text-gray-500 font-light max-w-md">{error}</p>
            </div>
        );
    }

    return (
        <div className="py-20 px-6 max-w-7xl mx-auto min-h-[80vh]">
            {/* Header */}
            <div className="text-center mb-16">
                <span className="text-sm tracking-[0.3em] text-gray-400 uppercase mb-6 block">Catálogo</span>
                <h1 className="text-5xl md:text-6xl font-serif font-normal text-gray-900 mb-12">
                    Nuestra Colección
                </h1>
                
                {/* Search & Filters */}
                <div className="max-w-3xl mx-auto flex flex-col gap-8">
                    {/* Buscador */}
                    <input 
                        type="text" 
                        placeholder="Buscar por fragancia o marca..." 
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full border-b border-gray-200 py-4 px-2 bg-transparent text-sm font-light text-center focus:outline-none focus:border-black transition-colors duration-300 font-sans"
                    />

                    {/* Botones de Marca */}
                    <div className="flex flex-wrap justify-center gap-3">
                        {brands.map(brand => (
                            <button
                                key={brand}
                                onClick={() => setSelectedBrand(brand)}
                                className={`text-xs tracking-widest uppercase px-6 py-3 transition-colors duration-300 ${
                                    selectedBrand === brand 
                                        ? 'bg-black text-white border border-black' 
                                        : 'bg-transparent text-gray-500 border border-transparent hover:text-black'
                                }`}
                            >
                                {brand}
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            {/* Grid */}
            {filteredPerfumes.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-24">
                    {filteredPerfumes.map((perfume) => (
                        <PerfumeCard key={perfume.id} perfume={perfume} />
                    ))}
                </div>
            ) : (
                <div className="flex flex-col items-center justify-center py-20 text-center">
                    <p className="text-2xl font-serif text-gray-900 mb-4">No se encontraron resultados</p>
                    <p className="text-gray-500 font-light">
                        Intenta ajustar los términos de búsqueda o selecciona otra marca.
                    </p>
                    <button 
                        onClick={() => {
                            setSearchTerm('');
                            setSelectedBrand('Todos');
                        }}
                        className="mt-8 text-xs tracking-widest uppercase text-gray-400 hover:text-black transition-colors underline decoration-transparent hover:decoration-black underline-offset-4"
                    >
                        Limpiar filtros
                    </button>
                </div>
            )}
        </div>
    );
}

import { useState, useMemo, useEffect } from 'react';
import { fetchPerfumes } from '../api/client';
import type { Perfume } from '../api/client';
import PerfumeCard from '../components/PerfumeCard';
import { useDebounce } from '../hooks/useDebounce';

export default function Catalog() {
    const [perfumes, setPerfumes] = useState<Perfume[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    const [searchTerm, setSearchTerm] = useState('');
    const debouncedSearchTerm = useDebounce(searchTerm, 300);
    
    // Estados de filtros avanzados
    const [selectedBrand, setSelectedBrand] = useState('Todas');
    const [selectedGender, setSelectedGender] = useState('Todos');
    const [selectedNote, setSelectedNote] = useState('Todas');

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

    // Extraer opciones dinámicamente de los datos para la marca (las familias y géneros pueden ser estáticos o dinámicos)
    const brands = ['Todas', ...Array.from(new Set(perfumes.map(p => p.brand)))];
    const genders = ['Todos', 'Masculino', 'Femenino', 'Unisex'];
    const notes = ['Todas', 'Amaderado', 'Oriental', 'Dulce', 'Floral', 'Gourmand', 'Cítrico'];

    // Lógica de filtrado combinada
    const filteredPerfumes = useMemo(() => {
        return perfumes.filter(perfume => {
            // Filtro por nombre o marca (texto libre)
            const matchesSearch = perfume.name.toLowerCase().includes(debouncedSearchTerm.toLowerCase()) || 
                                  perfume.brand.toLowerCase().includes(debouncedSearchTerm.toLowerCase());
            
            // Filtros de los desplegables
            const matchesBrand = selectedBrand === 'Todas' || perfume.brand === selectedBrand;
            const matchesGender = selectedGender === 'Todos' || perfume.gender === selectedGender;
            const matchesNote = selectedNote === 'Todas' || perfume.note === selectedNote;

            // Un perfume debe cumplir TODAS las condiciones activas
            return matchesSearch && matchesBrand && matchesGender && matchesNote;
        });
    }, [perfumes, debouncedSearchTerm, selectedBrand, selectedGender, selectedNote]);

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
                
                {/* Herramientas de Descubrimiento (Buscador + Filtros Avanzados) */}
                <div className="max-w-4xl mx-auto flex flex-col gap-6">
                    {/* Buscador de texto */}
                    <input 
                        type="text" 
                        placeholder="Buscar por nombre o marca libremente..." 
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full border-b border-gray-200 py-4 px-2 bg-transparent text-sm font-light text-center focus:outline-none focus:border-black transition-colors duration-300 font-sans"
                    />

                    {/* Barra de Herramientas Desplegables */}
                    <div className="flex flex-col md:flex-row items-center justify-center gap-4 mt-2">
                        <span className="text-xs tracking-widest uppercase text-gray-400 font-bold hidden md:block mr-2">
                            Filtros:
                        </span>
                        
                        <div className="flex flex-col sm:flex-row w-full md:w-auto gap-3">
                            {/* Desplegable de Marca */}
                            <div className="relative w-full sm:w-auto">
                                <select 
                                    value={selectedBrand} 
                                    onChange={(e) => setSelectedBrand(e.target.value)}
                                    className="appearance-none w-full sm:w-auto bg-transparent border border-gray-300 text-gray-700 py-3 px-6 pr-10 text-xs tracking-widest uppercase cursor-pointer hover:border-black transition-colors focus:outline-none focus:border-black"
                                    style={{ backgroundImage: `url("data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%23111%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E")`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right 1rem top 50%', backgroundSize: '.5rem auto' }}
                                >
                                    <option value="Todas" disabled className="text-gray-400">Seleccionar Marca</option>
                                    {brands.map(brand => (
                                        <option key={brand} value={brand}>{brand === 'Todas' ? 'Todas las Marcas' : brand}</option>
                                    ))}
                                </select>
                            </div>

                            {/* Desplegable de Género */}
                            <div className="relative w-full sm:w-auto">
                                <select 
                                    value={selectedGender} 
                                    onChange={(e) => setSelectedGender(e.target.value)}
                                    className="appearance-none w-full sm:w-auto bg-transparent border border-gray-300 text-gray-700 py-3 px-6 pr-10 text-xs tracking-widest uppercase cursor-pointer hover:border-black transition-colors focus:outline-none focus:border-black"
                                    style={{ backgroundImage: `url("data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%23111%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E")`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right 1rem top 50%', backgroundSize: '.5rem auto' }}
                                >
                                    <option value="Todos" disabled className="text-gray-400">Seleccionar Género</option>
                                    {genders.map(gender => (
                                        <option key={gender} value={gender}>{gender === 'Todos' ? 'Todos los Géneros' : gender}</option>
                                    ))}
                                </select>
                            </div>

                            {/* Desplegable de Familia Olfativa */}
                            <div className="relative w-full sm:w-auto">
                                <select 
                                    value={selectedNote} 
                                    onChange={(e) => setSelectedNote(e.target.value)}
                                    className="appearance-none w-full sm:w-auto bg-transparent border border-gray-300 text-gray-700 py-3 px-6 pr-10 text-xs tracking-widest uppercase cursor-pointer hover:border-black transition-colors focus:outline-none focus:border-black"
                                    style={{ backgroundImage: `url("data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%23111%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E")`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right 1rem top 50%', backgroundSize: '.5rem auto' }}
                                >
                                    <option value="Todas" disabled className="text-gray-400">Seleccionar Familia</option>
                                    {notes.map(note => (
                                        <option key={note} value={note}>{note === 'Todas' ? 'Todas las Familias' : note}</option>
                                    ))}
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Grid */}
            {filteredPerfumes.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-24 mt-10">
                    {filteredPerfumes.map((perfume) => (
                        <PerfumeCard key={perfume.id} perfume={perfume} />
                    ))}
                </div>
            ) : (
                <div className="flex flex-col items-center justify-center py-20 text-center">
                    <p className="text-2xl font-serif text-gray-900 mb-4">No se encontraron resultados</p>
                    <p className="text-gray-500 font-light">
                        Prueba con una combinación de filtros más amplia.
                    </p>
                    <button 
                        onClick={() => {
                            setSearchTerm('');
                            setSelectedBrand('Todas');
                            setSelectedGender('Todos');
                            setSelectedNote('Todas');
                        }}
                        className="mt-8 text-xs tracking-widest uppercase text-gray-400 hover:text-black transition-colors underline decoration-transparent hover:decoration-black underline-offset-4"
                    >
                        Limpiar todos los filtros
                    </button>
                </div>
            )}
        </div>
    );
}

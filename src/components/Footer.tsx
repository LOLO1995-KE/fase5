export default function Footer() {
    return (
        <footer className="bg-white border-t border-gray-100 py-12 mt-auto">
            <div className="max-w-7xl mx-auto px-8 flex flex-col items-center justify-center">
                <p className="text-sm text-slate-500 font-light tracking-widest uppercase mb-4 font-serif">
                    Luciano's Boutique
                </p>
                <div className="flex gap-6 mb-8 text-xs text-slate-400 font-light tracking-wider uppercase">
                    <a href="#" className="hover:text-black transition-colors duration-300">Instagram</a>
                    <a href="#" className="hover:text-black transition-colors duration-300">Términos</a>
                    <a href="#" className="hover:text-black transition-colors duration-300">Privacidad</a>
                </div>
                <p className="text-xs text-slate-400 font-light tracking-wide">
                    &copy; {new Date().getFullYear()} Luciano's Boutique. Todos los derechos reservados.
                </p>
            </div>
        </footer>
    );
}
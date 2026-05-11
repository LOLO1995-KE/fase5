import { useState, useEffect } from 'react';

/**
 * Custom hook que retrasa la actualización de un valor.
 * Útil para evitar que procesos pesados (como búsquedas o fetchs) se ejecuten
 * con cada pulsación de tecla del usuario.
 * 
 * @param value Valor a debounsear
 * @param delay Retraso en milisegundos (por defecto 300)
 */
export function useDebounce<T>(value: T, delay: number = 300): T {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);

  useEffect(() => {
    // Establecer el temporizador
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    // Cancelar el temporizador si el valor cambia antes de que se cumpla el delay.
    // Esto asegura que solo se actualice tras una pausa en la escritura.
    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
}

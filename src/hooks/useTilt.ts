import { useRef, useEffect } from 'react';
import { initTilt } from '../utils/tilt';

const useTilt = (maxRotation: number) => {
  // Crea la referencia
  const cardRef = useRef<HTMLDivElement>(null);

  // Inicializa el tilt si el elemento existe, el dispositivo permite hover
  // y el usuario no ha solicitado reducir el movimiento
  useEffect(() => {
    // Verifica si el dispositivo cumple la condición CSS
    const canHover = window.matchMedia('(hover: hover) and (pointer: fine)');

    // Verifica si tiene activado prefers-reduced-motion
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

    if (cardRef.current && canHover.matches && !reducedMotion.matches) {
      const removeEvents = initTilt(cardRef.current, maxRotation);
      return removeEvents;
    }
  }, [maxRotation]);

  // Devuelve la referencia al componente
  return cardRef;
};

export default useTilt;

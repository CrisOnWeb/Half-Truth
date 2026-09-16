import { useRef, useEffect } from 'react';
import { initTilt } from '../utils/tilt';

const useTilt = (maxRotation: number) => {
  // 1. Crea la referencia
  const cardRef = useRef<HTMLDivElement>(null);

  // 2. Cuando existe el elemento, inicializa el tilt
  useEffect(() => {
    if (cardRef.current) {
      const removeEvents = initTilt(cardRef.current, maxRotation);
      return removeEvents;
    }
  }, [maxRotation]);

  // 3. Devuelve la referencia al componente
  return cardRef;
};

export default useTilt;

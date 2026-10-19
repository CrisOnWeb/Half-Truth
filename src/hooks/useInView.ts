import { useRef, useState, useEffect } from 'react';

const useInView = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Referencia al elemento HTML que queremos observar para detectar cuándo entra en el viewport
  const ref = useRef<HTMLElement>(null);

  // Detectamos cuándo la sección a observar entra en el viewport
  useEffect(() => {
    // Evitamos crear el observador si el elemento todavía no existe
    // o el navegador no admite IntersectionObserver
    if (!ref.current || !('IntersectionObserver' in window)) {
      return;
    }

    // Creamos un observador que reaccionará a los cambios de visibilidad
    const observer = new IntersectionObserver(
      (entries) => {
        // Activamos la animación cuando la sección entra en el área de observación.
        if (entries[0].isIntersecting) {
          // Activamos la animación
          setIsVisible(true);

          // Dejamos de observar porque solo necesitamos detectarlo una vez
          observer.unobserve(entries[0].target);
        }
      },
      // Retrasamos la detección reduciendo el área de observación
      // por abajo para que la animación se retrase a cuando se vea la sección
      { rootMargin: '0px 0px -200px 0px' }
    );

    // Comenzamos a observar la sección
    observer.observe(ref.current);

    // Desconectamos el observador cuando el efecto se limpia
    return () => {
      // Desconectamos el observador
      observer.disconnect();
    };
  }, []);

  return { ref, isVisible };
};

export default useInView;

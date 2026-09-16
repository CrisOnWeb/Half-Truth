export const initTilt = (element: HTMLElement, maxRotation: number) => {
  // maxRotation representa la rotación máxima deseada

  // Creamos función para normalizar los valores de entre -1 a 1
  const normalizeCoordinate = (value: number): number => {
    return value * 2 - 1;
  };

  const handlePointerMove = (event: PointerEvent) => {
    // Recuperamos posición relativa del element
    const rect = element.getBoundingClientRect();

    // Calculamos posición relativa del ratón en el elemento con valores de entre 0 y 1
    const relativeX = (event.clientX - rect.x) / rect.width;
    const relativeY = (event.clientY - rect.y) / rect.height;

    const normalizedX = normalizeCoordinate(relativeX);
    const normalizedY = normalizeCoordinate(relativeY);

    // Cambiamos el signo de rotationX para ue la tarjeta se incline hacia el puntero
    // Invertimos los datos de X e Y para conseguir el efecto visual esperado
    const rotationX = -(normalizedY * maxRotation);
    const rotationY = normalizedX * maxRotation;

    // Modificamos las custom properties para valor dinámico
    element.style.setProperty('--tilt-x', `${rotationX}deg`);
    element.style.setProperty('--tilt-y', `${rotationY}deg`);
  };

  // Devolvemos valores a 0 cuando sale el puntero
  const handlePointerLeave = () => {
    element.style.setProperty('--tilt-x', '0deg');
    element.style.setProperty('--tilt-y', '0deg');
  };

  element.addEventListener('pointermove', handlePointerMove);
  element.addEventListener('pointerleave', handlePointerLeave);

  return () => {
    element.removeEventListener('pointermove', handlePointerMove);
    element.removeEventListener('pointerleave', handlePointerLeave);
  };
};

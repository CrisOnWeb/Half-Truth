import './DifficultyBadge.scss';
import type { CSSProperties } from 'react';

type DifficultyBadgeProps = {
  difficulty: 'easy' | 'medium' | 'hard';
};

// CSSProperties no conoce nuestras custom properties (--...).
// Extendemos el tipo para indicarle a TypeScript que --difficulty-color existe.
type DifficultyColor = CSSProperties & {
  '--difficulty-color': string;
};

const DifficultyBadge = ({ difficulty }: DifficultyBadgeProps) => {
  // Configuración visual de cada nivel de dificultad.
  // Centralizamos aquí los datos que necesita el componente:
  // - label: texto que verá el usuario.
  // - color: custom property de CSS que usarán las barras activas.
  // - bars: número de barras que estarán activas.
  const difficultyConfig = {
    easy: {
      label: 'Fácil',
      color: 'var(--color-easy)',
      bars: 1,
    },
    medium: {
      label: 'Media',
      color: 'var(--color-medium)',
      bars: 2,
    },
    hard: {
      label: 'Difícil',
      color: 'var(--color-hard)',
      bars: 3,
    },
  };

  // Siempre mostramos tres barras.
  // config.bars determina cuántas estarán activas.
  const bars = [1, 2, 3];

  // Usamos el valor recibido por props como clave para obtener
  // únicamente la configuración correspondiente a esa dificultad.
  const config = difficultyConfig[difficulty];

  // Pasamos el color desde JavaScript a CSS mediante una custom property.
  // Esta variable se hereda a los elementos hijos y se utiliza en SCSS
  // como var(--difficulty-color).
  const difficultyStyle: DifficultyColor = {
    '--difficulty-color': config.color,
  };

  return (
    <div className="difficulty" style={difficultyStyle}>
      <span className="difficulty__title">Dificultad</span>
      <div className="difficulty__content">
        <div className="difficulty__bars" aria-hidden="true">
          {bars.map((bar) => (
            <span
              key={bar}
              className={`difficulty__bar ${bar <= config.bars ? 'difficulty__bar--active' : ''}`}
            ></span>
          ))}
        </div>
        <span className="difficulty__level">{config.label}</span>
      </div>
    </div>
  );
};

export default DifficultyBadge;

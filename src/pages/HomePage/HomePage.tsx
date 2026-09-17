import './HomePage.scss';
import useTilt from '../../hooks/useTilt';
import { cast } from '../../data/cast';
import type { Character } from '../../data/types';
import Eyebrow from '../../components/Eyebrow/Eyebrow';
import Button from '../../components/Button/Button';
import StatementPreview from '../../components/StatementPreview/StatementPreview';

type FeaturedStatement = {
  character: Character;
  role: string;
  statement: string;
  clue: boolean;
};

const HomePage = () => {
  // Recuperamos la referencia para asociarla al elemento
  const cardRef = useTilt(5);

  const featuredCharacters = cast.filter((character) =>
    ['c01', 'c02', 'c03', 'c04'].includes(character.id)
  );

  const featuredStatements: FeaturedStatement[] = [
    {
      character: featuredCharacters[0],
      role: 'socia',
      statement: 'Cerré la puerta a las 21:40. Como cada noche.',
      clue: false,
    },
    {
      character: featuredCharacters[1],
      role: 'becario',
      statement: 'Yo estaba en el archivo. No oí ningún ruido.',
      clue: false,
    },
    {
      character: featuredCharacters[2],
      role: 'anfitrión',
      statement: 'La llave no salió de mi bolsillo en toda la velada.',
      clue: false,
    },
    {
      character: featuredCharacters[3],
      role: 'invitada',
      statement: 'Vi salir a alguien. Llevaba el abrigo de Laura.',
      clue: true,
    },
  ];

  return (
    <>
      <section className="hero u-background u-night-canvas u-dossier-grid">
        <div className="hero__inner central-column">
          <div className="hero__content">
            <Eyebrow
              text="Juego de deducción
      · Casos breves"
            />
            <h1 className="hero__title">
              ¿Quién <span className="hero__title--highlight">miente</span>?
            </h1>
            <p className="hero__description">
              Una historia. Varias versiones. Solo una no encaja.{' '}
              <span className="hero__description--highlight">
                ¿Serás capaz de descubrir cuál no lo hace?
              </span>
            </p>
            <div className="hero__actions">
              <Button to="/cases" variant="primary" className="hero__button">
                Ver casos
              </Button>
              <p className="hero__meta">
                sin registro · nuevos casos disponibles{' '}
              </p>
            </div>
          </div>

          <div className="hero__card tilt" ref={cardRef}>
            <div className="hero__card-header">
              <p className="hero__card-id">Expediente #001</p>
              <p className="hero__card-count">4 declaraciones</p>
            </div>

            <div className="hero__card-statements">
              {featuredStatements.map((statement) => (
                <StatementPreview
                  key={statement.character.id}
                  character={statement.character}
                  role={statement.role}
                  statement={statement.statement}
                  clue={statement.clue}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="gameplay">
        <h2 className="gameplay__title">¿Cómo se juega?</h2>
      </section>

      <Button to="/cases" variant="secondary">
        Ver todos los casos
      </Button>
    </>
  );
};

export default HomePage;

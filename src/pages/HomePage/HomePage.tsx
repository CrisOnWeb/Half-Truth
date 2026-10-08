import './HomePage.scss';
import useTilt from '../../hooks/useTilt';
import { Link } from 'react-router-dom';
import { cast } from '../../data/cast';
import { cases } from '../../data/cases';
import type { Character } from '../../data/types';
import Eyebrow from '../../components/Eyebrow/Eyebrow';
import Button from '../../components/Button/Button';
import StatementPreview from '../../components/StatementPreview/StatementPreview';
import CaseCard from '../../components/CaseCard/CaseCard';

import { BookOpenCheck, UserRoundSearch, HatGlasses } from 'lucide-react';

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
        <div className="gameplay__inner central-column">
          <h2 className="gameplay__title">¿Cómo se juega?</h2>

          <ol className="gameplay__cards">
            <li className="gameplay__card">
              <div className="gameplay__step">
                <span className="gameplay__step-icon" aria-hidden="true">
                  <BookOpenCheck size={20} />
                </span>
                <p className="gameplay__step-text">paso 1</p>
              </div>
              <h3 className="gameplay__heading">Lee las declaraciones</h3>
              <p className="gameplay__text">
                Cada sospechoso cuenta su versión pero no siempre toda la
                verdad.
              </p>
            </li>

            <li className="gameplay__card">
              <div className="gameplay__step">
                <span className="gameplay__step-icon" aria-hidden="true">
                  <UserRoundSearch size={20} />
                </span>
                <p className="gameplay__step-text">paso 2</p>
              </div>
              <h3 className="gameplay__heading">Busca contradicciones</h3>
              <p className="gameplay__text">
                Algo no encaja con el resto. Puede estar en los pequeños
                detalles. Siéntete un/a detective.
              </p>
            </li>

            <li className="gameplay__card">
              <div className="gameplay__step">
                <span className="gameplay__step-icon" aria-hidden="true">
                  <HatGlasses size={20} />
                </span>
                <p className="gameplay__step-text">paso 3</p>
              </div>
              <h3 className="gameplay__heading">Descubre quién miente</h3>
              <p className="gameplay__text">
                Señala a quien crees que miente. Descubrirás si tu lógica era
                correcta y cuál era la verdad.
              </p>
            </li>
          </ol>
        </div>
      </section>

      <section className="open-cases">
        <div className="open-cases__inner central-column">
          <div className="open-cases__header">
            <div className="open-cases__intro">
              <h2 className="open-cases__title">Casos abiertos</h2>
              <p className="open-cases__text">
                Cada caso es independiente: una escena, pistas, una víctima,
                sospechosos/as y por supuesto un/a culpable que debes
                desenmascarar.
              </p>
            </div>
            <Link to="/cases" className="open-cases__link">
              ver todos
            </Link>
          </div>

          <ul className="open-cases__list">
            {cases.slice(0, 3).map((gameCase) => (
              <li className="open-cases__item" key={gameCase.id}>
                <CaseCard gameCase={gameCase} headingLevel="h3" />
              </li>
            ))}
          </ul>
          <div className="open-cases__action">
            <Button className="open-cases__btn" to="/cases" variant="secondary">
              Ver todos los casos
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;

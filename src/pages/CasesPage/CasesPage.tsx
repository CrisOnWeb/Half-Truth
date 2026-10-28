import './CasesPage.scss';
import { useState } from 'react';
import { cases } from '../../data/cases';
import Eyebrow from '../../components/Eyebrow/Eyebrow';
import CaseCard from '../../components/CaseCard/CaseCard';

const CasesPage = () => {
  const [selectedDifficulty, setSelectedDifficulty] = useState('all');

  const handleClickFilterButton = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    const clickedButton = event.currentTarget;

    setSelectedDifficulty(clickedButton.value);
  };

  const filteredData = cases.filter((caseItem) => {
    if (selectedDifficulty === 'all') {
      return true;
    } else {
      return caseItem.difficulty === selectedDifficulty;
    }
  });

  return (
    <>
      <section className="cases">
        <div className="cases__header u-background u-night-canvas u-dossier-grid">
          <div className="central-column">
            {/* Título y filtros */}
            <Eyebrow text="archivo" />
            <h1 className="cases__title">Expedientes</h1>
            <p className="cases__description">
              Elige un expediente y descubre quién miente.
            </p>

            <h2 className="cases__filters-title">Filtrar por dificultad</h2>
            <div className="cases__filters">
              <button
                type="button"
                className={`cases__filters-button ${selectedDifficulty === 'all' ? 'cases__filters-button--active' : ''}`}
                aria-pressed={`${selectedDifficulty === 'all' ? 'true' : 'false'}`}
                onClick={handleClickFilterButton}
                value="all"
              >
                <span className="cases__filters-dot" aria-hidden="true" />
                Todos
              </button>
              <button
                type="button"
                className={`cases__filters-button ${selectedDifficulty === 'easy' ? 'cases__filters-button--active' : ''}`}
                aria-pressed={`${selectedDifficulty === 'easy' ? 'true' : 'false'}`}
                onClick={handleClickFilterButton}
                value="easy"
              >
                <span className="cases__filters-dot" aria-hidden="true" />
                Fácil
              </button>
              <button
                type="button"
                className={`cases__filters-button ${selectedDifficulty === 'medium' ? 'cases__filters-button--active' : ''}`}
                aria-pressed={`${selectedDifficulty === 'medium' ? 'true' : 'false'}`}
                onClick={handleClickFilterButton}
                value="medium"
              >
                <span className="cases__filters-dot" aria-hidden="true" />
                Media
              </button>
              <button
                type="button"
                className={`cases__filters-button ${selectedDifficulty === 'hard' ? 'cases__filters-button--active' : ''}`}
                aria-pressed={`${selectedDifficulty === 'hard' ? 'true' : 'false'}`}
                onClick={handleClickFilterButton}
                value="hard"
              >
                <span className="cases__filters-dot" aria-hidden="true" />
                Difícil
              </button>
            </div>
          </div>
        </div>

        <div className="cases__content">
          <div className="central-column">
            <p className="cases__content-counter" role="status">
              <span aria-hidden="true">[ </span>
              <span className="cases__content-counter--highlight">
                {filteredData.length}
              </span>{' '}
              <span aria-hidden="true"> / </span>
              <span className="cases__content-counter--highlight">
                {cases.length}
              </span>{' '}
              expedientes
              <span aria-hidden="true"> ]</span>
            </p>

            {filteredData.length === 0 ? (
              <div className="cases__empty">
                <h2 className="cases__empty-title">
                  No se han encontrado expedientes.
                </h2>

                <p className="cases__empty-description">
                  Prueba con otra dificultad para encontrar más casos.
                </p>
              </div>
            ) : (
              <ol className="cases__content-cards">
                {filteredData.map((gameCase) => (
                  <li className="cases__content-card" key={gameCase.id}>
                    <CaseCard gameCase={gameCase} headingLevel="h2" />
                  </li>
                ))}
              </ol>
            )}
          </div>
        </div>

        <div className="cases__announcement u-background u-night-canvas u-dossier-grid">
          <div className="cases__announcement-inner central-column">
            <h2 className="cases__announcement-title">Nuevos expedientes</h2>
            <p className="cases__announcement-text">Próximamente</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default CasesPage;

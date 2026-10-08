import './CaseCard.scss';
import { Link } from 'react-router-dom';
import { cast } from '../../data/cast';
import type { Case } from '../../data/types';
import type { ElementType } from 'react';
import CharacterImage from '../CharacterImage/CharacterImage';
import DifficultyBadge from '../DifficultyBadge/DifficultyBadge';
import { ArrowRight } from 'lucide-react';

type CaseCardProps = {
  gameCase: Case;
  headingLevel: 'h2' | 'h3';
};

const CaseCard = ({ gameCase, headingLevel }: CaseCardProps) => {
  const Heading: ElementType = headingLevel;

  const getCaseCharacters = () => {
    const characterIds = gameCase.suspects.map(
      (suspect) => suspect.characterId
    );

    if (gameCase.witnesses) {
      gameCase.witnesses.forEach((witness) =>
        characterIds.push(witness.characterId)
      );
    }

    const characters = cast.filter((character) =>
      characterIds.includes(character.id)
    );

    return characters;
  };

  const characters = getCaseCharacters();

  return (
    <Link className="case-card" to={`/cases/${gameCase.id}`}>
      <div className="case-card__header">
        <div>
          <span className="case-card__id"> Expediente #{gameCase.id}</span>
          <Heading className="case-card__title">{gameCase.title}</Heading>
        </div>
        <DifficultyBadge difficulty={gameCase.difficulty} />
      </div>

      <p className="case-card__description">{gameCase.teaser}</p>

      <div className="case-card__footer">
        <div className="case-card__statements">
          <ul className="case-card__characters">
            {characters.map((character, index) => (
              <li
                key={character.id}
                className="case-card__character"
                style={{ zIndex: characters.length - index }}
              >
                <CharacterImage
                  src={character.image}
                  alt={character.alt}
                  size="card"
                />
              </li>
            ))}
          </ul>
          <p className="case-card__statement-count">
            {characters.length} declaraciones
          </p>
        </div>
        <span className="case-card__link">
          abrir
          <ArrowRight
            className="case-card__link-icon"
            size={16}
            aria-hidden="true"
          />
        </span>
      </div>
    </Link>
  );
};

export default CaseCard;

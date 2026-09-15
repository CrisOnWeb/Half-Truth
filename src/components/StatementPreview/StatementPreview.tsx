import './StatementPreview.scss';
import CharacterImage from '../../components/CharacterImage/CharacterImage';
import { FingerprintPattern } from 'lucide-react';
import type { Character } from '../../data/types';

type StatementPreviewProps = {
  character: Character;
  role: string;
  statement: string;
  clue?: boolean;
};

const StatementPreview = ({
  character,
  role,
  statement,
  clue = false,
}: StatementPreviewProps) => {
  return (
    <div
      className={`statement-preview ${clue ? 'statement-preview--highlight' : ''}`}
    >
      <CharacterImage src={character.image} alt={character.alt} size="card" />
      <div className="statement-preview__content">
        <div className="statement-preview__profile">
          <p className="statement-preview__name">{character.name}</p>
          <span className="statement-preview__role">{role}</span>
        </div>
        <p className="statement-preview__text">“{statement}”</p>
        {clue && (
          <span className="statement-preview__clue">
            <FingerprintPattern size={16} aria-hidden="true" />
            pista marcada
          </span>
        )}
      </div>
    </div>
  );
};

export default StatementPreview;

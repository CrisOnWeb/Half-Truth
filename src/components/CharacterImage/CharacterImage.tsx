import './CharacterImage.scss';

type CharacterImageProps = {
  src: string;
  alt: string;
  size: 'card' | 'statement';
};

const CharacterImage = ({ src, alt, size }: CharacterImageProps) => {
  return (
    <div className={`character-image character-image--${size}`}>
      <img className="character-image__img" src={src} alt={alt} />
    </div>
  );
};

export default CharacterImage;

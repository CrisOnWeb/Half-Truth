import './Eyebrow.scss';

type EyebrowProps = {
  text: string;
  className?: string;
};

const Eyebrow = ({ text, className }: EyebrowProps) => {
  return (
    <p className={`eyebrow ${className}`}>
      <span className="eyebrow-dot" aria-hidden="true" />
      {text}
    </p>
  );
};

export default Eyebrow;

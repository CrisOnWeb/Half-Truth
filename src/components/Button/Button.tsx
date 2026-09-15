import './Button.scss';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

type ButtonProps = {
  children: React.ReactNode;
  variant: 'primary' | 'secondary';
  to?: string;
  disabled?: boolean;
  className?: string;
  onClick?: React.MouseEventHandler;
};

const Button = ({
  children,
  variant,
  to,
  disabled = false,
  className,
  onClick,
}: ButtonProps) => {
  if (to) {
    return (
      <Link to={to} className={`button ${variant} ${className}`}>
        {children}
        <ArrowRight />
      </Link>
    );
  }

  return (
    <button
      type="button"
      className={`button ${variant} ${className}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
      <ArrowRight />
    </button>
  );
};

export default Button;

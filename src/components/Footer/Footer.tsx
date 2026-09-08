import './Footer.scss';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__inner central-column">
        <p className="footer__copy">Half Truth · 2026</p>
        <ul className="footer__list">
          <li className="footer__item">
            <a
              href="https://github.com/CrisOnWeb/Half-Truth"
              className="footer__link"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </li>
          <li className="footer__item">
            <a
              href="https://www.linkedin.com/in/cristinaporteiro/"
              className="footer__link"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;

import './HomePage.scss';
import Button from '../../components/Button/Button';

const HomePage = () => {
  return (
    <>
      <h1>Home</h1>
      <Button to="/cases" variant="primary">
        Ver casos
      </Button>

      <Button to="/cases" variant="secondary">
        Ver todos los casos
      </Button>
    </>
  );
};

export default HomePage;

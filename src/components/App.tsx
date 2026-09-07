import { Routes, Route } from 'react-router-dom';
import HomePage from '../pages/HomePage/HomePage';
import CasesPage from '../pages/CasesPage/CasesPage';
import CaseDetailPage from '../pages/CaseDetailPage/CaseDetailPage';
import NotFoundPage from '../pages/NotFoundPage/NotFoundPage';
import Header from './Header/Header';
import Footer from './Footer/Footer';
// import ls from '../services/localStorage';

function App() {
  return (
    <>
      <Header />
      <main className="main">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/cases" element={<CasesPage />} />
          <Route path="/cases/:id" element={<CaseDetailPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;

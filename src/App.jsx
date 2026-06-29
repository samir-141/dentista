import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './styles/01-variables.css';

// Importamos el Header global
import Header from './elements/Header';
// Importamos tus páginas independientes
import Home from './page/Home';
import Treatments from './page/Treatments';
// Tu componente de tratamientos como página
import AboutMePage from './page/AboutMePage';
import ContactPage from './page/ContactPage';

function App() {
  return (
    <Router>
      <div className="app-layout">
        {/* El Header se renderiza en todas las páginas de forma fija */}
        <Header />

        {/* El contenido principal cambia dinámicamente según la ruta */}
        <main style={{ minHeight: 'calc(100vh - var(--header-height))' }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/tratamientos" element={<Treatments />} />
            <Route path="/sobre-mi" element={<AboutMePage />} />
            <Route path="/contacto" element={<ContactPage />} />

          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
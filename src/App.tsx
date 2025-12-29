import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Expertises from './pages/Expertises';
import Methodology from './pages/Methodology';
import Research from './pages/Research';
import Ethics from './pages/Ethics';
import Publications from './pages/Publications';
import Collaboration from './pages/Collaboration';
import Contact from './pages/Contact';

// IMPORTANT: ce site est figé en vitrine institutionnelle. Toute nouvelle route doit être validée
// stratégiquement avant d’être ajoutée à ce tableau minimal.
const App: React.FC = () => {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50 flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/a-propos" element={<About />} />
            <Route path="/expertises" element={<Expertises />} />
            <Route path="/methodologie" element={<Methodology />} />
            <Route path="/recherche-prospective" element={<Research />} />
            <Route path="/cadres-ethiques" element={<Ethics />} />
            <Route path="/publications" element={<Publications />} />
            <Route path="/modalites-collaboration" element={<Collaboration />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;

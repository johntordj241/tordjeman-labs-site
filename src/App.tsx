import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { AuthProvider } from './contexts/AuthContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Projects from './pages/Projects';
import About from './pages/About';
import Contact from './pages/Contact';
import Market from './pages/Market';
import SocialImpact from './pages/SocialImpact';
import Sectors from './pages/Sectors';
import Blog from './pages/Blog';
import Dashboard from './pages/Dashboard';
import Learning from './pages/Learning';
import Collaboration from './pages/Collaboration';
import Financial from './pages/Financial';
import Admin from './pages/Admin';
import KPI from './pages/KPI';
import Login from './pages/Login';
import SignUp from './pages/SignUp';

const App: React.FC = () => {
  return (
    <Router>
      <AuthProvider>
        <div className="min-h-screen bg-gray-50 flex flex-col">
          <Navbar />
          <Toaster position="top-right" />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/market" element={<Market />} />
              <Route path="/engagement-societal" element={<SocialImpact />} />
              <Route path="/sectors" element={<Sectors />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/learning" element={<Learning />} />
              <Route path="/collaboration" element={<Collaboration />} />
              <Route path="/financial" element={<Financial />} />
              <Route path="/admin" element={<Admin />} />
              <Route path="/kpi" element={<KPI />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </AuthProvider>
    </Router>
  );
};

export default App;
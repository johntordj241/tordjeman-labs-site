import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import logo from '../assets/logo.png';

const navItems = [
  { path: '/a-propos', label: 'À propos' },
  { path: '/expertises', label: 'Axes d’expertise' },
  { path: '/methodologie', label: 'Méthodologie' },
  { path: '/recherche-prospective', label: 'Recherche' },
  { path: '/cadres-ethiques', label: 'Cadres éthiques' },
  { path: '/publications', label: 'Publications' },
  { path: '/modalites-collaboration', label: 'Modalités' },
  { path: '/contact', label: 'Contact' }
];

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const renderNavLink = (item: typeof navItems[number]) => (
    <Link
      key={item.path}
      to={item.path}
      onClick={() => setIsOpen(false)}
      className={`text-sm transition-colors ${
        isActive(item.path)
          ? 'text-blue-900 font-semibold'
          : 'text-gray-600 hover:text-blue-900'
      }`}
    >
      {item.label}
    </Link>
  );

  return (
    <nav className="fixed w-full bg-white/90 backdrop-blur-sm z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-3">
              <img
                src={logo}
                alt="Tordjeman Labs"
                className="h-10 w-auto object-contain"
                loading="lazy"
              />
              <span className="text-lg font-bold text-gray-900 hidden sm:inline-block">
                Tordjeman Labs
              </span>
            </Link>
          </div>

          <div className="hidden lg:flex items-center space-x-6">
            {navItems.slice(0, navItems.length - 1).map(renderNavLink)}
            <Link
              to="/contact"
              onClick={() => setIsOpen(false)}
              className="ml-4 inline-flex items-center px-4 py-2 rounded-full text-sm font-semibold text-white bg-blue-900 hover:bg-blue-800 transition-colors"
            >
              Nous contacter
            </Link>
          </div>

          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-blue-900"
              aria-label="Ouvrir le menu principal"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 shadow-sm">
          <div className="px-4 py-4 space-y-3">
            {navItems.map(item => (
              <div key={item.path}>{renderNavLink(item)}</div>
            ))}
            <Link
              to="/contact"
              onClick={() => setIsOpen(false)}
              className="block text-center px-4 py-2 rounded-full text-sm font-semibold text-white bg-blue-900 hover:bg-blue-800 transition-colors"
            >
              Planifier un échange
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

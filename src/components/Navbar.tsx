import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Beaker, LogOut, User, Shield, BarChart3 } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const { user, profile, isAdmin, signOut } = useAuth();

  const isActive = (path: string) => location.pathname === path;

  const publicLinks = [
    { path: '/', label: 'Accueil' },
    { path: '/projects', label: 'Projets' },
    { path: '/about', label: 'À propos' },
    { path: '/sectors', label: 'Secteurs' },
    { path: '/market', label: 'Marché' },
    { path: '/learning', label: 'Formation' },
    { path: '/contact', label: 'Contact' }
  ];

  const userLinks = [
    { path: '/dashboard', label: 'Dashboard' },
    { path: '/collaboration', label: 'Collaboration' },
    { path: '/financial', label: 'Finance' }
  ];

  const adminLinks = [
    { path: '/admin', label: 'Admin', icon: Shield },
    { path: '/kpi', label: 'KPI', icon: BarChart3 }
  ];

  const handleSignOut = async () => {
    await signOut();
    setIsOpen(false);
  };

  return (
    <nav className="fixed w-full bg-white/90 backdrop-blur-sm z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <Beaker className="h-8 w-8 text-blue-900" />
              <span className="text-xl font-bold text-gray-900">Tordjeman Labs</span>
            </Link>
          </div>

          <div className="hidden lg:flex items-center space-x-6">
            {publicLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm ${
                  isActive(link.path)
                    ? 'text-blue-900 font-medium'
                    : 'text-gray-700 hover:text-blue-900'
                }`}
              >
                {link.label}
              </Link>
            ))}

            {user && userLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm ${
                  isActive(link.path)
                    ? 'text-blue-900 font-medium'
                    : 'text-gray-700 hover:text-blue-900'
                }`}
              >
                {link.label}
              </Link>
            ))}

            {isAdmin && (
              <div className="flex items-center space-x-2 border-l border-gray-300 pl-6 ml-2">
                {adminLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`flex items-center space-x-1 text-sm px-3 py-1.5 rounded-lg ${
                      isActive(link.path)
                        ? 'bg-red-100 text-red-700 font-medium'
                        : 'text-red-600 hover:bg-red-50'
                    }`}
                  >
                    <link.icon className="h-4 w-4" />
                    <span>{link.label}</span>
                  </Link>
                ))}
              </div>
            )}

            <div className="flex items-center space-x-3 border-l border-gray-300 pl-6 ml-2">
              {user ? (
                <>
                  <div className="flex items-center space-x-2">
                    <User className="h-5 w-5 text-gray-500" />
                    <span className="text-sm text-gray-700">{profile?.full_name || user.email}</span>
                  </div>
                  <button
                    onClick={handleSignOut}
                    className="flex items-center space-x-1 text-sm text-red-600 hover:text-red-700"
                  >
                    <LogOut className="h-4 w-4" />
                    <span>Déconnexion</span>
                  </button>
                </>
              ) : (
                <>
                  <Link
                    to="/login"
                    className="text-sm text-gray-700 hover:text-blue-900"
                  >
                    Connexion
                  </Link>
                  <Link
                    to="/signup"
                    className="text-sm bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
                  >
                    Inscription
                  </Link>
                </>
              )}
            </div>
          </div>

          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-blue-900"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="lg:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-gray-200">
            {publicLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`block px-3 py-2 text-sm ${
                  isActive(link.path)
                    ? 'text-blue-900 font-medium bg-blue-50'
                    : 'text-gray-700 hover:text-blue-900 hover:bg-gray-50'
                }`}
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}

            {user && (
              <>
                <div className="border-t border-gray-200 my-2"></div>
                {userLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`block px-3 py-2 text-sm ${
                      isActive(link.path)
                        ? 'text-blue-900 font-medium bg-blue-50'
                        : 'text-gray-700 hover:text-blue-900 hover:bg-gray-50'
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
              </>
            )}

            {isAdmin && (
              <>
                <div className="border-t border-gray-200 my-2"></div>
                <div className="px-3 py-2 text-xs font-semibold text-red-600 uppercase">
                  Administration
                </div>
                {adminLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`flex items-center space-x-2 px-3 py-2 text-sm ${
                      isActive(link.path)
                        ? 'text-red-700 font-medium bg-red-50'
                        : 'text-red-600 hover:bg-red-50'
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    <link.icon className="h-4 w-4" />
                    <span>{link.label}</span>
                  </Link>
                ))}
              </>
            )}

            <div className="border-t border-gray-200 my-2"></div>
            {user ? (
              <>
                <div className="px-3 py-2 text-sm text-gray-700">
                  {profile?.full_name || user.email}
                </div>
                <button
                  onClick={handleSignOut}
                  className="w-full text-left px-3 py-2 text-sm text-red-600 hover:bg-red-50"
                >
                  Déconnexion
                </button>
              </>
            ) : (
              <>
                <Link
                  to="/login"
                  className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-50"
                  onClick={() => setIsOpen(false)}
                >
                  Connexion
                </Link>
                <Link
                  to="/signup"
                  className="block px-3 py-2 text-sm text-blue-600 font-medium hover:bg-blue-50"
                  onClick={() => setIsOpen(false)}
                >
                  Inscription
                </Link>
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
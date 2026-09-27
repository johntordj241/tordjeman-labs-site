import React from 'react';
import { Link } from 'react-router-dom';
import { Home, ArrowLeft } from 'lucide-react';

export default function NotFound() {
  React.useEffect(() => {
    // Update page title
    document.title = 'Page non trouvée — Tordjeman Labs';

    // Set meta description
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', 'La page demandée n\'existe pas. Retournez à l\'accueil.');
    }

    // Set canonical
    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!canonical) {
      canonical = document.createElement('link') as HTMLLinkElement;
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }
    canonical.href = 'https://www.tordjemanlabs.com/';

    // Add noindex, follow for SEO
    let robots = document.querySelector('meta[name="robots"]');
    if (!robots) {
      robots = document.createElement('meta');
      robots.setAttribute('name', 'robots');
      document.head.appendChild(robots);
    }
    robots.setAttribute('content', 'noindex, follow');
  }, []);

  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full text-center">
        {/* 404 Number */}
        <div className="mb-8">
          <h1 className="text-9xl font-bold text-blue-900 opacity-20">404</h1>
        </div>

        {/* Main Message */}
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Page non trouvée
        </h2>

        <p className="text-lg text-gray-600 mb-8">
          Désolé, la page que vous recherchez n'existe pas ou a été déplacée.
        </p>

        {/* Navigation Links */}
        <div className="space-y-4">
          <Link
            to="/"
            className="inline-flex items-center justify-center px-6 py-3 bg-blue-900 text-white font-semibold rounded-lg hover:bg-blue-800 transition-colors w-full"
          >
            <Home className="h-5 w-5 mr-2" />
            Retourner à l'accueil
          </Link>

          <button
            onClick={() => window.history.back()}
            className="inline-flex items-center justify-center px-6 py-3 border-2 border-gray-300 text-gray-700 font-semibold rounded-lg hover:border-gray-400 hover:bg-gray-50 transition-colors w-full"
          >
            <ArrowLeft className="h-5 w-5 mr-2" />
            Retour à la page précédente
          </button>
        </div>

        {/* Help Text */}
        <div className="mt-12 p-6 bg-gray-50 rounded-lg">
          <p className="text-sm text-gray-600">
            Si vous pensez que cela est une erreur, contactez-nous à{' '}
            <a
              href="mailto:contact@tordjemanlabs.com"
              className="text-blue-900 font-semibold hover:underline"
            >
              contact@tordjemanlabs.com
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

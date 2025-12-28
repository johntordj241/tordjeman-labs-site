import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup, ZoomControl } from 'react-leaflet';
import { Icon, LatLngBounds, LatLng } from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { Brain, Building2, Leaf, Tractor, Zap, Heart, Search, Filter, Maximize2, X } from 'lucide-react';

// Création des icônes personnalisées pour chaque secteur
const createCustomIcon = (color: string) => new Icon({
  iconUrl: `data:image/svg+xml;base64,${btoa(`
    <svg width="25" height="41" viewBox="0 0 25 41" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12.5 0C5.59644 0 0 5.59644 0 12.5C0 21.875 12.5 41 12.5 41C12.5 41 25 21.875 25 12.5C25 5.59644 19.4036 0 12.5 0Z" fill="${color}"/>
      <circle cx="12.5" cy="12.5" r="5.5" fill="white"/>
    </svg>
  `)}`,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [0, -41]
});

const icons = {
  'Intelligence Artificielle': createCustomIcon('#4A90E2'),
  'Villes Intelligentes': createCustomIcon('#9B51E0'),
  'Technologies Vertes': createCustomIcon('#27AE60'),
  'Agriculture Durable': createCustomIcon('#F2994A'),
  'Énergies Renouvelables': createCustomIcon('#EB5757'),
  'Innovation Sociétale': createCustomIcon('#BB6BD9')
};

interface Project {
  id: string;
  name: string;
  description: string;
  sector: keyof typeof icons;
  position: [number, number];
  impact: {
    co2: number;
    beneficiaries: number;
    efficiency: number;
  };
  status: 'En cours' | 'Terminé' | 'Planifié';
  city: string;
  country: string;
}

const projects: Project[] = [
  {
    id: 'smartgrid-paris',
    name: 'SmartGrid Paris',
    description: 'Réseau intelligent de gestion énergétique urbaine',
    sector: 'Villes Intelligentes',
    position: [48.8566, 2.3522],
    impact: {
      co2: 30,
      beneficiaries: 100000,
      efficiency: 40
    },
    status: 'En cours',
    city: 'Paris',
    country: 'France'
  },
  {
    id: 'farmtech-bordeaux',
    name: 'FarmTech Bordeaux',
    description: 'Système d\'irrigation intelligent pour vignobles',
    sector: 'Agriculture Durable',
    position: [44.8378, -0.5792],
    impact: {
      co2: 20,
      beneficiaries: 500,
      efficiency: 45
    },
    status: 'En cours',
    city: 'Bordeaux',
    country: 'France'
  },
  {
    id: 'solarhub-marseille',
    name: 'SolarHub Marseille',
    description: 'Centrale solaire intelligente nouvelle génération',
    sector: 'Énergies Renouvelables',
    position: [43.2965, 5.3698],
    impact: {
      co2: 50,
      beneficiaries: 2000,
      efficiency: 85
    },
    status: 'Terminé',
    city: 'Marseille',
    country: 'France'
  }
];

interface InteractiveMapProps {
  selectedSector?: string;
}

export default function InteractiveMap({ selectedSector }: InteractiveMapProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState<string>('all');
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [mapRef, setMapRef] = useState<L.Map | null>(null);

  // Filtrer les projets en fonction des critères
  const filteredProjects = projects.filter(project => {
    const matchesSearch = project.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.city.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesSector = !selectedSector || project.sector === selectedSector;
    const matchesStatus = statusFilter === 'all' || project.status === statusFilter;
    
    return matchesSearch && matchesSector && matchesStatus;
  });

  // Calculer les statistiques globales
  const globalStats = filteredProjects.reduce((acc, project) => ({
    co2: acc.co2 + project.impact.co2,
    beneficiaries: acc.beneficiaries + project.impact.beneficiaries,
    efficiency: acc.efficiency + project.impact.efficiency
  }), { co2: 0, beneficiaries: 0, efficiency: 0 });

  // Ajuster la vue de la carte quand les filtres changent
  useEffect(() => {
    if (mapRef && filteredProjects.length > 0) {
      const bounds = new LatLngBounds(
        filteredProjects.map(p => new LatLng(p.position[0], p.position[1]))
      );
      mapRef.fitBounds(bounds, { padding: [50, 50] });
    }
  }, [filteredProjects, mapRef]);

  return (
    <div className={`relative ${isFullscreen ? 'fixed inset-0 z-50 bg-white' : 'h-[500px]'}`}>
      {/* Contrôles et filtres */}
      <div className="absolute top-4 left-4 z-10 bg-white rounded-lg shadow-lg p-4 max-w-sm">
        <div className="flex items-center mb-4">
          <Search className="h-5 w-5 text-gray-400 mr-2" />
          <input
            type="text"
            placeholder="Rechercher un projet..."
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        
        <div className="mb-4">
          <select
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
          >
            <option value="all">Tous les statuts</option>
            <option value="En cours">En cours</option>
            <option value="Terminé">Terminés</option>
            <option value="Planifié">Planifiés</option>
          </select>
        </div>

        {/* Statistiques globales */}
        <div className="bg-gray-50 p-3 rounded-md">
          <h4 className="text-sm font-semibold mb-2">Impact Global</h4>
          <div className="grid grid-cols-3 gap-2 text-center text-sm">
            <div>
              <div className="font-bold text-blue-900">{globalStats.co2}%</div>
              <div className="text-xs text-gray-600">CO₂ réduit</div>
            </div>
            <div>
              <div className="font-bold text-blue-900">{globalStats.beneficiaries}</div>
              <div className="text-xs text-gray-600">Bénéficiaires</div>
            </div>
            <div>
              <div className="font-bold text-blue-900">{Math.round(globalStats.efficiency / filteredProjects.length)}%</div>
              <div className="text-xs text-gray-600">Efficacité</div>
            </div>
          </div>
        </div>
      </div>

      {/* Bouton plein écran */}
      <button
        onClick={() => setIsFullscreen(!isFullscreen)}
        className="absolute top-4 right-4 z-10 bg-white p-2 rounded-lg shadow-lg"
      >
        {isFullscreen ? <X className="h-5 w-5" /> : <Maximize2 className="h-5 w-5" />}
      </button>

      {/* Légende */}
      <div className="absolute bottom-4 left-4 z-10 bg-white rounded-lg shadow-lg p-4">
        <h4 className="text-sm font-semibold mb-2">Légende</h4>
        <div className="grid grid-cols-2 gap-2">
          {Object.entries(icons).map(([sector]) => (
            <div key={sector} className="flex items-center text-xs">
              <div
                className="w-3 h-3 rounded-full mr-2"
                style={{ backgroundColor: sector === 'Intelligence Artificielle' ? '#4A90E2' :
                                       sector === 'Villes Intelligentes' ? '#9B51E0' :
                                       sector === 'Technologies Vertes' ? '#27AE60' :
                                       sector === 'Agriculture Durable' ? '#F2994A' :
                                       sector === 'Énergies Renouvelables' ? '#EB5757' :
                                       '#BB6BD9' }}
              />
              {sector}
            </div>
          ))}
        </div>
      </div>

      {/* Carte */}
      <MapContainer
        center={[46.603354, 1.888334]}
        zoom={6}
        style={{ height: '100%', width: '100%' }}
        zoomControl={false}
        ref={setMapRef}
      >
        <ZoomControl position="bottomright" />
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        />
        {filteredProjects.map((project) => (
          <Marker
            key={project.id}
            position={project.position}
            icon={icons[project.sector]}
          >
            <Popup>
              <div className="p-3">
                <h3 className="font-bold text-lg mb-2">{project.name}</h3>
                <p className="text-sm text-gray-600 mb-2">{project.description}</p>
                <div className="text-sm">
                  <p className="font-medium">📍 {project.city}, {project.country}</p>
                  <p className="font-medium mt-1">
                    Status: <span className={
                      project.status === 'En cours' ? 'text-blue-600' :
                      project.status === 'Terminé' ? 'text-green-600' :
                      'text-orange-600'
                    }>{project.status}</span>
                  </p>
                </div>
                <div className="mt-3 pt-3 border-t border-gray-200">
                  <h4 className="font-medium mb-2">Impact</h4>
                  <div className="grid grid-cols-3 gap-2 text-center text-sm">
                    <div>
                      <div className="font-bold text-blue-900">{project.impact.co2}%</div>
                      <div className="text-xs text-gray-600">CO₂ réduit</div>
                    </div>
                    <div>
                      <div className="font-bold text-blue-900">{project.impact.beneficiaries}</div>
                      <div className="text-xs text-gray-600">Bénéficiaires</div>
                    </div>
                    <div>
                      <div className="font-bold text-blue-900">{project.impact.efficiency}%</div>
                      <div className="text-xs text-gray-600">Efficacité</div>
                    </div>
                  </div>
                </div>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}
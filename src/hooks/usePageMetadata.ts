import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export interface PageMetadata {
  title: string;
  description: string;
  keywords?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  twitterTitle?: string;
  twitterDescription?: string;
  twitterImage?: string;
  canonical?: string;
}

const pageMetadataMap: Record<string, PageMetadata> = {
  '/': {
    title: 'Tordjeman Labs - Hub d\'orchestration & cadrage stratégique',
    description:
      'Laboratoire indépendant de prospective stratégique. Observation des transitions, cadrage d\'arbitrages, gouvernance et coalitions durables.',
    keywords:
      'stratégie, prospective, cadrage, gouvernance, innovation, IA responsable, transition',
    ogTitle: 'Tordjeman Labs',
    ogDescription:
      'Hub d\'orchestration fondé par Georges John Tordjeman — Prospective, cadrage stratégique, gouvernance des transitions.',
    ogImage: 'https://www.tordjemanlabs.com/assets/logo-2VbLVZG5.png',
    twitterTitle: 'Tordjeman Labs',
    twitterDescription:
      'Cadrage stratégique et prospective pour les transitions institutionnelles',
    canonical: 'https://www.tordjemanlabs.com/'
  },
  '/a-propos': {
    title: 'À propos — Tordjeman Labs',
    description:
      'Découvrez le hub Tordjeman Labs, son histoire, ses valeurs et sa gouvernance institutionnelle.',
    keywords: 'Tordjeman, laboratoire, hub stratégique, Nice, cadrage',
    ogTitle: 'À propos de Tordjeman Labs',
    ogDescription:
      'Hub d\'orchestration installé à Nice, observant les transitions systémiques et soutenant les dirigeants.',
    canonical: 'https://www.tordjemanlabs.com/a-propos'
  },
  '/expertises': {
    title: 'Axes d\'expertise — Tordjeman Labs',
    description:
      'Six axes d\'expertise : IA responsable, territoires résilients, santé intégrative, transition énergétique, cybersécurité, coalitions.',
    keywords:
      'IA responsable, transition énergétique, cybersécurité, santé, résilience territoriale, gouvernance',
    ogTitle: 'Nos axes d\'expertise',
    ogDescription: 'Capacités au service des transitions institutionnelles',
    canonical: 'https://www.tordjemanlabs.com/expertises'
  },
  '/methodologie': {
    title: 'Méthodologie — Tordjeman Labs',
    description:
      'Démarche éprouvée en 5 étapes : observation, cadres éthiques, modélisation, itération, capitalisation.',
    keywords: 'méthodologie, cadrage stratégique, processus, gouvernance',
    ogTitle: 'Notre méthodologie',
    ogDescription:
      'Approche sobre, documentée et transférable pour le cadrage stratégique',
    canonical: 'https://www.tordjemanlabs.com/methodologie'
  },
  '/recherche-prospective': {
    title: 'Recherche & Prospective — Tordjeman Labs',
    description:
      'Axes de recherche appliquée : IA et mémoires longues, cybersécurité, gouvernance multipartite, scénarisation 2026-2035.',
    keywords:
      'recherche, prospective, IA, cybersécurité, scénarios, horizon 2030',
    ogTitle: 'Recherche & Prospective',
    ogDescription:
      'Veille transdisciplinaire et scénarisation pour les transitions',
    canonical: 'https://www.tordjemanlabs.com/recherche-prospective'
  },
  '/cadres-ethiques': {
    title: 'Cadres éthiques — Tordjeman Labs',
    description:
      'Charte éthique opposable, comité de vigilance pluridisciplinaire, évaluations d\'impact, protection des données sensibles.',
    keywords: 'éthique, gouvernance, responsabilité, compliance, RGPD',
    ogTitle: 'Cadres éthiques',
    ogDescription: 'Socle commun pour sécuriser l\'innovation responsable',
    canonical: 'https://www.tordjemanlabs.com/cadres-ethiques'
  },
  '/publications': {
    title: 'Publications — Tordjeman Labs',
    description:
      'Sélection de guides stratégiques et documents accessibles librement : gouvernance IA, résilience énergétique, coalitions ONG.',
    keywords: 'publications, guides, ressources, documents, accès libre',
    ogTitle: 'Publications',
    ogDescription: 'Ressources stratégiques accessibles librement',
    canonical: 'https://www.tordjemanlabs.com/publications'
  },
  '/modalites-collaboration': {
    title: 'Modalités de collaboration — Tordjeman Labs',
    description:
      'Formats de collaboration : recherche appliquée, architecture stratégique, conseil gouvernance pour institutions et PME.',
    keywords:
      'collaboration, partenariat, mission, cadrage, services, accompagnement',
    ogTitle: 'Modalités de collaboration',
    ogDescription:
      'Formats d\'accompagnement pour institutions, ONG et PME/ETI',
    canonical: 'https://www.tordjemanlabs.com/modalites-collaboration'
  },
  '/contact': {
    title: 'Contact — Tordjeman Labs',
    description:
      'Contactez Tordjeman Labs pour initier une mission ou se renseigner sur nos services institutionnels.',
    keywords: 'contact, réunion, mission, qualification, collaboration',
    ogTitle: 'Entrer en relation',
    ogDescription: 'Canaux de contact institutionnels et prise de rendez-vous',
    canonical: 'https://www.tordjemanlabs.com/contact'
  }
};

/**
 * Hook to update page metadata (title, meta tags) on route change
 */
export function usePageMetadata(): void {
  const location = useLocation();

  useEffect(() => {
    const metadata = pageMetadataMap[location.pathname] || pageMetadataMap['/'];

    // Update title
    document.title = metadata.title;

    // Update or create meta tags
    updateMetaTag('name', 'description', metadata.description);
    if (metadata.keywords) {
      updateMetaTag('name', 'keywords', metadata.keywords);
    }

    updateMetaTag('property', 'og:title', metadata.ogTitle || metadata.title);
    updateMetaTag('property', 'og:description', metadata.ogDescription || metadata.description);
    updateMetaTag('property', 'og:url', `https://www.tordjemanlabs.com${location.pathname}`);
    if (metadata.ogImage) {
      updateMetaTag('property', 'og:image', metadata.ogImage);
    }
    updateMetaTag('property', 'og:type', 'website');

    updateMetaTag('name', 'twitter:card', 'summary_large_image');
    updateMetaTag('name', 'twitter:title', metadata.twitterTitle || metadata.title);
    updateMetaTag('name', 'twitter:description', metadata.twitterDescription || metadata.description);
    if (metadata.twitterImage) {
      updateMetaTag('name', 'twitter:image', metadata.twitterImage);
    }

    // Update canonical
    updateCanonical(metadata.canonical || `https://www.tordjemanlabs.com${location.pathname}`);
  }, [location]);
}

function updateMetaTag(attrName: string, attrValue: string, content: string): void {
  let element = document.querySelector(
    `meta[${attrName}="${attrValue}"]`
  ) as HTMLMetaElement | null;

  if (!element) {
    element = document.createElement('meta');
    element.setAttribute(attrName, attrValue);
    document.head.appendChild(element);
  }

  element.content = content;
}

function updateCanonical(url: string): void {
  let link = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;

  if (!link) {
    link = document.createElement('link');
    link.rel = 'canonical';
    document.head.appendChild(link);
  }

  link.href = url;
}

/**
 * JSON-LD Structured Data Schemas
 * Generates schema.org structured data for rich snippets
 */

interface OrganizationSchema {
  '@context': string;
  '@type': string;
  name: string;
  url: string;
  logo: string;
  description: string;
  sameAs: string[];
  address: {
    '@type': string;
    streetAddress: string;
    addressLocality: string;
    addressRegion: string;
    postalCode: string;
    addressCountry: string;
  };
  contactPoint: Array<{
    '@type': string;
    contactType: string;
    telephone: string;
    email: string;
  }>;
}

interface WebsiteSchema {
  '@context': string;
  '@type': string;
  url: string;
  name: string;
  description: string;
  potentialAction: {
    '@type': string;
    target: string;
    'query-input': string;
  };
}

interface BreadcrumbSchema {
  '@context': string;
  '@type': string;
  itemListElement: Array<{
    '@type': string;
    position: number;
    name: string;
    item?: string;
  }>;
}

export function getOrganizationSchema(): OrganizationSchema {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Tordjeman Labs',
    url: 'https://www.tordjemanlabs.com',
    logo: 'https://www.tordjemanlabs.com/assets/logo-2VbLVZG5.png',
    description:
      'Hub d\'orchestration stratégique fondé par Georges John Tordjeman. Prospective, cadrage d\'arbitrages, gouvernance des transitions pour institutions, PME et coalitions.',
    sameAs: [
      'https://www.linkedin.com/company/tordjeman-labs'
      // TODO: Ajouter profils sociaux officiels si disponibles
    ],
    address: {
      '@type': 'PostalAddress',
      streetAddress: '10 rue de la Paix',
      addressLocality: 'Paris',
      addressRegion: 'Île-de-France',
      postalCode: '75002',
      addressCountry: 'FR'
    },
    contactPoint: [
      {
        '@type': 'ContactPoint',
        contactType: 'Customer Support',
        telephone: '+33 1 84 80 22 00',
        email: 'contact@tordjemanlabs.com'
      },
      {
        '@type': 'ContactPoint',
        contactType: 'Customer Support',
        telephone: '+33 7 49 80 32 43',
        email: 'contact@tordjemanlabs.com'
      }
    ]
  };
}

export function getWebsiteSchema(): WebsiteSchema {
  return {
    '@context': 'https://schema.org',
    '@type': 'Website',
    url: 'https://www.tordjemanlabs.com',
    name: 'Tordjeman Labs',
    description:
      'Hub d\'orchestration stratégique pour les transitions institutionnelles',
    potentialAction: {
      '@type': 'SearchAction',
      target: 'https://www.tordjemanlabs.com/?q={search_term_string}',
      'query-input': 'required name=search_term_string'
    }
  };
}

export function getBreadcrumbSchema(items: Array<{ name: string; url?: string }>): BreadcrumbSchema {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      ...(item.url && { item: item.url })
    }))
  };
}

/**
 * Inject JSON-LD schema into head
 */
export function injectSchema(schema: object): void {
  const script = document.createElement('script');
  script.type = 'application/ld+json';
  script.textContent = JSON.stringify(schema);
  document.head.appendChild(script);
}

/**
 * Inject all base schemas on page load
 */
export function initializeSchemas(): void {
  injectSchema(getOrganizationSchema());
  injectSchema(getWebsiteSchema());
}

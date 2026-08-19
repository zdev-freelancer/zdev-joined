import { routes } from './routes';

/**
 * Configuración global del sitio: metadatos, navegación, footer y redes.
 * Centralizado aquí (prompt §6.2); todos los paths salen de `routes.ts`.
 * Los enlaces sociales y el dominio quedan como [PLACEHOLDER] hasta los reales.
 */

export interface NavItem {
  readonly label: string;
  readonly href: string;
}

export interface FooterGroup {
  readonly title: string;
  readonly links: readonly NavItem[];
}

export interface SocialLink {
  readonly label: string;
  readonly href: string;
  /** Clave que el footer usa para elegir el SVG correspondiente. */
  readonly icon: 'x' | 'instagram' | 'linkedin' | 'github';
}

export interface SiteConfig {
  readonly name: string;
  readonly domain: string;
  readonly url: string;
  readonly tagline: string;
  readonly description: string;
  readonly ogImage: string;
  readonly nav: readonly NavItem[];
  readonly footerGroups: readonly FooterGroup[];
  readonly social: readonly SocialLink[];
}

export const siteConfig: SiteConfig = {
  name: 'Joined',
  domain: 'joined.example', // [PLACEHOLDER] — reemplazar con el dominio real.
  url: 'https://joined.example',
  tagline: 'Cuero que se une a tu vida.',
  description:
    'Joined es un ecosistema de accesorios de cuero hechos a mano para durar toda una vida — piezas que se unen entre sí y a tu forma de vivir.',
  ogImage: '/assets/og/joined-og.png',
  nav: [
    { label: 'Colección', href: routes.coleccion },
    { label: 'El oficio', href: routes.oficio },
    { label: 'Voces', href: routes.voces },
    { label: 'Únete', href: routes.unete },
  ],
  footerGroups: [
    {
      title: 'Producto',
      links: [
        { label: 'Colección', href: routes.coleccion },
        { label: 'Novedades', href: routes.novedades },
        { label: 'Cuidado del cuero', href: routes.cuidado },
      ],
    },
    {
      title: 'Compañía',
      links: [
        { label: 'El oficio', href: routes.oficio },
        { label: 'Sobre nosotros', href: routes.sobreNosotros },
        { label: 'Talleres', href: routes.talleres },
      ],
    },
    {
      title: 'Legal',
      links: [
        { label: 'Privacidad', href: routes.privacidad },
        { label: 'Términos', href: routes.terminos },
        { label: 'Cookies', href: routes.cookies },
      ],
    },
  ],
  social: [
    { label: 'X', href: '#', icon: 'x' }, // [PLACEHOLDER] — enlaces reales
    { label: 'Instagram', href: '#', icon: 'instagram' },
    { label: 'LinkedIn', href: '#', icon: 'linkedin' },
    { label: 'GitHub', href: '#', icon: 'github' },
  ],
} as const;

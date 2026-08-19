/**
 * Mapa de rutas — fuente única de verdad de la navegación (Screaming
 * Architecture). Ninguna feature ni el footer incrustan paths a mano; todos los
 * enlaces se derivan de aquí, de modo que renombrar una vista es un solo cambio.
 * Las anclas de la home son absolutas (`/#id`) para que funcionen desde subpáginas.
 */
export const routes = {
  home: '/',
  coleccion: '/coleccion',
  oficio: '/oficio',
  novedades: '/novedades',
  cuidado: '/cuidado',
  sobreNosotros: '/sobre-nosotros',
  talleres: '/talleres',
  privacidad: '/privacidad',
  terminos: '/terminos',
  cookies: '/cookies',
  // Anclas de la home (secciones de la landing).
  voces: '/#voces',
  unete: '/#newsletter',
} as const;

/** URL de la vista de detalle de una pieza de la colección. */
export function pieceHref(slug: string): string {
  return `${routes.coleccion}/${slug}`;
}

/** Un path es interno si vive en este sitio (para decidir cliente-routing). */
export function isInternalHref(href: string): boolean {
  return href.startsWith('/') || href.startsWith('#');
}

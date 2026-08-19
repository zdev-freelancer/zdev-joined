import type { Piece } from './collection.types';

/**
 * Catálogo de piezas (contenido [PLACEHOLDER], sin precios inventados — prompt
 * §3.4). Fuente de datos de la vista de colección y del detalle; los enlaces a
 * piezas se derivan del `slug`, nunca se escriben a mano.
 */
export const PIECES: readonly Piece[] = [
  {
    slug: 'bolso-atlas',
    name: 'Bolso Atlas',
    category: 'Bolsos',
    summary: 'El compañero de viaje que envejece contigo.',
    description:
      'Un bolso de una sola pieza pensado para durar décadas. Cuero de curtido vegetal que gana carácter con cada kilómetro, cosido a mano con hilo encerado.',
    details: ['Cuero de curtido vegetal', 'Cosido a mano', 'Medidas [PLACEHOLDER]', 'Forro interior de algodón'],
  },
  {
    slug: 'billetera-nomada',
    name: 'Billetera Nómada',
    category: 'Billeteras',
    summary: 'Lo esencial, sin peso de más.',
    description:
      'Una billetera fina que se moldea a tu bolsillo con el uso. Pocas costuras, ningún exceso — solo el espacio justo para lo que llevas cada día.',
    details: ['Cuero de plena flor', 'Seis ranuras', 'Acabado a mano', 'Pátina única con el tiempo'],
  },
  {
    slug: 'correa-meridiano',
    name: 'Correa Meridiano',
    category: 'Correas',
    summary: 'La pieza que une el resto del ecosistema.',
    description:
      'Una correa intercambiable que conecta bolsos, cámaras y estuches. La idea de Joined hecha objeto: piezas que se unen entre sí.',
    details: ['Cuero macizo', 'Herrajes de latón', 'Longitud ajustable', 'Compatible con la colección'],
  },
  {
    slug: 'tarjetero-hito',
    name: 'Tarjetero Hito',
    category: 'Tarjeteros',
    summary: 'Pequeño, preciso, para toda la vida.',
    description:
      'Un tarjetero de tres ranuras cortado de una sola pieza y doblado sin costuras internas. La marroquinería reducida a su esencia.',
    details: ['Una sola pieza de cuero', 'Tres ranuras', 'Sin costuras internas', 'Cabe en cualquier bolsillo'],
  },
  {
    slug: 'cinturon-vertice',
    name: 'Cinturón Vértice',
    category: 'Cinturones',
    summary: 'Un cinturón que heredarás.',
    description:
      'Cortado de la parte más noble de la piel, con hebilla desmontable para que dure más que cualquier moda. Se ablanda y se hace tuyo.',
    details: ['Cuero macizo', 'Hebilla desmontable de latón', 'Grabado opcional [PLACEHOLDER]', 'Hecho a mano'],
  },
  {
    slug: 'portadocumentos-ruta',
    name: 'Portadocumentos Ruta',
    category: 'Portadocumentos',
    summary: 'Para los papeles que importan.',
    description:
      'Un portadocumentos plano y estructurado, pensado para la oficina y el viaje. Protege lo esencial y se ve mejor con los años.',
    details: ['Cuero de curtido vegetal', 'Cierre magnético oculto', 'Bolsillo para portátil [PLACEHOLDER]', 'Cosido a mano'],
  },
] as const;

/** Slug de la pieza destacada, usada por el banner de la home. */
export const FEATURED_SLUG = 'bolso-atlas';

export function getPiece(slug: string): Piece | undefined {
  return PIECES.find((piece) => piece.slug === slug);
}

export function getAllSlugs(): string[] {
  return PIECES.map((piece) => piece.slug);
}

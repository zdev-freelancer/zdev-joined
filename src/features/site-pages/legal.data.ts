/**
 * Contenido de las páginas legales ([PLACEHOLDER] — reemplazar con textos legales
 * reales antes de publicar). Cada documento se identifica por su slug de ruta.
 */
export type LegalSlug = 'privacidad' | 'terminos' | 'cookies';

export interface LegalSection {
  readonly heading: string;
  readonly body: string;
}

export interface LegalDoc {
  readonly title: string;
  readonly intro: string;
  readonly sections: readonly LegalSection[];
}

export const LEGAL: Record<LegalSlug, LegalDoc> = {
  privacidad: {
    title: 'Política de privacidad',
    intro:
      '[PLACEHOLDER] Este es un texto de ejemplo. Describe qué datos recopila Joined, con qué fin y cómo puedes ejercer tus derechos.',
    sections: [
      { heading: 'Datos que recopilamos', body: '[PLACEHOLDER] Detalla los datos personales que se recogen al navegar o comprar.' },
      { heading: 'Uso de la información', body: '[PLACEHOLDER] Explica las finalidades del tratamiento de datos.' },
      { heading: 'Tus derechos', body: '[PLACEHOLDER] Acceso, rectificación, supresión y cómo contactarnos.' },
    ],
  },
  terminos: {
    title: 'Términos y condiciones',
    intro:
      '[PLACEHOLDER] Este es un texto de ejemplo. Establece las condiciones de uso del sitio y de compra de las piezas.',
    sections: [
      { heading: 'Uso del sitio', body: '[PLACEHOLDER] Condiciones generales de navegación y contenido.' },
      { heading: 'Pedidos y pagos', body: '[PLACEHOLDER] Proceso de compra, precios y métodos de pago.' },
      { heading: 'Devoluciones', body: '[PLACEHOLDER] Plazos y condiciones para cambios y devoluciones.' },
    ],
  },
  cookies: {
    title: 'Política de cookies',
    intro:
      '[PLACEHOLDER] Este es un texto de ejemplo. Explica qué cookies usa el sitio y cómo gestionarlas.',
    sections: [
      { heading: '¿Qué son las cookies?', body: '[PLACEHOLDER] Definición y propósito general.' },
      { heading: 'Cookies que usamos', body: '[PLACEHOLDER] Técnicas, analíticas y de terceros.' },
      { heading: 'Cómo gestionarlas', body: '[PLACEHOLDER] Cómo configurarlas o desactivarlas en tu navegador.' },
    ],
  },
};

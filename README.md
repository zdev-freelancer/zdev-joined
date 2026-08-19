# Joined — Accesorios de cuero

Sitio de marca de **Joined**: accesorios de cuero hechos a mano, con narrativa de
ecosistema / estilo de vida. Construido con Next.js (App Router) + TypeScript
estricto, siguiendo _Screaming Architecture_ y principios SOLID.

## Stack

- **Next.js 14** (App Router) + **TypeScript** estricto
- **Tailwind CSS** con design tokens (color y tipografía derivados del logo)
- **Framer Motion** (animaciones GPU, respeta `prefers-reduced-motion`)
- **class-variance-authority** para variantes de UI
- Tipografía única **Switzer** (self-host, `next/font/local`, redonda + cursiva)
- ESLint con límites de import entre capas (Screaming Architecture)

## Paleta (derivada del logo)

- Fondo `#0A0D16` · Crema `#FEF1E1` — los tonos intermedios son interpolaciones,
  sin colores ajenos a la marca.

## Arquitectura

```
src/
  app/                 # solo enrutado (App Router)
    (site)/            # shell con Navbar + Footer
      page.tsx         # home
      coleccion/       # /coleccion + /coleccion/[slug] (SSG)
      oficio/  novedades/  cuidado/  sobre-nosotros/  talleres/
      privacidad/  terminos/  cookies/
  features/            # dominio: navbar, hero, feature-showcase,
                       # editorial-split, social-proof, newsletter-cta,
                       # footer, collection, site-pages
  shared/              # transversal: ui (cva), layout, hooks, animations, fonts
  config/              # site.config.ts, routes.ts (fuente única de rutas)
  styles/              # tokens.css
brand/                 # pipeline de activos (/canvas-design) + render-assets.mjs
```

## Desarrollo

```bash
npm install
npm run dev      # http://localhost:3000
```

```bash
npm run build    # build de producción
npm run lint     # ESLint (incluye límites de import)
npm run typecheck
```

## Activos de marca

Favicon, apple-icon, imagen OG y el gráfico del hero se generan con
`node brand/render-assets.mjs` (requiere `@resvg/resvg-js`). Los PNG resultantes
ya están versionados en `public/` y `src/app/`.

> El copy marcado como `[PLACEHOLDER]` (dominio, redes, imágenes de producto y
> textos legales) es contenido de ejemplo pendiente de reemplazo.

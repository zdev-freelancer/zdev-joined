import { Footer } from '@/features/footer';
import { Navbar } from '@/features/navbar';

/**
 * Shell del sitio: Navbar (fijo) + contenido + Footer, compartido por la home y
 * todas las vistas. Así la navegación funciona desde cualquier ruta. El layout
 * raíz (app/layout.tsx) sigue aportando html/body/fuentes/metadatos.
 */
export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}

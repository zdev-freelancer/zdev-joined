import Link from 'next/link';

import { routes, siteConfig } from '@/config';
import { ArrowUpRight, Button, Container, socialIcons, Wordmark } from '@/shared/components';

/**
 * Footer — lockup de marca, redes, columnas de enlaces (derivadas de la config)
 * y un acceso a la CTA (prompt §5.8). El formulario completo vive en la sección
 * newsletter-cta, por eso el footer solo invita a unirse.
 */
export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border py-16 md:py-20">
      <Container>
        <div className="grid gap-12 md:grid-cols-[1.5fr_1fr_1fr_1fr]">
          <div>
            <Link href={routes.home} aria-label={`${siteConfig.name} — inicio`}>
              <Wordmark className="text-2xl" />
            </Link>
            <p className="mt-4 max-w-xs text-body text-fg-muted">{siteConfig.tagline}</p>
            <div className="mt-6 flex gap-2">
              {siteConfig.social.map((social) => {
                const Icon = socialIcons[social.icon];
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="grid h-10 w-10 place-items-center rounded-pill border border-border text-fg-muted transition-colors duration-300 ease-brand hover:border-border-strong hover:text-fg"
                  >
                    <Icon />
                  </a>
                );
              })}
            </div>
            <Button href={routes.unete} variant="outline" size="sm" className="mt-7">
              Únete a la lista
              <ArrowUpRight width={16} height={16} />
            </Button>
          </div>

          {siteConfig.footerGroups.map((group) => (
            <nav key={group.title} aria-label={group.title}>
              <h3 className="text-label uppercase text-fg-faint">{group.title}</h3>
              <ul className="mt-5 space-y-3">
                {group.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-caption text-fg-muted transition-colors hover:text-fg"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-4 border-t border-border pt-8 sm:flex-row sm:items-center">
          {/* [PLACEHOLDER] línea legal */}
          <p className="text-caption text-fg-faint">
            © {year} {siteConfig.name}. Todos los derechos reservados.
          </p>
          <a
            href="#top"
            className="inline-flex items-center gap-1.5 text-caption text-fg-muted transition-colors hover:text-fg"
          >
            Volver arriba
            <ArrowUpRight width={16} height={16} />
          </a>
        </div>
      </Container>
    </footer>
  );
}

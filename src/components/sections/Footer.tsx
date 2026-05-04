import Image from "next/image";
import { Phone, Mail, Clock, MapPin } from "lucide-react";
import { CONTACT, NAV_LINKS, whatsappUrl } from "@/lib/contact";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative bg-ink-950 border-t border-steel-300/10">
      <div
        aria-hidden
        className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent"
      />

      <div className="container-page py-14">
        <div className="grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-5 space-y-5">
            <div className="flex items-center gap-3">
              <div className="relative h-12 w-12">
                <Image
                  src="/europragaslogo.png"
                  alt="Euro Pragas"
                  fill
                  sizes="48px"
                  className="object-contain"
                />
              </div>
              <div>
                <div className="text-white font-extrabold text-lg leading-tight tracking-tight">
                  Euro <span className="text-gold">Pragas</span>
                </div>
                <div className="label-tech text-steel-300 text-[10px]">
                  Controle de Pragas Urbanas em Portugal
                </div>
              </div>
            </div>
            <p className="text-steel-300 text-sm leading-relaxed max-w-md">
              Serviços profissionais de controlo de pragas para residências,
              empresas, condomínios e comércios. Atendimento 24 horas com
              segurança, rapidez e eficácia.
            </p>

            <div className="flex items-center gap-2 text-sm">
              <MapPin className="h-4 w-4 text-gold" aria-hidden />
              <span className="text-steel-200">Portugal · Atendimento nacional</span>
            </div>
          </div>

          <div className="lg:col-span-3">
            <h3 className="label-tech text-gold mb-4">Links rápidos</h3>
            <ul className="space-y-2.5">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-steel-200 text-sm hover:text-gold transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-4 space-y-3">
            <h3 className="label-tech text-gold mb-4">Contactos</h3>
            <a
              href={whatsappUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start gap-3 text-steel-200 hover:text-gold transition-colors group"
            >
              <Phone className="h-4 w-4 text-gold mt-0.5 flex-shrink-0" aria-hidden />
              <span className="text-sm">{CONTACT.phone}</span>
            </a>
            <a
              href={`mailto:${CONTACT.email}`}
              className="flex items-start gap-3 text-steel-200 hover:text-gold transition-colors group"
            >
              <Mail className="h-4 w-4 text-gold mt-0.5 flex-shrink-0" aria-hidden />
              <span className="text-sm break-all">{CONTACT.email}</span>
            </a>
            <div className="flex items-start gap-3 text-steel-200">
              <Clock className="h-4 w-4 text-gold mt-0.5 flex-shrink-0" aria-hidden />
              <span className="text-sm">{CONTACT.hours}</span>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-steel-300/10 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-steel-400">
            © {year} Euro Pragas. Proteção urbana profissional em Portugal.
          </p>
          <div className="flex items-center gap-6">
            <a
              href="#inicio"
              className="text-xs text-steel-400 hover:text-gold transition-colors uppercase tracking-wider"
            >
              Voltar ao topo
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

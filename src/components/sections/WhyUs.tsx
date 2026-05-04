"use client";

import { motion } from "framer-motion";
import {
  Zap,
  Clock,
  ShieldCheck,
  Users,
  Building2,
  MessageCircle,
} from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { whatsappUrl } from "@/lib/contact";

const REASONS = [
  {
    icon: Zap,
    title: "Atendimento rápido",
    description: "Resposta imediata e deslocação prioritária para emergências.",
  },
  {
    icon: Clock,
    title: "Disponibilidade 24 horas",
    description: "Estamos sempre prontos. Todos os dias, a qualquer hora.",
  },
  {
    icon: ShieldCheck,
    title: "Produtos e métodos seguros",
    description: "Soluções certificadas, seguras para pessoas e animais.",
  },
  {
    icon: Users,
    title: "Equipa profissional",
    description: "Técnicos qualificados com formação contínua e experiência.",
  },
  {
    icon: Building2,
    title: "Para todos os ambientes",
    description:
      "Casas, lojas, restaurantes, escritórios, condomínios e armazéns.",
  },
  {
    icon: MessageCircle,
    title: "Orçamento simples pelo WhatsApp",
    description: "Sem burocracia. Fale connosco e receba resposta na hora.",
  },
];

export function WhyUs() {
  return (
    <section id="empresas" className="relative py-20 sm:py-28">
      <div className="container-page">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <div className="lg:col-span-5 lg:sticky lg:top-28">
            <SectionHeading
              align="left"
              eyebrow="Diferenciais"
              title={
                <>
                  Por que escolher a{" "}
                  <span className="text-gold">Euro Pragas</span>?
                </>
              }
              description="Mais de uma simples desinfestação. Oferecemos um serviço técnico completo, com a confiança e o profissionalismo que o seu espaço merece."
            />

            <a
              href={whatsappUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp mt-8"
            >
              <MessageCircle className="h-5 w-5" aria-hidden />
              Falar agora pelo WhatsApp
            </a>
          </div>

          <ul className="lg:col-span-7 grid sm:grid-cols-2 gap-4">
            {REASONS.map((reason, i) => (
              <motion.li
                key={reason.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                className="card-tech group relative p-6 flex gap-4"
              >
                <div className="flex-shrink-0">
                  <div className="h-11 w-11 rounded-md bg-gold/10 border border-gold/20 text-gold flex items-center justify-center group-hover:bg-gold group-hover:text-ink-950 transition-colors">
                    <reason.icon className="h-5 w-5" />
                  </div>
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-1.5 tracking-tight">
                    {reason.title}
                  </h3>
                  <p className="text-sm text-steel-300 leading-relaxed">
                    {reason.description}
                  </p>
                </div>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

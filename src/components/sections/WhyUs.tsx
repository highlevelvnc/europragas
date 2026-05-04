"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  Zap,
  Clock,
  ShieldCheck,
  Users,
  Building2,
  MessageCircle,
  Award,
} from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { whatsappUrl } from "@/lib/contact";
import { IMAGES } from "@/lib/images";

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
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-14 items-start">
          <div className="lg:col-span-5 space-y-8">
            <SectionHeading
              align="left"
              eyebrow="Diferenciais"
              title={
                <>
                  Por que escolher a{" "}
                  <span className="text-gold">Euro Pragas</span>?
                </>
              }
              description="Mais que uma simples desinfestação. Oferecemos um serviço técnico completo, com a confiança e o profissionalismo que o seu espaço merece."
            />

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7 }}
              className="relative"
            >
              <div className="absolute -inset-3 rounded-2xl border border-gold/20 translate-x-3 translate-y-3" />
              <div className="relative aspect-[4/5] sm:aspect-[5/4] rounded-2xl overflow-hidden border border-steel-300/15">
                <Image
                  src={IMAGES.sprayWork}
                  alt="Técnico Euro Pragas a aplicar tratamento profissional"
                  fill
                  sizes="(min-width: 1024px) 480px, 90vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/30 to-transparent" />
                <div className="absolute inset-0 bg-hex-pattern bg-[length:48px_84px] opacity-25 mix-blend-overlay" />

                <div className="absolute top-4 left-4 flex items-center gap-2 rounded-md bg-ink-950/80 backdrop-blur-sm border border-gold/25 px-3 py-1.5">
                  <Award className="h-3.5 w-3.5 text-gold" />
                  <span className="label-tech text-[10px] text-gold">
                    Certificado
                  </span>
                </div>

                <div className="absolute bottom-5 left-5 right-5">
                  <div className="rounded-lg bg-ink-950/85 backdrop-blur-md border border-steel-300/15 p-4">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-md bg-gold text-ink-950">
                        <ShieldCheck className="h-5 w-5" />
                      </div>
                      <div>
                        <div className="text-white text-sm font-semibold leading-tight">
                          Tratamento profissional
                        </div>
                        <div className="text-xs text-steel-300 mt-0.5">
                          Equipamento técnico de alta performance.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            <a
              href={whatsappUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp"
            >
              <MessageCircle className="h-5 w-5" aria-hidden />
              Falar agora pelo WhatsApp
            </a>
          </div>

          <ul className="lg:col-span-7 grid sm:grid-cols-2 gap-4 lg:sticky lg:top-28">
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
                  <div className="h-11 w-11 rounded-md bg-gold/10 border border-gold/20 text-gold flex items-center justify-center group-hover:bg-gold group-hover:text-ink-950 transition-colors duration-300">
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

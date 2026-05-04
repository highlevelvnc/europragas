"use client";

import { motion } from "framer-motion";
import {
  Home,
  Building,
  Bug,
  Rat,
  Layers,
  ShieldCheck,
  SprayCan,
  ArrowUpRight,
} from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { whatsappUrl } from "@/lib/contact";

type Service = {
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  message: string;
};

const SERVICES: Service[] = [
  {
    title: "Desinfestação residencial",
    description:
      "Proteção total para a sua casa e família com tratamentos seguros e duradouros.",
    icon: Home,
    message:
      "Olá, tenho interesse em desinfestação residencial. Pode enviar orçamento?",
  },
  {
    title: "Controlo de pragas para empresas",
    description:
      "Planos contínuos de monitorização para conformidade sanitária e tranquilidade total.",
    icon: Building,
    message:
      "Olá, gostaria de um plano de controlo de pragas para a minha empresa.",
  },
  {
    title: "Tratamento contra baratas",
    description:
      "Eliminação completa em cozinhas, áreas húmidas e zonas técnicas com efeito prolongado.",
    icon: Bug,
    message: "Olá, tenho problema com baratas. Pode ajudar?",
  },
  {
    title: "Desratização",
    description:
      "Eliminação de roedores com métodos profissionais, discretos e altamente eficazes.",
    icon: Rat,
    message: "Olá, preciso de serviço de desratização. Pode enviar orçamento?",
  },
  {
    title: "Tratamento contra térmitas",
    description:
      "Inspeção profunda e tratamento de estruturas de madeira contra térmitas e xilófagos.",
    icon: Layers,
    message: "Olá, gostaria de avaliação para tratamento contra térmitas.",
  },
  {
    title: "Controlo preventivo de pragas",
    description:
      "Barreiras físicas e químicas para impedir infestações antes que aconteçam.",
    icon: ShieldCheck,
    message: "Olá, quero saber mais sobre controlo preventivo de pragas.",
  },
  {
    title: "Higienização e proteção de espaços",
    description:
      "Desinfecção profissional para garantir ambientes saudáveis e em conformidade.",
    icon: SprayCan,
    message:
      "Olá, gostaria de orçamento para higienização e proteção do meu espaço.",
  },
];

export function Services() {
  return (
    <section
      id="servicos"
      className="relative py-20 sm:py-28 bg-ink-900/40 border-y border-steel-300/5"
    >
      <div
        aria-hidden
        className="absolute inset-0 bg-grid-lines bg-[length:80px_80px] opacity-50"
        style={{
          maskImage:
            "radial-gradient(ellipse 70% 60% at 50% 50%, rgba(0,0,0,0.6), transparent 80%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 70% 60% at 50% 50%, rgba(0,0,0,0.6), transparent 80%)",
        }}
      />
      <div className="container-page relative">
        <SectionHeading
          eyebrow="Serviços"
          title="Soluções profissionais para cada ambiente"
          description="Tratamentos com tecnologias avançadas para garantir erradicação total e prevenção de novas infestações."
        />

        <ul className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {SERVICES.map((service, i) => (
            <motion.li
              key={service.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, delay: i * 0.05 }}
              whileHover={{ y: -4 }}
              className="group relative card-tech p-7 sm:p-8 flex flex-col rounded-md"
            >
              <div
                aria-hidden
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-md"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(255,215,0,0.1) 0%, transparent 50%)",
                }}
              />

              <service.icon
                aria-hidden
                className="absolute right-5 top-5 h-20 w-20 text-gold/[0.04] group-hover:text-gold/15 transition-colors duration-500"
              />

              <div className="relative z-10">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-md bg-gold/10 border border-gold/20 text-gold mb-5 group-hover:bg-gold group-hover:text-ink-950 group-hover:border-gold transition-all duration-300">
                  <service.icon className="h-6 w-6" />
                </div>

                <h3 className="text-xl font-bold text-white mb-3 tracking-tight group-hover:text-gold-100 transition-colors">
                  {service.title}
                </h3>
                <p className="text-steel-300 leading-relaxed mb-6">
                  {service.description}
                </p>

                <a
                  href={whatsappUrl(service.message)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-gold hover:text-gold-300 transition-colors group/btn"
                  aria-label={`Pedir orçamento para ${service.title}`}
                >
                  Pedir orçamento
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                </a>
              </div>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}

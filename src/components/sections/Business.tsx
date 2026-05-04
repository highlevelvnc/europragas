"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  Utensils,
  Coffee,
  Store,
  Building2,
  BedDouble,
  Building,
  Warehouse,
  ArrowRight,
  Briefcase,
} from "lucide-react";
import { whatsappUrl } from "@/lib/contact";
import { IMAGES } from "@/lib/images";

const BUSINESS_TYPES = [
  { icon: Utensils, label: "Restaurantes" },
  { icon: Coffee, label: "Cafés" },
  { icon: Store, label: "Lojas" },
  { icon: Briefcase, label: "Escritórios" },
  { icon: BedDouble, label: "Alojamento Local" },
  { icon: Building, label: "Condomínios" },
  { icon: Warehouse, label: "Armazéns" },
  { icon: Building2, label: "Empresas" },
];

const BUSINESS_MESSAGE =
  "Olá, sou empresa e gostaria de uma avaliação técnica de controlo de pragas.";

export function Business() {
  return (
    <section className="relative py-20 sm:py-28">
      <div className="container-page">
        <div className="relative overflow-hidden rounded-2xl border border-gold/20 bg-gradient-to-br from-ink-800 via-ink-900 to-ink-950 p-8 sm:p-12 lg:p-16">
          <Image
            src={IMAGES.disinfection1}
            alt=""
            fill
            sizes="(min-width: 1024px) 1100px, 100vw"
            className="object-cover opacity-15"
            aria-hidden
          />
          <div
            aria-hidden
            className="absolute inset-0 bg-gradient-to-r from-ink-950 via-ink-950/95 to-ink-950/70"
          />
          <div
            aria-hidden
            className="absolute inset-0 bg-hex-pattern bg-[length:56px_98px] opacity-30"
          />
          <div
            aria-hidden
            className="absolute -top-32 -right-32 h-96 w-96 rounded-full bg-gold/10 blur-3xl"
          />
          <div
            aria-hidden
            className="absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-gold/40 to-transparent"
          />

          <div className="relative grid lg:grid-cols-2 gap-10 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6 }}
            >
              <div className="label-tech text-gold mb-4 inline-flex items-center gap-2">
                <span className="h-px w-8 bg-gold/60" aria-hidden />
                Para empresas
              </div>
              <h2 className="text-display-md sm:text-display-lg text-white mb-5">
                Proteja o seu negócio{" "}
                <span className="text-gold">contra pragas</span>
              </h2>
              <p className="text-steel-200 text-base sm:text-lg leading-relaxed mb-8">
                Pragas podem prejudicar a imagem, a segurança e o funcionamento
                do seu espaço. A Euro Pragas oferece atendimento profissional
                para restaurantes, cafés, lojas, escritórios, alojamentos
                locais, condomínios e armazéns.
              </p>

              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href={whatsappUrl(BUSINESS_MESSAGE)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary group"
                >
                  Solicitar avaliação
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
                <a href="#contacto" className="btn-ghost">
                  Falar com especialista
                </a>
              </div>
            </motion.div>

            <motion.ul
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="grid grid-cols-2 gap-3"
            >
              {BUSINESS_TYPES.map((type, i) => (
                <motion.li
                  key={type.label}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.4, delay: 0.15 + i * 0.04 }}
                  className="group flex items-center gap-3 rounded-md border border-steel-300/10 bg-ink-950/50 backdrop-blur-sm px-4 py-3.5 hover:border-gold/40 hover:bg-ink-800/60 transition-all"
                >
                  <span className="flex h-9 w-9 items-center justify-center rounded-md bg-gold/10 text-gold group-hover:bg-gold group-hover:text-ink-950 transition-colors">
                    <type.icon className="h-4 w-4" />
                  </span>
                  <span className="text-sm font-medium text-steel-100 tracking-tight">
                    {type.label}
                  </span>
                </motion.li>
              ))}
            </motion.ul>
          </div>
        </div>
      </div>
    </section>
  );
}

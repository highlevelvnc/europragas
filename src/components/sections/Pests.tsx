"use client";

import { motion } from "framer-motion";
import {
  Bug,
  Rat,
  Footprints,
  BedSingle,
  Microscope,
  Layers,
  Worm,
} from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";

type Pest = {
  name: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
};

const PESTS: Pest[] = [
  {
    name: "Baratas",
    description: "Eliminação total em cozinhas e zonas húmidas.",
    icon: Bug,
  },
  {
    name: "Ratos",
    description: "Desratização rápida e discreta.",
    icon: Rat,
  },
  {
    name: "Pulgas",
    description: "Tratamento profundo em ambientes residenciais.",
    icon: Worm,
  },
  {
    name: "Formigas",
    description: "Controlo de colónias e barreiras químicas.",
    icon: Footprints,
  },
  {
    name: "Percevejos",
    description: "Erradicação especializada em quartos e estofos.",
    icon: BedSingle,
  },
  {
    name: "Ácaros",
    description: "Higienização profunda contra alergenos.",
    icon: Microscope,
  },
  {
    name: "Térmitas",
    description: "Proteção estrutural de madeiras.",
    icon: Layers,
  },
];

export function Pests() {
  return (
    <section id="pragas" className="relative py-20 sm:py-28">
      <div
        aria-hidden
        className="absolute inset-0 bg-grid-lines bg-[length:60px_60px] opacity-40"
        style={{
          maskImage:
            "radial-gradient(ellipse 70% 50% at 50% 50%, rgba(0,0,0,0.6), transparent 80%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 70% 50% at 50% 50%, rgba(0,0,0,0.6), transparent 80%)",
        }}
      />
      <div className="container-page relative">
        <SectionHeading
          eyebrow="Pragas que combatemos"
          title="Eliminamos as principais pragas urbanas"
          description="Tratamentos especializados com tecnologia profissional para cada tipo de infestação."
        />

        <ul className="mt-14 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7 gap-3 sm:gap-4">
          {PESTS.map((pest, i) => (
            <motion.li
              key={pest.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              whileHover={{ y: -6 }}
              className="group relative bg-ink-800/60 border border-steel-300/10 backdrop-blur-sm p-5 sm:p-6 text-center cursor-default rounded-md overflow-hidden transition-colors duration-300 hover:border-gold/40"
            >
              <div
                aria-hidden
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background:
                    "radial-gradient(circle at 50% 0%, rgba(255,215,0,0.15), transparent 60%)",
                }}
              />

              <div className="relative">
                <div className="mb-4 flex justify-center">
                  <div className="relative">
                    <div className="absolute inset-0 rounded-full bg-gold/30 blur-xl scale-150 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="relative h-12 w-12 rounded-md bg-ink-700/80 border border-gold/20 flex items-center justify-center text-gold group-hover:scale-110 group-hover:border-gold/60 transition-all duration-300">
                      <pest.icon className="h-6 w-6" />
                    </div>
                  </div>
                </div>
                <h3 className="text-white font-semibold text-sm sm:text-base mb-1.5 tracking-tight">
                  {pest.name}
                </h3>
                <p className="text-xs text-steel-300 leading-relaxed">
                  {pest.description}
                </p>
                <div className="mt-4 mx-auto h-px w-8 bg-gold/30 group-hover:w-16 group-hover:bg-gold transition-all duration-500" />
              </div>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}

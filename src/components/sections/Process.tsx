"use client";

import { motion } from "framer-motion";
import { MessageCircle, ImagePlus, FileCheck2, CalendarCheck } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";

const STEPS = [
  {
    number: "01",
    title: "Fale connosco pelo WhatsApp",
    description: "Inicie o contacto a qualquer hora. Resposta rápida e sem burocracia.",
    icon: MessageCircle,
  },
  {
    number: "02",
    title: "Explique o problema ou envie fotos",
    description: "Descreva a situação para avaliarmos rapidamente o tipo de praga.",
    icon: ImagePlus,
  },
  {
    number: "03",
    title: "Receba orientação ou orçamento",
    description: "Damos uma estimativa transparente e o melhor plano de tratamento.",
    icon: FileCheck2,
  },
  {
    number: "04",
    title: "Agendamos o serviço com rapidez",
    description: "Marcamos a intervenção na data e hora que melhor se adequam a si.",
    icon: CalendarCheck,
  },
];

export function Process() {
  return (
    <section className="relative py-20 sm:py-28 bg-ink-900/40 border-y border-steel-300/5 overflow-hidden">
      <div
        aria-hidden
        className="absolute inset-0 bg-hex-pattern bg-[length:56px_98px] opacity-50"
        style={{
          maskImage:
            "radial-gradient(ellipse 80% 60% at 50% 50%, rgba(0,0,0,0.7), transparent 80%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 80% 60% at 50% 50%, rgba(0,0,0,0.7), transparent 80%)",
        }}
      />

      <div className="container-page relative">
        <SectionHeading
          eyebrow="Como funciona"
          title="Atendimento simples em 4 passos"
          description="Da primeira mensagem ao serviço concluído, transparência e rapidez do início ao fim."
        />

        <div className="mt-16 relative">
          <div
            aria-hidden
            className="hidden md:block absolute top-10 left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent"
          />

          <ol className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-6">
            {STEPS.map((step, i) => (
              <motion.li
                key={step.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative flex flex-col items-center text-center"
              >
                <div className="relative mb-6">
                  <div className="absolute inset-0 rounded-full bg-gold/20 blur-xl scale-125" />
                  <div className="relative h-20 w-20 rounded-full bg-ink-800 border-2 border-gold/40 flex items-center justify-center">
                    <step.icon className="h-7 w-7 text-gold" aria-hidden />
                  </div>
                  <div className="absolute -top-2 -right-2 h-9 w-9 rounded-md bg-gold text-ink-950 font-extrabold text-sm flex items-center justify-center shadow-gold-glow">
                    {step.number}
                  </div>
                </div>
                <h3 className="text-white font-semibold text-lg mb-2 tracking-tight max-w-[14rem]">
                  {step.title}
                </h3>
                <p className="text-sm text-steel-300 leading-relaxed max-w-[16rem]">
                  {step.description}
                </p>
              </motion.li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  ShieldCheck,
  Clock4,
  Building2,
  BadgeCheck,
  MessageCircle,
  ArrowRight,
  ChevronDown,
  Star,
} from "lucide-react";
import { whatsappUrl } from "@/lib/contact";
import { IMAGES } from "@/lib/images";
import { HexBackground } from "@/components/ui/HexBackground";

const badges = [
  { icon: Clock4, label: "Atendimento 24h" },
  { icon: BadgeCheck, label: "Serviços profissionais" },
  { icon: Building2, label: "Residencial e empresarial" },
  { icon: ShieldCheck, label: "Segurança e eficácia" },
];

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-[100svh] flex items-center pt-28 pb-20 overflow-hidden"
    >
      <div aria-hidden className="absolute inset-0">
        <Image
          src={IMAGES.heroBackground}
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-25"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink-950 via-ink-950/95 to-ink-950/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-transparent to-ink-950/60" />
      </div>

      <HexBackground className="opacity-50" />
      <div
        aria-hidden
        className="absolute -top-32 -left-32 h-96 w-96 rounded-full bg-gold/10 blur-3xl"
      />
      <div
        aria-hidden
        className="absolute -bottom-40 right-0 h-[28rem] w-[28rem] rounded-full bg-gold/5 blur-3xl"
      />

      <div className="container-page relative z-10 grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
        <div className="lg:col-span-7 space-y-7">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/5 backdrop-blur-sm px-4 py-1.5"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inset-0 animate-ping rounded-full bg-gold/60" />
              <span className="relative h-2 w-2 rounded-full bg-gold" />
            </span>
            <span className="label-tech text-gold">Disponível agora · 24h</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.05, ease: "easeOut" }}
            className="text-display-xl text-white"
          >
            Controle de Pragas Urbanas{" "}
            <span className="text-gold-shimmer">com Atendimento 24 Horas</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
            className="text-lg sm:text-xl text-steel-200 max-w-xl leading-relaxed"
          >
            Eliminamos pragas com{" "}
            <span className="text-white font-medium">segurança</span>,{" "}
            <span className="text-white font-medium">rapidez</span> e{" "}
            <span className="text-white font-medium">eficácia</span> para
            residências, condomínios, comércios e empresas em Portugal.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25, ease: "easeOut" }}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4"
          >
            <a
              href={whatsappUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp"
            >
              <MessageCircle className="h-5 w-5" aria-hidden />
              Pedir orçamento pelo WhatsApp
            </a>
            <a href="#servicos" className="btn-ghost group">
              Ver serviços
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex items-center gap-3 pt-2"
          >
            <div className="flex">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-gold text-gold" />
              ))}
            </div>
            <span className="text-sm text-steel-200">
              <span className="text-white font-semibold">Confiança</span> de
              clientes residenciais e empresariais
            </span>
          </motion.div>

          <motion.ul
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-6 border-t border-steel-300/10"
          >
            {badges.map((b, i) => (
              <motion.li
                key={b.label}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.55 + i * 0.08 }}
                className="flex items-center gap-2.5 text-steel-200"
              >
                <span className="flex h-9 w-9 items-center justify-center rounded-md bg-gold/10 border border-gold/20 text-gold">
                  <b.icon className="h-4 w-4" aria-hidden />
                </span>
                <span className="label-tech text-[11px] sm:text-xs">
                  {b.label}
                </span>
              </motion.li>
            ))}
          </motion.ul>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.2, ease: "easeOut" }}
          className="lg:col-span-5 relative"
        >
          <HeroVisual />
        </motion.div>
      </div>

      <motion.div
        aria-hidden
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 text-steel-400"
      >
        <span className="label-tech text-[10px]">Scroll</span>
        <ChevronDown className="h-4 w-4 animate-bounce" />
      </motion.div>

      <div
        aria-hidden
        className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent"
      />
    </section>
  );
}

function HeroVisual() {
  return (
    <div className="relative aspect-[4/5] sm:aspect-square max-w-md mx-auto lg:max-w-none">
      <div className="absolute inset-0 rounded-2xl border border-gold/20 translate-x-4 translate-y-4" />
      <div className="absolute inset-0 rounded-2xl border border-steel-300/10 -translate-x-3 -translate-y-3" />

      <div className="relative h-full w-full rounded-2xl overflow-hidden border border-steel-300/15 bg-gradient-to-br from-ink-800 via-ink-900 to-ink-950">
        <Image
          src={IMAGES.technicianPortrait}
          alt="Técnico profissional Euro Pragas com equipamento de proteção"
          fill
          priority
          sizes="(min-width: 1024px) 480px, 90vw"
          className="object-cover opacity-65"
        />

        <div className="absolute inset-0 bg-gradient-to-tr from-ink-950 via-ink-950/50 to-transparent" />
        <div className="absolute inset-0 bg-hex-pattern bg-[length:48px_84px] opacity-40 mix-blend-overlay" />

        <svg
          aria-hidden
          viewBox="0 0 200 200"
          className="absolute inset-0 h-full w-full opacity-15"
        >
          <defs>
            <pattern
              id="hero-grid"
              width="20"
              height="20"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 20 0 L 0 0 0 20"
                fill="none"
                stroke="#FFD700"
                strokeWidth="0.3"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#hero-grid)" />
        </svg>

        <CornerMark className="top-4 left-4" />
        <CornerMark className="top-4 right-4 rotate-90" />
        <CornerMark className="bottom-4 right-4 rotate-180" />
        <CornerMark className="bottom-4 left-4 -rotate-90" />

        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="absolute top-6 left-6 flex items-center gap-2 rounded-md bg-ink-950/85 backdrop-blur-sm border border-gold/25 px-3 py-2"
        >
          <span className="h-2 w-2 rounded-full bg-gold animate-pulse-soft" />
          <span className="label-tech text-[10px] text-gold">EM CAMPO</span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="absolute bottom-20 left-6 right-6 rounded-lg bg-ink-950/85 backdrop-blur-md border border-steel-300/15 p-4"
        >
          <div className="flex items-start gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-md bg-gold/15 text-gold flex-shrink-0">
              <ShieldCheck className="h-4 w-4" />
            </div>
            <div>
              <div className="text-white text-sm font-semibold leading-tight">
                Proteção certificada
              </div>
              <div className="text-xs text-steel-300 mt-1 leading-relaxed">
                Produtos seguros para pessoas e animais.
              </div>
            </div>
          </div>
        </motion.div>

        <div className="absolute bottom-0 left-0 right-0 border-t border-gold/20 bg-ink-950/80 backdrop-blur-sm">
          <div className="flex items-center justify-between px-5 py-3 text-[11px] uppercase tracking-[0.2em] text-steel-300">
            <span className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-gold animate-pulse-soft" />
              Sistema ativo
            </span>
            <span className="text-gold/80">PT · 24/7</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function CornerMark({ className = "" }: { className?: string }) {
  return (
    <svg
      aria-hidden
      viewBox="0 0 24 24"
      className={`absolute h-5 w-5 text-gold/70 ${className}`}
    >
      <path
        d="M2 8V2h6"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

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
} from "lucide-react";
import { whatsappUrl } from "@/lib/contact";
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
      <HexBackground className="opacity-70" />
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
            className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/5 px-4 py-1.5"
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

          <motion.ul
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-6 border-t border-steel-300/10"
          >
            {badges.map((b) => (
              <li
                key={b.label}
                className="flex items-center gap-2.5 text-steel-200"
              >
                <span className="flex h-9 w-9 items-center justify-center rounded-md bg-gold/10 border border-gold/20 text-gold">
                  <b.icon className="h-4 w-4" aria-hidden />
                </span>
                <span className="label-tech text-[11px] sm:text-xs">
                  {b.label}
                </span>
              </li>
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

      <div
        aria-hidden
        className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent"
      />
    </section>
  );
}

function HeroVisual() {
  return (
    <div className="relative aspect-square max-w-md mx-auto lg:max-w-none">
      <div className="absolute inset-0 rounded-2xl border border-gold/20 translate-x-4 translate-y-4" />
      <div className="absolute inset-0 rounded-2xl border border-steel-300/10 -translate-x-3 -translate-y-3" />

      <div className="relative h-full w-full rounded-2xl overflow-hidden border border-steel-300/15 bg-gradient-to-br from-ink-800 via-ink-900 to-ink-950">
        <div className="absolute inset-0 bg-hex-pattern bg-[length:48px_84px] opacity-60" />
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(circle at 30% 20%, rgba(255,215,0,0.18), transparent 55%)",
          }}
        />

        <svg
          aria-hidden
          viewBox="0 0 200 200"
          className="absolute inset-0 h-full w-full opacity-20"
        >
          <defs>
            <pattern
              id="grid"
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
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>

        <div className="relative h-full w-full flex items-center justify-center p-10">
          <motion.div
            initial={{ rotate: -6, opacity: 0 }}
            animate={{ rotate: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
            className="relative h-56 w-56 sm:h-64 sm:w-64"
          >
            <div className="absolute inset-0 rounded-full bg-gold/10 blur-2xl" />
            <Image
              src="/europragaslogo.png"
              alt="Selo Euro Pragas — proteção contra pragas urbanas"
              fill
              priority
              sizes="(min-width: 1024px) 256px, 220px"
              className="object-contain drop-shadow-[0_10px_30px_rgba(255,215,0,0.25)]"
            />
          </motion.div>

          <CornerMark className="top-4 left-4" />
          <CornerMark className="top-4 right-4 rotate-90" />
          <CornerMark className="bottom-4 right-4 rotate-180" />
          <CornerMark className="bottom-4 left-4 -rotate-90" />
        </div>

        <div className="absolute bottom-0 left-0 right-0 border-t border-gold/20 bg-ink-950/70 backdrop-blur-sm">
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

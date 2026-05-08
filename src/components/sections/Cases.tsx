"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useCallback, useEffect, useState } from "react";
import {
  X,
  ZoomIn,
  ChevronLeft,
  ChevronRight,
  AlertTriangle,
  MessageCircle,
} from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CASES, CATEGORY_COLORS } from "@/lib/cases";
import { whatsappUrl } from "@/lib/contact";

const CASES_MESSAGE =
  "Olá, vi o portfólio da Euro Pragas e tenho um problema parecido. Pode ajudar?";

export function Cases() {
  const [activeIdx, setActiveIdx] = useState<number | null>(null);

  const close = useCallback(() => setActiveIdx(null), []);
  const next = useCallback(
    () =>
      setActiveIdx((i) =>
        i === null ? null : (i + 1) % CASES.length
      ),
    []
  );
  const prev = useCallback(
    () =>
      setActiveIdx((i) =>
        i === null ? null : (i - 1 + CASES.length) % CASES.length
      ),
    []
  );

  useEffect(() => {
    if (activeIdx === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      else if (e.key === "ArrowRight") next();
      else if (e.key === "ArrowLeft") prev();
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [activeIdx, close, next, prev]);

  const active = activeIdx !== null ? CASES[activeIdx] : null;

  return (
    <section
      id="casos"
      className="relative py-20 sm:py-28 bg-ink-900/40 border-y border-steel-300/5 overflow-hidden"
    >
      <div
        aria-hidden
        className="absolute inset-0 bg-hex-pattern bg-[length:56px_98px] opacity-30"
      />
      <div className="container-page relative">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-14">
          <SectionHeading
            align="left"
            eyebrow="Casos reais"
            title={
              <>
                Trabalho de <span className="text-gold">campo</span>
              </>
            }
            description="Imagens reais de infestações resolvidas pela nossa equipa em Portugal. Cada caso é uma evidência da importância de um tratamento profissional."
          />

          <div className="flex items-center gap-2.5 rounded-md border border-amber-500/20 bg-amber-500/5 backdrop-blur-sm px-4 py-3 max-w-md">
            <AlertTriangle className="h-4 w-4 text-amber-400 flex-shrink-0" />
            <p className="text-xs text-steel-200 leading-relaxed">
              Conteúdo sensível: imagens autênticas de infestações ativas.
            </p>
          </div>
        </div>

        <ul className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 auto-rows-[180px] sm:auto-rows-[220px] lg:auto-rows-[240px]">
          {CASES.map((c, i) => (
            <motion.li
              key={c.src}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: (i % 8) * 0.05 }}
              className={`group relative overflow-hidden rounded-md border border-steel-300/10 bg-ink-900 cursor-pointer ${
                c.span === 2 ? "row-span-2 col-span-2" : ""
              }`}
              onClick={() => setActiveIdx(i)}
            >
              <Image
                src={c.src}
                alt={c.title}
                fill
                sizes="(min-width: 1024px) 25vw, (min-width: 640px) 33vw, 50vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/40 to-transparent" />
              <div
                aria-hidden
                className="absolute inset-0 ring-2 ring-inset ring-transparent group-hover:ring-gold/50 transition-all duration-300"
              />

              <div className="absolute top-3 left-3">
                <span
                  className={`label-tech inline-flex items-center gap-1 rounded-full border px-2.5 py-1 text-[10px] backdrop-blur-sm ${CATEGORY_COLORS[c.category]}`}
                >
                  {c.category}
                </span>
              </div>

              <div className="absolute top-3 right-3 h-8 w-8 rounded-md bg-ink-950/60 backdrop-blur-sm border border-steel-300/15 flex items-center justify-center text-steel-200 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <ZoomIn className="h-4 w-4" />
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4">
                <h3 className="text-white font-semibold text-sm leading-tight tracking-tight line-clamp-2">
                  {c.title}
                </h3>
                <div className="mt-1.5 h-px w-6 bg-gold/60 group-hover:w-12 transition-all duration-500" />
              </div>
            </motion.li>
          ))}
        </ul>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-4 rounded-lg border border-steel-300/10 bg-ink-900/60 backdrop-blur-sm p-5 sm:p-6"
        >
          <div className="text-center sm:text-left">
            <div className="text-white font-semibold tracking-tight">
              Tem uma situação parecida?
            </div>
            <div className="text-sm text-steel-300 mt-0.5">
              Envie uma foto pelo WhatsApp e recebe orientação imediata.
            </div>
          </div>
          <a
            href={whatsappUrl(CASES_MESSAGE)}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp"
          >
            <MessageCircle className="h-5 w-5" />
            Falar com técnico
          </a>
        </motion.div>
      </div>

      <AnimatePresence>
        {active && activeIdx !== null && (
          <Lightbox
            item={active}
            onClose={close}
            onNext={next}
            onPrev={prev}
            counter={`${activeIdx + 1} / ${CASES.length}`}
          />
        )}
      </AnimatePresence>
    </section>
  );
}

type LightboxProps = {
  item: (typeof CASES)[number];
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
  counter: string;
};

function Lightbox({ item, onClose, onNext, onPrev, counter }: LightboxProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      className="fixed inset-0 z-[120] flex items-center justify-center p-4 sm:p-8 bg-ink-950/95 backdrop-blur-md"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={item.title}
    >
      <motion.button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          onPrev();
        }}
        className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 z-10 h-12 w-12 rounded-full bg-ink-800/80 border border-steel-300/15 text-white hover:bg-gold hover:text-ink-950 hover:border-gold transition-colors flex items-center justify-center"
        aria-label="Imagem anterior"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <ChevronLeft className="h-6 w-6" />
      </motion.button>

      <motion.button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          onNext();
        }}
        className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 z-10 h-12 w-12 rounded-full bg-ink-800/80 border border-steel-300/15 text-white hover:bg-gold hover:text-ink-950 hover:border-gold transition-colors flex items-center justify-center"
        aria-label="Próxima imagem"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <ChevronRight className="h-6 w-6" />
      </motion.button>

      <motion.button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          onClose();
        }}
        className="absolute top-4 right-4 sm:top-6 sm:right-6 z-10 h-10 w-10 rounded-full bg-ink-800/80 border border-steel-300/15 text-white hover:bg-gold hover:text-ink-950 hover:border-gold transition-colors flex items-center justify-center"
        aria-label="Fechar"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <X className="h-5 w-5" />
      </motion.button>

      <div className="absolute top-4 left-4 sm:top-6 sm:left-6 label-tech text-steel-300 text-xs">
        {counter}
      </div>

      <motion.div
        key={item.src}
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.96 }}
        transition={{ duration: 0.25 }}
        className="relative max-w-5xl w-full max-h-full flex flex-col gap-4"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative flex-1 min-h-0">
          <div className="relative w-full h-[60vh] sm:h-[70vh] rounded-lg overflow-hidden border border-steel-300/15 bg-ink-900">
            <Image
              src={item.src}
              alt={item.title}
              fill
              sizes="(min-width: 1024px) 1024px, 100vw"
              priority
              className="object-contain"
            />
          </div>
        </div>

        <div className="rounded-md border border-steel-300/15 bg-ink-900/80 backdrop-blur-sm p-4 sm:p-5">
          <div className="flex flex-wrap items-center gap-3 mb-2">
            <span
              className={`label-tech inline-flex items-center gap-1 rounded-full border px-2.5 py-1 text-[10px] ${CATEGORY_COLORS[item.category]}`}
            >
              {item.category}
            </span>
            <h3 className="text-white font-semibold tracking-tight">
              {item.title}
            </h3>
          </div>
          <p className="text-sm text-steel-300 leading-relaxed">
            {item.caption}
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
}

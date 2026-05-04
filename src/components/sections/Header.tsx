"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X, MessageCircle } from "lucide-react";
import { NAV_LINKS, whatsappUrl } from "@/lib/contact";

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "bg-ink-950/85 backdrop-blur-lg border-b border-steel-300/10 shadow-lg shadow-black/30"
          : "bg-transparent"
      }`}
    >
      <div className="container-page flex h-20 items-center justify-between">
        <Link
          href="#inicio"
          className="flex items-center gap-3 group"
          aria-label="Euro Pragas — início"
        >
          <div className="relative h-10 w-10 transition-transform duration-300 group-hover:scale-105">
            <Image
              src="/europragaslogo.png"
              alt="Logo Euro Pragas"
              fill
              priority
              sizes="40px"
              className="object-contain"
            />
          </div>
          <div className="leading-tight">
            <div className="text-white font-extrabold tracking-tight text-lg">
              Euro <span className="text-gold">Pragas</span>
            </div>
            <div className="hidden sm:block label-tech text-steel-300 text-[10px]">
              Controle de Pragas Urbanas
            </div>
          </div>
        </Link>

        <nav
          className="hidden lg:flex items-center gap-1"
          aria-label="Navegação principal"
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="px-4 py-2 text-sm font-medium text-steel-200 hover:text-gold transition-colors relative group"
            >
              {link.label}
              <span className="absolute bottom-0 left-1/2 -translate-x-1/2 h-px w-0 bg-gold transition-all duration-300 group-hover:w-6" />
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={whatsappUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex btn-primary"
          >
            <MessageCircle className="h-4 w-4" aria-hidden />
            Pedir orçamento
          </a>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="lg:hidden inline-flex items-center justify-center h-11 w-11 rounded-md border border-steel-300/20 text-white hover:border-gold/60 hover:text-gold transition-colors"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Fechar menu" : "Abrir menu"}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      <div
        id="mobile-menu"
        className={`lg:hidden overflow-hidden transition-[max-height,opacity] duration-300 ease-out ${
          open ? "max-h-[80vh] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="container-page pb-6 pt-2">
          <nav
            className="flex flex-col divide-y divide-steel-300/10 border-y border-steel-300/10"
            aria-label="Navegação móvel"
          >
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="py-4 text-base font-medium text-steel-100 hover:text-gold transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <a
            href={whatsappUrl()}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
            className="mt-6 w-full btn-primary"
          >
            <MessageCircle className="h-4 w-4" aria-hidden />
            Pedir orçamento
          </a>
        </div>
      </div>
    </header>
  );
}

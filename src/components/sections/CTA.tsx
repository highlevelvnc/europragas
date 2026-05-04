"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Phone, Mail, MessageCircle, Clock, AlertCircle } from "lucide-react";
import { CONTACT, whatsappUrl } from "@/lib/contact";
import { IMAGES } from "@/lib/images";

const URGENT_MESSAGE =
  "Olá, tenho uma infestação e preciso de atendimento urgente da Euro Pragas.";

export function CTA() {
  return (
    <section
      id="contacto"
      className="relative py-20 sm:py-28 bg-ink-950 overflow-hidden"
    >
      <Image
        src={IMAGES.ppeWorker}
        alt=""
        fill
        sizes="100vw"
        className="object-cover opacity-10"
        aria-hidden
      />
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-b from-ink-950 via-ink-950/90 to-ink-950"
      />
      <div
        aria-hidden
        className="absolute inset-0 bg-hex-pattern bg-[length:56px_98px] opacity-30"
      />
      <div
        aria-hidden
        className="absolute -top-40 left-1/2 -translate-x-1/2 h-96 w-[80%] rounded-full bg-gold/10 blur-3xl"
      />
      <div
        aria-hidden
        className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent"
      />

      <div className="container-page relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-3xl mx-auto"
        >
          <div className="label-tech text-gold mb-5 inline-flex items-center gap-2">
            <AlertCircle className="h-3.5 w-3.5" />
            <span>Atendimento de emergência</span>
            <span className="relative flex h-2 w-2">
              <span className="absolute inset-0 animate-ping rounded-full bg-gold/60" />
              <span className="relative h-2 w-2 rounded-full bg-gold" />
            </span>
          </div>

          <h2 className="text-display-lg sm:text-display-xl text-white mb-5">
            Tem uma infestação?{" "}
            <span className="block text-gold-shimmer">
              Fale agora com a Euro Pragas.
            </span>
          </h2>

          <p className="text-lg text-steel-200 mb-10 max-w-2xl mx-auto leading-relaxed">
            Atendimento 24 horas para controlo de pragas urbanas com segurança
            e eficácia. Resposta rápida pelo WhatsApp.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <motion.a
              href={whatsappUrl(URGENT_MESSAGE)}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="btn-whatsapp text-base px-8 py-4"
            >
              <MessageCircle className="h-5 w-5" aria-hidden />
              Chamar no WhatsApp
            </motion.a>
            <a
              href={`tel:${CONTACT.phoneTel}`}
              className="btn-ghost text-base px-8 py-4"
            >
              <Phone className="h-5 w-5" aria-hidden />
              Ligar agora
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="grid sm:grid-cols-3 gap-4 max-w-3xl mx-auto"
        >
          <ContactCard
            icon={Phone}
            label="WhatsApp"
            value={CONTACT.phone}
            href={whatsappUrl()}
            external
          />
          <ContactCard
            icon={Mail}
            label="Email"
            value={CONTACT.email}
            href={`mailto:${CONTACT.email}`}
          />
          <ContactCard
            icon={Clock}
            label="Disponibilidade"
            value="24 horas, todos os dias"
          />
        </motion.div>
      </div>
    </section>
  );
}

type ContactCardProps = {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  value: string;
  href?: string;
  external?: boolean;
};

function ContactCard({
  icon: Icon,
  label,
  value,
  href,
  external,
}: ContactCardProps) {
  const content = (
    <>
      <div className="flex h-11 w-11 items-center justify-center rounded-md bg-gold/10 border border-gold/20 text-gold mb-4 transition-colors group-hover:bg-gold group-hover:text-ink-950">
        <Icon className="h-5 w-5" />
      </div>
      <div className="label-tech text-steel-300 mb-1">{label}</div>
      <div className="text-white font-semibold tracking-tight break-words">
        {value}
      </div>
    </>
  );

  const baseClass = "card-tech group p-6 text-left transition-all";

  if (!href) {
    return <div className={baseClass}>{content}</div>;
  }

  return (
    <a
      href={href}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className={baseClass}
    >
      {content}
    </a>
  );
}

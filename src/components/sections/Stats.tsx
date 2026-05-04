"use client";

import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useRef } from "react";
import { Clock4, ShieldCheck, Smile, MapPin } from "lucide-react";

type Stat = {
  icon: React.ComponentType<{ className?: string }>;
  value: number;
  suffix?: string;
  prefix?: string;
  label: string;
  sublabel?: string;
};

const STATS: Stat[] = [
  {
    icon: Clock4,
    value: 24,
    suffix: "h",
    label: "Disponibilidade",
    sublabel: "Atendimento contínuo, todos os dias",
  },
  {
    icon: ShieldCheck,
    value: 100,
    suffix: "%",
    label: "Compromisso",
    sublabel: "Produtos seguros e certificados",
  },
  {
    icon: Smile,
    value: 1200,
    suffix: "+",
    label: "Clientes atendidos",
    sublabel: "Casas, lojas e empresas em Portugal",
  },
  {
    icon: MapPin,
    value: 18,
    label: "Distritos cobertos",
    sublabel: "Atendimento nacional",
  },
];

function Counter({ value }: { value: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const count = useMotionValue(0);
  const rounded = useTransform(count, (v) => Math.round(v).toLocaleString("pt-PT"));

  useEffect(() => {
    if (!inView) return;
    const controls = animate(count, value, { duration: 1.6, ease: "easeOut" });
    return controls.stop;
  }, [inView, value, count]);

  return <motion.span ref={ref}>{rounded}</motion.span>;
}

export function Stats() {
  return (
    <section
      aria-label="Indicadores de confiança"
      className="relative -mt-px border-y border-steel-300/10 bg-ink-900/60 backdrop-blur-sm"
    >
      <div
        aria-hidden
        className="absolute inset-0 bg-grid-lines bg-[length:80px_80px] opacity-50"
      />
      <div className="container-page relative grid grid-cols-2 lg:grid-cols-4 divide-y divide-x-0 lg:divide-y-0 lg:divide-x divide-steel-300/10">
        {STATS.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="px-4 sm:px-6 py-8 sm:py-10 group"
          >
            <div className="flex items-center gap-2.5 mb-3">
              <span className="flex h-8 w-8 items-center justify-center rounded-md bg-gold/10 text-gold border border-gold/20 group-hover:bg-gold group-hover:text-ink-950 transition-colors">
                <stat.icon className="h-4 w-4" />
              </span>
              <span className="label-tech text-steel-300 text-[10px]">
                {stat.label}
              </span>
            </div>
            <div className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white tabular-nums">
              {stat.prefix}
              <Counter value={stat.value} />
              {stat.suffix && <span className="text-gold">{stat.suffix}</span>}
            </div>
            {stat.sublabel && (
              <div className="text-xs text-steel-400 mt-2 leading-relaxed">
                {stat.sublabel}
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
}

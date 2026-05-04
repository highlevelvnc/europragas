"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export function LoadingScreen() {
  const [stage, setStage] = useState<"in" | "out" | "gone">("in");

  useEffect(() => {
    const t1 = window.setTimeout(() => setStage("out"), 900);
    const t2 = window.setTimeout(() => setStage("gone"), 1500);
    return () => {
      window.clearTimeout(t1);
      window.clearTimeout(t2);
    };
  }, []);

  if (stage === "gone") return null;

  return (
    <div
      aria-hidden
      className={`fixed inset-0 z-[200] flex items-center justify-center bg-ink-950 transition-opacity duration-500 ${
        stage === "out" ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      <div className="absolute inset-0 bg-hex-pattern bg-[length:56px_98px] opacity-50" />
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 50%, rgba(255,215,0,0.12), transparent 70%)",
        }}
      />

      <div className="relative flex flex-col items-center gap-6">
        <div className="relative h-24 w-24">
          <span
            aria-hidden
            className="absolute inset-0 rounded-full bg-gold/20 blur-2xl scale-125 animate-pulse-soft"
          />
          <span
            aria-hidden
            className="absolute inset-0 rounded-full border-2 border-gold/30 animate-[spin_3s_linear_infinite]"
            style={{
              borderRightColor: "transparent",
              borderBottomColor: "transparent",
            }}
          />
          <Image
            src="/europragaslogo.png"
            alt="Euro Pragas"
            fill
            sizes="96px"
            priority
            className="object-contain p-3"
          />
        </div>

        <div className="flex flex-col items-center gap-2">
          <div className="text-white font-extrabold tracking-tight text-lg">
            Euro <span className="text-gold">Pragas</span>
          </div>
          <div className="label-tech text-steel-300 text-[10px]">
            A carregar proteção
          </div>
        </div>

        <div className="h-0.5 w-32 overflow-hidden rounded-full bg-steel-300/10">
          <div className="h-full w-full origin-left animate-[loadbar_900ms_ease-in-out_forwards] bg-gradient-to-r from-transparent via-gold to-transparent" />
        </div>
      </div>

      <style jsx>{`
        @keyframes loadbar {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
      `}</style>
    </div>
  );
}

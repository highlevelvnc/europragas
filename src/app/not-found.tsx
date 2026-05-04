import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, MessageCircle } from "lucide-react";
import { whatsappUrl } from "@/lib/contact";

export default function NotFound() {
  return (
    <main className="relative min-h-[100svh] flex items-center justify-center px-6 overflow-hidden">
      <div
        aria-hidden
        className="absolute inset-0 bg-hex-pattern bg-[length:56px_98px] opacity-50"
      />
      <div
        aria-hidden
        className="absolute -top-32 left-1/2 -translate-x-1/2 h-96 w-[80%] rounded-full bg-gold/10 blur-3xl"
      />

      <div className="relative max-w-lg text-center space-y-6">
        <div className="relative h-20 w-20 mx-auto opacity-90">
          <Image
            src="/europragaslogo.png"
            alt=""
            fill
            sizes="80px"
            className="object-contain"
            aria-hidden
          />
        </div>

        <div className="label-tech text-gold">Erro 404</div>

        <h1 className="text-display-lg text-white">
          Página não encontrada
        </h1>

        <p className="text-steel-200 leading-relaxed">
          A página que procura não existe ou foi movida. Volte ao início ou
          fale connosco diretamente.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
          <Link href="/" className="btn-primary">
            <ArrowLeft className="h-4 w-4" />
            Voltar ao início
          </Link>
          <a
            href={whatsappUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp"
          >
            <MessageCircle className="h-4 w-4" />
            Falar pelo WhatsApp
          </a>
        </div>
      </div>
    </main>
  );
}

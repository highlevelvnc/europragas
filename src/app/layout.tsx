import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://europragas.pt"),
  title: {
    default: "Euro Pragas | Controle de Pragas Urbanas 24h em Portugal",
    template: "%s | Euro Pragas",
  },
  description:
    "Serviços profissionais de controlo de pragas urbanas para residências, empresas, condomínios e comércios. Atendimento 24 horas pelo WhatsApp.",
  keywords: [
    "controlo de pragas",
    "desinfestação",
    "desratização",
    "controlo pragas Portugal",
    "controlo pragas urbanas",
    "Euro Pragas",
    "pragas Lisboa",
    "tratamento térmitas",
    "controlo baratas",
    "controlo formigas",
  ],
  authors: [{ name: "Euro Pragas" }],
  creator: "Euro Pragas",
  openGraph: {
    type: "website",
    locale: "pt_PT",
    url: "https://europragas.pt",
    title: "Euro Pragas | Controle de Pragas Urbanas 24h em Portugal",
    description:
      "Eliminamos pragas com segurança, rapidez e eficácia. Atendimento 24h para residências e empresas em Portugal.",
    siteName: "Euro Pragas",
    images: [
      {
        url: "/europragaslogo.png",
        width: 800,
        height: 800,
        alt: "Euro Pragas — Controle de Pragas Urbanas",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Euro Pragas | Controle de Pragas Urbanas 24h",
    description:
      "Serviços profissionais de controlo de pragas em Portugal. Atendimento 24h.",
    images: ["/europragaslogo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  icons: {
    icon: "/europragaslogo.png",
    apple: "/europragaslogo.png",
  },
};

export const viewport: Viewport = {
  themeColor: "#0A0A0B",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-PT" className={inter.variable}>
      <body>{children}</body>
    </html>
  );
}

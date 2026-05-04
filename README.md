# Euro Pragas — Website

Landing page profissional para a **Euro Pragas**, empresa de controlo de pragas urbanas em Portugal. Construída com Next.js 15 (App Router), TypeScript e Tailwind CSS.

## Stack

- **Next.js 15** — App Router, server components, otimização automática
- **React 19**
- **TypeScript** — tipagem estrita
- **Tailwind CSS** — design system customizado (preto/grafite + dourado)
- **Framer Motion** — animações leves de entrada
- **lucide-react** — ícones

## Desenvolvimento

```bash
npm install
npm run dev
```

Aceda a http://localhost:3000

## Scripts

- `npm run dev` — servidor de desenvolvimento
- `npm run build` — build de produção
- `npm run start` — servidor de produção
- `npm run type-check` — verificação de tipos
- `npm run lint` — linter

## Deploy (Vercel)

O projeto está pronto para deploy direto na Vercel. Basta importar o repositório.

## Estrutura

```
src/
├── app/
│   ├── layout.tsx       # root layout + SEO
│   ├── page.tsx         # landing page
│   └── globals.css      # tailwind + utilities
├── components/
│   ├── sections/        # Header, Hero, Pests, Services, etc.
│   ├── ui/              # primitivos reutilizáveis
│   └── WhatsAppFloat.tsx
└── lib/
    └── contact.ts       # contactos + helper WhatsApp
```

## Contactos

- WhatsApp: [+351 929 329 657](https://wa.me/351929329657)
- Email: [europragas@gmail.com](mailto:europragas@gmail.com)

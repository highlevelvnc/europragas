export type CaseCategory = "Percevejos" | "Baratas" | "Térmitas";

export type CaseItem = {
  src: string;
  category: CaseCategory;
  title: string;
  caption: string;
  /** Aspect-row in the grid (default 1). Use 2 for hero cells. */
  span?: 1 | 2;
};

export const CASES: CaseItem[] = [
  {
    src: "/cases/case-cockroaches-bathroom-1.jpg",
    category: "Baratas",
    title: "Infestação massiva — instalações sanitárias",
    caption:
      "Centenas de baratas concentradas junto a fissuras e tubagens. Tratamento integrado com isco e barreira química.",
    span: 2,
  },
  {
    src: "/cases/case-bedbugs-wallcorner.jpg",
    category: "Percevejos",
    title: "Colónia ativa em canto de quarto",
    caption:
      "Manchas, ovos e adultos visíveis na junção de parede. Remoção total com tratamento térmico e residual.",
  },
  {
    src: "/cases/case-bedbugs-wood.jpg",
    category: "Percevejos",
    title: "Foco em estrutura de madeira",
    caption:
      "Detecção de percevejos em estrado e mobiliário. Inspeção minuciosa e aplicação direcionada.",
  },
  {
    src: "/cases/case-cockroaches-kitchen.jpg",
    category: "Baratas",
    title: "Zona técnica de cozinha",
    caption:
      "Infestação ativa junto a esgotos e canalizações. Plano contínuo para conformidade sanitária.",
  },
  {
    src: "/cases/case-bedbugs-curtainrod-1.jpg",
    category: "Percevejos",
    title: "Varão de cortina colonizado",
    caption:
      "Local atípico mas comum: percevejos em estruturas suspensas. Erradicação com aplicação de precisão.",
  },
  {
    src: "/cases/case-bedbugs-sofa.jpg",
    category: "Percevejos",
    title: "Estofo de sofá com colónia",
    caption:
      "Percevejos alojados em costuras e estrutura de sofá. Tratamento profundo do mobiliário.",
  },
  {
    src: "/cases/case-bedframe-termites.jpg",
    category: "Térmitas",
    title: "Estrutura de cama com madeira atacada",
    caption:
      "Madeira danificada com sinais de xilófagos. Avaliação estrutural e tratamento de prevenção.",
  },
  {
    src: "/cases/case-cockroaches-bathroom-2.jpg",
    category: "Baratas",
    title: "Casa de banho — outro ângulo",
    caption:
      "Inspeção 360º para identificar todos os focos antes do plano de tratamento.",
  },
  {
    src: "/cases/case-bedbugs-curtainrod-2.jpg",
    category: "Percevejos",
    title: "Detalhe de infestação em varão",
    caption:
      "Macro do mesmo caso. Atestado da gravidade que justifica intervenção profissional.",
  },
];

export const CATEGORY_COLORS: Record<CaseCategory, string> = {
  Percevejos: "bg-rose-500/15 text-rose-300 border-rose-500/30",
  Baratas: "bg-amber-500/15 text-amber-300 border-amber-500/30",
  Térmitas: "bg-orange-500/15 text-orange-300 border-orange-500/30",
};

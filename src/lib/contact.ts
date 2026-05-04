export const CONTACT = {
  phone: "+351 929 329 657",
  phoneRaw: "351929329657",
  phoneTel: "+351929329657",
  email: "europragas@gmail.com",
  hours: "Atendimento 24 horas",
} as const;

export const DEFAULT_WHATSAPP_MESSAGE =
  "Olá, vim pelo site da Euro Pragas e gostaria de pedir um orçamento para controlo de pragas.";

export function whatsappUrl(message: string = DEFAULT_WHATSAPP_MESSAGE): string {
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${CONTACT.phoneRaw}?text=${encoded}`;
}

export const NAV_LINKS = [
  { href: "#inicio", label: "Início" },
  { href: "#servicos", label: "Serviços" },
  { href: "#pragas", label: "Pragas" },
  { href: "#empresas", label: "Empresas" },
  { href: "#contacto", label: "Contacto" },
] as const;

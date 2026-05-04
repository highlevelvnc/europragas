import type { ReactNode } from "react";

type Props = {
  eyebrow?: string;
  title: ReactNode;
  description?: string;
  align?: "left" | "center";
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  className = "",
}: Props) {
  const alignClass = align === "center" ? "text-center mx-auto" : "text-left";

  return (
    <div className={`max-w-2xl ${alignClass} ${className}`}>
      {eyebrow && (
        <div
          className={`label-tech text-gold mb-3 inline-flex items-center gap-2 ${
            align === "center" ? "justify-center" : ""
          }`}
        >
          <span className="h-px w-8 bg-gold/60" aria-hidden />
          {eyebrow}
        </div>
      )}
      <h2 className="text-display-md sm:text-display-lg text-white">{title}</h2>
      {description && (
        <p className="mt-4 text-steel-200 text-base sm:text-lg leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
}

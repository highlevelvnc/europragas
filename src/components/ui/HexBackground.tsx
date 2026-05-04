type Props = {
  className?: string;
  /** Mask edges with a radial fade so pattern doesn't compete with content. */
  fade?: boolean;
};

export function HexBackground({ className = "", fade = true }: Props) {
  return (
    <div
      aria-hidden
      className={`pointer-events-none absolute inset-0 bg-hex-pattern bg-[length:56px_98px] ${className}`}
      style={
        fade
          ? {
              maskImage:
                "radial-gradient(ellipse 90% 70% at 50% 50%, rgba(0,0,0,0.85), transparent 80%)",
              WebkitMaskImage:
                "radial-gradient(ellipse 90% 70% at 50% 50%, rgba(0,0,0,0.85), transparent 80%)",
            }
          : undefined
      }
    />
  );
}

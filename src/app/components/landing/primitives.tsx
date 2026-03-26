import type { ReactNode } from "react";
import { useInView } from "../../../hooks/useInView";

// ── Reveal — scroll-triggered fade-up ────────────────────────────────────────
interface RevealProps { children: ReactNode; delay?: number; className?: string }
export function Reveal({ children, delay = 0, className = "" }: RevealProps) {
  const [ref, visible] = useInView();
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(28px)",
        transition: `opacity 0.7s cubic-bezier(0.22,1,0.36,1) ${delay}ms,
                     transform 0.7s cubic-bezier(0.22,1,0.36,1) ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}

// ── SectionEyebrow ───────────────────────────────────────────────────────────
export function SectionEyebrow({ children }: { children: ReactNode }) {
  return (
    <div className="flex items-center gap-2.5 mb-4">
      <span className="block w-6 h-0.5 bg-brand rounded-sm" />
      <span className="text-[11px] font-bold tracking-[0.16em] uppercase text-brand">
        {children}
      </span>
    </div>
  );
}

// ── SectionHeading ───────────────────────────────────────────────────────────
export function SectionHeading({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <h2 className={`heading-section text-gym-text mb-5 ${className}`}>
      {children}
    </h2>
  );
}

// ── SectionSubtitle ──────────────────────────────────────────────────────────
export function SectionSubtitle({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <p className={`text-[17px] leading-relaxed text-gym-muted mb-16 max-w-120 ${className}`}>
      {children}
    </p>
  );
}

// ── CtaButton ────────────────────────────────────────────────────────────────
interface CtaButtonProps { href: string; children: ReactNode; className?: string; dark?: boolean }
export function CtaButton({ href, children, className = "", dark = false }: CtaButtonProps) {
  const base = "inline-block no-underline font-extrabold text-sm tracking-wider rounded-lg px-8 py-4 transition-all duration-200 hover:-translate-y-0.5 hover:opacity-90";
  const variant = dark
    ? "bg-black text-brand"
    : "bg-brand text-black";
  return (
    <a href={href} target="_blank" rel="noreferrer" className={`${base} ${variant} ${className}`}>
      {children}
    </a>
  );
}

// ── GhostButton ──────────────────────────────────────────────────────────────
export function GhostButton({ onClick, children }: { onClick: () => void; children: ReactNode }) {
  return (
    <button
      onClick={onClick}
      className="bg-transparent text-gym-text font-bold text-sm tracking-wider border border-gym-border rounded-lg px-8 py-4 cursor-pointer transition-all duration-200 hover:border-gym-border-hi hover:-translate-y-0.5"
    >
      {children}
    </button>
  );
}

// ── SectionDivider ───────────────────────────────────────────────────────────
export function SectionDivider() {
  return (
    <div
      className="h-px mx-6"
      style={{ background: "linear-gradient(90deg, transparent 0%, #222 20%, #222 80%, transparent 100%)" }}
    />
  );
}

// ── StarRating ───────────────────────────────────────────────────────────────
export function StarRating({ count = 5 }: { count?: number }) {
  return (
    <span className="text-brand text-[13px] tracking-[3px]">
      {"★".repeat(count)}
    </span>
  );
}

// ── Chip ─────────────────────────────────────────────────────────────────────
export function Chip({ children, color }: { children: ReactNode; color: string }) {
  return (
    <span
      className="inline-block px-3 py-1 rounded-full text-[11px] font-bold tracking-wider uppercase"
      style={{
        background: color + "18",
        border: `1px solid ${color}40`,
        color,
      }}
    >
      {children}
    </span>
  );
}

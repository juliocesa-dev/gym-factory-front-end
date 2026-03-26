import { CONTENT } from "../../../config";
import { CtaButton, GhostButton } from "./primitives";

export function Hero() {
  return (
    <section className="min-h-screen flex items-center bg-gym-bg relative overflow-hidden pt-16">

      {/* Dot-grid background */}
      <div
        className="absolute inset-0 pointer-events-none opacity-60"
        style={{
          backgroundImage: "radial-gradient(circle, #222 1px, black 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      {/* Brand glow — right */}
      <div
        className="absolute top-[15%] -right-[10%] w-175 h-175 rounded-full pointer-events-none animate-glow-pulse"
        style={{ background: "radial-gradient(circle, #E8FF0014 0%, transparent 65%)" }}
      />

      {/* Brand glow — left */}
      <div
        className="absolute bottom-[5%] -left-[15%] w-125 h-125 rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, #E8FF0008 0%, transparent 65%)" }}
      />

      <div className="max-w-300 mx-auto px-7 py-20 relative z-10 w-full">

        {/* Eyebrow pill */}
        <div className="anim-fade-up mb-7" style={{ animationDelay: "0.1s" }}>
          <span className="inline-flex items-center gap-2 px-4 py-1.5 border border-gym-border rounded-full text-xs font-medium tracking-widest text-gym-muted">
            <span className="w-1.5 h-1.5 rounded-full bg-brand inline-block" />
            Recife, Pernambuco
          </span>
        </div>

        {/* Headline */}
        <h1
          className="anim-fade-up heading-hero text-gym-text mb-7"
          style={{ animationDelay: "0.25s" }}
        >
          FORGE<br />
          <span className="text-brand">YOUR</span><br />
          LIMITS.
        </h1>

        {/* Description + CTAs */}
        <div
          className="anim-fade-up flex flex-wrap items-end gap-12 mb-20"
          style={{ animationDelay: "0.42s" }}
        >
          <p className="text-[18px] leading-relaxed text-gym-muted max-w-110 m-0">
            {CONTENT.gym.description}
          </p>
          <div className="flex gap-3 flex-wrap">
            <CtaButton href={`https://wa.me/${CONTENT.gym.whatsapp}`}>
              Agendar aula gratuita
            </CtaButton>
            <GhostButton onClick={() => document.getElementById("planos")?.scrollIntoView({ behavior: "smooth" })}>
              Ver planos
            </GhostButton>
          </div>
        </div>

        {/* Stats bar */}
        <div
          className="anim-fade-up grid grid-cols-2 sm:grid-cols-4 border-t border-gym-border pt-10"
          style={{ animationDelay: "0.58s" }}
        >
          {CONTENT.stats.map((s, i) => (
            <div
              key={i}
              className={`pr-8 ${i < CONTENT.stats.length - 1 ? "border-r border-gym-border" : ""}`}
            >
              <div className="font-condensed font-black text-gym-text tracking-tight leading-none"
                style={{ fontSize: "clamp(36px, 4vw, 48px)" }}>
                {s.value}
              </div>
              <div className="text-[13px] text-gym-muted mt-1.5 leading-snug">{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll cue */}
      <div
        className="anim-fade-in absolute bottom-9 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2.5"
        style={{ animationDelay: "1.4s" }}
      >
        <span className="text-[10px] text-gym-faint tracking-[0.16em] uppercase">scroll</span>
        <div
          className="w-px h-12 animate-scroll-pulse origin-top"
          style={{ background: "linear-gradient(#E8FF0080, transparent)" }}
        />
      </div>
    </section>
  );
}

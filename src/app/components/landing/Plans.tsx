import { CONTENT } from "../../../config";
import { CtaButton, Reveal, SectionEyebrow, SectionHeading, SectionSubtitle } from "./primitives";

export function Plans() {
  return (
    <section id="planos" className="bg-gym-surface py-30 px-7">
      <div className="max-w-300 mx-auto">

        <Reveal className="text-center">
          <SectionEyebrow>Planos e Preços</SectionEyebrow>
          <SectionHeading>Invista em você.</SectionHeading>
          <SectionSubtitle className="mx-auto">
            Sem fidelidade, sem letras miúdas. Cancele quando quiser.
          </SectionSubtitle>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
          {CONTENT.plans.map((plan, i) => (
            <Reveal key={plan.id} delay={i * 90}>
              <div
                className={`relative rounded-2xl p-11 transition-shadow duration-300 ${
                  plan.highlight
                    ? "bg-[#0f0f0f] border-[1.5px] border-brand scale-[1.04] shadow-[0_0_60px_#E8FF0012]"
                    : "bg-gym-bg border border-gym-border"
                }`}
              >
                {/* Popular badge */}
                {plan.badge && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                    <span className="inline-block px-4 py-1 rounded-full bg-brand text-black text-[11px] font-extrabold tracking-widest uppercase whitespace-nowrap">
                      {plan.badge}
                    </span>
                  </div>
                )}

                {/* Plan name */}
                <p className={`font-condensed font-extrabold text-base tracking-[0.14em] uppercase mb-5 ${plan.highlight ? "text-brand" : "text-gym-muted"}`}>
                  {plan.name}
                </p>

                {/* Price */}
                <div className="flex items-baseline gap-1 mb-9">
                  <span className="text-[15px] text-gym-muted self-start mt-2">R$</span>
                  <span className="font-condensed font-black leading-none tracking-tighter text-gym-text"
                    style={{ fontSize: "clamp(52px, 7vw, 72px)" }}>
                    {plan.price}
                  </span>
                  <span className="text-[14px] text-gym-muted">/{plan.period}</span>
                </div>

                {/* Features */}
                <ul className="border-t border-gym-border pt-7 mb-8 space-y-3.5 list-none p-0 m-0">
                  {plan.features.map((f, j) => (
                    <li key={j} className="flex items-start gap-3 text-[14px] text-gym-muted leading-snug">
                      <span className="text-brand font-bold text-[15px] shrink-0 mt-0.5">✓</span>
                      {f}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                {plan.highlight ? (
                  <CtaButton href={`https://wa.me/${CONTENT.gym.whatsapp}`} className="block! text-center! rounded-lg!">
                    {plan.cta}
                  </CtaButton>
                ) : (
                  <a
                    href={`https://wa.me/${CONTENT.gym.whatsapp}`}
                    target="_blank" rel="noreferrer"
                    className="block text-center no-underline px-6 py-4 rounded-lg font-bold text-[14px] tracking-wider text-gym-text border border-gym-border hover:border-gym-border-hi hover:-translate-y-px transition-all duration-200"
                  >
                    {plan.cta}
                  </a>
                )}
              </div>
            </Reveal>
          ))}
        </div>

        {/* Reassurance */}
        <Reveal delay={300}>
          <p className="text-center mt-9 text-[13px] text-gym-faint flex items-center justify-center gap-5 flex-wrap">
            <span>✓ Sem contrato de fidelidade</span>
            <span className="opacity-30">·</span>
            <span>✓ Cancele quando quiser</span>
            <span className="opacity-30">·</span>
            <span>✓ Primeira aula sempre gratuita</span>
          </p>
        </Reveal>
      </div>
    </section>
  );
}

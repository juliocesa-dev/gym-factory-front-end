import { CONTENT } from "../../../config";
import { CtaButton, Reveal } from "./primitives";

const INFO = [
  { label: "Endereço", icon: "📍", value: CONTENT.gym.address },
  { label: "Telefone", icon: "📞", value: CONTENT.gym.phone },
  { label: "E-mail",   icon: "✉️",  value: CONTENT.gym.email },
  { label: "Horários", icon: "🕐",  value: CONTENT.gym.hours },
] as const;

export function Contact() {
  return (
    <section id="contato" className="bg-gym-bg px-7 pb-[120px]">
      <div className="max-w-[1200px] mx-auto">

        {/* CTA Banner */}
        <Reveal>
          <div className="bg-brand rounded-2xl px-16 py-20 flex flex-wrap items-center justify-between gap-9 mb-20"
            style={{ padding: "clamp(48px, 6vw, 80px) clamp(36px, 5vw, 72px)" }}>
            <div>
              <p className="text-[12px] font-bold tracking-[0.14em] uppercase text-black/50 mb-3 m-0">
                Primeira aula gratuita
              </p>
              <h2 className="font-condensed font-black leading-none tracking-tight text-black m-0"
                style={{ fontSize: "clamp(36px, 5.5vw, 60px)" }}>
                Sua melhor forma<br />começa hoje.
              </h2>
            </div>

            <CtaButton
              href={`https://wa.me/${CONTENT.gym.whatsapp}`}
              dark
              className="!whitespace-nowrap !px-10 !py-5 !text-[15px] !rounded-xl"
            >
              Agendar no WhatsApp →
            </CtaButton>
          </div>
        </Reveal>

        {/* Info grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {INFO.map((item, i) => (
            <Reveal key={i} delay={i * 70}>
              <div>
                <span className="text-2xl block mb-3.5">{item.icon}</span>
                <p className="text-[11px] font-bold tracking-[0.12em] uppercase text-brand mb-2 m-0">
                  {item.label}
                </p>
                <p className="text-[14px] text-gym-muted leading-relaxed m-0">
                  {item.value}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

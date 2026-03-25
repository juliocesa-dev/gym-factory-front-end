import { CONTENT } from "../../../config";
import { Reveal, SectionEyebrow, SectionHeading, SectionSubtitle } from "./primitives";

export function Modalities() {
  return (
    <section id="modalidades" className="bg-gym-bg py-30 px-7">
      <div className="max-w-300 mx-auto">

        <Reveal>
          <SectionEyebrow>Modalidades</SectionEyebrow>
          <SectionHeading>Treine do seu jeito.</SectionHeading>
          <SectionSubtitle>
            Seis modalidades para você alcançar todos os seus objetivos sem sair da mesma academia.
          </SectionSubtitle>
        </Reveal>

        {/* Grid with shared borders */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 border border-gym-border rounded-xl overflow-hidden gap-px bg-gym-border">
          {CONTENT.modalities.map((mod, i) => (
            <Reveal key={i} delay={i * 60}>
              <div className="bg-gym-surface hover:bg-gym-hover transition-colors duration-200 p-10 flex flex-col group cursor-default h-full">
                <span className="text-3xl mb-5 block">{mod.icon}</span>

                <h3 className="font-condensed font-extrabold text-[28px] text-gym-text tracking-wide mb-3">
                  {mod.name}
                </h3>

                <p className="text-[14px] leading-relaxed text-gym-muted mb-7 flex-1">
                  {mod.desc}
                </p>

                <span className="text-[13px] font-semibold text-gym-faint group-hover:text-brand transition-colors duration-200 flex items-center gap-1.5">
                  Ver horários
                  <span className="inline-block transition-transform duration-200 group-hover:translate-x-1">→</span>
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

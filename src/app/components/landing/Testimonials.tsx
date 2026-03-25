import { CONTENT } from "../../../config";
import { Reveal, SectionEyebrow, SectionHeading, StarRating } from "./primitives";

export function Testimonials() {
  return (
    <section id="depoimentos" className="bg-gym-surface py-[120px] px-7">
      <div className="max-w-[1200px] mx-auto">

        <Reveal>
          <SectionEyebrow>Depoimentos</SectionEyebrow>
          <SectionHeading>Quem treina, recomenda.</SectionHeading>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-16">
          {CONTENT.testimonials.map((t, i) => (
            <Reveal key={i} delay={i * 90}>
              <div className="bg-gym-bg border border-gym-border rounded-2xl p-9 flex flex-col h-full">
                <StarRating count={t.rating} />

                <blockquote className="text-[15px] leading-relaxed text-gym-muted italic my-5 flex-1 m-0 p-0 border-none">
                  "{t.text}"
                </blockquote>

                <div className="flex items-center gap-3.5 border-t border-gym-border pt-6">
                  <div className="w-10 h-10 rounded-full bg-gym-surface border border-gym-border flex items-center justify-center font-condensed font-extrabold text-[15px] text-brand shrink-0">
                    {t.initials}
                  </div>
                  <div>
                    <p className="text-[14px] font-semibold text-gym-text m-0">{t.name}</p>
                    <p className="text-[12px] text-gym-faint m-0 mt-0.5">{t.role}</p>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

import { useState } from "react";
import { CONTENT } from "../../../config";
import { Reveal, SectionEyebrow, SectionHeading } from "./primitives";

export function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className="bg-gym-bg py-30 px-7">
      <div className="max-w-190 mx-auto">

        <Reveal>
          <SectionEyebrow>FAQ</SectionEyebrow>
          <SectionHeading className="mb-14!">Perguntas frequentes.</SectionHeading>
        </Reveal>

        <div className="flex flex-col gap-1">
          {CONTENT.faqs.map((faq, i) => {
            const isOpen = open === i;
            return (
              <Reveal key={i} delay={i * 55}>
                <div
                  className={`bg-gym-surface rounded-xl overflow-hidden border transition-colors duration-200 ${
                    isOpen ? "border-brand/30" : "border-gym-border"
                  }`}
                >
                  <button
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="w-full bg-transparent border-none px-7 py-5 text-left cursor-pointer flex justify-between items-center gap-5"
                  >
                    <span className="text-[15px] font-semibold text-gym-text leading-snug">
                      {faq.q}
                    </span>
                    <span
                      className={`text-2xl leading-none shrink-0 inline-block transition-all duration-300 ${
                        isOpen ? "rotate-45 text-brand" : "rotate-0 text-gym-faint"
                      }`}
                    >
                      +
                    </span>
                  </button>

                  <div
                    className="overflow-hidden transition-[max-height] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]"
                    style={{ maxHeight: isOpen ? 300 : 0 }}
                  >
                    <p className="px-7 pb-6 pt-1 text-[14px] leading-relaxed text-gym-muted m-0">
                      {faq.a}
                    </p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

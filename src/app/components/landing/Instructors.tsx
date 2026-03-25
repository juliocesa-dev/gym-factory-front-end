import { CONTENT } from "../../../config";
import { Chip, Reveal, SectionEyebrow, SectionHeading, SectionSubtitle } from "./primitives";

export function Instructors() {
  return (
    <section id="instrutores" className="bg-gym-bg py-30 px-7">
      <div className="max-w-300 mx-auto">

        <Reveal>
          <SectionEyebrow>Nossa Equipe</SectionEyebrow>
          <SectionHeading>Especialistas no que fazem.</SectionHeading>
          <SectionSubtitle>
            Profissionais certificados e apaixonados por resultados. Cada instrutor é selecionado pela expertise e pelo comprometimento com o aluno.
          </SectionSubtitle>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {CONTENT.instructors.map((ins, i) => (
            <Reveal key={i} delay={i * 80}>
              {/* border-color and box-shadow are dynamic JS values — style is intentional here */}
              <div
                className="bg-gym-surface border border-gym-border rounded-2xl p-7 cursor-default transition-all duration-200 hover:-translate-y-1.5"
                style={{ "--accent": ins.accentColor } as React.CSSProperties}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLDivElement;
                  el.style.borderColor = ins.accentColor + "55";
                  el.style.boxShadow = `0 16px 48px ${ins.accentColor}10`;
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLDivElement;
                  el.style.borderColor = "";
                  el.style.boxShadow = "";
                }}
              >
                {/* Avatar — accentColor is dynamic */}
                <div
                  className="w-14 h-14 rounded-xl flex items-center justify-center font-condensed font-black text-xl mb-6"
                  style={{
                    background: ins.accentColor + "16",
                    border: `1.5px solid ${ins.accentColor}35`,
                    color: ins.accentColor,
                  }}
                >
                  {ins.initials}
                </div>

                <h3 className="font-condensed font-extrabold text-2xl text-gym-text tracking-wide mb-1">
                  {ins.name}
                </h3>
                <p className="text-[13px] font-semibold mb-1" style={{ color: ins.accentColor }}>
                  {ins.role}
                </p>
                <p className="text-[12px] text-gym-faint mb-5">{ins.credential}</p>

                <Chip color={ins.accentColor}>{ins.specialty}</Chip>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

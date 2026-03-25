import { useEffect, useState } from "react";
import { CONTENT } from "../../../config";
import { CtaButton } from "./primitives";

const NAV_LINKS = ["Modalidades", "Planos", "Instrutores", "Depoimentos", "FAQ", "Contato"];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 48);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const scrollTo = (id: string) =>
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: "smooth" });

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 h-16 flex items-center transition-all duration-300 ${
        scrolled
          ? "bg-gym-bg/90 border-b border-gym-border backdrop-blur-xl"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="max-w-300 mx-auto px-7 w-full flex items-center justify-between">

        {/* Logo */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="flex items-center gap-2.5 bg-transparent border-none cursor-pointer p-0"
        >
          <div className="w-8 h-8 rounded-lg bg-brand flex items-center justify-center font-condensed font-black text-lg text-black">
            A
          </div>
          <span className="font-condensed font-extrabold text-xl tracking-widest text-gym-text">
            {CONTENT.gym.name}
          </span>
        </button>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-9">
          {NAV_LINKS.map((label) => (
            <button
              key={label}
              onClick={() => scrollTo(label)}
              className="bg-transparent border-none cursor-pointer p-0 text-[13px] font-medium tracking-wider text-gym-muted hover:text-gym-text transition-colors duration-200"
            >
              {label}
            </button>
          ))}
        </div>

        {/* CTA */}
        <CtaButton
          href={`https://wa.me/${CONTENT.gym.whatsapp}`}
          className="px-5! py-2.5! text-[13px]! rounded-md!"
        >
          Aula grátis →
        </CtaButton>
      </div>
    </nav>
  );
}

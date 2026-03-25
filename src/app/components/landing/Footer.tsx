import { CONTENT } from "../../../config";

const SOCIALS = [
  { label: "Instagram", href: `https://instagram.com/${CONTENT.gym.instagram.replace("@", "")}` },
  { label: "WhatsApp",  href: `https://wa.me/${CONTENT.gym.whatsapp}` },
  { label: "YouTube",   href: "#" },
];

export function Footer() {
  return (
    <footer className="bg-gym-surface border-t border-gym-border py-9 px-7">
      <div className="max-w-300 mx-auto flex flex-wrap items-center justify-between gap-5">

        {/* Logo */}
        <div className="flex items-center gap-2.5">
          <div className="w-7 h-7 rounded-md bg-brand flex items-center justify-center font-condensed font-black text-sm text-black">
            A
          </div>
          <span className="font-condensed font-extrabold text-[17px] tracking-widest text-gym-text">
            {CONTENT.gym.name}
          </span>
        </div>

        <p className="text-[13px] text-gym-faint m-0">
          © {new Date().getFullYear()} {CONTENT.gym.name}. Todos os direitos reservados.
        </p>

        <div className="flex gap-7">
          {SOCIALS.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer"
              className="text-[13px] text-gym-faint no-underline hover:text-gym-text transition-colors duration-200"
            >
              {label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}

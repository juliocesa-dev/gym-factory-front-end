# APEX GYM — Landing Page

Landing page moderna para academia, construída com **Vite + React 19 + TypeScript + Tailwind CSS v4**.

## Stack

| Ferramenta | Versão |
|---|---|
| Vite | 6.x |
| React | 19.x |
| TypeScript | 5.8 |
| Tailwind CSS | 4.x (via `@tailwindcss/vite`) |
| React Router | 7.x |

## Como rodar

```bash
# 1. Instalar dependências
npm install

# 2. Servidor de desenvolvimento (abre automaticamente em http://localhost:5173)
npm run dev

# 3. Build de produção
npm run build

# 4. Preview do build
npm run preview
```

## Personalização

Todo o conteúdo e tema ficam em um único arquivo:

```
src/config.ts
```

- **`THEME`** — cores, accent color, backgrounds. Altere `brand` para mudar a cor de destaque em todo o site.
- **`CONTENT`** — textos, preços, instrutores, depoimentos, FAQs, dados de contato.

## Estrutura de pastas

```
src/
├── config.ts                         ← tema e conteúdo centralizados
├── hooks/
│   └── useInView.ts                  ← scroll-triggered animations
├── styles/
│   └── index.css                     ← Tailwind + animações globais
└── app/
    ├── App.tsx
    ├── routes.tsx
    ├── pages/
    │   └── LandingPage.tsx           ← monta todas as seções
    └── components/
        ├── landing/
        │   ├── primitives.tsx        ← Badge, Reveal, CtaButton, etc.
        │   ├── Navbar.tsx
        │   ├── Hero.tsx
        │   ├── Modalities.tsx
        │   ├── Plans.tsx
        │   ├── Instructors.tsx
        │   ├── Testimonials.tsx
        │   ├── FAQ.tsx
        │   ├── Contact.tsx
        │   └── Footer.tsx
        └── ui/                       ← componentes shadcn/ui (prontos para uso futuro)
```

## Seções da landing page

1. **Navbar** — fixa, scroll-aware, link "Aula grátis" → WhatsApp
2. **Hero** — headline impactante, stats animadas, CTA duplo
3. **Modalidades** — grid 6 atividades com hover
4. **Planos** — 3 tiers (Básico / Pro / Elite), sem fidelidade
5. **Instrutores** — 4 cards com cor por especialidade
6. **Depoimentos** — 3 reviews com avatar e estrelas
7. **FAQ** — accordion animado
8. **Contato** — banner CTA + grid de informações
9. **Footer** — links sociais e copyright

## Adicionando novas páginas

Edite `src/app/routes.tsx`:

```tsx
import { createBrowserRouter } from "react-router";
import LandingPage from "./pages/LandingPage";
import OutraPage from "./pages/OutraPage";

export const router = createBrowserRouter([
  { path: "/",      element: <LandingPage /> },
  { path: "/outro", element: <OutraPage /> },
]);
```

// ─── SITE CONTENT ────────────────────────────────────────────────────────────
// Edit this file to update every text, price, and data point on the page.

export const content = {
  gym: {
    name:        "APEX GYM",
    tagline:     "Forge Your Limits",
    description: "Uma academia premium construída para quem recusa ser ordinário. Equipamentos de elite, treinadores especializados e uma comunidade que te empurra além dos limites.",
    address:     "Av. Agamenon Magalhães, 4444 — Recife, PE",
    phone:       "+55 (81) 9 9999-0000",
    email:       "contato@apexgym.com.br",
    hours:       "Seg–Sex: 5h–23h  |  Sáb: 6h–20h  |  Dom: 7h–14h",
    instagram:   "@apexgym",
    whatsapp:    "5581999990000",
  },

  stats: [
    { value: "12+",   label: "Anos de experiência" },
    { value: "3.200", label: "Alunos ativos" },
    { value: "48",    label: "Instrutores certificados" },
    { value: "98%",   label: "Taxa de satisfação" },
  ],

  plans: [
    {
      id:        "basic",
      name:      "Básico",
      price:     "89",
      period:    "mês",
      highlight: false,
      badge:     null as string | null,
      features:  [
        "Acesso ilimitado à musculação",
        "Vestiários premium",
        "App de treino gratuito",
        "1 avaliação física/mês",
        "WiFi de alta velocidade",
      ],
      cta: "Começar agora",
    },
    {
      id:        "pro",
      name:      "Pro",
      price:     "149",
      period:    "mês",
      highlight: true,
      badge:     "Mais popular",
      features:  [
        "Tudo do plano Básico",
        "Acesso às aulas coletivas",
        "2 sessões c/ personal trainer",
        "Nutricionista online",
        "Armário exclusivo",
        "Acesso 24h nos finais de semana",
      ],
      cta: "Assinar Pro",
    },
    {
      id:        "elite",
      name:      "Elite",
      price:     "249",
      period:    "mês",
      highlight: false,
      badge:     null as string | null,
      features:  [
        "Tudo do plano Pro",
        "Personal trainer ilimitado",
        "Consultas de nutrição mensais",
        "Acesso à sauna & spa",
        "Estacionamento incluso",
        "Convidados gratuitos (2x/mês)",
        "Prioridade em agendamentos",
      ],
      cta: "Falar com consultor",
    },
  ],

  modalities: [
    {
      icon: "💪",
      name: "Musculação",
      desc: "Equipamentos de última geração das melhores marcas do mercado para maximizar seus resultados.",
    },
    {
      icon: "🥊",
      name: "Muay Thai",
      desc: "Aulas com instrutores federados para iniciantes e competidores. Queime calorias e aprenda a se defender.",
    },
    {
      icon: "🧘",
      name: "Yoga & Pilates",
      desc: "Trabalhe flexibilidade, equilíbrio e mente. Turmas reduzidas para atenção individualizada.",
    },
    {
      icon: "🚴",
      name: "Spinning",
      desc: "Bike indoor com professores motivadores e playlists exclusivas. Cardio de alta intensidade.",
    },
    {
      icon: "🏃",
      name: "Funcional",
      desc: "Treinamento baseado em movimentos naturais do corpo para performance e saúde integral.",
    },
    {
      icon: "🏊",
      name: "Natação",
      desc: "Piscina olímpica aquecida com aulas para todas as idades e níveis. Turmas a partir de 3 anos.",
    },
  ],

  instructors: [
    {
      name:      "Lucas Menezes",
      role:      "Head Personal Trainer",
      cref:      "CREF 12345-G/PE",
      specialty: "Hipertrofia & Força",
      initials:  "LM",
      bgColor:   "#1a2a1a",
      accent:    "#E8FF00",
    },
    {
      name:      "Camila Rocha",
      role:      "Nutricionista Esportiva",
      cref:      "CRN 98765",
      specialty: "Emagrecimento & Performance",
      initials:  "CR",
      bgColor:   "#1a1a2a",
      accent:    "#00D4FF",
    },
    {
      name:      "Rafael Souza",
      role:      "Instrutor de Lutas",
      cref:      "CREF 54321-G/PE",
      specialty: "Muay Thai & MMA",
      initials:  "RS",
      bgColor:   "#2a1a1a",
      accent:    "#FF5533",
    },
    {
      name:      "Ana Beatriz Lima",
      role:      "Instrutora de Yoga",
      cref:      "Yoga Alliance 200H",
      specialty: "Hatha & Vinyasa Yoga",
      initials:  "AB",
      bgColor:   "#1a1a1a",
      accent:    "#CC88FF",
    },
  ],

  testimonials: [
    {
      name:    "Pedro Alves",
      role:    "Aluno há 3 anos",
      initials:"PA",
      rating:  5,
      text:    "Perdi 18 kg em 8 meses com o acompanhamento do personal. A estrutura é incrível e os instrutores realmente se importam com o seu progresso.",
    },
    {
      name:    "Marina Costa",
      role:    "Aluna há 1 ano",
      initials:"MC",
      rating:  5,
      text:    "O ambiente é motivador e profissional. Comecei do zero no muay thai e hoje já participo de competições amateurs. Melhor decisão que tomei!",
    },
    {
      name:    "Thiago Barbosa",
      role:    "Aluno há 2 anos",
      initials:"TB",
      rating:  5,
      text:    "A piscina olímpica aquecida é um diferencial absurdo. Treino natação toda manhã antes do trabalho. Equipe sempre muito atenciosa.",
    },
  ],

  faqs: [
    {
      q: "Posso experimentar antes de assinar?",
      a: "Sim! Oferecemos um dia de aula experimental gratuito para novos alunos. Basta agendar pelo WhatsApp ou app.",
    },
    {
      q: "Existe fidelidade ou contrato mínimo?",
      a: "Não exigimos fidelidade. Você pode cancelar a qualquer momento sem multa. Trabalhamos com mensalidade ou planos trimestrais/anuais com desconto.",
    },
    {
      q: "O plano Pro inclui todas as aulas coletivas?",
      a: "Sim, o plano Pro dá acesso ilimitado a spinning, funcional, yoga, pilates e muay thai. Apenas natação requer upgrade para o Elite.",
    },
    {
      q: "Tem estacionamento?",
      a: "Temos estacionamento parceiro conveniado para alunos Básico e Pro. O plano Elite inclui vaga coberta e gratuita.",
    },
    {
      q: "Posso treinar em mais de uma unidade?",
      a: "Hoje temos uma unidade em Recife. A segunda unidade abre em 2025 e alunos atuais terão acesso sem custo adicional.",
    },
  ],

  contactInfo: [
    { label: "Endereço", icon: "📍", value: "Av. Agamenon Magalhães, 4444 — Recife, PE" },
    { label: "Telefone", icon: "📞", value: "+55 (81) 9 9999-0000" },
    { label: "E-mail",   icon: "✉️", value: "contato@apexgym.com.br" },
    { label: "Horários", icon: "🕐", value: "Seg–Sex: 5h–23h  |  Sáb: 6h–20h  |  Dom: 7h–14h" },
  ],
} as const;

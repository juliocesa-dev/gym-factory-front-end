// Central content data — edit here to update all copy across the page
export const CONTENT = {
  gym: {
    name:        "APEX GYM",
    tagline:     "Forge Your Limits",
    description: "Uma academia premium construída para quem se recusa a ser ordinário. Equipamentos de elite, instrutores especialistas e uma comunidade que te impulsiona além dos seus limites.",
    address:     "Av. Agamenon Magalhães, 4444 — Recife, PE",
    phone:       "+55 (81) 9 9999-0000",
    email:       "contato@apexgym.com.br",
    hours:       "Seg–Sex: 5h–23h  ·  Sáb: 6h–20h  ·  Dom: 7h–14h",
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
      id: "basic", name: "Básico", price: "89", period: "mês",
      highlight: false, badge: null,
      features: [
        "Acesso ilimitado à musculação",
        "Vestiários premium",
        "App de treino gratuito",
        "1 avaliação física/mês",
        "WiFi de alta velocidade",
      ],
      cta: "Começar agora",
    },
    {
      id: "pro", name: "Pro", price: "149", period: "mês",
      highlight: true, badge: "Mais popular",
      features: [
        "Tudo do plano Básico",
        "Acesso às aulas coletivas",
        "2 sessões c/ personal trainer",
        "Nutricionista online",
        "Armário exclusivo",
        "Acesso 24h nos fins de semana",
      ],
      cta: "Assinar Pro",
    },
    {
      id: "elite", name: "Elite", price: "249", period: "mês",
      highlight: false, badge: null,
      features: [
        "Tudo do plano Pro",
        "Personal trainer ilimitado",
        "Consultas de nutrição mensais",
        "Acesso à sauna & spa",
        "Estacionamento incluso",
        "Convidados gratuitos (2×/mês)",
        "Prioridade em agendamentos",
      ],
      cta: "Falar com consultor",
    },
  ],

  modalities: [
    { icon: "💪", name: "Musculação",     desc: "Equipamentos de última geração para maximizar hipertrofia, força e resistência com segurança." },
    { icon: "🥊", name: "Muay Thai",      desc: "Aulas com instrutores federados para iniciantes e competidores. Queime calorias e aprenda a se defender." },
    { icon: "🧘", name: "Yoga & Pilates", desc: "Flexibilidade, equilíbrio e mente trabalhados juntos. Turmas reduzidas para atenção individualizada." },
    { icon: "🚴", name: "Spinning",       desc: "Bike indoor com professores motivadores e playlists exclusivas. Cardio de alta intensidade." },
    { icon: "🏃", name: "Funcional",      desc: "Movimentos naturais do corpo para performance integral. Treinos variados que nunca ficam repetitivos." },
    { icon: "🏊", name: "Natação",        desc: "Piscina olímpica aquecida com aulas para todas as idades e níveis, a partir de 3 anos." },
  ],

  instructors: [
    { name: "Lucas Menezes",    role: "Head Personal Trainer",   credential: "CREF 12345-G/PE",    specialty: "Hipertrofia & Força",         initials: "LM", accentColor: "#E8FF00" },
    { name: "Camila Rocha",     role: "Nutricionista Esportiva", credential: "CRN 98765",           specialty: "Emagrecimento & Performance",  initials: "CR", accentColor: "#00D4FF" },
    { name: "Rafael Souza",     role: "Instrutor de Lutas",      credential: "CREF 54321-G/PE",    specialty: "Muay Thai & MMA",             initials: "RS", accentColor: "#FF5533" },
    { name: "Ana Beatriz Lima", role: "Instrutora de Yoga",      credential: "Yoga Alliance 200H", specialty: "Hatha & Vinyasa",             initials: "AB", accentColor: "#CC88FF" },
  ],

  testimonials: [
    { name: "Pedro Alves",    role: "Aluno há 3 anos", initials: "PA", rating: 5, text: "Perdi 18 kg em 8 meses com o acompanhamento do personal. A estrutura é incrível e os instrutores realmente se importam com o seu progresso." },
    { name: "Marina Costa",   role: "Aluna há 1 ano",  initials: "MC", rating: 5, text: "Comecei do zero no muay thai e hoje já participo de competições amateurs. O ambiente é motivador e muito profissional." },
    { name: "Thiago Barbosa", role: "Aluno há 2 anos", initials: "TB", rating: 5, text: "A piscina olímpica aquecida é um diferencial absurdo. Treino toda manhã antes do trabalho. Equipe sempre muito atenciosa." },
  ],

  faqs: [
    { q: "Posso experimentar antes de assinar?",         a: "Sim! Oferecemos um dia de aula experimental gratuito para novos alunos. Basta agendar pelo WhatsApp ou app." },
    { q: "Existe fidelidade ou contrato mínimo?",        a: "Não exigimos fidelidade. Você pode cancelar a qualquer momento sem multa. Oferecemos descontos para planos trimestrais e anuais." },
    { q: "O plano Pro inclui todas as aulas coletivas?", a: "Sim, o Pro dá acesso ilimitado a spinning, funcional, yoga, pilates e muay thai. Apenas natação requer upgrade para o Elite." },
    { q: "Tem estacionamento?",                          a: "Temos estacionamento conveniado para Básico e Pro. O Elite inclui vaga coberta e gratuita." },
    { q: "Posso treinar em mais de uma unidade?",        a: "Hoje temos uma unidade em Recife. A segunda unidade abre em 2025 e alunos atuais terão acesso sem custo adicional." },
  ],
};

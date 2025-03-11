import type { Guideline, FAQItem } from "@/types";

export const guidelines: Guideline[] = [
  {
    id: 1,
    title: "ESHRE guideline: recurrent pregnancy loss",
    organization: "European Society of Human Reproduction and Embryology",
    year: 2022,
    description:
      "Provides recommendations for the management of women with recurrent pregnancy loss based on the best available evidence.",
  },
  {
    id: 2,
    title: "ESHRE guideline: unexplained infertility",
    organization: "European Society of Human Reproduction and Embryology",
    year: 2023,
    description:
      "Provides evidence-based recommendations for the management of couples with unexplained infertility.",
  },
];

export const faqItems: FAQItem[] = [
  {
    question: "O que é medicina baseada em evidências?",
    answer:
      "Medicina baseada em evidências é a integração das melhores evidências de pesquisa com a experiência clínica e os valores do paciente. Envolve o uso das melhores evidências disponíveis de pesquisa sistemática ao tomar decisões sobre o cuidado individual do paciente. Este conceito promove uma abordagem mais científica e eficaz para a prática médica, especialmente em áreas como medicina reprodutiva onde novas tecnologias e tratamentos estão constantemente surgindo.",
  },
  {
    question: "Como são determinados os níveis de evidência?",
    answer:
      "Os níveis de evidência são determinados com base na qualidade e metodologia dos estudos de pesquisa. Evidências de alta qualidade geralmente vêm de ensaios clínicos randomizados bem projetados e metanálises. Evidências de qualidade moderada podem vir de estudos de coorte ou caso-controle controlados. Evidências de baixa qualidade podem derivar de estudos observacionais, séries de casos ou relatórios de casos, enquanto as de muito baixa qualidade são baseadas principalmente em opinião de especialistas. A classificação GRADE é um dos sistemas mais utilizados internacionalmente para avaliar a qualidade da evidência.",
  },
  {
    question:
      "Por que algumas intervenções não são recomendadas apesar de serem comumente usadas?",
    answer:
      "Algumas intervenções se tornam comuns na prática clínica antes que evidências de alta qualidade estejam disponíveis para apoiar seu uso. À medida que a pesquisa evolui, pode-se descobrir que algumas práticas carecem de evidências suficientes de benefício, ou que os riscos superam os benefícios potenciais. As diretrizes clínicas têm como objetivo promover intervenções com benefícios comprovados e limitar aquelas sem evidências de eficácia. Em medicina reprodutiva, vários procedimentos populares têm sido reavaliados à luz de novas evidências, levando a mudanças nas recomendações práticas. É importante que os médicos se mantenham atualizados com as diretrizes mais recentes.",
  },
  {
    question: "O que significa 'recomendação condicional'?",
    answer:
      "Uma recomendação condicional significa que a intervenção pode ser benéfica para alguns pacientes em circunstâncias específicas, mas não é universalmente recomendada. A decisão de usar essas intervenções deve ser tomada caso a caso, considerando fatores e preferências individuais do paciente. Recomendações condicionais são comuns em medicina reprodutiva devido à natureza heterogênea dos problemas de fertilidade e às diferentes características dos pacientes. Os médicos devem discutir os potenciais benefícios, riscos e alternativas com seus pacientes antes de proceder com intervenções condicionalmente recomendadas.",
  },
  {
    question: "Com que frequência essas diretrizes são atualizadas?",
    answer:
      "As diretrizes médicas são tipicamente atualizadas a cada 3-5 anos, ou mais cedo se surgirem novas evidências significativas. As diretrizes da ESHRE (Sociedade Europeia de Reprodução Humana e Embriologia) sobre perda gestacional recorrente foram atualizadas em 2022, e as diretrizes sobre infertilidade inexplicada foram publicadas em 2023. O processo de atualização envolve revisão sistemática da literatura, avaliação da qualidade das evidências e consenso entre especialistas para formular recomendações atualizadas que reflitam o estado atual do conhecimento científico.",
  },
  {
    question:
      "Como usar esta plataforma efetivamente para apoio à decisão clínica?",
    answer:
      "Para usar esta plataforma efetivamente, comece identificando a condição ou intervenção de interesse na barra de pesquisa ou navegando pelas categorias. Cada intervenção inclui informações sobre o nível de evidência, força da recomendação e indicações específicas. Considere estas informações no contexto do seu paciente individual. Os filtros permitem refinar resultados por nível de evidência ou categoria de intervenção. A plataforma deve ser usada como um suporte à decisão, complementando (não substituindo) o julgamento clínico. Mantenha-se atualizado revisitando regularmente, pois novas evidências e recomendações são adicionadas conforme disponíveis.",
  },
  {
    question: "Quais são as limitações das evidências em medicina reprodutiva?",
    answer:
      "A medicina reprodutiva enfrenta várias limitações na geração de evidências robustas. Entre elas estão a dificuldade em conduzir ensaios randomizados controlados de longo prazo, heterogeneidade nas definições de sucesso (gravidez clínica vs. nascimento vivo), variabilidade nas populações de pacientes, rápida evolução tecnológica superando a avaliação de evidências, considerações éticas que limitam certos designs de estudo, e viés de publicação favorecendo resultados positivos. Além disso, a natureza multifatorial dos problemas de fertilidade dificulta o isolamento dos efeitos de intervenções específicas. Estas limitações devem ser consideradas ao interpretar recomendações baseadas em evidências nesta área.",
  },
];

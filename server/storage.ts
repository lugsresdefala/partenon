import {
  type User,
  type InsertUser,
  type Intervention,
  type InsertIntervention,
  type Guideline,
  type InsertGuideline,
} from "@shared/schema";

export interface IStorage {
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;

  // Intervention methods
  getAllInterventions(): Promise<Intervention[]>;
  getInterventionById(id: number): Promise<Intervention | undefined>;
  getInterventionsByCategory(category: string): Promise<Intervention[]>;
  getInterventionsByEvidenceLevel(level: string): Promise<Intervention[]>;
  createIntervention(intervention: InsertIntervention): Promise<Intervention>;
  searchInterventions(query: string): Promise<Intervention[]>;

  // Guideline methods
  getAllGuidelines(): Promise<Guideline[]>;
  getGuidelineById(id: number): Promise<Guideline | undefined>;
  createGuideline(guideline: InsertGuideline): Promise<Guideline>;
}

export class MemStorage implements IStorage {
  private users: Map<number, User>;
  private interventions: Map<number, Intervention>;
  private guidelines: Map<number, Guideline>;
  private userCurrentId: number;
  private interventionCurrentId: number;
  private guidelineCurrentId: number;

  constructor() {
    this.users = new Map();
    this.interventions = new Map();
    this.guidelines = new Map();
    this.userCurrentId = 1;
    this.interventionCurrentId = 1;
    this.guidelineCurrentId = 1;

    // Initialize with some sample data
    this.initializeData();
  }

  private initializeData() {
    // Interventions from ESHRE guidelines on recurrent pregnancy loss and unexplained infertility
    const sampleInterventions: InsertIntervention[] = [
      // 1-12: Intervenções iniciais
      {
        name: "Histeroscopia de rastreamento",
        category: "Procedimento diagnóstico",
        evidenceLevel: "Moderado - Evidências conflitantes",
        recommendation: "Não recomendado rotineiramente",
        justification:
          "Ausência de evidências de aumento nas taxas de nascidos vivos",
        specificIndications: "Falha implantacional recorrente",
        additionalConsiderations:
          "Pode ter benefício em casos específicos de RIF",
      },
      {
        name: "Testes de receptividade endometrial",
        category: "Teste endometrial",
        evidenceLevel: "Baixo - Sem evidência de benefício",
        recommendation: "Não recomendado",
        justification:
          "Falta de padronização e evidências de benefício clínico",
        specificIndications: "Nenhuma indicação estabelecida",
        additionalConsiderations: "Necessita padronização metodológica",
      },
      {
        name: "Testes imunológicos reprodutivos",
        category: "Teste imunológico",
        evidenceLevel: "Baixo - Sem evidência de benefício",
        recommendation: "Não recomendado",
        justification:
          "Ausência de racionalidade científica e riscos potenciais",
        specificIndications: "Nenhuma indicação estabelecida",
        additionalConsiderations: "Riscos podem superar benefícios potenciais",
      },
      {
        name: "Assisted hatching",
        category: "Técnica laboratorial",
        evidenceLevel: "Moderado - Evidências conflitantes",
        recommendation: "Não recomendado rotineiramente",
        justification:
          "Evidências conflitantes sobre benefício em taxas de nascidos vivos",
        specificIndications: "Embriões com zona pelúcida espessa",
        additionalConsiderations:
          "Possível benefício em pacientes com múltiplas falhas de implantação",
      },
      {
        name: "Suplementação de progesterona luteal",
        category: "Terapia hormonal",
        evidenceLevel: "Alto - Evidência robusta",
        recommendation: "Recomendado",
        justification:
          "Evidências robustas de aumento nas taxas de nascidos vivos em ciclos de FIV",
        specificIndications: "Todos os ciclos de FIV/ICSI",
        additionalConsiderations: "Várias vias de administração são aceitáveis",
      },
      {
        name: "Co-culture de embriões",
        category: "Técnica laboratorial",
        evidenceLevel: "Baixo - Sem evidência de benefício",
        recommendation: "Não recomendado",
        justification: "Ausência de evidências de benefício clínico",
        specificIndications: "Nenhuma indicação estabelecida",
        additionalConsiderations: "Técnica complexa sem benefício demonstrado",
      },
      {
        name: "Teste genético pré-implantacional em idade materna avançada",
        category: "Teste genético",
        evidenceLevel: "Moderado - Evidência limitada",
        recommendation: "Pode ser considerado para mulheres acima de 38 anos",
        justification:
          "Pode reduzir taxas de aborto em mulheres de idade avançada",
        specificIndications: "Idade materna > 38 anos",
        additionalConsiderations:
          "Considerar riscos/benefícios individualmente",
      },
      {
        name: "IMSI (Injeção intracitoplasmática de espermatozoide selecionado morfologicamente)",
        category: "Técnica laboratorial avançada",
        evidenceLevel: "Baixo - Sem evidência de benefício",
        recommendation: "Não recomendado rotineiramente",
        justification:
          "Falta de evidências de benefício em taxas de nascidos vivos",
        specificIndications: "Casos específicos de fator masculino grave",
        additionalConsiderations:
          "Alta complexidade e custo sem benefício comprovado",
      },
      {
        name: "Uso de antioxidantes em homens",
        category: "Terapia complementar",
        evidenceLevel: "Moderado - Evidência limitada",
        recommendation: "Recomendado seletivamente",
        justification:
          "Pode melhorar parâmetros seminais em homens com estresse oxidativo",
        specificIndications: "Homens com alta fragmentação de DNA espermático",
        additionalConsiderations: "Baixo risco e potencial benefício",
      },
      {
        name: "Testes trombofílicos",
        category: "Teste imunológico",
        evidenceLevel: "Baixo - Sem evidência de benefício",
        recommendation: "Não recomendado rotineiramente",
        justification:
          "Falta de evidências de que o tratamento melhore desfechos reprodutivos",
        specificIndications: "Nenhuma indicação estabelecida",
        additionalConsiderations:
          "Considerar em casos de histórico pessoal ou familiar de trombose",
      },
      {
        name: "Suplementação de ácido fólico",
        category: "Terapia complementar",
        evidenceLevel: "Alto - Evidência robusta",
        recommendation: "Recomendado",
        justification:
          "Reduz risco de defeitos do tubo neural e pode melhorar qualidade oocitária",
        specificIndications: "Todas as mulheres em idade reprodutiva",
        additionalConsiderations: "Iniciar pelo menos 1 mês antes da concepção",
      },
      {
        name: "Transferência de embriões em estágio de blastocisto",
        category: "Técnica laboratorial",
        evidenceLevel: "Moderado - Evidência limitada",
        recommendation: "Recomendado",
        justification: "Aumento nas taxas de implantação e nascidos vivos",
        specificIndications:
          "Pacientes com boa reserva ovariana e múltiplos embriões",
        additionalConsiderations:
          "Risco de não haver embriões para transferir em alguns casos",
      },

      // 13-24: Próximas intervenções
      {
        name: "Scratch endometrial",
        category: "Procedimento uterino",
        evidenceLevel: "Baixo - Sem evidência de benefício",
        recommendation: "Não recomendado",
        justification:
          "Falta de evidências de benefício clínico em estudos recentes",
        specificIndications: "Nenhuma indicação estabelecida",
        additionalConsiderations:
          "Procedimento potencialmente doloroso sem benefício comprovado",
      },
      {
        name: "Suporte de fase lútea prolongado",
        category: "Terapia hormonal",
        evidenceLevel: "Baixo - Sem evidência de benefício",
        recommendation: "Não recomendado",
        justification:
          "Falta de evidências de melhora nas taxas de nascidos vivos",
        specificIndications: "Nenhuma indicação estabelecida",
        additionalConsiderations: "Intervenção desnecessária",
      },
      {
        name: "Imunoterapia com células alogênicas",
        category: "Terapia biológica",
        evidenceLevel: "Muito baixo - Evidência insuficiente",
        recommendation: "Não recomendado",
        justification: "Ausência de evidências de eficácia e potenciais riscos",
        specificIndications: "Nenhuma indicação estabelecida",
        additionalConsiderations: "Riscos podem superar benefícios teóricos",
      },
      {
        name: "Aspiração de hidrossalpinge",
        category: "Procedimento diagnóstico",
        evidenceLevel: "Baixo - Sem evidência de benefício",
        recommendation: "Não recomendado",
        justification: "Técnica inadequada para tratamento definitivo",
        specificIndications: "Nenhuma indicação estabelecida",
        additionalConsiderations: "Salpingectomia é preferível quando indicada",
      },
      {
        name: "Tempo estendido de co-incubação de gametas",
        category: "Técnica laboratorial",
        evidenceLevel: "Baixo - Sem evidência de benefício",
        recommendation: "Não recomendado",
        justification: "Sem evidência de melhora nas taxas de fertilização",
        specificIndications: "Nenhuma indicação estabelecida",
        additionalConsiderations: "Pode aumentar estresse oxidativo",
      },
      {
        name: "Seleção de espermatozoides por birrefringência",
        category: "Técnica de seleção espermática",
        evidenceLevel: "Baixo - Sem evidência de benefício",
        recommendation: "Não recomendado",
        justification:
          "Falta de evidências de melhoria nos resultados clínicos",
        specificIndications: "Nenhuma indicação estabelecida",
        additionalConsiderations: "Não superior às técnicas convencionais",
      },
      {
        name: "Uso de Metformina em SOP",
        category: "Terapia hormonal",
        evidenceLevel: "Moderado - Evidência limitada",
        recommendation: "Recomendado seletivamente",
        justification:
          "Melhora sensibilidade à insulina e regulariza ciclos em SOP",
        specificIndications: "Mulheres com SOP e resistência insulínica",
        additionalConsiderations:
          "Efeitos gastrointestinais como efeitos colaterais",
      },
      {
        name: "Uso de GnRH agonista para gatilho final",
        category: "Terapia hormonal",
        evidenceLevel: "Alto - Evidência robusta",
        recommendation: "Recomendado seletivamente",
        justification: "Reduz risco de síndrome de hiperestimulação ovariana",
        specificIndications: "Pacientes com risco de hiperestimulação ovariana",
        additionalConsiderations: "Requer suporte luteal intensivo",
      },
      {
        name: "PICSI (Seleção de espermatozoides por ligação ao ácido hialurônico)",
        category: "Técnica de seleção espermática",
        evidenceLevel: "Baixo - Sem evidência de benefício",
        recommendation: "Não recomendado rotineiramente",
        justification: "Falta de evidência de melhoria nos resultados clínicos",
        specificIndications: "Casos específicos de fator masculino",
        additionalConsiderations: "Evidências inconsistentes",
      },
      {
        name: "Teste de fragmentação de DNA espermático para qualidade seminal",
        category: "Análise seminal",
        evidenceLevel: "Baixo - Sem evidência de benefício",
        recommendation:
          "Recomendado seletivamente em casais com fator masculino",
        justification:
          "Pode auxiliar na seleção de técnica de reprodução assistida",
        specificIndications:
          "Casais com aborto recorrente ou falha implantacional",
        additionalConsiderations: "Interpretação clínica ainda controversa",
      },
      {
        name: "Suplementação de DHEA em baixa reserva ovariana",
        category: "Terapia hormonal",
        evidenceLevel: "Baixo - Sem evidência de benefício",
        recommendation: "Não recomendado rotineiramente",
        justification:
          "Estudos de qualidade limitada com resultados conflitantes",
        specificIndications: "Casos específicos de baixa reserva ovariana",
        additionalConsiderations: "Possíveis efeitos androgênicos",
      },
      {
        name: "Uso de corticosteroides na FIV",
        category: "Terapia biológica",
        evidenceLevel: "Baixo - Sem evidência de benefício",
        recommendation: "Não recomendado",
        justification: "Falta de evidências de benefício clínico",
        specificIndications: "Nenhuma indicação estabelecida",
        additionalConsiderations: "Potenciais efeitos colaterais",
      },

      // 25-36: Próximas intervenções
      {
        name: "Transferência de embriões guiada por ultrassom",
        category: "Técnica de monitoramento",
        evidenceLevel: "Alto - Evidência robusta",
        recommendation: "Recomendado",
        justification: "Melhora precisão e taxas de implantação",
        specificIndications:
          "Todos os procedimentos de transferência embrionária",
        additionalConsiderations: "Padrão de atendimento atual",
      },
      {
        name: "Técnicas de seleção espermática por carga elétrica",
        category: "Técnica de seleção espermática",
        evidenceLevel: "Muito baixo - Evidência insuficiente",
        recommendation: "Não recomendado",
        justification: "Falta de evidências robustas de benefício",
        specificIndications: "Nenhuma indicação estabelecida",
        additionalConsiderations: "Métodos convencionais são preferíveis",
      },
      {
        name: "Uso de hCG intrauterino",
        category: "Terapia hormonal",
        evidenceLevel: "Baixo - Sem evidência de benefício",
        recommendation: "Não recomendado",
        justification:
          "Falta de evidências de benefício em estudos bem desenhados",
        specificIndications: "Nenhuma indicação estabelecida",
        additionalConsiderations: "Custo adicional sem benefício comprovado",
      },
      {
        name: "Uso de G-CSF (Fator estimulador de colônias de granulócitos)",
        category: "Terapia biológica",
        evidenceLevel: "Baixo - Sem evidência de benefício",
        recommendation: "Não recomendado",
        justification: "Evidências insuficientes de benefício clínico",
        specificIndications: "Nenhuma indicação estabelecida",
        additionalConsiderations: "Necessidade de mais estudos controlados",
      },
      {
        name: "Cultura de embriões em baixa concentração de oxigênio",
        category: "Técnica laboratorial",
        evidenceLevel: "Moderado - Evidência limitada",
        recommendation: "Recomendado",
        justification:
          "Reproduz condições fisiológicas e reduz estresse oxidativo",
        specificIndications: "Cultivo embrionário em geral",
        additionalConsiderations: "Pequeno aumento nas taxas de nascidos vivos",
      },
      {
        name: "Uso de antibióticos profiláticos na FIV",
        category: "Terapia complementar",
        evidenceLevel: "Baixo - Sem evidência de benefício",
        recommendation: "Não recomendado rotineiramente",
        justification:
          "Falta de evidências de benefício e preocupação com resistência antimicrobiana",
        specificIndications:
          "Casos específicos com risco aumentado de infecção",
        additionalConsiderations: "Uso seletivo baseado em fatores de risco",
      },
      {
        name: "Técnica de vitrificação de ovócitos",
        category: "Técnica laboratorial avançada",
        evidenceLevel: "Alto - Evidência robusta",
        recommendation: "Recomendado",
        justification:
          "Superior ao congelamento lento para preservação da fertilidade",
        specificIndications: "Preservação de fertilidade, doação de óvulos",
        additionalConsiderations:
          "Taxas de sobrevivência significativamente maiores",
      },
      {
        name: "Seleção morfológica avançada de embriões",
        category: "Técnica laboratorial",
        evidenceLevel: "Moderado - Evidência limitada",
        recommendation: "Recomendado seletivamente",
        justification: "Pode melhorar seleção embrionária em casos específicos",
        specificIndications:
          "Casais com múltiplos embriões de qualidade similar",
        additionalConsiderations: "Subjetividade na avaliação morfológica",
      },
      {
        name: "Uso de heparina de baixo peso molecular",
        category: "Terapia biológica",
        evidenceLevel: "Baixo - Sem evidência de benefício",
        recommendation: "Não recomendado rotineiramente",
        justification:
          "Evidências inconsistentes de benefício em reprodução assistida",
        specificIndications: "Casos específicos com trombofilias estabelecidas",
        additionalConsiderations: "Potenciais riscos de sangramento",
      },
      {
        name: "Cultura única de embrião",
        category: "Técnica laboratorial",
        evidenceLevel: "Baixo - Sem evidência de benefício",
        recommendation: "Não recomendado rotineiramente",
        justification:
          "Falta de evidências de benefício sobre meios de cultura sequenciais",
        specificIndications: "Casos específicos de redução de manipulação",
        additionalConsiderations:
          "Necessidades metabólicas embrionárias variam com o desenvolvimento",
      },
      {
        name: "Time-lapse para seleção de embriões",
        category: "Técnica de monitoramento",
        evidenceLevel: "Moderado - Evidência limitada",
        recommendation: "Recomendado seletivamente",
        justification:
          "Pode melhorar seleção embrionária sem manipulação adicional",
        specificIndications: "Pacientes com histórico de falha implantacional",
        additionalConsiderations: "Custo-benefício ainda em avaliação",
      },
      {
        name: "Coleta de óvulos sem anestesia",
        category: "Procedimento diagnóstico",
        evidenceLevel: "Moderado - Evidência limitada",
        recommendation: "Não recomendado",
        justification:
          "Associado a maior desconforto e potencial comprometimento da coleta",
        specificIndications: "Nenhuma indicação estabelecida",
        additionalConsiderations:
          "Questões éticas relacionadas ao manejo da dor",
      },

      // 37-48: Intervenções finais para completar as 48
      {
        name: "Protocolos de estimulação dual",
        category: "Terapia hormonal",
        evidenceLevel: "Moderado - Evidência limitada",
        recommendation: "Recomendado seletivamente",
        justification:
          "Pode aumentar número de óvulos em pacientes com baixa resposta",
        specificIndications: "Pacientes com baixa reserva ovariana",
        additionalConsiderations: "Maior custo e intensidade de tratamento",
      },
      {
        name: "Uso de agonista de dopamina",
        category: "Terapia hormonal",
        evidenceLevel: "Alto - Evidência robusta",
        recommendation: "Recomendado seletivamente",
        justification: "Reduz risco de síndrome de hiperestimulação ovariana",
        specificIndications: "Pacientes com risco elevado de SHO",
        additionalConsiderations: "Efeitos colaterais como náusea e tonturas",
      },
      {
        name: "Testes genéticos pré-concepção",
        category: "Teste genético",
        evidenceLevel: "Moderado - Evidência limitada",
        recommendation: "Recomendado seletivamente",
        justification: "Identifica portadores de doenças genéticas recessivas",
        specificIndications:
          "Casais com histórico familiar de doenças genéticas",
        additionalConsiderations:
          "Considerações éticas e aconselhamento importante",
      },
      {
        name: "Uso de atosiban",
        category: "Terapia hormonal",
        evidenceLevel: "Baixo - Sem evidência de benefício",
        recommendation: "Não recomendado",
        justification:
          "Falta de evidências de benefício em transferências embrionárias",
        specificIndications: "Nenhuma indicação estabelecida",
        additionalConsiderations: "Custo elevado sem benefício comprovado",
      },
      {
        name: "Acupuntura adjuvante",
        category: "Terapia complementar",
        evidenceLevel: "Baixo - Sem evidência de benefício",
        recommendation: "Não recomendado rotineiramente",
        justification: "Evidências inconsistentes sobre benefício em FIV",
        specificIndications:
          "Pacientes interessados em abordagens complementares",
        additionalConsiderations: "Potencial efeito na redução do estresse",
      },
      {
        name: "Teste microbioma endometrial",
        category: "Teste endometrial",
        evidenceLevel: "Baixo - Sem evidência de benefício",
        recommendation: "Não recomendado rotineiramente",
        justification: "Evidências insuficientes para uso clínico rotineiro",
        specificIndications: "Falha implantacional recorrente inexplicada",
        additionalConsiderations: "Área de pesquisa emergente",
      },
      {
        name: "Análise de gonadotrofina em tempo real",
        category: "Técnica de monitoramento",
        evidenceLevel: "Muito baixo - Evidência insuficiente",
        recommendation: "Não recomendado",
        justification: "Falta de evidências de benefício clínico",
        specificIndications: "Nenhuma indicação estabelecida",
        additionalConsiderations: "Monitoramento convencional é adequado",
      },
      {
        name: "Transferência embrionária com carga dupla",
        category: "Técnica laboratorial",
        evidenceLevel: "Moderado - Evidência limitada",
        recommendation: "Não recomendado rotineiramente",
        justification: "Aumenta risco de gestação múltipla sem benefício claro",
        specificIndications: "Casos específicos após falhas múltiplas",
        additionalConsiderations:
          "Tendência global para transferência de embrião único",
      },
      {
        name: "Terapia oral com testosterona",
        category: "Terapia hormonal",
        evidenceLevel: "Baixo - Sem evidência de benefício",
        recommendation: "Não recomendado",
        justification:
          "Evidências insuficientes de benefício e potenciais riscos",
        specificIndications: "Nenhuma indicação estabelecida",
        additionalConsiderations:
          "Efeitos colaterais androgênicos significativos",
      },
      {
        name: "Injeção intracitoplasmática de espermatozoide do testículo (TESE-ICSI)",
        category: "Técnica laboratorial avançada",
        evidenceLevel: "Moderado - Evidência limitada",
        recommendation: "Recomendado seletivamente",
        justification:
          "Opção para homens com azoospermia obstrutiva ou não-obstrutiva",
        specificIndications: "Azoospermia com espermatozoides recuperáveis",
        additionalConsiderations:
          "Procedimento cirúrgico com riscos associados",
      },
      {
        name: "Monitoramento por ultrassom 3D",
        category: "Técnica de monitoramento",
        evidenceLevel: "Baixo - Sem evidência de benefício",
        recommendation: "Não recomendado rotineiramente",
        justification: "Sem vantagem clara sobre ultrassom 2D convencional",
        specificIndications: "Casos específicos de anatomia complexa",
        additionalConsiderations: "Maior custo sem benefício comprovado",
      },
      {
        name: "PGT-M (Teste genético pré-implantacional para doenças monogênicas)",
        category: "Teste genético",
        evidenceLevel: "Alto - Evidência robusta",
        recommendation: "Recomendado",
        justification:
          "Previne transmissão de doenças genéticas graves conhecidas",
        specificIndications: "Casais portadores de doenças monogênicas graves",
        additionalConsiderations:
          "Requer aconselhamento genético especializado",
      },
    ];

    sampleInterventions.forEach((intervention) => {
      this.createIntervention(intervention);
    });

    // Sample guidelines
    const sampleGuidelines: InsertGuideline[] = [
      {
        title: "ESHRE guideline: recurrent pregnancy loss",
        organization: "European Society of Human Reproduction and Embryology",
        year: 2022,
        description:
          "Provides recommendations for the management of women with recurrent pregnancy loss based on the best available evidence.",
      },
      {
        title: "ESHRE guideline: unexplained infertility",
        organization: "European Society of Human Reproduction and Embryology",
        year: 2023,
        description:
          "Provides evidence-based recommendations for the management of couples with unexplained infertility.",
      },
    ];

    sampleGuidelines.forEach((guideline) => {
      this.createGuideline(guideline);
    });
  }

  async getUser(id: number): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = this.userCurrentId++;
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  // Intervention methods
  async getAllInterventions(): Promise<Intervention[]> {
    return Array.from(this.interventions.values());
  }

  async getInterventionById(id: number): Promise<Intervention | undefined> {
    return this.interventions.get(id);
  }

  async getInterventionsByCategory(category: string): Promise<Intervention[]> {
    return Array.from(this.interventions.values()).filter(
      (intervention) => intervention.category === category,
    );
  }

  async getInterventionsByEvidenceLevel(
    level: string,
  ): Promise<Intervention[]> {
    return Array.from(this.interventions.values()).filter((intervention) =>
      intervention.evidenceLevel.includes(level),
    );
  }

  async createIntervention(
    insertIntervention: InsertIntervention,
  ): Promise<Intervention> {
    const id = this.interventionCurrentId++;

    // Garante que campos opcionais ausentes sejam definidos como null
    const processedIntervention: Record<string, any> = {
      ...insertIntervention,
      specificIndications: insertIntervention.specificIndications || null,
      additionalConsiderations:
        insertIntervention.additionalConsiderations || null,
      id,
    };

    const intervention: Intervention = processedIntervention as Intervention;
    this.interventions.set(id, intervention);
    return intervention;
  }

  async searchInterventions(query: string): Promise<Intervention[]> {
    if (!query) return this.getAllInterventions();

    const lowercaseQuery = query.toLowerCase();
    return Array.from(this.interventions.values()).filter(
      (intervention) =>
        intervention.name.toLowerCase().includes(lowercaseQuery) ||
        intervention.category.toLowerCase().includes(lowercaseQuery) ||
        intervention.justification.toLowerCase().includes(lowercaseQuery) ||
        (intervention.specificIndications &&
          intervention.specificIndications
            .toLowerCase()
            .includes(lowercaseQuery)),
    );
  }

  // Guideline methods
  async getAllGuidelines(): Promise<Guideline[]> {
    return Array.from(this.guidelines.values());
  }

  async getGuidelineById(id: number): Promise<Guideline | undefined> {
    return this.guidelines.get(id);
  }

  async createGuideline(insertGuideline: InsertGuideline): Promise<Guideline> {
    const id = this.guidelineCurrentId++;

    // Garante que campos opcionais ausentes sejam definidos como null
    const processedGuideline: Record<string, any> = {
      ...insertGuideline,
      description: insertGuideline.description || null,
      id,
    };

    const guideline: Guideline = processedGuideline as Guideline;
    this.guidelines.set(id, guideline);
    return guideline;
  }
}

export const storage = new MemStorage();

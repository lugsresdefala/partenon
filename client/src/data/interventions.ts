import type {
  Intervention,
  CategoryOption,
  EvidenceLevelOption,
  Category,
  EvidenceLevel,
  RecommendationStatus,
  AdverseEvent,
} from "@/types";

// Este arquivo contém dados de intervenções segundo guidelines ESHRE sobre perda gestacional recorrente e infertilidade inexplicada
// Dados baseados nas diretrizes ESHRE (2022, 2023) e revisões sistemáticas

// Categorias de intervenções
export const categoriesData: Category[] = [
  {
    id: "laboratory-technique",
    namePt: "Técnica laboratorial",
    nameEn: "Laboratory technique",
    nameEs: "Técnica de laboratorio",
  },
  {
    id: "diagnostic-procedure",
    namePt: "Procedimento diagnóstico",
    nameEn: "Diagnostic procedure",
    nameEs: "Procedimiento diagnóstico",
  },
  {
    id: "complementary-therapy",
    namePt: "Terapia complementar",
    nameEn: "Complementary therapy",
    nameEs: "Terapia complementaria",
  },
  {
    id: "endometrial-test",
    namePt: "Teste endometrial",
    nameEn: "Endometrial test",
    nameEs: "Prueba endometrial",
  },
  {
    id: "hormonal-therapy",
    namePt: "Terapia hormonal",
    nameEn: "Hormonal therapy",
    nameEs: "Terapia hormonal",
  },
  {
    id: "immunological-test",
    namePt: "Teste imunológico",
    nameEn: "Immunological test",
    nameEs: "Prueba inmunológica",
  },
  {
    id: "genetic-test",
    namePt: "Teste genético",
    nameEn: "Genetic test",
    nameEs: "Prueba genética",
  },
  {
    id: "advanced-laboratory-technique",
    namePt: "Técnica laboratorial avançada",
    nameEn: "Advanced laboratory technique",
    nameEs: "Técnica de laboratorio avanzada",
  },
  {
    id: "seminal-analysis",
    namePt: "Análise seminal",
    nameEn: "Seminal analysis",
    nameEs: "Análisis seminal",
  },
  {
    id: "biological-therapy",
    namePt: "Terapia biológica",
    nameEn: "Biological therapy",
    nameEs: "Terapia biológica",
  },
  {
    id: "uterine-procedure",
    namePt: "Procedimento uterino",
    nameEn: "Uterine procedure",
    nameEs: "Procedimiento uterino",
  },
  {
    id: "monitoring-technique",
    namePt: "Técnica de monitoramento",
    nameEn: "Monitoring technique",
    nameEs: "Técnica de monitoreo",
  },
  {
    id: "sperm-selection-technique",
    namePt: "Técnica de seleção espermática",
    nameEn: "Sperm selection technique",
    nameEs: "Técnica de selección espermática",
  },
];

// Níveis de evidência
export const evidenceLevelsData: EvidenceLevel[] = [
  {
    id: "high",
    level: "high",
    symbol: "⊕⊕⊕⊕",
    color: "#15803d",
    order: 1,
    descriptionPt:
      "Evidência de alta qualidade de ensaios clínicos randomizados",
    descriptionEn: "High-quality evidence from randomized clinical trials",
    descriptionEs:
      "Evidencia de alta calidad de ensayos clínicos aleatorizados",
  },
  {
    id: "moderate",
    level: "moderate",
    symbol: "⊕⊕⊕◯",
    color: "#0891b2",
    order: 2,
    descriptionPt:
      "Evidência de qualidade moderada, benefício comprovado em casos específicos",
    descriptionEn:
      "Moderate-quality evidence, proven benefit in specific cases",
    descriptionEs:
      "Evidencia de calidad moderada, beneficio comprobado en casos específicos",
  },
  {
    id: "low",
    level: "low",
    symbol: "⊕⊕◯◯",
    color: "#ca8a04",
    order: 3,
    descriptionPt: "Evidência de baixa qualidade sem benefício comprovado",
    descriptionEn: "Low-quality evidence without proven benefit",
    descriptionEs: "Evidencia de baja calidad sin beneficio comprobado",
  },
  {
    id: "very-low",
    level: "very-low",
    symbol: "⊕◯◯◯",
    color: "#b91c1c",
    order: 4,
    descriptionPt: "Evidência insuficiente com potencial de dano",
    descriptionEn: "Insufficient evidence with potential for harm",
    descriptionEs: "Evidencia insuficiente con potencial de daño",
  },
];

// Status de recomendação
export const recommendationStatusesData: RecommendationStatus[] = [
  {
    id: "recommended",
    namePt: "Recomendado",
    nameEn: "Recommended",
    nameEs: "Recomendado",
    color: "#15803d",
  },
  {
    id: "selective",
    namePt: "Recomendado seletivamente",
    nameEn: "Recommended selectively",
    nameEs: "Recomendado selectivamente",
    color: "#0891b2",
  },
  {
    id: "not-recommended",
    namePt: "Não recomendado",
    nameEn: "Not recommended",
    nameEs: "No recomendado",
    color: "#b91c1c",
  },
  {
    id: "not-recommended-routine",
    namePt: "Não recomendado rotineiramente",
    nameEn: "Not routinely recommended",
    nameEs: "No recomendado rutinariamente",
    color: "#ca8a04",
  },
];

// Eventos adversos comuns em procedimentos de reprodução assistida
export const adverseEventsData: AdverseEvent[] = [
  {
    id: 1,
    titlePt: "Síndrome de Hiperestimulação Ovariana (SHO)",
    titleEn: "Ovarian Hyperstimulation Syndrome (OHSS)",
    titleEs: "Síndrome de Hiperestimulación Ovárica (SHO)",
    descriptionPt:
      "Resposta excessiva dos ovários à estimulação hormonal, causando inchaço e dor abdominal, náuseas, vômitos e, em casos graves, complicações respiratórias e renais.",
    descriptionEn:
      "Excessive ovarian response to hormonal stimulation, causing abdominal swelling and pain, nausea, vomiting, and in severe cases, respiratory and renal complications.",
    descriptionEs:
      "Respuesta excesiva de los ovarios a la estimulación hormonal, causando hinchazón y dolor abdominal, náuseas, vómitos y, en casos graves, complicaciones respiratorias y renales.",
    frequency: "1-5%",
    risk: "moderate",
  },
  {
    id: 2,
    titlePt: "Gestação Múltipla",
    titleEn: "Multiple Pregnancy",
    titleEs: "Gestación Múltiple",
    descriptionPt:
      "Desenvolvimento de dois ou mais fetos, aumentando riscos de complicações na gravidez como parto prematuro, baixo peso ao nascer e pré-eclâmpsia.",
    descriptionEn:
      "Development of two or more fetuses, increasing risks of pregnancy complications such as premature birth, low birth weight, and preeclampsia.",
    descriptionEs:
      "Desarrollo de dos o más fetos, aumentando riesgos de complicaciones en el embarazo como parto prematuro, bajo peso al nacer y preeclampsia.",
    frequency: "10-30%",
    risk: "moderate",
  },
  {
    id: 3,
    titlePt: "Complicações do Procedimento de Coleta de Óvulos",
    titleEn: "Complications from Egg Retrieval Procedure",
    titleEs: "Complicaciones del Procedimiento de Recolección de Óvulos",
    descriptionPt:
      "Sangramento, infecção, lesão em órgãos adjacentes ou reação à anestesia durante a punção folicular guiada por ultrassom.",
    descriptionEn:
      "Bleeding, infection, injury to adjacent organs, or anesthesia reaction during ultrasound-guided follicular puncture.",
    descriptionEs:
      "Sangrado, infección, lesión en órganos adyacentes o reacción a la anestesia durante la punción folicular guiada por ultrasonido.",
    frequency: "<1%",
    risk: "low",
  },
  {
    id: 4,
    titlePt: "Gravidez Ectópica",
    titleEn: "Ectopic Pregnancy",
    titleEs: "Embarazo Ectópico",
    descriptionPt:
      "Implantação do embrião fora da cavidade uterina, principalmente nas trompas de falópio, requerendo intervenção médica imediata.",
    descriptionEn:
      "Implantation of the embryo outside the uterine cavity, mainly in the fallopian tubes, requiring immediate medical intervention.",
    descriptionEs:
      "Implantación del embrión fuera de la cavidad uterina, principalmente en las trompas de falopio, requiriendo intervención médica inmediata.",
    frequency: "2-5%",
    risk: "high",
  },
  {
    id: 5,
    titlePt: "Reações Alérgicas a Medicamentos",
    titleEn: "Allergic Reactions to Medications",
    titleEs: "Reacciones Alérgicas a Medicamentos",
    descriptionPt:
      "Reações de hipersensibilidade aos medicamentos utilizados durante o tratamento, variando de leves a graves.",
    descriptionEn:
      "Hypersensitivity reactions to medications used during treatment, ranging from mild to severe.",
    descriptionEs:
      "Reacciones de hipersensibilidad a los medicamentos utilizados durante el tratamiento, variando de leves a graves.",
    frequency: "<1%",
    risk: "moderate",
  },
  {
    id: 6,
    titlePt: "Complicações Trombóticas",
    titleEn: "Thrombotic Complications",
    titleEs: "Complicaciones Trombóticas",
    descriptionPt:
      "Formação de coágulos sanguíneos associados à estimulação hormonal, principalmente em pacientes com fatores de risco predisponentes.",
    descriptionEn:
      "Blood clot formation associated with hormonal stimulation, especially in patients with predisposing risk factors.",
    descriptionEs:
      "Formación de coágulos sanguíneos asociados a la estimulación hormonal, principalmente en pacientes con factores de riesgo predisponentes.",
    frequency: "<0.5%",
    risk: "high",
  },
];

// Lista completa de intervenções com dados detalhados
export const interventions: Intervention[] = [
  {
    id: 1,
    name: "Histeroscopia de rastreamento",
    nameEn: "Screening hysteroscopy",
    nameEs: "Histeroscopia de cribado",
    categoryId: "diagnostic-procedure",
    category: "Procedimento diagnóstico",
    categoryEn: "Diagnostic procedure",
    categoryEs: "Procedimiento diagnóstico",
    evidenceLevelId: "moderate",
    evidenceLevel: "Moderado - Evidências conflitantes",
    evidenceLevelEn: "Moderate - Conflicting evidence",
    evidenceLevelSymbol: "⊕⊕⊕◯",
    recommendationId: "not-recommended-routine",
    recommendation: "Não recomendado rotineiramente",
    recommendationEn: "Not routinely recommended",
    justification:
      "Ausência de evidências de aumento nas taxas de nascidos vivos",
    justificationEn: "Absence of evidence showing increased live birth rates",
    specificIndications: "Falha implantacional recorrente",
    specificIndicationsEn: "Recurrent implantation failure",
    additionalConsiderations: "Pode ter benefício em casos específicos de RIF",
    additionalConsiderationsEn: "May have benefits in specific RIF cases",
    content:
      "**Recomendação**: Não recomendado rotineiramente\n\n**Justificativa**: Ausência de evidências de aumento nas taxas de nascidos vivos\n\n**Indicações**: Falha implantacional recorrente\n\n**Considerações**: Pode ter benefício em casos específicos de RIF",
  },
  {
    id: 2,
    name: "Testes de receptividade endometrial",
    nameEn: "Endometrial receptivity tests",
    nameEs: "Pruebas de receptividad endometrial",
    categoryId: "endometrial-test",
    category: "Teste endometrial",
    categoryEn: "Endometrial test",
    categoryEs: "Prueba endometrial",
    evidenceLevelId: "low",
    evidenceLevel: "Baixo - Sem evidência de benefício",
    evidenceLevelEn: "Low - No evidence of benefit",
    evidenceLevelSymbol: "⊕⊕◯◯",
    recommendationId: "not-recommended",
    recommendation: "Não recomendado",
    recommendationEn: "Not recommended",
    justification: "Falta de padronização e evidências de benefício clínico",
    justificationEn: "Lack of standardization and evidence of clinical benefit",
    specificIndications: "Nenhuma indicação estabelecida",
    specificIndicationsEn: "No established indication",
    additionalConsiderations: "Necessita padronização metodológica",
    additionalConsiderationsEn: "Needs methodological standardization",
    content:
      "**Recomendação**: Não recomendado\n\n**Justificativa**: Falta de padronização e evidências de benefício clínico\n\n**Indicações**: Nenhuma indicação estabelecida\n\n**Considerações**: Necessita padronização metodológica",
  },
  {
    id: 3,
    name: "Testes imunológicos reprodutivos",
    nameEn: "Reproductive immunological tests",
    nameEs: "Pruebas inmunológicas reproductivas",
    categoryId: "immunological-test",
    category: "Teste imunológico",
    categoryEn: "Immunological test",
    categoryEs: "Prueba inmunológica",
    evidenceLevelId: "very-low",
    evidenceLevel: "Muito baixo - Evidência insuficiente",
    evidenceLevelEn: "Very low - Insufficient evidence",
    evidenceLevelSymbol: "⊕◯◯◯",
    recommendationId: "not-recommended",
    recommendation: "Não recomendado",
    recommendationEn: "Not recommended",
    justification: "Ausência de racionalidade científica e riscos potenciais",
    justificationEn: "Absence of scientific rationale and potential risks",
    specificIndications: "Nenhuma indicação estabelecida",
    specificIndicationsEn: "No established indication",
    additionalConsiderations: "Riscos podem superar benefícios potenciais",
    additionalConsiderationsEn: "Risks may outweigh potential benefits",
    content:
      "**Recomendação**: Não recomendado\n\n**Justificativa**: Ausência de racionalidade científica e riscos potenciais\n\n**Indicações**: Nenhuma indicação estabelecida\n\n**Considerações**: Riscos podem superar benefícios potenciais",
  },
  {
    id: 4,
    name: "Assisted hatching",
    nameEn: "Assisted hatching",
    nameEs: "Eclosión asistida",
    categoryId: "laboratory-technique",
    category: "Técnica laboratorial",
    categoryEn: "Laboratory technique",
    categoryEs: "Técnica de laboratorio",
    evidenceLevelId: "moderate",
    evidenceLevel: "Moderado - Evidências conflitantes",
    evidenceLevelEn: "Moderate - Conflicting evidence",
    evidenceLevelSymbol: "⊕⊕⊕◯",
    recommendationId: "not-recommended-routine",
    recommendation: "Não recomendado rotineiramente",
    recommendationEn: "Not routinely recommended",
    justification:
      "Evidências conflitantes sobre benefício em taxas de nascidos vivos",
    justificationEn: "Conflicting evidence on benefit in live birth rates",
    specificIndications: "Embriões com zona pelúcida espessa",
    specificIndicationsEn: "Embryos with thick zona pellucida",
    additionalConsiderations:
      "Possível benefício em pacientes com múltiplas falhas de implantação",
    additionalConsiderationsEn:
      "Possible benefit in patients with multiple implantation failures",
    content:
      "**Recomendação**: Não recomendado rotineiramente\n\n**Justificativa**: Evidências conflitantes sobre benefício em taxas de nascidos vivos\n\n**Indicações**: Embriões com zona pelúcida espessa\n\n**Considerações**: Possível benefício em pacientes com múltiplas falhas de implantação",
  },
  {
    id: 5,
    name: "Suplementação de progesterona luteal",
    nameEn: "Luteal phase progesterone supplementation",
    nameEs: "Suplementación de progesterona en fase lútea",
    categoryId: "hormonal-therapy",
    category: "Terapia hormonal",
    categoryEn: "Hormonal therapy",
    categoryEs: "Terapia hormonal",
    evidenceLevelId: "high",
    evidenceLevel: "Alto - Evidência robusta",
    evidenceLevelEn: "High - Robust evidence",
    evidenceLevelSymbol: "⊕⊕⊕⊕",
    recommendationId: "recommended",
    recommendation: "Recomendado",
    recommendationEn: "Recommended",
    justification:
      "Evidências robustas de aumento nas taxas de nascidos vivos em ciclos de FIV",
    justificationEn:
      "Robust evidence of increased live birth rates in IVF cycles",
    specificIndications: "Todos os ciclos de FIV/ICSI",
    specificIndicationsEn: "All IVF/ICSI cycles",
    additionalConsiderations: "Várias vias de administração são aceitáveis",
    additionalConsiderationsEn:
      "Various routes of administration are acceptable",
    content:
      "**Recomendação**: Recomendado\n\n**Justificativa**: Evidências robustas de aumento nas taxas de nascidos vivos em ciclos de FIV\n\n**Indicações**: Todos os ciclos de FIV/ICSI\n\n**Considerações**: Várias vias de administração são aceitáveis",
  },
  {
    id: 6,
    name: "Co-culture de embriões",
    nameEn: "Embryo co-culture",
    nameEs: "Co-cultivo de embriones",
    categoryId: "laboratory-technique",
    category: "Técnica laboratorial",
    categoryEn: "Laboratory technique",
    categoryEs: "Técnica de laboratorio",
    evidenceLevelId: "low",
    evidenceLevel: "Baixo - Sem evidência de benefício",
    evidenceLevelEn: "Low - No evidence of benefit",
    evidenceLevelSymbol: "⊕⊕◯◯",
    recommendationId: "not-recommended",
    recommendation: "Não recomendado",
    recommendationEn: "Not recommended",
    justification: "Ausência de evidências de benefício clínico",
    justificationEn: "Absence of evidence of clinical benefit",
    specificIndications: "Nenhuma indicação estabelecida",
    specificIndicationsEn: "No established indication",
    additionalConsiderations: "Técnica complexa sem benefício demonstrado",
    additionalConsiderationsEn:
      "Complex technique without demonstrated benefit",
    content:
      "**Recomendação**: Não recomendado\n\n**Justificativa**: Ausência de evidências de benefício clínico\n\n**Indicações**: Nenhuma indicação estabelecida\n\n**Considerações**: Técnica complexa sem benefício demonstrado",
  },
  {
    id: 7,
    name: "Teste genético pré-implantacional em idade materna avançada",
    nameEn: "Preimplantation genetic testing in advanced maternal age",
    nameEs: "Prueba genética preimplantacional en edad materna avanzada",
    categoryId: "genetic-test",
    category: "Teste genético",
    categoryEn: "Genetic test",
    categoryEs: "Prueba genética",
    evidenceLevelId: "moderate",
    evidenceLevel: "Moderado - Evidência limitada",
    evidenceLevelEn: "Moderate - Limited evidence",
    evidenceLevelSymbol: "⊕⊕⊕◯",
    recommendationId: "selective",
    recommendation: "Pode ser considerado para mulheres acima de 38 anos",
    recommendationEn: "May be considered for women over 38 years old",
    justification: "Pode reduzir taxas de aborto em mulheres de idade avançada",
    justificationEn: "May reduce miscarriage rates in women of advanced age",
    specificIndications: "Idade materna > 38 anos",
    specificIndicationsEn: "Maternal age > 38 years",
    additionalConsiderations: "Considerar riscos/benefícios individualmente",
    additionalConsiderationsEn: "Consider risks/benefits individually",
    content:
      "**Recomendação**: Pode ser considerado para mulheres acima de 38 anos\n\n**Justificativa**: Pode reduzir taxas de aborto em mulheres de idade avançada\n\n**Indicações**: Idade materna > 38 anos\n\n**Considerações**: Considerar riscos/benefícios individualmente",
  },
  {
    id: 8,
    name: "IMSI (Injeção intracitoplasmática de espermatozoide selecionado morfologicamente)",
    nameEn: "IMSI (Intracytoplasmic morphologically selected sperm injection)",
    nameEs:
      "IMSI (Inyección intracitoplasmática de espermatozoide seleccionado morfológicamente)",
    categoryId: "advanced-laboratory-technique",
    category: "Técnica laboratorial avançada",
    categoryEn: "Advanced laboratory technique",
    categoryEs: "Técnica de laboratorio avanzada",
    evidenceLevelId: "low",
    evidenceLevel: "Baixo - Sem evidência de benefício",
    evidenceLevelEn: "Low - No evidence of benefit",
    evidenceLevelSymbol: "⊕⊕◯◯",
    recommendationId: "not-recommended-routine",
    recommendation: "Não recomendado rotineiramente",
    recommendationEn: "Not routinely recommended",
    justification:
      "Falta de evidências de benefício em taxas de nascidos vivos",
    justificationEn: "Lack of evidence of benefit in live birth rates",
    specificIndications: "Casos específicos de fator masculino grave",
    specificIndicationsEn: "Specific cases of severe male factor",
    additionalConsiderations:
      "Alta complexidade e custo sem benefício comprovado",
    additionalConsiderationsEn:
      "High complexity and cost without proven benefit",
    content:
      "**Recomendação**: Não recomendado rotineiramente\n\n**Justificativa**: Falta de evidências de benefício em taxas de nascidos vivos\n\n**Indicações**: Casos específicos de fator masculino grave\n\n**Considerações**: Alta complexidade e custo sem benefício comprovado",
  },
  {
    id: 9,
    name: "Uso de antioxidantes em homens",
    nameEn: "Use of antioxidants in men",
    nameEs: "Uso de antioxidantes en hombres",
    categoryId: "complementary-therapy",
    category: "Terapia complementar",
    categoryEn: "Complementary therapy",
    categoryEs: "Terapia complementaria",
    evidenceLevelId: "moderate",
    evidenceLevel: "Moderado - Evidência limitada",
    evidenceLevelEn: "Moderate - Limited evidence",
    evidenceLevelSymbol: "⊕⊕⊕◯",
    recommendationId: "selective",
    recommendation: "Recomendado seletivamente",
    recommendationEn: "Selectively recommended",
    justification:
      "Pode melhorar parâmetros seminais em homens com estresse oxidativo",
    justificationEn:
      "May improve seminal parameters in men with oxidative stress",
    specificIndications: "Homens com alta fragmentação de DNA espermático",
    specificIndicationsEn: "Men with high sperm DNA fragmentation",
    additionalConsiderations: "Baixo risco e potencial benefício",
    additionalConsiderationsEn: "Low risk and potential benefit",
    content:
      "**Recomendação**: Recomendado seletivamente\n\n**Justificativa**: Pode melhorar parâmetros seminais em homens com estresse oxidativo\n\n**Indicações**: Homens com alta fragmentação de DNA espermático\n\n**Considerações**: Baixo risco e potencial benefício",
  },
  {
    id: 10,
    name: "Testes trombofílicos",
    nameEn: "Thrombophilia testing",
    nameEs: "Pruebas trombofílicas",
    categoryId: "immunological-test",
    category: "Teste imunológico",
    categoryEn: "Immunological test",
    categoryEs: "Prueba inmunológica",
    evidenceLevelId: "low",
    evidenceLevel: "Baixo - Sem evidência de benefício",
    evidenceLevelEn: "Low - No evidence of benefit",
    evidenceLevelSymbol: "⊕⊕◯◯",
    recommendationId: "not-recommended-routine",
    recommendation: "Não recomendado rotineiramente",
    recommendationEn: "Not routinely recommended",
    justification:
      "Falta de evidências de que o tratamento melhore desfechos reprodutivos",
    justificationEn:
      "Lack of evidence that treatment improves reproductive outcomes",
    specificIndications: "Nenhuma indicação estabelecida",
    specificIndicationsEn: "No established indication",
    additionalConsiderations:
      "Considerar em casos de histórico pessoal ou familiar de trombose",
    additionalConsiderationsEn:
      "Consider in cases of personal or family history of thrombosis",
    content:
      "**Recomendação**: Não recomendado rotineiramente\n\n**Justificativa**: Falta de evidências de que o tratamento melhore desfechos reprodutivos\n\n**Indicações**: Nenhuma indicação estabelecida\n\n**Considerações**: Considerar em casos de histórico pessoal ou familiar de trombose",
  },
  {
    id: 11,
    name: "Suplementação de ácido fólico",
    nameEn: "Folic acid supplementation",
    nameEs: "Suplementación con ácido fólico",
    categoryId: "complementary-therapy",
    category: "Terapia complementar",
    categoryEn: "Complementary therapy",
    categoryEs: "Terapia complementaria",
    evidenceLevelId: "high",
    evidenceLevel: "Alto - Evidência robusta",
    evidenceLevelEn: "High - Robust evidence",
    evidenceLevelSymbol: "⊕⊕⊕⊕",
    recommendationId: "recommended",
    recommendation: "Recomendado",
    recommendationEn: "Recommended",
    justification:
      "Reduz risco de defeitos do tubo neural e pode melhorar qualidade oocitária",
    justificationEn:
      "Reduces risk of neural tube defects and may improve oocyte quality",
    specificIndications: "Todas as mulheres em idade reprodutiva",
    specificIndicationsEn: "All women of reproductive age",
    additionalConsiderations: "Iniciar pelo menos 1 mês antes da concepção",
    additionalConsiderationsEn: "Start at least 1 month before conception",
    content:
      "**Recomendação**: Recomendado\n\n**Justificativa**: Reduz risco de defeitos do tubo neural e pode melhorar qualidade oocitária\n\n**Indicações**: Todas as mulheres em idade reprodutiva\n\n**Considerações**: Iniciar pelo menos 1 mês antes da concepção",
  },
  {
    id: 12,
    name: "Transferência de embriões em estágio de blastocisto",
    nameEn: "Blastocyst stage embryo transfer",
    nameEs: "Transferencia de embriones en etapa de blastocisto",
    categoryId: "laboratory-technique",
    category: "Técnica laboratorial",
    categoryEn: "Laboratory technique",
    categoryEs: "Técnica de laboratorio",
    evidenceLevelId: "moderate",
    evidenceLevel: "Moderado - Evidência limitada",
    evidenceLevelEn: "Moderate - Limited evidence",
    evidenceLevelSymbol: "⊕⊕⊕◯",
    recommendationId: "recommended",
    recommendation: "Recomendado",
    recommendationEn: "Recommended",
    justification: "Aumento nas taxas de implantação e nascidos vivos",
    justificationEn: "Increase in implantation and live birth rates",
    specificIndications:
      "Pacientes com boa reserva ovariana e múltiplos embriões",
    specificIndicationsEn:
      "Patients with good ovarian reserve and multiple embryos",
    additionalConsiderations:
      "Risco de não haver embriões para transferir em alguns casos",
    additionalConsiderationsEn:
      "Risk of having no embryos to transfer in some cases",
    content:
      "**Recomendação**: Recomendado\n\n**Justificativa**: Aumento nas taxas de implantação e nascidos vivos\n\n**Indicações**: Pacientes com boa reserva ovariana e múltiplos embriões\n\n**Considerações**: Risco de não haver embriões para transferir em alguns casos",
  },
];

// Opções para filtros e seleções
export const categories: CategoryOption[] = [
  {
    value: "all",
    label: "All Categories",
    labelPt: "Todas as Categorias",
    labelEs: "Todas las Categorías",
  },
  ...categoriesData.map((category) => ({
    value: category.id,
    label: category.nameEn,
    labelPt: category.namePt,
    labelEs: category.nameEs,
  })),
];

export const evidenceLevels: EvidenceLevelOption[] = [
  {
    value: "all",
    label: "All Evidence Levels",
    labelPt: "Todos os Níveis de Evidência",
    labelEs: "Todos los Niveles de Evidencia",
  },
  ...evidenceLevelsData.map((level) => ({
    value: level.id,
    label: `${level.symbol} ${level.descriptionEn}`,
    labelPt: `${level.symbol} ${level.descriptionPt}`,
    labelEs: `${level.symbol} ${level.descriptionEs}`,
  })),
];

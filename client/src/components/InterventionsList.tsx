import { useEffect, useRef } from "react";
import { Skeleton } from "@/components/ui/skeleton";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Intervention } from "@/types";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { AlertCircle, ChevronDown } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { getEvidenceLevelColor, getRecommendationColor } from "@/types";
import { applySpringPhysicsToCollection } from "@/lib/springPhysics";

interface InterventionsListProps {
  interventions?: Intervention[];
  isLoading: boolean;
  error: unknown;
  onSortChange: (value: string) => void;
  sortBy: string;
  onSelectIntervention: (intervention: Intervention) => void;
}

export default function InterventionsList({
  interventions = [],
  isLoading,
  error,
  onSortChange,
  sortBy,
  onSelectIntervention,
}: InterventionsListProps) {
  // Referência para o container com todos os elementos interativos
  const accordionContainerRef = useRef<HTMLDivElement>(null);

  // Efeito para implementar a iluminação dinâmica baseada na posição do mouse
  useEffect(() => {
    const container = accordionContainerRef.current;
    if (!container) return;

    const items = container.querySelectorAll(".intervention-item");

    const handleMouseMove = (e: MouseEvent) => {
      // Loop para cada item
      items.forEach((item) => {
        // Obter a posição do item
        const rect = item.getBoundingClientRect();

        // Calcular posição relativa do mouse dentro do item (0-100%)
        const x = ((e.clientX - rect.left) / rect.width) * 100;
        const y = ((e.clientY - rect.top) / rect.height) * 100;

        // Definir variáveis CSS personalizadas
        (item as HTMLElement).style.setProperty("--mouse-x", `${x}%`);
        (item as HTMLElement).style.setProperty("--mouse-y", `${y}%`);
      });
    };

    // Adicionar evento de movimento do mouse
    document.addEventListener("mousemove", handleMouseMove);

    // Limpeza ao desmontar
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, [interventions]); // Recriar o efeito quando a lista de intervenções mudar

  // Efeito para aplicar física de molas aos itens do acordeão
  useEffect(() => {
    // Detectar mudanças no acordeão para aplicar efeitos quando aberto
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (
          mutation.type === "attributes" &&
          mutation.attributeName === "data-state"
        ) {
          const accordion = mutation.target as HTMLElement;
          if (accordion.getAttribute("data-state") === "open") {
            // Quando um acordeão é aberto, aplicar física de molas aos itens
            const items = accordion.querySelectorAll(".intervention-item");
            if (items.length > 0) {
              // Pequeno timeout para garantir que o conteúdo está visível
              setTimeout(() => {
                // Limpar função anterior para evitar duplicação
                const cleanup =
                  applySpringPhysicsToCollection(".intervention-item");

                // Observar quando o acordeão for fechado para limpar recursos
                const closeObserver = new MutationObserver((mutations) => {
                  mutations.forEach((mutation) => {
                    if (
                      mutation.type === "attributes" &&
                      mutation.attributeName === "data-state"
                    ) {
                      if (
                        (mutation.target as HTMLElement).getAttribute(
                          "data-state",
                        ) === "closed"
                      ) {
                        cleanup();
                        closeObserver.disconnect();
                      }
                    }
                  });
                });

                // Observar mudanças no estado do acordeão
                closeObserver.observe(accordion, { attributes: true });
              }, 50);
            }
          }
        }
      });
    });

    // Observar mudanças nos acordeões
    const accordions = document.querySelectorAll(
      '[data-orientation="vertical"]',
    );
    accordions.forEach((accordion) => {
      observer.observe(accordion, { attributes: true });
    });

    // Limpar observer quando o componente desmontar
    return () => {
      observer.disconnect();
    };
  }, [interventions]); // Recriar quando a lista de intervenções mudar

  // If there's an error, show an error message
  if (error) {
    return (
      <section className="mb-12">
        <Alert variant="destructive">
          <AlertCircle className="h-4 w-4" />
          <AlertTitle>Erro</AlertTitle>
          <AlertDescription>
            Falha ao carregar intervenções. Por favor, tente novamente mais
            tarde.
          </AlertDescription>
        </Alert>
      </section>
    );
  }

  // Função para renderizar os símbolos de nível de evidência
  const renderEvidenceSymbols = (level: string) => {
    if (
      level.toLowerCase().includes("alto") ||
      level.toLowerCase().includes("high")
    ) {
      return "⊕⊕⊕⊕";
    } else if (
      level.toLowerCase().includes("moderado") ||
      level.toLowerCase().includes("moderate")
    ) {
      return "⊕⊕⊕◯";
    } else if (
      level.toLowerCase().includes("baixo") ||
      level.toLowerCase().includes("low")
    ) {
      return "⊕⊕◯◯";
    } else if (
      level.toLowerCase().includes("muito baixo") ||
      level.toLowerCase().includes("very low")
    ) {
      return "⊕◯◯◯";
    }
    return "◯◯◯◯";
  };

  // Agrupar intervenções por categoria
  const groupedInterventions: Record<string, Intervention[]> = {};

  interventions.forEach((intervention) => {
    const category = intervention.category;

    if (!groupedInterventions[category]) {
      groupedInterventions[category] = [];
    }

    groupedInterventions[category].push(intervention);
  });

  // Ordenar as categorias alfabeticamente
  const sortedCategories = Object.keys(groupedInterventions).sort();

  return (
    <section className="mb-12">
      <div className="flex justify-between items-center mb-6 border-b border-secondary-200 dark:border-secondary-800 pb-4">
        <h3 className="text-xl font-semibold text-secondary-800 dark:text-secondary-100">
          Intervenções em Medicina Reprodutiva
        </h3>
        <div className="flex items-center gap-2 text-sm">
          <span className="text-secondary-700 dark:text-secondary-300">
            Ordenar por:
          </span>
          <Select value={sortBy} onValueChange={onSortChange}>
            <SelectTrigger className="h-8 w-[180px] border-primary-200 dark:bg-secondary-800 dark:border-secondary-700">
              <SelectValue placeholder="Ordenar por" />
            </SelectTrigger>
            <SelectContent className="dark:bg-secondary-800">
              <SelectItem value="recommendation">
                Força da Recomendação
              </SelectItem>
              <SelectItem value="evidence">Nível de Evidência</SelectItem>
              <SelectItem value="alphabetical">Ordem Alfabética</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {isLoading ? (
        <div className="space-y-4">
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              className="bg-white rounded-lg shadow-md p-6 space-y-4 border border-secondary-100 dark:bg-secondary-800"
            >
              <Skeleton className="h-7 w-2/3" />
              <div className="pl-4 space-y-4">
                <Skeleton className="h-5 w-full" />
                <Skeleton className="h-5 w-full" />
                <Skeleton className="h-5 w-3/4" />
              </div>
            </div>
          ))}
        </div>
      ) : interventions.length === 0 ? (
        <div className="bg-white rounded-lg shadow-md p-6 text-center border border-secondary-200 dark:bg-secondary-900">
          <p className="text-secondary-700 dark:text-secondary-300">
            Nenhuma intervenção encontrada com os critérios selecionados.
          </p>
        </div>
      ) : (
        <Accordion
          type="multiple"
          className="space-y-4"
          ref={accordionContainerRef}
        >
          {sortedCategories.map((category) => (
            <AccordionItem
              key={category}
              value={category}
              className="accordion-item depth-2 bg-white dark:bg-secondary-900 rounded-lg border border-secondary-200 dark:border-secondary-700 overflow-hidden performance-optimized shadow-sm"
            >
              <AccordionTrigger className="accordion-trigger px-6 py-4 hover:bg-secondary-50 dark:hover:bg-secondary-800 transition-colors sharp-rendering">
                <div className="flex justify-between w-full">
                  <h4 className="font-semibold text-left text-primary-700 dark:text-primary-400">
                    {category}
                  </h4>
                  <span className="text-secondary-500 dark:text-secondary-400 text-sm">
                    {groupedInterventions[category].length} intervenções
                  </span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="accordion-content px-0">
                <div className="accordion-content-inner divide-y divide-secondary-100 dark:divide-secondary-700">
                  {groupedInterventions[category].map((intervention) => {
                    const evidenceColor = getEvidenceLevelColor(
                      intervention.evidenceLevel,
                    );
                    const recommendationColor = getRecommendationColor(
                      intervention.recommendation,
                    );

                    return (
                      <div
                        key={intervention.id}
                        className="intervention-item p-4 hover:bg-secondary-50 dark:hover:bg-secondary-800/70 cursor-pointer dark:bg-secondary-800/40"
                        onClick={() => onSelectIntervention(intervention)}
                        style={
                          {
                            "--mouse-x": "50%",
                            "--mouse-y": "50%",
                          } as React.CSSProperties
                        }
                      >
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2 gap-2 relative z-10">
                          <h5 className="font-semibold text-black dark:text-white text-base">
                            {intervention.name}
                          </h5>
                          <div className="flex flex-wrap gap-2">
                            <Badge
                              className="whitespace-nowrap text-white font-bold shadow-md"
                              style={{
                                backgroundColor: evidenceColor,
                                boxShadow: `0 2px 3px rgba(0,0,0,0.3)`,
                                padding: "0.25rem 0.5rem",
                              }}
                            >
                              <span className="mr-1 text-white">
                                {renderEvidenceSymbols(
                                  intervention.evidenceLevel,
                                )}
                              </span>
                              {intervention.evidenceLevel}
                            </Badge>
                            <Badge
                              variant="outline"
                              className="whitespace-nowrap border-2 font-bold bg-white dark:bg-black shadow-md"
                              style={{
                                borderColor: recommendationColor,
                                color: recommendationColor,
                                boxShadow: `0 2px 3px rgba(0,0,0,0.2)`,
                                padding: "0.25rem 0.5rem",
                              }}
                            >
                              {intervention.recommendation}
                            </Badge>
                          </div>
                        </div>
                        <p className="text-black dark:text-white text-sm line-clamp-2 relative z-10">
                          {intervention.justification}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      )}
    </section>
  );
}

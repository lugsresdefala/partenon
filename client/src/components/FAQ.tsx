import { useState } from "react";
import {
  ChevronDown,
  MessageSquare,
  HelpCircle,
  PlusCircle,
  MinusCircle,
  LifeBuoy,
  BookOpen,
} from "lucide-react";
import { faqItems } from "@/data/guidelines";
import { cn } from "@/lib/utils";

export default function FAQ() {
  const [openItem, setOpenItem] = useState<number | null>(0); // Primeiro item aberto por padrão

  const toggleItem = (index: number) => {
    if (openItem === index) {
      setOpenItem(null);
    } else {
      setOpenItem(index);
    }
  };

  return (
    <section className="py-20 bg-gradient-to-b from-white to-secondary-50 dark:from-secondary-950 dark:to-secondary-900">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary-50 dark:bg-primary-900/30 border border-primary-200 dark:border-primary-700/30 text-primary-700 dark:text-primary-300 text-sm font-medium mb-4">
              <MessageSquare className="h-4 w-4 mr-2" />
              Tire suas dúvidas
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 dark:text-white mb-4">
              Perguntas Frequentes
            </h2>
            <p className="text-lg text-secondary-600 dark:text-secondary-400 max-w-3xl mx-auto">
              Encontre respostas para as perguntas mais comuns sobre medicina
              reprodutiva baseada em evidências e como utilizar esta plataforma.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <div className="bg-gradient-to-br from-primary-50 to-primary-100 dark:from-primary-900/20 dark:to-primary-900/10 p-6 rounded-xl border border-primary-200 dark:border-primary-800/30 shadow-sm flex items-start space-x-4">
              <div className="bg-white dark:bg-primary-800 rounded-full p-3 shadow-md">
                <BookOpen className="h-6 w-6 text-primary-600 dark:text-primary-300" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-primary-900 dark:text-primary-200 mb-2">
                  Baseado em Diretrizes ESHRE
                </h3>
                <p className="text-primary-700 dark:text-primary-300 text-sm">
                  Nossas recomendações são baseadas nas diretrizes oficiais da
                  Sociedade Europeia de Reprodução Humana e Embriologia.
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-secondary-50 to-secondary-100 dark:from-secondary-900/20 dark:to-secondary-900/10 p-6 rounded-xl border border-secondary-200 dark:border-secondary-800/30 shadow-sm flex items-start space-x-4">
              <div className="bg-white dark:bg-secondary-800 rounded-full p-3 shadow-md">
                <LifeBuoy className="h-6 w-6 text-secondary-600 dark:text-secondary-300" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-secondary-900 dark:text-secondary-200 mb-2">
                  Suporte à Decisão Clínica
                </h3>
                <p className="text-secondary-700 dark:text-secondary-300 text-sm">
                  Nossa ferramenta auxilia profissionais de saúde a tomarem
                  decisões informadas baseadas nas melhores evidências
                  disponíveis.
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-4 relative">
            {/* Elemento decorativo */}
            <div className="absolute left-0 -ml-4 inset-y-0 w-0.5 bg-gradient-to-b from-primary-300 via-primary-500 to-transparent hidden md:block"></div>

            {faqItems.map((item, index) => (
              <div
                key={index}
                className={cn(
                  "bg-white dark:bg-secondary-900 rounded-xl shadow-md overflow-hidden border transition-all duration-300",
                  openItem === index
                    ? "border-primary-300 dark:border-primary-700 shadow-lg"
                    : "border-secondary-200 dark:border-secondary-800/50",
                )}
              >
                <button
                  className="flex justify-between items-center w-full px-6 py-5 text-left"
                  onClick={() => toggleItem(index)}
                  aria-expanded={openItem === index}
                >
                  <div className="flex items-center pr-6">
                    <div
                      className={cn(
                        "flex-shrink-0 mr-4 rounded-full p-2",
                        openItem === index
                          ? "bg-primary-50 text-primary-600 dark:bg-primary-900/30 dark:text-primary-400"
                          : "bg-secondary-50 text-secondary-600 dark:bg-secondary-800 dark:text-secondary-400",
                      )}
                    >
                      <HelpCircle className="h-5 w-5" />
                    </div>
                    <h3 className="font-semibold text-secondary-900 dark:text-white">
                      {item.question}
                    </h3>
                  </div>

                  <div
                    className={cn(
                      "flex-shrink-0 h-8 w-8 rounded-full flex items-center justify-center transition-colors",
                      openItem === index
                        ? "bg-primary-100 text-primary-600 dark:bg-primary-900/40 dark:text-primary-400"
                        : "bg-secondary-100 text-secondary-500 dark:bg-secondary-800 dark:text-secondary-400",
                    )}
                  >
                    {openItem === index ? (
                      <MinusCircle className="h-5 w-5" />
                    ) : (
                      <PlusCircle className="h-5 w-5" />
                    )}
                  </div>
                </button>

                <div
                  className={cn(
                    "overflow-hidden transition-all duration-300 ease-in-out",
                    openItem === index ? "max-h-96" : "max-h-0",
                  )}
                >
                  <div className="border-t border-secondary-100 dark:border-secondary-800 px-6 py-5">
                    <p className="text-secondary-700 dark:text-secondary-300 leading-relaxed">
                      {item.answer}
                    </p>

                    <div className="mt-4 pt-4 border-t border-secondary-100 dark:border-secondary-800/50 text-secondary-500 dark:text-secondary-400 flex items-center text-sm">
                      <span className="font-medium mr-2">
                        Esta resposta foi útil?
                      </span>
                      <button className="inline-flex items-center justify-center h-8 w-8 rounded-full bg-secondary-50 dark:bg-secondary-800 hover:bg-primary-50 hover:text-primary-600 dark:hover:bg-primary-900/30 dark:hover:text-primary-400 ml-1 transition-colors">
                        👍
                      </button>
                      <button className="inline-flex items-center justify-center h-8 w-8 rounded-full bg-secondary-50 dark:bg-secondary-800 hover:bg-primary-50 hover:text-primary-600 dark:hover:bg-primary-900/30 dark:hover:text-primary-400 ml-1 transition-colors">
                        👎
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <div className="bg-gradient-to-r from-primary-50 via-primary-100 to-primary-50 dark:from-primary-900/20 dark:via-primary-900/30 dark:to-primary-900/20 border border-primary-200 dark:border-primary-800/30 rounded-xl p-6 md:p-8 shadow-sm max-w-3xl mx-auto">
              <h3 className="text-xl font-semibold text-primary-900 dark:text-primary-200 mb-3">
                Ainda tem dúvidas?
              </h3>
              <p className="text-primary-700 dark:text-primary-300 mb-6">
                Se não encontrou a resposta que procura, nossa equipe está à
                disposição para ajudar em suas dúvidas sobre medicina
                reprodutiva.
              </p>
              <a
                href="/contact"
                className="inline-flex items-center px-5 py-2.5 rounded-lg bg-primary-600 hover:bg-primary-700 text-white font-medium transition-colors shadow-sm"
              >
                <MessageSquare className="mr-2 h-5 w-5" />
                Enviar uma pergunta
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

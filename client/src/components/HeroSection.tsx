import { ArrowRight, Search, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  return (
    <section className="relative min-h-[650px] mb-20 overflow-hidden">
      {/* Background image and overlay */}
      <div className="absolute inset-0 z-0">
        {/* Imagem de fundo incorporada do upload */}
        <div
          className="absolute inset-0 bg-gradient-to-b from-secondary-950 via-secondary-900 to-secondary-950"
          style={{
            backgroundImage:
              "radial-gradient(circle at 15% 15%, rgba(8, 145, 178, 0.3), transparent 60%), radial-gradient(circle at 85% 85%, rgba(14, 165, 233, 0.2), transparent 60%)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: 0.95,
          }}
        />

        {/* Overlay gradiente para melhorar a legibilidade */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary-950/90 via-primary-900/80 to-secondary-950/95"></div>

        {/* Ruído sutil para adicionar textura */}
        <div className="absolute inset-0 textured-surface opacity-[0.03] mix-blend-overlay"></div>

        {/* Círculos decorativos*/}
        <div className="absolute top-[20%] left-[5%] w-64 h-64 bg-primary-600/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-[30%] right-[10%] w-72 h-72 bg-primary-400/10 rounded-full blur-3xl"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
          {/* Coluna principal com informações */}
          <div className="lg:col-span-7 md:pr-6">
            <div className="mb-6 inline-flex items-center px-3 py-1 rounded-full bg-primary-700/30 border border-primary-600/20 text-primary-300 text-sm font-medium">
              <span className="flex h-2 w-2 rounded-full bg-primary-400 mr-2"></span>
              Saúde Reprodutiva Baseada em Evidências
            </div>

            <h1 className="title-dramatic font-bold text-white mb-6 leading-tight tracking-tight">
              <span className="inline-block relative gradient-border bg-secondary-900 p-2 rounded-md">
                <span className="relative z-10 responsive-text">Partenon</span>
                <span className="absolute -bottom-1 left-0 w-full h-[0.12em] bg-primary-400/30 rounded-full"></span>
              </span>
            </h1>

            <h2 className="text-2xl md:text-3xl text-primary-100 mb-4 font-medium">
              Práticas Baseadas em Evidências
            </h2>

            <p className="text-lg text-secondary-200 mb-10 max-w-2xl leading-relaxed">
              Acesse as mais recentes orientações baseadas em evidências para
              intervenções em medicina reprodutiva, baseadas nas diretrizes
              clínicas da ESHRE e outras fontes confiáveis.
            </p>

            <div className="flex flex-col sm:flex-row gap-5">
              <Button
                className="flex items-center justify-center bg-primary-500 hover:bg-primary-600 text-white border-0 px-6 button-animated shimmer-premium"
                size="lg"
                onClick={() => {
                  const searchSection =
                    document.querySelector("#search-section");
                  if (searchSection) {
                    searchSection.scrollIntoView({ behavior: "smooth" });
                  }
                }}
              >
                <Search className="h-5 w-5 mr-2.5" />
                <span className="font-medium">Explorar Intervenções</span>
              </Button>

              <Button
                variant="outline"
                className="flex items-center justify-center border-primary-400/50 text-primary-200 hover:bg-primary-900/50 hover:border-primary-400/70 px-6 button-animated"
                size="lg"
                onClick={() => {
                  const featuresSection =
                    document.querySelector("#features-section");
                  if (featuresSection) {
                    featuresSection.scrollIntoView({ behavior: "smooth" });
                  }
                }}
              >
                <BookOpen className="h-5 w-5 mr-2.5" />
                <span className="font-medium">Entender Evidências</span>
              </Button>
            </div>
          </div>

          {/* Coluna com card informativo */}
          <div className="hidden lg:block lg:col-span-5 relative">
            <div className="glass-card-hero dark:glass-card-hero p-7 rounded-2xl shadow-2xl relative z-10 border border-white/10">
              <div className="mb-3">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="h-12 w-12 flex items-center justify-center">
                    <svg
                      viewBox="0 0 24 24"
                      className="h-10 w-10 text-white"
                      fill="currentColor"
                    >
                      <path d="M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">
                      Sistema de Classificação
                    </h3>
                    <p className="text-primary-200 text-sm">
                      Níveis de Evidência Científica
                    </p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="bg-gradient-to-br from-primary-900/40 to-primary-950/50 p-5 rounded-lg border border-primary-600/20 shadow-lg">
                    <h4 className="text-lg font-semibold text-white mb-4 border-b border-primary-700/30 pb-2">
                      Classificação de Evidências
                    </h4>
                    <div className="space-y-4">
                      <div className="flex items-center bg-primary-800/20 p-2 rounded-lg hover:bg-primary-800/30 transition-all">
                        <div className="w-12 h-10 flex items-center justify-center bg-primary-500/30 text-primary-200 rounded-md font-semibold text-lg shadow-inner">
                          ⊕⊕⊕⊕
                        </div>
                        <div className="ml-3">
                          <span className="font-semibold text-white">Alta</span>
                          <span className="text-sm text-primary-200 ml-2 block mt-0.5">
                            Evidência robusta
                          </span>
                        </div>
                      </div>
                      <div className="flex items-center bg-primary-800/20 p-2 rounded-lg hover:bg-primary-800/30 transition-all">
                        <div className="w-12 h-10 flex items-center justify-center bg-primary-500/20 text-primary-300 rounded-md font-semibold text-lg shadow-inner">
                          ⊕⊕⊕◯
                        </div>
                        <div className="ml-3">
                          <span className="font-semibold text-white">
                            Moderada
                          </span>
                          <span className="text-sm text-primary-200 ml-2 block mt-0.5">
                            Evidência confiável
                          </span>
                        </div>
                      </div>
                      <div className="flex items-center bg-primary-800/20 p-2 rounded-lg hover:bg-primary-800/30 transition-all">
                        <div className="w-12 h-10 flex items-center justify-center bg-primary-500/15 text-primary-300 rounded-md font-semibold text-lg shadow-inner">
                          ⊕⊕◯◯
                        </div>
                        <div className="ml-3">
                          <span className="font-semibold text-white">
                            Baixa
                          </span>
                          <span className="text-sm text-primary-200 ml-2 block mt-0.5">
                            Evidência limitada
                          </span>
                        </div>
                      </div>
                      <div className="flex items-center bg-primary-800/20 p-2 rounded-lg hover:bg-primary-800/30 transition-all">
                        <div className="w-12 h-10 flex items-center justify-center bg-primary-500/10 text-primary-300 rounded-md font-semibold text-lg shadow-inner">
                          ⊕◯◯◯
                        </div>
                        <div className="ml-3">
                          <span className="font-semibold text-white">
                            Muito baixa
                          </span>
                          <span className="text-sm text-primary-200 ml-2 block mt-0.5">
                            Evidência insuficiente
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="text-right mt-5">
                <div className="inline-flex items-center px-3 py-1.5 rounded-full bg-primary-500/20 border border-primary-400/20 text-primary-200 text-sm font-medium">
                  <span>Baseado no Consenso ESHRE 2022-2023</span>
                </div>
              </div>
            </div>

            {/* Elementos decorativos avançados com morfologia líquida usando Tailwind */}
            <div className="absolute -right-20 z-0 w-[500px] h-[500px] liquid-shape">
              <svg
                viewBox="0 0 200 200"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full h-full animate-liquid-morph opacity-20"
              >
                <path
                  fill="rgba(8, 145, 178, 0.4)"
                  d="M38.4,-64.1C51.2,-58.1,64,-50.5,70.7,-39.1C77.4,-27.7,78,-12.4,75.1,1.7C72.1,15.8,65.7,28.6,57.4,40.8C49.1,52.9,38.9,64.3,26.3,70.3C13.8,76.2,-1.1,76.7,-14.8,72.5C-28.5,68.3,-40.9,59.5,-51.2,48.8C-61.5,38.1,-69.6,25.5,-74.6,10.9C-79.5,-3.7,-81.2,-20.4,-75.6,-33.7C-70,-47,-57,-57,-43.4,-63.4C-29.7,-69.8,-14.8,-72.6,-0.3,-72.1C14.3,-71.5,28.6,-67.6,38.4,-64.1Z"
                  transform="translate(100 100)"
                />
              </svg>
            </div>

            <div className="absolute -bottom-20 -left-10 z-0 w-[400px] h-[400px] liquid-shape">
              <svg
                viewBox="0 0 200 200"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full h-full animate-liquid-morph-reverse opacity-20"
              >
                <path
                  fill="rgba(6, 182, 212, 0.3)"
                  d="M45.7,-77.4C58.9,-69.9,69.2,-56.2,76.5,-41.3C83.8,-26.4,88.1,-10.2,85.9,5.1C83.7,20.3,74.9,34.7,64.8,48.2C54.7,61.8,43.2,74.5,28.9,79.8C14.7,85.1,-2.2,83,-17.8,77.5C-33.4,72.1,-47.7,63.3,-60.1,51.5C-72.5,39.7,-83,24.9,-85.9,8.7C-88.9,-7.5,-84.3,-25.1,-74.5,-38.9C-64.7,-52.7,-49.7,-62.8,-35.1,-69.8C-20.5,-76.8,-6.2,-80.9,9.2,-84.1C24.6,-87.3,49.2,-89.6,60.5,-85.3C71.8,-80.9,81.9,-69.9,45.7,-77.4Z"
                  transform="translate(100 100)"
                />
              </svg>
            </div>

            <div className="absolute top-1/4 left-1/4 z-0 w-[300px] h-[300px] liquid-shape">
              <svg
                viewBox="0 0 200 200"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full h-full animate-liquid-morph-alt opacity-20"
              >
                <path
                  fill="rgba(56, 189, 248, 0.25)"
                  d="M39.5,-67.3C52.5,-56.3,65.6,-47.8,73.4,-35.5C81.3,-23.1,83.8,-6.9,81.9,8.5C80,24,73.6,38.6,64.5,52.1C55.4,65.6,43.5,77.9,28.6,84.3C13.8,90.7,-3.9,91.2,-19.1,85.5C-34.3,79.9,-47,68.1,-57.7,55.1C-68.4,42,-77.2,27.7,-81.1,11.8C-85.1,-4.2,-84.2,-21.8,-76.7,-36.1C-69.1,-50.4,-54.9,-61.3,-40.4,-71.3C-25.9,-81.3,-12.9,-90.5,0.6,-91.5C14.2,-92.5,28.3,-85.3,39.5,-67.3Z"
                  transform="translate(100 100)"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Elemento divisor mais sutil */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-background via-background/90 to-transparent"></div>
    </section>
  );
}

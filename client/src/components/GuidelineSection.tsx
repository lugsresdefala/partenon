import { ArrowRight } from "lucide-react";
import { Link } from "wouter";

export default function GuidelineSection() {
  return (
    <section className="mb-12 px-4">
      <div className="relative overflow-hidden rounded-lg">
        {/* Fundo com ruído sutil para adicionar textura */}
        <div className="absolute inset-0 textured-surface opacity-[0.03] mix-blend-overlay"></div>

        <div className="glass-card dark:glass-card-dark overflow-hidden relative">
          {/* Layout de grid assimétrico com colunas de larguras variadas */}
          <div className="md:grid md:grid-cols-[1fr_1.5fr] md:gap-0">
            <div className="relative">
              <div className="relative h-64 md:h-full w-full overflow-hidden">
                {/* Efeito duotonal leve nas imagens */}
                <div className="absolute inset-0 bg-gradient-to-tr from-primary-900/20 to-primary-500/10 dark:from-primary-900/30 dark:to-primary-700/20 mix-blend-multiply z-10"></div>

                <img
                  src="/images/research-lab.jpg"
                  alt="Medical research"
                  className="w-full h-full object-cover transition-all duration-700 hover:scale-105 filter"
                />

                {/* Gradiente sobreposto para melhorar legibilidade */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent"></div>

                {/* Círculo decorativo sobreposto */}
                <div className="absolute -bottom-20 -left-20 w-56 h-56 bg-primary-500/10 dark:bg-primary-400/10 rounded-full blur-3xl"></div>
              </div>
            </div>

            <div className="p-6 md:p-8 flex flex-col justify-center relative z-10">
              {/* Tipografia expressiva com escala não-convencional */}
              <h2 className="text-3xl md:text-4xl font-bold text-secondary-800 dark:text-secondary-100 mb-6 leading-tight">
                Baseado nas{" "}
                <span className="relative inline-block">
                  <span className="relative z-10">Diretrizes</span>
                  <span className="absolute -bottom-1.5 left-0 w-full h-[0.15em] bg-primary-200 dark:bg-primary-800/40 rounded-full"></span>
                </span>{" "}
                Clínicas Mais Recentes
              </h2>

              <p className="text-secondary-600 dark:text-secondary-300 mb-8 text-base leading-relaxed">
                Nossas recomendações são derivadas de diretrizes clínicas
                respeitadas, como a diretriz ESHRE sobre perda gestacional
                recorrente (2022) e a diretriz ESHRE sobre infertilidade
                inexplicada (2023).
              </p>

              {/* Layout com cartões sobrepostos */}
              <div className="card-stack relative mb-8 space-y-3">
                <div className="bg-white/90 dark:bg-secondary-800/90 p-5 rounded-md transform hover:-translate-y-1 transition-transform shadow-sm border border-secondary-100 dark:border-secondary-700">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-10 bg-primary-500 rounded-full"></div>
                    <div>
                      <h5 className="font-semibold text-secondary-800 dark:text-secondary-100">
                        ESHRE RPL Guideline
                      </h5>
                      <p className="text-secondary-500 dark:text-secondary-400 text-sm">
                        Última atualização: 2022
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white/90 dark:bg-secondary-800/90 p-5 rounded-md transform hover:-translate-y-1 transition-transform shadow-sm border border-secondary-100 dark:border-secondary-700">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-10 bg-primary-400 rounded-full"></div>
                    <div>
                      <h5 className="font-semibold text-secondary-800 dark:text-secondary-100">
                        ESHRE UI Guideline
                      </h5>
                      <p className="text-secondary-500 dark:text-secondary-400 text-sm">
                        Última atualização: 2023
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Microinteração no botão */}
              <Link
                href="/guidelines"
                className="group text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 font-medium flex items-center transition-all"
              >
                <span className="inline-block group-hover:translate-x-1 transition-transform">
                  Ver Todas as Diretrizes
                </span>
                <ArrowRight className="h-5 w-5 ml-1 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

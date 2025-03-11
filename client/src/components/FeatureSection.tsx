import {
  Shield,
  ClipboardList,
  Settings,
  BookOpen,
  CheckCircle2,
  BarChart4,
} from "lucide-react";

export default function FeatureSection() {
  return (
    <section
      className="py-20 bg-gradient-to-b from-background to-secondary-50 dark:from-secondary-950 dark:to-secondary-900"
      id="features-section"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary-50 dark:bg-primary-900/30 border border-primary-200 dark:border-primary-700/30 text-primary-700 dark:text-primary-300 text-sm font-medium mb-4">
            <span className="flex h-2 w-2 rounded-full bg-primary-500 mr-2"></span>
            Evidências clínicas
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 dark:text-white mb-4">
            Entendendo Práticas Baseadas em Evidências
          </h2>
          <p className="text-lg text-secondary-600 dark:text-secondary-400 max-w-3xl mx-auto">
            Descubra como a medicina reprodutiva baseada em evidências pode
            transformar sua prática clínica e melhorar os resultados dos
            pacientes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="bg-white dark:bg-secondary-800 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-secondary-100 dark:border-secondary-700/50 group">
            <div className="p-6">
              <div className="w-14 h-14 rounded-lg bg-primary-50 dark:bg-primary-900/30 flex items-center justify-center text-primary-600 dark:text-primary-400 mb-6 group-hover:scale-110 transition-transform duration-300">
                <Shield className="h-7 w-7" />
              </div>
              <h3 className="text-xl font-semibold text-secondary-900 dark:text-white mb-3 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                Níveis de Evidência
              </h3>
              <p className="text-secondary-600 dark:text-secondary-400 mb-4 leading-relaxed">
                Compreenda como as evidências são classificadas com base na
                qualidade da pesquisa, desde ensaios randomizados de alta
                qualidade até opinião de especialistas.
              </p>
              <div className="pt-4 border-t border-secondary-100 dark:border-secondary-700/50">
                <ul className="space-y-2">
                  <li className="flex items-center text-secondary-700 dark:text-secondary-300">
                    <CheckCircle2 className="h-4 w-4 text-primary-500 mr-2 flex-shrink-0" />
                    <span className="text-sm">
                      Ensaios clínicos randomizados
                    </span>
                  </li>
                  <li className="flex items-center text-secondary-700 dark:text-secondary-300">
                    <CheckCircle2 className="h-4 w-4 text-primary-500 mr-2 flex-shrink-0" />
                    <span className="text-sm">
                      Meta-análises e revisões sistemáticas
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white dark:bg-secondary-800 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-secondary-100 dark:border-secondary-700/50 group">
            <div className="p-6">
              <div className="w-14 h-14 rounded-lg bg-primary-50 dark:bg-primary-900/30 flex items-center justify-center text-primary-600 dark:text-primary-400 mb-6 group-hover:scale-110 transition-transform duration-300">
                <ClipboardList className="h-7 w-7" />
              </div>
              <h3 className="text-xl font-semibold text-secondary-900 dark:text-white mb-3 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                Força da Recomendação
              </h3>
              <p className="text-secondary-600 dark:text-secondary-400 mb-4 leading-relaxed">
                Saiba como as recomendações são formuladas com base na relação
                benefício versus risco, uso de recursos e valores dos pacientes.
              </p>
              <div className="pt-4 border-t border-secondary-100 dark:border-secondary-700/50">
                <ul className="space-y-2">
                  <li className="flex items-center text-secondary-700 dark:text-secondary-300">
                    <CheckCircle2 className="h-4 w-4 text-primary-500 mr-2 flex-shrink-0" />
                    <span className="text-sm">
                      Análise de benefícios e riscos
                    </span>
                  </li>
                  <li className="flex items-center text-secondary-700 dark:text-secondary-300">
                    <CheckCircle2 className="h-4 w-4 text-primary-500 mr-2 flex-shrink-0" />
                    <span className="text-sm">Preferências do paciente</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white dark:bg-secondary-800 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-secondary-100 dark:border-secondary-700/50 group">
            <div className="p-6">
              <div className="w-14 h-14 rounded-lg bg-primary-50 dark:bg-primary-900/30 flex items-center justify-center text-primary-600 dark:text-primary-400 mb-6 group-hover:scale-110 transition-transform duration-300">
                <Settings className="h-7 w-7" />
              </div>
              <h3 className="text-xl font-semibold text-secondary-900 dark:text-white mb-3 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                Aplicação Clínica
              </h3>
              <p className="text-secondary-600 dark:text-secondary-400 mb-4 leading-relaxed">
                Descubra como aplicar estas recomendações na prática clínica,
                considerando as circunstâncias individuais de cada paciente.
              </p>
              <div className="pt-4 border-t border-secondary-100 dark:border-secondary-700/50">
                <ul className="space-y-2">
                  <li className="flex items-center text-secondary-700 dark:text-secondary-300">
                    <CheckCircle2 className="h-4 w-4 text-primary-500 mr-2 flex-shrink-0" />
                    <span className="text-sm">Medicina personalizada</span>
                  </li>
                  <li className="flex items-center text-secondary-700 dark:text-secondary-300">
                    <CheckCircle2 className="h-4 w-4 text-primary-500 mr-2 flex-shrink-0" />
                    <span className="text-sm">
                      Tomada de decisão compartilhada
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Card 4 */}
          <div className="bg-white dark:bg-secondary-800 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-secondary-100 dark:border-secondary-700/50 group">
            <div className="p-6">
              <div className="w-14 h-14 rounded-lg bg-primary-50 dark:bg-primary-900/30 flex items-center justify-center text-primary-600 dark:text-primary-400 mb-6 group-hover:scale-110 transition-transform duration-300">
                <BookOpen className="h-7 w-7" />
              </div>
              <h3 className="text-xl font-semibold text-secondary-900 dark:text-white mb-3 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                Diretrizes ESHRE
              </h3>
              <p className="text-secondary-600 dark:text-secondary-400 mb-4 leading-relaxed">
                Acesse as diretrizes mais recentes da Sociedade Europeia de
                Reprodução Humana e Embriologia para medicina reprodutiva.
              </p>
              <div className="pt-4 border-t border-secondary-100 dark:border-secondary-700/50">
                <ul className="space-y-2">
                  <li className="flex items-center text-secondary-700 dark:text-secondary-300">
                    <CheckCircle2 className="h-4 w-4 text-primary-500 mr-2 flex-shrink-0" />
                    <span className="text-sm">Atualizações 2022-2023</span>
                  </li>
                  <li className="flex items-center text-secondary-700 dark:text-secondary-300">
                    <CheckCircle2 className="h-4 w-4 text-primary-500 mr-2 flex-shrink-0" />
                    <span className="text-sm">Consenso internacional</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Card 5 */}
          <div className="bg-white dark:bg-secondary-800 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-secondary-100 dark:border-secondary-700/50 group">
            <div className="p-6">
              <div className="w-14 h-14 rounded-lg bg-primary-50 dark:bg-primary-900/30 flex items-center justify-center text-primary-600 dark:text-primary-400 mb-6 group-hover:scale-110 transition-transform duration-300">
                <BarChart4 className="h-7 w-7" />
              </div>
              <h3 className="text-xl font-semibold text-secondary-900 dark:text-white mb-3 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                Análise de Dados
              </h3>
              <p className="text-secondary-600 dark:text-secondary-400 mb-4 leading-relaxed">
                Entenda como os dados de pesquisa são analisados e transformados
                em recomendações práticas para o tratamento de infertilidade.
              </p>
              <div className="pt-4 border-t border-secondary-100 dark:border-secondary-700/50">
                <ul className="space-y-2">
                  <li className="flex items-center text-secondary-700 dark:text-secondary-300">
                    <CheckCircle2 className="h-4 w-4 text-primary-500 mr-2 flex-shrink-0" />
                    <span className="text-sm">Interpretação estatística</span>
                  </li>
                  <li className="flex items-center text-secondary-700 dark:text-secondary-300">
                    <CheckCircle2 className="h-4 w-4 text-primary-500 mr-2 flex-shrink-0" />
                    <span className="text-sm">Significância clínica</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Card 6 */}
          <div className="bg-gradient-to-br from-primary-500 to-primary-700 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-primary-400 group">
            <div className="p-6">
              <div className="w-14 h-14 rounded-lg bg-white/20 flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300">
                <BookOpen className="h-7 w-7" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">
                Recursos Adicionais
              </h3>
              <p className="text-primary-100 mb-4 leading-relaxed">
                Explore nossos recursos adicionais para aprofundar seu
                conhecimento em medicina reprodutiva baseada em evidências.
              </p>
              <div className="pt-4 border-t border-white/20">
                <ul className="space-y-2">
                  <li className="flex items-center text-white">
                    <CheckCircle2 className="h-4 w-4 text-white mr-2 flex-shrink-0" />
                    <span className="text-sm">
                      Biblioteca de artigos científicos
                    </span>
                  </li>
                  <li className="flex items-center text-white">
                    <CheckCircle2 className="h-4 w-4 text-white mr-2 flex-shrink-0" />
                    <span className="text-sm">Vídeos educacionais</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

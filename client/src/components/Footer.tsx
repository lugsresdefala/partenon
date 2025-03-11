import * as React from "react";
import { Link } from "wouter";
import {
  FileText,
  BookOpen,
  Mail,
  Users,
  Heart,
  BookMarked,
  GraduationCap,
  Languages,
} from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-secondary-900 to-secondary-950 text-white py-16 border-t border-secondary-800/50 relative overflow-hidden">
      {/* Ruído sutil para textura */}
      <div className="absolute inset-0 opacity-[0.02] mix-blend-overlay pointer-events-none textured-surface"></div>

      {/* Elementos decorativos */}
      <div className="absolute -bottom-20 -right-20 w-[300px] h-[300px] rounded-full bg-primary-600/5 blur-[100px]"></div>
      <div className="absolute top-1/2 left-1/4 w-[200px] h-[200px] rounded-full bg-primary-500/5 blur-[80px]"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-x-10 gap-y-12">
          {/* Column 1 - Logo & Description */}
          <div className="md:col-span-4">
            <div className="flex items-center space-x-3 mb-5">
              <div className="h-9 w-9 bg-primary-600 rounded-lg flex items-center justify-center">
                <svg
                  viewBox="0 0 24 24"
                  className="h-5 w-5 text-white"
                  fill="currentColor"
                >
                  <path d="M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">Partenon</h3>
                <p className="text-xs text-primary-300">Medicina Reprodutiva</p>
              </div>
            </div>

            <p className="text-secondary-300 leading-relaxed mb-6">
              Plataforma especializada em medicina reprodutiva, oferecendo
              acesso a intervenções baseadas em evidências científicas de alta
              qualidade e diretrizes clínicas atualizadas.
            </p>

            <div className="flex space-x-3">
              <a
                href="#"
                className="w-10 h-10 rounded-full flex items-center justify-center bg-secondary-800 hover:bg-primary-600 text-white transition-colors duration-300"
                aria-label="Twitter"
              >
                <svg
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                </svg>
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full flex items-center justify-center bg-secondary-800 hover:bg-primary-600 text-white transition-colors duration-300"
                aria-label="LinkedIn"
              >
                <svg
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    fillRule="evenodd"
                    d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full flex items-center justify-center bg-secondary-800 hover:bg-primary-600 text-white transition-colors duration-300"
                aria-label="Instagram"
              >
                <svg
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </a>
            </div>
          </div>

          {/* Column 2 - Links */}
          <div className="md:col-span-2">
            <h4 className="text-white font-semibold mb-6 flex items-center">
              <BookOpen className="h-4 w-4 mr-2 text-primary-500" />
              Recursos
            </h4>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/guidelines"
                  className="text-secondary-300 hover:text-primary-400 transition-colors duration-200 flex items-center"
                >
                  <span className="h-1 w-1 bg-primary-500 rounded-full mr-2"></span>
                  Diretrizes ESHRE
                </Link>
              </li>
              <li>
                <Link
                  href="/research"
                  className="text-secondary-300 hover:text-primary-400 transition-colors duration-200 flex items-center"
                >
                  <span className="h-1 w-1 bg-primary-500 rounded-full mr-2"></span>
                  Base de Pesquisas
                </Link>
              </li>
              <li>
                <Link
                  href="/glossary"
                  className="text-secondary-300 hover:text-primary-400 transition-colors duration-200 flex items-center"
                >
                  <span className="h-1 w-1 bg-primary-500 rounded-full mr-2"></span>
                  Glossário Médico
                </Link>
              </li>
              <li>
                <Link
                  href="/faq"
                  className="text-secondary-300 hover:text-primary-400 transition-colors duration-200 flex items-center"
                >
                  <span className="h-1 w-1 bg-primary-500 rounded-full mr-2"></span>
                  Perguntas Frequentes
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3 - Links */}
          <div className="md:col-span-2">
            <h4 className="text-white font-semibold mb-6 flex items-center">
              <Users className="h-4 w-4 mr-2 text-primary-500" />
              Sobre Nós
            </h4>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/mission"
                  className="text-secondary-300 hover:text-primary-400 transition-colors duration-200 flex items-center"
                >
                  <span className="h-1 w-1 bg-primary-500 rounded-full mr-2"></span>
                  Nossa Missão
                </Link>
              </li>
              <li>
                <Link
                  href="/methodology"
                  className="text-secondary-300 hover:text-primary-400 transition-colors duration-200 flex items-center"
                >
                  <span className="h-1 w-1 bg-primary-500 rounded-full mr-2"></span>
                  Metodologia
                </Link>
              </li>
              <li>
                <Link
                  href="/contributors"
                  className="text-secondary-300 hover:text-primary-400 transition-colors duration-200 flex items-center"
                >
                  <span className="h-1 w-1 bg-primary-500 rounded-full mr-2"></span>
                  Colaboradores
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-secondary-300 hover:text-primary-400 transition-colors duration-200 flex items-center"
                >
                  <span className="h-1 w-1 bg-primary-500 rounded-full mr-2"></span>
                  Contato
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4 - Newsletter */}
          <div className="md:col-span-4">
            <h4 className="text-white font-semibold mb-4 flex items-center">
              <Mail className="h-4 w-4 mr-2 text-primary-500" />
              Atualizações e Novidades
            </h4>
            <p className="text-secondary-300 mb-5 text-sm leading-relaxed">
              Receba as mais recentes atualizações sobre diretrizes clínicas,
              novas pesquisas e eventos em medicina reprodutiva.
            </p>

            <div className="bg-secondary-800/50 p-5 rounded-xl border border-secondary-700/30">
              <form className="space-y-3">
                <div>
                  <label
                    htmlFor="footer-email"
                    className="text-sm text-secondary-300 mb-1 block"
                  >
                    Seu email
                  </label>
                  <input
                    type="email"
                    id="footer-email"
                    placeholder="nome@exemplo.com"
                    className="w-full px-4 py-2.5 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 bg-secondary-800 border border-secondary-700 text-white placeholder-secondary-500"
                  />
                </div>

                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="consent"
                    className="h-4 w-4 rounded border-secondary-600 text-primary-600 focus:ring-primary-500"
                  />
                  <label
                    htmlFor="consent"
                    className="ml-2 text-xs text-secondary-400"
                  >
                    Concordo em receber comunicações via email
                  </label>
                </div>

                <Button className="w-full bg-primary-600 hover:bg-primary-700 text-white font-medium">
                  Inscrever-se
                </Button>
              </form>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-secondary-800/50 flex flex-col md:flex-row justify-between items-center">
          <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-6 mb-4 md:mb-0">
            <Link
              href="/terms"
              className="text-xs text-secondary-400 hover:text-primary-400 transition-colors"
            >
              Termos de Uso
            </Link>
            <Link
              href="/privacy"
              className="text-xs text-secondary-400 hover:text-primary-400 transition-colors"
            >
              Política de Privacidade
            </Link>
            <Link
              href="/cookies"
              className="text-xs text-secondary-400 hover:text-primary-400 transition-colors"
            >
              Política de Cookies
            </Link>
          </div>

          <div className="flex items-center space-x-2">
            <p className="text-xs text-secondary-500">
              &copy; {new Date().getFullYear()} Partenon. Todos os direitos
              reservados.
            </p>
            <div className="flex items-center text-secondary-400 space-x-3 ml-4">
              <button className="text-xs hover:text-primary-400 transition-colors">
                PT
              </button>
              <span>|</span>
              <button className="text-xs hover:text-primary-400 transition-colors">
                EN
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

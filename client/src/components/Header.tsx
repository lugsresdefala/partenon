import * as React from "react";
import { Link, useLocation } from "wouter";
import { Search, Moon, Sun, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/hooks/useTheme";

export default function Header() {
  const [location] = useLocation();
  const { isDarkMode, toggleTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-secondary-800 bg-secondary-950 text-white">
      <div className="container px-4 sm:px-6 lg:px-8 flex h-16 items-center justify-between">
        {/* Logo */}
        <Link href="/">
          <div className="flex items-center gap-2 hover:opacity-90 transition-opacity">
            <div className="relative flex h-10 w-10 items-center justify-center">
              <img
                src="/logologo.png"
                alt="Partenon Site Logo"
                className="max-h-10 max-w-10 object-scale-down"
              />
            </div>
            <div>
              <h1 className="text-xl font-bold text-primary-300 tracking-tight leading-none">
                Partenon
              </h1>
              <p className="text-xs tracking-wide text-secondary-400 mt-0.5">
                Saúde Reprodutiva Baseada em Evidências
              </p>
            </div>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <Link href="/">
            <span
              className={`text-sm font-medium transition-colors hover:text-primary-400 ${location === "/" ? "text-primary-400" : "text-secondary-300"}`}
            >
              Início
            </span>
          </Link>
          <Link href="/interventions">
            <span
              className={`text-sm font-medium transition-colors hover:text-primary-400 ${location === "/interventions" ? "text-primary-400" : "text-secondary-300"}`}
            >
              Intervenções
            </span>
          </Link>
          <Link href="/guidelines">
            <span
              className={`text-sm font-medium transition-colors hover:text-primary-400 ${location === "/guidelines" ? "text-primary-400" : "text-secondary-300"}`}
            >
              Diretrizes
            </span>
          </Link>
          <Link href="/about">
            <span
              className={`text-sm font-medium transition-colors hover:text-primary-400 ${location === "/about" ? "text-primary-400" : "text-secondary-300"}`}
            >
              Sobre
            </span>
          </Link>
        </nav>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center gap-4">
          <Link href="/interventions">
            <Button
              size="sm"
              variant="outline"
              className="gap-1.5 border-secondary-700 text-secondary-300 hover:bg-secondary-800 hover:text-primary-400"
            >
              <Search className="h-4 w-4" />
              <span>Buscar</span>
            </Button>
          </Link>

          <Button
            variant="ghost"
            size="icon"
            onClick={toggleTheme}
            aria-label={
              isDarkMode ? "Mudar para modo claro" : "Mudar para modo escuro"
            }
            className="text-secondary-400 hover:bg-secondary-800 hover:text-primary-400"
          >
            {isDarkMode ? (
              <Sun className="h-5 w-5" />
            ) : (
              <Moon className="h-5 w-5" />
            )}
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleMenu}
            aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
            className="text-secondary-400 hover:bg-secondary-800 hover:text-primary-400"
          >
            {isMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-secondary-950 border-b border-secondary-800 py-4 px-6">
          <nav className="flex flex-col space-y-4">
            <Link href="/">
              <span
                className={`block py-2 text-sm font-medium ${location === "/" ? "text-primary-400" : "text-secondary-300"}`}
                onClick={toggleMenu}
              >
                Início
              </span>
            </Link>
            <Link href="/interventions">
              <span
                className={`block py-2 text-sm font-medium ${location === "/interventions" ? "text-primary-400" : "text-secondary-300"}`}
                onClick={toggleMenu}
              >
                Intervenções
              </span>
            </Link>
            <Link href="/guidelines">
              <span
                className={`block py-2 text-sm font-medium ${location === "/guidelines" ? "text-primary-400" : "text-secondary-300"}`}
                onClick={toggleMenu}
              >
                Diretrizes
              </span>
            </Link>
            <Link href="/about">
              <span
                className={`block py-2 text-sm font-medium ${location === "/about" ? "text-primary-400" : "text-secondary-300"}`}
                onClick={toggleMenu}
              >
                Sobre
              </span>
            </Link>

            <div className="pt-4 border-t border-secondary-800 flex items-center justify-between">
              <Link href="/interventions">
                <Button
                  size="sm"
                  variant="outline"
                  className="gap-1.5 border-secondary-700 text-secondary-300 hover:bg-secondary-800 hover:text-primary-400"
                  onClick={toggleMenu}
                >
                  <Search className="h-4 w-4" />
                  <span>Buscar</span>
                </Button>
              </Link>

              <Button
                variant="ghost"
                size="icon"
                onClick={toggleTheme}
                aria-label={
                  isDarkMode
                    ? "Mudar para modo claro"
                    : "Mudar para modo escuro"
                }
                className="text-secondary-400 hover:bg-secondary-800 hover:text-primary-400"
              >
                {isDarkMode ? (
                  <Sun className="h-5 w-5" />
                ) : (
                  <Moon className="h-5 w-5" />
                )}
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}

import { useEffect, useRef, useState } from "react";
import { ChevronDown, Share2, ExternalLink, BookOpen } from "lucide-react";
import {
  Intervention,
  getEvidenceLevelColor,
  getRecommendationColor,
} from "@/types";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface InterventionCardProps {
  intervention: Intervention;
  onClick: () => void;
}

export default function InterventionCard({
  intervention,
  onClick,
}: InterventionCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [tiltStyles, setTiltStyles] = useState({});

  const {
    name,
    nameEn,
    category,
    categoryEn,
    evidenceLevel,
    evidenceLevelEn,
    recommendation,
    recommendationEn,
    justification,
    justificationEn,
    specificIndications,
    additionalConsiderations,
  } = intervention;

  const evidenceLevelColor = getEvidenceLevelColor(evidenceLevel);
  const recommendationColor = getRecommendationColor(recommendation);

  // Símbolos de nível de evidência ESHRE
  const evidenceSymbol =
    intervention.evidenceLevelSymbol ||
    (evidenceLevel.toLowerCase().includes("alto")
      ? "⊕⊕⊕⊕"
      : evidenceLevel.toLowerCase().includes("moderado")
        ? "⊕⊕⊕◯"
        : evidenceLevel.toLowerCase().includes("baixo") &&
            !evidenceLevel.toLowerCase().includes("muito")
          ? "⊕⊕◯◯"
          : evidenceLevel.toLowerCase().includes("muito baixo")
            ? "⊕◯◯◯"
            : "");

  // Sistema de iluminação 3D avançado com física melhorada
  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    // Configurações de física para o efeito 3D
    const maxTilt = 4; // graus máximos de inclinação
    const maxShift = 10; // movimento máximo em pixels
    const perspective = 1000; // profundidade da perspectiva
    const transitionSpeed = "0.3s cubic-bezier(0.23, 1, 0.32, 1)"; // transição suavizada

    let glowX = 50;
    let glowY = 50;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = card.getBoundingClientRect();
      // Posição do mouse relativa ao card (0-1)
      const x = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
      const y = Math.max(0, Math.min(1, (e.clientY - rect.top) / rect.height));

      // Valores normalizados para porcentagens
      const xPercent = Math.round(x * 100);
      const yPercent = Math.round(y * 100);

      // Para efeito de iluminação
      glowX = xPercent;
      glowY = yPercent;

      // Cálculo de inclinação 3D baseado na posição do mouse
      // Transforma 0-1 para -maxTilt até +maxTilt
      const tiltX = (y - 0.5) * maxTilt * 2;
      const tiltY = (0.5 - x) * maxTilt * 2;

      // Aplica movimento de shift para efeito parallax
      const shiftX = (0.5 - x) * maxShift * -1;
      const shiftY = (0.5 - y) * maxShift * -1;

      // Atualiza as variáveis CSS
      card.style.setProperty("--mouse-x", `${xPercent}%`);
      card.style.setProperty("--mouse-y", `${yPercent}%`);

      // Configura o estilo 3D
      setTiltStyles({
        transform: `perspective(${perspective}px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) translateZ(0) translate(${shiftX}px, ${shiftY}px)`,
        transition: isHovered ? "none" : transitionSpeed,
      });
    };

    const handleMouseEnter = () => {
      setIsHovered(true);
      card.classList.add("card-hover-active");
      card.style.setProperty("--glow-opacity", "1");
    };

    const handleMouseLeave = () => {
      setIsHovered(false);
      card.classList.remove("card-hover-active");
      // Reset para o centro com animação suave
      setTiltStyles({
        transform:
          "perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(0) translate(0px, 0px)",
        transition: transitionSpeed,
      });
      card.style.setProperty("--mouse-x", "50%");
      card.style.setProperty("--mouse-y", "50%");
      card.style.setProperty("--glow-opacity", "0");
    };

    // Controle de animação para evitar inundação de eventos
    let frameRequest: number;
    const smoothMouseMove = (e: MouseEvent) => {
      cancelAnimationFrame(frameRequest);
      frameRequest = requestAnimationFrame(() => handleMouseMove(e));
    };

    card.addEventListener("mousemove", smoothMouseMove);
    card.addEventListener("mouseenter", handleMouseEnter);
    card.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      cancelAnimationFrame(frameRequest);
      card.removeEventListener("mousemove", smoothMouseMove);
      card.removeEventListener("mouseenter", handleMouseEnter);
      card.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [isHovered]);

  return (
    <div
      ref={cardRef}
      onClick={onClick}
      className="interactive-card rounded-xl shadow-md hover:shadow-xl border border-secondary-100/50 dark:border-secondary-800/50 hover:border-primary-300/70 dark:hover:border-primary-700/40 bg-white dark:bg-secondary-900 relative will-change-transform overflow-hidden"
      style={{
        ...tiltStyles,
        transition:
          "transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease",
      }}
    >
      {/* Fundo com efeito de profundidade em camadas */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-black/5 dark:from-white/5 dark:to-black/20 opacity-0 transition-opacity duration-300 pointer-events-none card-hover-active:opacity-100"></div>

      {/* Efeitos 3D avançados com iluminação ambiente dinâmica */}
      <div
        className="absolute inset-0 pointer-events-none z-[1] opacity-0 card-hover-active:opacity-100 transition-opacity duration-300"
        style={{
          background: `radial-gradient(
            800px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), 
            rgba(14, 165, 233, 0.1), 
            transparent 40%
          )`,
          opacity: "var(--glow-opacity, 0)",
        }}
      ></div>

      {/* Efeito de brilho para cantos */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-100/20 via-transparent to-primary-300/10 dark:from-primary-900/30 dark:to-primary-800/10 opacity-0 card-hover-active:opacity-30 transition-opacity duration-500 pointer-events-none"></div>

      <div className="p-6 relative z-10">
        {/* Barra lateral dinâmica indicativa */}
        <div className="absolute left-0 top-0 bottom-0 w-1.5 rounded-full bg-gradient-to-b from-primary-300 via-primary-500 to-primary-300 dark:from-primary-400 dark:via-primary-600 dark:to-primary-400 opacity-70 transition-all duration-300 card-hover-active:opacity-100 card-hover-active:w-2"></div>

        <div className="flex justify-between items-center mb-4">
          {/* Badge de nível de evidência com microinteração */}
          <div className="relative group">
            <span
              className={cn(
                "text-white text-xs px-3 py-1 rounded-full font-medium shimmer-effect inline-flex items-center gap-1 transform group-hover:shadow-md",
                "transition-transform transition-shadow duration-300",
                {
                  "bg-evidence-high": evidenceLevelColor === "#15803d",
                  "bg-evidence-moderate": evidenceLevelColor === "#0891b2",
                  "bg-evidence-low": evidenceLevelColor === "#ca8a04",
                  "bg-evidence-none": evidenceLevelColor === "#b91c1c",
                },
              )}
            >
              {evidenceSymbol && <span className="mr-1">{evidenceSymbol}</span>}
              {evidenceLevel}
              {evidenceLevelEn && evidenceLevelEn !== evidenceLevel && (
                <span className="opacity-80">/ {evidenceLevelEn}</span>
              )}
            </span>
            {/* Tooltip sobre nível de evidência - aparece no hover */}
            <div className="absolute left-0 top-full mt-1 z-50 bg-white dark:bg-secondary-800 p-2 rounded-md text-xs shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap border border-secondary-100 dark:border-secondary-700">
              Nível de evidência científica
            </div>
          </div>

          {/* Badge de recomendação com microinteração */}
          <div className="relative group">
            <span
              className={cn(
                "text-xs font-medium border rounded-full px-3 py-1 shadow-sm transform hover:shadow-md inline-flex items-center gap-1",
                "transition-transform transition-shadow transition-border duration-300",
                {
                  "text-primary-600 border-primary-600/50 hover:border-primary-600 bg-primary-50/30 dark:bg-primary-900/20":
                    recommendationColor === "primary",
                  "text-evidence-high border-evidence-high/50 hover:border-evidence-high bg-evidence-high/10":
                    recommendationColor === "high",
                  "text-evidence-moderate border-evidence-moderate/50 hover:border-evidence-moderate bg-evidence-moderate/10":
                    recommendationColor === "moderate",
                  "text-evidence-low border-evidence-low/50 hover:border-evidence-low bg-evidence-low/10":
                    recommendationColor === "low",
                  "text-evidence-none border-evidence-none/50 hover:border-evidence-none bg-evidence-none/10":
                    recommendationColor === "none",
                },
              )}
            >
              {recommendation}
              {recommendationEn && recommendationEn !== recommendation && (
                <span className="opacity-80">/ {recommendationEn}</span>
              )}
            </span>
            {/* Tooltip sobre recomendação - aparece no hover */}
            <div className="absolute right-0 top-full mt-1 z-50 bg-white dark:bg-secondary-800 p-2 rounded-md text-xs shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap border border-secondary-100 dark:border-secondary-700">
              Recomendação clínica atual
            </div>
          </div>
        </div>

        {/* Título principal com animação de hover */}
        <h4 className="text-lg font-semibold text-secondary-800 dark:text-white mb-1 group-hover:text-primary-600 transition-all duration-300">
          {name}
        </h4>
        {nameEn && nameEn !== name && (
          <h5 className="text-sm text-secondary-500 dark:text-secondary-400 mb-2 italic">
            {nameEn}
          </h5>
        )}

        {/* Categoria com ícone */}
        <p className="text-secondary-700 dark:text-secondary-300 text-sm mb-3 font-medium flex items-center">
          <BookOpen className="h-3.5 w-3.5 mr-1.5 text-secondary-400 dark:text-secondary-500" />
          {category}
          {categoryEn && categoryEn !== category && (
            <span className="text-secondary-500 dark:text-secondary-400 ml-1 opacity-80">
              / {categoryEn}
            </span>
          )}
        </p>

        {/* Conteúdo principal com destaque visual */}
        <div className="mb-4 relative">
          {/* Linha decorativa responsiva */}
          <div className="absolute -left-6 top-0 bottom-0 w-[3px] bg-gradient-to-b from-transparent via-primary-300/30 to-transparent dark:via-primary-500/20"></div>

          {/* Descrição principal */}
          <div className="relative pl-0.5">
            <p className="text-secondary-700 dark:text-secondary-200 line-clamp-2">
              {justification}
            </p>
            {justificationEn && justificationEn !== justification && (
              <p className="text-secondary-500 dark:text-secondary-400 text-sm line-clamp-2 italic mt-1">
                {justificationEn}
              </p>
            )}

            {/* Indicações específicas - visíveis apenas com hover */}
            {specificIndications && (
              <div className="mt-2 pt-2 border-t border-secondary-100/60 dark:border-secondary-800/60 text-sm overflow-hidden max-h-0 opacity-0 group-hover:max-h-20 group-hover:opacity-100 transition-all duration-500">
                <span className="font-medium text-primary-700 dark:text-primary-400">
                  Indicações:{" "}
                </span>
                <span className="text-secondary-600 dark:text-secondary-300">
                  {specificIndications}
                </span>
              </div>
            )}
          </div>
        </div>

        {/* Barra de ações inferior com animações */}
        <div className="flex justify-between items-center mt-3 pt-3 border-t border-secondary-100/40 dark:border-secondary-800/40">
          <Button
            variant="ghost"
            className="text-primary-600 dark:text-primary-400 hover:text-primary-700 hover:bg-primary-50/50 dark:hover:bg-primary-900/20 text-sm font-medium flex items-center gap-1.5 px-3 py-2 rounded-lg button-animated shimmer-premium"
            onClick={onClick}
          >
            Ver Detalhes
            <ChevronDown className="h-4 w-4 transition-transform duration-300 group-hover:rotate-180" />
          </Button>

          <Button
            variant="ghost"
            className="text-secondary-600 dark:text-secondary-400 hover:text-secondary-700 hover:bg-secondary-50/50 dark:hover:bg-secondary-800/50 text-sm font-medium flex items-center gap-1.5 px-3 py-2 rounded-lg button-animated"
            onClick={(e) => {
              e.stopPropagation();
              // Share functionality
              if (navigator.share) {
                navigator.share({
                  title: name,
                  text: `${name} - ${evidenceLevel} - ${recommendation}`,
                  url: window.location.href,
                });
              }
            }}
          >
            <Share2 className="h-4 w-4" />
            Compartilhar
          </Button>
        </div>

        {/* Efeito de sombra interna */}
        <div className="absolute inset-0 rounded-xl opacity-0 shadow-inner card-hover-active:opacity-20 pointer-events-none transition-opacity duration-300 dark:shadow-secondary-300/5"></div>

        {/* Efeito de borda quando hover */}
        <div className="absolute inset-0 rounded-xl border border-primary-300/0 card-hover-active:border-primary-300/30 dark:card-hover-active:border-primary-700/30 pointer-events-none transition-all duration-300"></div>
      </div>
    </div>
  );
}

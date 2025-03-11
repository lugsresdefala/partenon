import { X, Download, Share2 } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  Intervention,
  getEvidenceLevelColor,
  getRecommendationColor,
} from "@/types";
import { cn } from "@/lib/utils";
import { useState, useEffect } from "react";

interface DetailedInterventionModalProps {
  intervention: Intervention;
  onClose: () => void;
}

export default function DetailedInterventionModal({
  intervention,
  onClose,
}: DetailedInterventionModalProps) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsOpen(true);
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    onClose();
  };

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
    specificIndicationsEn,
    additionalConsiderations,
    additionalConsiderationsEn,
  } = intervention;

  const evidenceLevelColor = getEvidenceLevelColor(evidenceLevel);
  const recommendationColor = getRecommendationColor(recommendation);

  const handleExport = () => {
    const content = `
Partenon - Detalhes da Intervenção / Intervention Details

Nome / Name: ${name}${nameEn ? ` / ${nameEn}` : ""}
Categoria / Category: ${category}${categoryEn ? ` / ${categoryEn}` : ""}
Nível de Evidência / Evidence Level: ${evidenceLevel}${evidenceLevelEn ? ` / ${evidenceLevelEn}` : ""}
Recomendação / Recommendation: ${recommendation}${recommendationEn ? ` / ${recommendationEn}` : ""}

Justificativa Científica / Scientific Justification:
${justification}
${justificationEn ? `\n${justificationEn}` : ""}

${specificIndications ? `Indicações Específicas / Specific Indications:\n${specificIndications}${specificIndicationsEn ? `\n${specificIndicationsEn}` : ""}\n` : ""}
${additionalConsiderations ? `Considerações Adicionais / Additional Considerations:\n${additionalConsiderations}${additionalConsiderationsEn ? `\n${additionalConsiderationsEn}` : ""}` : ""}

Fonte / Source: Partenon - Recomendações Baseadas em Evidências para Medicina Reprodutiva
Gerado em / Generated on: ${new Date().toLocaleDateString()}
    `;

    const blob = new Blob([content], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `${name.replace(/\s+/g, "_")}_details.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: name,
        text: `${name} - ${evidenceLevel} - ${recommendation}`,
        url: window.location.href,
      });
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto bg-white border-none shadow-lg dark:bg-black dark:text-white">
        <DialogHeader>
          <div className="flex items-center justify-between">
            <DialogTitle className="text-xl font-bold text-black dark:text-white">
              {name}
              {nameEn && (
                <span className="block text-base text-secondary-800 dark:text-gray-300 mt-1 font-medium">
                  {nameEn}
                </span>
              )}
            </DialogTitle>
            <Button
              variant="ghost"
              size="icon"
              onClick={handleClose}
              className="text-secondary-700 dark:text-secondary-300 hover:bg-secondary-100 dark:hover:bg-secondary-800"
            >
              <X className="h-5 w-5" />
            </Button>
          </div>
        </DialogHeader>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div>
            <h4 className="text-sm font-bold text-black dark:text-gray-300 mb-1">
              Categoria / Category
            </h4>
            <p className="text-black dark:text-white font-medium">
              {category}
              {categoryEn && (
                <span className="block text-sm text-black dark:text-gray-300 mt-1">
                  {categoryEn}
                </span>
              )}
            </p>
          </div>
          <div>
            <h4 className="text-sm font-bold text-black dark:text-gray-300 mb-1">
              Nível de Evidência / Evidence Level
            </h4>
            <div className="flex items-center">
              <span
                style={{
                  backgroundColor: evidenceLevelColor,
                  boxShadow: "0 2px 4px rgba(0,0,0,0.3)",
                }}
                className="text-white text-xs px-3 py-1.5 rounded-full font-bold"
              >
                {evidenceLevel}
                {evidenceLevelEn &&
                  evidenceLevelEn !== evidenceLevel &&
                  ` / ${evidenceLevelEn}`}
              </span>
            </div>
          </div>
          <div>
            <h4 className="text-sm font-bold text-black dark:text-gray-300 mb-1">
              Recomendação / Recommendation
            </h4>
            <div className="flex items-center">
              <span
                style={{
                  borderColor: recommendationColor,
                  color: recommendationColor,
                  borderWidth: "2px",
                  backgroundColor: "white",
                  boxShadow: "0 2px 4px rgba(0,0,0,0.2)",
                }}
                className="text-xs font-bold border rounded-full px-3 py-1.5 dark:bg-gray-900"
              >
                {recommendation}
                {recommendationEn &&
                  recommendationEn !== recommendation &&
                  ` / ${recommendationEn}`}
              </span>
            </div>
          </div>
          <div>
            <h4 className="text-sm font-bold text-black dark:text-gray-300 mb-1">
              Indicações Específicas / Specific Indications
            </h4>
            <p className="text-black dark:text-white">
              {specificIndications || "Nenhuma especificada"}
              {specificIndicationsEn &&
                specificIndicationsEn !== specificIndications && (
                  <span className="block text-sm text-black dark:text-gray-300 mt-1">
                    {specificIndicationsEn}
                  </span>
                )}
            </p>
          </div>
        </div>

        <div className="mb-6">
          <h4 className="text-sm font-bold text-black dark:text-gray-300 mb-2">
            Justificativa Científica / Scientific Justification
          </h4>
          <p className="text-black dark:text-white mb-4">{justification}</p>
          {justificationEn && justificationEn !== justification && (
            <p className="text-black dark:text-gray-300 text-sm italic mb-2">
              {justificationEn}
            </p>
          )}
        </div>

        {additionalConsiderations && (
          <div className="mb-6">
            <h4 className="text-sm font-bold text-black dark:text-gray-300 mb-2">
              Considerações Adicionais / Additional Considerations
            </h4>
            <p className="text-black dark:text-white mb-4">
              {additionalConsiderations}
            </p>
            {additionalConsiderationsEn &&
              additionalConsiderationsEn !== additionalConsiderations && (
                <p className="text-black dark:text-gray-300 text-sm italic mb-2">
                  {additionalConsiderationsEn}
                </p>
              )}
          </div>
        )}

        <div className="mb-6">
          <h4 className="text-sm font-bold text-black dark:text-gray-300 mb-2">
            Diretrizes Relacionadas / Related Guidelines
          </h4>
          <div className="bg-gray-100 p-4 rounded-md border-2 border-gray-300 shadow-md dark:bg-gray-900 dark:border-gray-700">
            <p className="text-black dark:text-white text-sm mb-2 font-bold">
              ESHRE guideline: recurrent pregnancy loss (2022)
            </p>
            <p className="text-black dark:text-gray-300 text-sm">
              European Society of Human Reproduction and Embryology
            </p>
          </div>
        </div>

        <Separator className="bg-gray-300 dark:bg-gray-700" />

        <div className="pt-4 flex justify-between">
          <Button
            variant="outline"
            className="border-2 bg-white text-black dark:bg-gray-900 dark:text-white dark:border-gray-700 hover:bg-gray-100 hover:text-black dark:hover:bg-gray-800 flex items-center gap-1 font-medium"
            onClick={handleExport}
          >
            <Download className="h-5 w-5" />
            Exportar Detalhes
          </Button>
          <Button
            variant="outline"
            className="border-2 bg-white text-black dark:bg-gray-900 dark:text-white dark:border-gray-700 hover:bg-gray-100 hover:text-black dark:hover:bg-gray-800 flex items-center gap-1 font-medium"
            onClick={handleShare}
          >
            <Share2 className="h-5 w-5" />
            Compartilhar
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}

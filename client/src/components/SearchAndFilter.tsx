import { Search, Filter, BookOpen, ClipboardList } from "lucide-react";
import { useContext } from "react";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { categories, evidenceLevels } from "@/data/interventions";
import { useState } from "react";

interface SearchAndFilterProps {
  onSearch: (search: string) => void;
  onCategoryChange: (category: string) => void;
  onEvidenceLevelChange: (level: string) => void;
  searchValue: string;
  categoryValue: string;
  evidenceLevelValue: string;
}

export default function SearchAndFilter({
  onSearch,
  onCategoryChange,
  onEvidenceLevelChange,
  searchValue,
  categoryValue,
  evidenceLevelValue,
}: SearchAndFilterProps) {
  const [language, setLanguage] = useState<"pt" | "en">("pt");
  const [searchType, setSearchType] = useState<"intervention" | "condition">(
    "intervention",
  );

  // Translations
  const translations = {
    pt: {
      title: "Pesquisar Evidências",
      description:
        "Busque intervenções ou condições clínicas e filtre por categoria e nível de evidência.",
      searchInterventions: "Buscar Intervenções",
      searchConditions: "Buscar por Condição",
      searchInterventionsPlaceholder: "Digite o nome da intervenção...",
      searchConditionsPlaceholder: "Digite a condição clínica...",
      category: "Categoria",
      evidenceLevel: "Nível de Evidência",
      selectCategory: "Selecionar Categoria",
      selectEvidenceLevel: "Selecionar Nível",
    },
    en: {
      title: "Search Evidence",
      description:
        "Search for interventions or clinical conditions and filter by category and evidence level.",
      searchInterventions: "Search Interventions",
      searchConditions: "Search by Condition",
      searchInterventionsPlaceholder: "Type intervention name...",
      searchConditionsPlaceholder: "Type clinical condition...",
      category: "Category",
      evidenceLevel: "Evidence Level",
      selectCategory: "Select Category",
      selectEvidenceLevel: "Select Level",
    },
  };

  const t = translations[language];

  return (
    <section className="mb-12 px-4 sm:px-0" id="search-section">
      <div className="max-w-6xl mx-auto">
        <div className="glass-card rounded-xl shadow-lg p-6 md:p-8 border border-secondary-100 dark:glass-card-dark">
          <div className="flex items-center space-x-2 mb-6">
            <div className="h-8 w-1 bg-primary-500 rounded-full"></div>
            <h3 className="text-2xl font-bold text-secondary-800 dark:text-white">
              {t.title}
            </h3>
          </div>

          <p className="text-secondary-600 dark:text-secondary-300 mb-6">
            {t.description}
          </p>

          <Tabs defaultValue="intervention" className="mb-6">
            <TabsList className="grid grid-cols-2 mb-6">
              <TabsTrigger
                value="intervention"
                onClick={() => setSearchType("intervention")}
                className="data-[state=active]:bg-primary-50 data-[state=active]:text-primary-600 dark:data-[state=active]:bg-primary-900 dark:data-[state=active]:text-primary-300"
              >
                <ClipboardList className="h-4 w-4 mr-2" />
                {t.searchInterventions}
              </TabsTrigger>
              <TabsTrigger
                value="condition"
                onClick={() => setSearchType("condition")}
                className="data-[state=active]:bg-primary-50 data-[state=active]:text-primary-600 dark:data-[state=active]:bg-primary-900 dark:data-[state=active]:text-primary-300"
              >
                <BookOpen className="h-4 w-4 mr-2" />
                {t.searchConditions}
              </TabsTrigger>
            </TabsList>

            <TabsContent value="intervention" className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
                <div className="relative md:col-span-6">
                  <div className="relative">
                    <Input
                      type="text"
                      placeholder={t.searchInterventionsPlaceholder}
                      value={searchValue}
                      onChange={(e) => onSearch(e.target.value)}
                      className="w-full pr-10 glass-input border-primary-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-100 dark:border-secondary-700"
                    />
                    <Search className="h-5 w-5 absolute right-3 top-2.5 text-secondary-400 dark:text-secondary-500" />
                  </div>
                </div>

                <div className="md:col-span-3">
                  <Select
                    value={categoryValue}
                    onValueChange={onCategoryChange}
                  >
                    <SelectTrigger className="w-full glass-select border-primary-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-100 dark:border-secondary-700">
                      <SelectValue placeholder={t.selectCategory} />
                    </SelectTrigger>
                    <SelectContent className="glass dark:glass-dark">
                      {categories.map((category) => (
                        <SelectItem key={category.value} value={category.value}>
                          {language === "pt"
                            ? category.labelPt || category.label
                            : category.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="md:col-span-3">
                  <Select
                    value={evidenceLevelValue}
                    onValueChange={onEvidenceLevelChange}
                  >
                    <SelectTrigger className="w-full glass-select border-primary-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-100 dark:border-secondary-700">
                      <SelectValue placeholder={t.selectEvidenceLevel} />
                    </SelectTrigger>
                    <SelectContent className="glass dark:glass-dark">
                      {evidenceLevels.map((level) => (
                        <SelectItem key={level.value} value={level.value}>
                          {language === "pt"
                            ? level.labelPt || level.label
                            : level.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="condition" className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
                <div className="relative md:col-span-6">
                  <div className="relative">
                    <Input
                      type="text"
                      placeholder={t.searchConditionsPlaceholder}
                      value={searchValue}
                      onChange={(e) => onSearch(e.target.value)}
                      className="w-full pr-10 glass-input border-primary-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-100 dark:border-secondary-700"
                    />
                    <Search className="h-5 w-5 absolute right-3 top-2.5 text-secondary-400 dark:text-secondary-500" />
                  </div>
                </div>

                <div className="md:col-span-3">
                  <Select
                    value={categoryValue}
                    onValueChange={onCategoryChange}
                  >
                    <SelectTrigger className="w-full glass-select border-primary-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-100 dark:border-secondary-700">
                      <SelectValue placeholder={t.selectCategory} />
                    </SelectTrigger>
                    <SelectContent className="glass dark:glass-dark">
                      {categories.map((category) => (
                        <SelectItem key={category.value} value={category.value}>
                          {language === "pt"
                            ? category.labelPt || category.label
                            : category.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="md:col-span-3">
                  <Select
                    value={evidenceLevelValue}
                    onValueChange={onEvidenceLevelChange}
                  >
                    <SelectTrigger className="w-full glass-select border-primary-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-100 dark:border-secondary-700">
                      <SelectValue placeholder={t.selectEvidenceLevel} />
                    </SelectTrigger>
                    <SelectContent className="glass dark:glass-dark">
                      {evidenceLevels.map((level) => (
                        <SelectItem key={level.value} value={level.value}>
                          {language === "pt"
                            ? level.labelPt || level.label
                            : level.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </TabsContent>
          </Tabs>

          <div className="flex items-center mt-4 pt-4 border-t border-secondary-200 dark:border-secondary-700">
            <Filter className="h-4 w-4 text-secondary-500 mr-2" />
            <span className="text-sm text-secondary-500 dark:text-secondary-400">
              {language === "pt"
                ? "Filtrando por critérios escolhidos"
                : "Filtering by selected criteria"}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

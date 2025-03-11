import { useState } from "react";

export const useLanguage = () => {
  const [language, setLanguage] = useState("pt");

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "pt" ? "en" : "pt"));
  };

  return { language, toggleLanguage };
};

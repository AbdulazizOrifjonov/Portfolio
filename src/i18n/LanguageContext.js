import React, { createContext, useContext, useMemo, useState } from "react";
import { translations } from "./translations";

const LanguageContext = createContext(null);

function safeGet(obj, path) {
  return path
    .split(".")
    .reduce(
      (acc, key) => (acc && acc[key] !== undefined ? acc[key] : undefined),
      obj
    );
}

export function LanguageProvider({ children }) {
  const initial = (() => {
    try {
      return localStorage.getItem("lang") || "uz";
    } catch {
      return "uz";
    }
  })();

  const [lang, setLangState] = useState(initial);

  const setLang = (next) => {
    setLangState(next);
    try {
      localStorage.setItem("lang", next);
    } catch {
      // ignore
    }
  };

  const t = (key, fallback) => {
    const pack = translations[lang] || translations.uz;
    const value = safeGet(pack, key);
    if (value !== undefined) return value;

    const enValue = safeGet(translations.en, key);
    if (enValue !== undefined) return enValue;

    return fallback !== undefined ? fallback : key;
  };

  const value = useMemo(() => ({ lang, setLang, t }), [lang]);

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used inside LanguageProvider");
  return ctx;
}

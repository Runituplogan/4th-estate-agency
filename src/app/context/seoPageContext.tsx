"use client";
import { createContext, useContext } from "react";
import { seoPageData } from "../data/seo_data";

interface SeoPageContextType { seoPageData: any; }
const SeoPageContext = createContext<SeoPageContextType | undefined>(undefined);

export function SeoPageProvider({ children }: { children: React.ReactNode }) {
  return (
    <SeoPageContext.Provider value={{ seoPageData }}>
      {children}
    </SeoPageContext.Provider>
  );
}
export function useSeoPage() {
  const context = useContext(SeoPageContext);
  if (!context) throw new Error("useSeoPage must be used within a SeoPageProvider");
  return context;
}

"use client";
import { createContext, useContext } from "react";
import { socialPageData } from "../data/social_data";

interface SocialsPageContextType { socialsPageData: any; }
const SocialsPageContext = createContext<SocialsPageContextType | undefined>(undefined);

export function SocialsPageProvider({ children }: { children: React.ReactNode }) {
  return (
    <SocialsPageContext.Provider value={{ socialsPageData: socialPageData }}>
      {children}
    </SocialsPageContext.Provider>
  );
}
export function useSocialsPage() {
  const context = useContext(SocialsPageContext);
  if (!context) throw new Error("useSocialsPage must be used within a SocialsPageProvider");
  return context;
}

"use client";
import { createContext, useContext } from "react";
import { pressPageData } from "../data/press_data";

interface PressPageContextType { pressPageData: any; }
const PressPageContext = createContext<PressPageContextType | undefined>(undefined);

export function PressPageProvider({ children }: { children: React.ReactNode }) {
  return (
    <PressPageContext.Provider value={{ pressPageData }}>
      {children}
    </PressPageContext.Provider>
  );
}
export function usePressPage() {
  const context = useContext(PressPageContext);
  if (!context) throw new Error("usePressPage must be used within a PressPageProvider");
  return context;
}

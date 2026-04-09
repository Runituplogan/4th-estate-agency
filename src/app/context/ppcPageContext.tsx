"use client";
import { createContext, useContext } from "react";
import { ppcPageData } from "../data/ppc_data";

interface PPCPageContextType { ppcPageData: any; }
const PPCPageContext = createContext<PPCPageContextType | undefined>(undefined);

export function PPCPageProvider({ children }: { children: React.ReactNode }) {
  return (
    <PPCPageContext.Provider value={{ ppcPageData }}>
      {children}
    </PPCPageContext.Provider>
  );
}
export function usePPCPage() {
  const context = useContext(PPCPageContext);
  if (!context) throw new Error("usePPCPage must be used within a PPCPageProvider");
  return context;
}

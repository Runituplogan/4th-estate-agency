"use client";
import { createContext, useContext } from "react";
import { brandingPageData } from "../data/branding_data";

interface BrandingPageContextType { brandingPageData: any; }
const BrandingPageContext = createContext<BrandingPageContextType | undefined>(undefined);

export function BrandingPageProvider({ children }: { children: React.ReactNode }) {
  return (
    <BrandingPageContext.Provider value={{ brandingPageData }}>
      {children}
    </BrandingPageContext.Provider>
  );
}
export function useBrandingPage() {
  const context = useContext(BrandingPageContext);
  if (!context) throw new Error("useBrandingPage must be used within a BrandingPageProvider");
  return context;
}

"use client";

import { createContext, useContext } from "react";
import { footerPageData } from "../data/footer_data";

interface FooterPageContextType {
  footerPageData: any;
}

const FooterPageContext = createContext<FooterPageContextType | undefined>(
  undefined
);

export function FooterPageProvider({ children }: { children: React.ReactNode }) {
  return (
    <FooterPageContext.Provider value={{ footerPageData }}>
      {children}
    </FooterPageContext.Provider>
  );
}

export function useFooterPage() {
  const context = useContext(FooterPageContext);
  if (!context) {
    throw new Error("useFooterPage must be used within a FooterPageProvider");
  }
  return context;
}

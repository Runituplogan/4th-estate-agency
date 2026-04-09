"use client";

import { createContext, useContext } from "react";
import { aboutPageData } from "../data/about_data";

interface AboutPageContextType {
  aboutPageData: any;
}

const AboutPageContext = createContext<AboutPageContextType | undefined>(
  undefined
);

export function AboutPageProvider({ children }: { children: React.ReactNode }) {
  return (
    <AboutPageContext.Provider value={{ aboutPageData }}>
      {children}
    </AboutPageContext.Provider>
  );
}

export function useAboutPage() {
  const context = useContext(AboutPageContext);
  if (!context) {
    throw new Error("useAboutPage must be used within a AboutPageProvider");
  }
  return context;
}

"use client";
import { createContext, useContext } from "react";
import { webDevPageData } from "../data/webdev_data";

interface WebDevelopmentPageContextType { webDevelopmentPageData: any; }
const WebDevelopmentPageContext = createContext<WebDevelopmentPageContextType | undefined>(undefined);

export function WebDevelopmentPageProvider({ children }: { children: React.ReactNode }) {
  return (
    <WebDevelopmentPageContext.Provider value={{ webDevelopmentPageData: webDevPageData }}>
      {children}
    </WebDevelopmentPageContext.Provider>
  );
}
export function useWebDevelopmentPage() {
  const context = useContext(WebDevelopmentPageContext);
  if (!context) throw new Error("useWebDevelopmentPage must be used within a WebDevelopmentPageProvider");
  return context;
}

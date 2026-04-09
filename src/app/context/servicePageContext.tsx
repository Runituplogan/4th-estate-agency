"use client";
import { createContext, useContext } from "react";
import { servicesPageData } from "../data/services_data";

interface ServicePageContextType { servicePageData: any; }
const ServicePageContext = createContext<ServicePageContextType | undefined>(undefined);

export function ServicePageProvider({ children }: { children: React.ReactNode }) {
  return (
    <ServicePageContext.Provider value={{ servicePageData: servicesPageData }}>
      {children}
    </ServicePageContext.Provider>
  );
}
export function useServicePage() {
  const context = useContext(ServicePageContext);
  if (!context) throw new Error("useServicePage must be used within a ServicePageProvider");
  return context;
}

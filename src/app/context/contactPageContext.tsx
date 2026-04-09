"use client";
import { createContext, useContext } from "react";
import { contactPageData } from "../data/contact_data";

interface ContactPageContextType { contactPageData: any; }
const ContactPageContext = createContext<ContactPageContextType | undefined>(undefined);

export function ContactPageProvider({ children }: { children: React.ReactNode }) {
  return (
    <ContactPageContext.Provider value={{ contactPageData }}>
      {children}
    </ContactPageContext.Provider>
  );
}
export function useContactPage() {
  const context = useContext(ContactPageContext);
  if (!context) throw new Error("useContactPage must be used within a ContactPageProvider");
  return context;
}

"use client";

import { createContext, useContext } from "react";
import { useQuery } from "@tanstack/react-query";
import Preloader from "../components/preloader";
import { getDynamicPageData } from "../request/fetchDynamicPages";

interface ContactPageContextType {
  contactPageData: any;
}

const ContactPageContext = createContext<ContactPageContextType | undefined>(
  undefined
);

export function ContactPageProvider({ children }: { children: React.ReactNode }) {
  const {
    data: contactPageData,
    isLoading: isLoadingContactdata,
    error: errorPageData,
  } = useQuery<any>({
    queryKey: ["contactPageData", "contact"],
    queryFn: () => getDynamicPageData("contact"),
    initialData: { title: "", description: "", image: "" },
  });

  // Handle errors
  if (errorPageData) {
    return (<div>Something went wrong</div>);
  }

  return (
    <ContactPageContext.Provider
      value={{
        contactPageData: contactPageData || { title: "", description: "", image: "" },
      }}
    >
      {!isLoadingContactdata ? children : <Preloader />}
    </ContactPageContext.Provider>
  );
}
export function useContactPage() {
  const context = useContext(ContactPageContext);
  if (!context) {
    throw new Error("useContactPage must be used within a ContactPageProvider");
  }
  return context;
}

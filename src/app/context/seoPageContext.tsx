"use client";

import { createContext, useContext } from "react";
import { useQuery } from "@tanstack/react-query";
import Preloader from "../components/preloader";
import { getDynamicPageData } from "../request/fetchDynamicPages";

interface SeoPageContextType {
  seoPageData: any;
}

const SeoPageContext = createContext<SeoPageContextType | undefined>(
  undefined
);

export function SeoPageProvider({ children }: { children: React.ReactNode }) {
  const {
    data: seoPageData,
    isLoading: isLoadingSeodata,
    error: errorPageData,
  } = useQuery<any>({
    queryKey: ["seoPageData", "about-one"],
    queryFn: () => getDynamicPageData("about-one"),
    initialData: { title: "", description: "", image: "" },
  });

  // Handle errors
  if (errorPageData) {
    return (<div>Something went wrong</div>);
  }

  return (
    <SeoPageContext.Provider
      value={{
        seoPageData: seoPageData || { title: "", description: "", image: "" },
      }}
    >
      {!isLoadingSeodata ? children : <Preloader />}
    </SeoPageContext.Provider>
  );
}
export function useSeoPage() {
  const context = useContext(SeoPageContext);
  if (!context) {
    throw new Error("useSeoPage must be used within a SeoPageProvider");
  }
  return context;
}

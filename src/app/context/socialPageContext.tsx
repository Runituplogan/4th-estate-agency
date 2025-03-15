"use client";

import { createContext, useContext } from "react";
import { useQuery } from "@tanstack/react-query";
import Preloader from "../components/preloader";
import { getDynamicPageData } from "../request/fetchDynamicPages";

interface SocialsPageContextType {
  socialsPageData: any;
}

const SocialsPageContext = createContext<SocialsPageContextType | undefined>(
  undefined
);

export function SocialsPageProvider({ children }: { children: React.ReactNode }) {
  const {
    data: socialsPageData,
    isLoading: isLoadingSocialsdata,
    error: errorPageData,
  } = useQuery<any>({
    queryKey: ["socialsPageData", "about-five"],
    queryFn: () => getDynamicPageData("about-five"),
    initialData: { title: "", description: "", image: "" },
  });

  // Handle errors
  if (errorPageData) {
    return (<div>Something went wrong</div>);
  }

  return (
    <SocialsPageContext.Provider
      value={{
        socialsPageData: socialsPageData || { title: "", description: "", image: "" },
      }}
    >
      {!isLoadingSocialsdata ? children : <Preloader />}
    </SocialsPageContext.Provider>
  );
}
export function useSocialsPage() {
  const context = useContext(SocialsPageContext);
  if (!context) {
    throw new Error("useSocialsPage must be used within a SocialsPageProvider");
  }
  return context;
}

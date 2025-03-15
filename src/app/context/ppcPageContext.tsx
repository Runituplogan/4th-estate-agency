"use client";

import { createContext, useContext } from "react";
import { useQuery } from "@tanstack/react-query";
import Preloader from "../components/preloader";
import { getDynamicPageData } from "../request/fetchDynamicPages";

interface PPCPageContextType {
  ppcPageData: any;
}

const PPCPageContext = createContext<PPCPageContextType | undefined>(
  undefined
);

export function PPCPageProvider({ children }: { children: React.ReactNode }) {
  const {
    data: ppcPageData,
    isLoading: isLoadingPPCdata,
    error: errorPageData,
  } = useQuery<any>({
    queryKey: ["ppcPageData", "about-three"],
    queryFn: () => getDynamicPageData("about-three"),
    initialData: { title: "", description: "", image: "" },
  });

  // Handle errors
  if (errorPageData) {
    return (<div>Something went wrong</div>);
  }

  return (
    <PPCPageContext.Provider
      value={{
        ppcPageData: ppcPageData || { title: "", description: "", image: "" },
      }}
    >
      {!isLoadingPPCdata ? children : <Preloader />}
    </PPCPageContext.Provider>
  );
}
export function usePPCPage() {
  const context = useContext(PPCPageContext);
  if (!context) {
    throw new Error("usePPCPage must be used within a PPCPageProvider");
  }
  return context;
}

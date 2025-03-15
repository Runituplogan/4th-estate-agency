"use client";

import { createContext, useContext } from "react";
import { useQuery } from "@tanstack/react-query";
import Preloader from "../components/preloader";
import { getDynamicPageData } from "../request/fetchDynamicPages";

interface PressPageContextType {
  pressPageData: any;
}

const PressPageContext = createContext<PressPageContextType | undefined>(
  undefined
);

export function PressPageProvider({ children }: { children: React.ReactNode }) {
  const {
    data: pressPageData,
    isLoading: isLoadingPressdata,
    error: errorPageData,
  } = useQuery<any>({
    queryKey: ["pressPageData", "about-four"],
    queryFn: () => getDynamicPageData("about-four"),
    initialData: { title: "", description: "", image: "" },
  });

  // Handle errors
  if (errorPageData) {
    return (<div>Something went wrong</div>);
  }

  return (
    <PressPageContext.Provider
      value={{
        pressPageData: pressPageData || { title: "", description: "", image: "" },
      }}
    >
      {!isLoadingPressdata ? children : <Preloader />}
    </PressPageContext.Provider>
  );
}
export function usePressPage() {
  const context = useContext(PressPageContext);
  if (!context) {
    throw new Error("usePressPage must be used within a PressPageProvider");
  }
  return context;
}

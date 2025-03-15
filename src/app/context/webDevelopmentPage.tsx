"use client";

import { createContext, useContext } from "react";
import { useQuery } from "@tanstack/react-query";
import Preloader from "../components/preloader";
import { getDynamicPageData } from "../request/fetchDynamicPages";

interface WebDevelopmentPageContextType {
  webDevelopmentPageData: any;
}

const WebDevelopmentPageContext = createContext<WebDevelopmentPageContextType | undefined>(
  undefined
);

export function WebDevelopmentPageProvider({ children }: { children: React.ReactNode }) {
  const {
    data: webDevelopmentPageData,
    isLoading: isLoadingWebDevelopmentdata,
    error: errorPageData,
  } = useQuery<any>({
    queryKey: ["webDevelopmentPageData", "about-six"],
    queryFn: () => getDynamicPageData("about-six"),
    initialData: { title: "", description: "", image: "" },
  });

  // Handle errors
  if (errorPageData) {
    return (<div>Something went wrong</div>);
  }

  return (
    <WebDevelopmentPageContext.Provider
      value={{
        webDevelopmentPageData: webDevelopmentPageData || { title: "", description: "", image: "" },
      }}
    >
      {!isLoadingWebDevelopmentdata ? children : <Preloader />}
    </WebDevelopmentPageContext.Provider>
  );
}
export function useWebDevelopmentPage() {
  const context = useContext(WebDevelopmentPageContext);
  if (!context) {
    throw new Error("useWebDevelopmentPage must be used within a WebDevelopmentPageProvider");
  }
  return context;
}

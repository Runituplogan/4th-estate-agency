"use client";

import { createContext, useContext } from "react";
import { useQuery } from "@tanstack/react-query";
import Preloader from "../components/preloader";
import { getDynamicPageData } from "../request/fetchDynamicPages";

interface FooterPageContextType {
  footerPageData: any;
}

const FooterPageContext = createContext<FooterPageContextType | undefined>(
  undefined
);

export function FooterPageProvider({ children }: { children: React.ReactNode }) {
  const {
    data: footerPageData,
    isLoading: isLoadingFooterData,
    error: errorPageData,
  } = useQuery<any>({
    queryKey: ["footerPageData", "footer"],
    queryFn: () => getDynamicPageData("footer"),
    initialData: { title: "", description: "", image: "" },
  });

  // Handle errors
  if (errorPageData) {
    return (<div>Something went wrong</div>);
  }

  return (
    <FooterPageContext.Provider
      value={{
        footerPageData: footerPageData || { title: "", description: "", image: "" },
      }}
    >
      {!isLoadingFooterData ? children : <Preloader />}
    </FooterPageContext.Provider>
  );
}
export function useFooterPage() {
  const context = useContext(FooterPageContext);
  if (!context) {
    throw new Error("useFooterPage must be used within a FooterPageProvider");
  }
  return context;
}

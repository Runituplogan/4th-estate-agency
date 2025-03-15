"use client";

import { createContext, useContext } from "react";
import { useQuery } from "@tanstack/react-query";
import Preloader from "../components/preloader";
import { getDynamicPageData } from "../request/fetchDynamicPages";

interface BrandingPageContextType {
  brandingPageData: any;
}

const BrandingPageContext = createContext<BrandingPageContextType | undefined>(
  undefined
);

export function BrandingPageProvider({ children }: { children: React.ReactNode }) {
  const {
    data: brandingPageData,
    isLoading: isLoadingBrandingdata,
    error: errorPageData,
  } = useQuery<any>({
    queryKey: ["brandingPageData", "about-two"],
    queryFn: () => getDynamicPageData("about-two"),
    initialData: { title: "", description: "", image: "" },
  });

  // Handle errors
  if (errorPageData) {
    return (<div>Something went wrong</div>);
  }

  return (
    <BrandingPageContext.Provider
      value={{
        brandingPageData: brandingPageData || { title: "", description: "", image: "" },
      }}
    >
      {!isLoadingBrandingdata ? children : <Preloader />}
    </BrandingPageContext.Provider>
  );
}
export function useBrandingPage() {
  const context = useContext(BrandingPageContext);
  if (!context) {
    throw new Error("useBrandingPage must be used within a BrandingPageProvider");
  }
  return context;
}

"use client";

import { createContext, useContext } from "react";
import { useQuery } from "@tanstack/react-query";
import Preloader from "../components/preloader";
import { getDynamicPageData } from "../request/fetchDynamicPages";

interface HomePageContextType {
  homePageData: any;
}

const HomePageContext = createContext<HomePageContextType | undefined>(
  undefined
);

export function HomePageProvider({ children }: { children: React.ReactNode }) {
  const {
    data: homePageData,
    isLoading: isLoadingHomedata,
    error: errorPageData,
  } = useQuery<any>({
    queryKey: ["homePageData", "home"],
    queryFn: () => getDynamicPageData("home"),
    initialData: { title: "", description: "", image: "" },
  });

  // Handle errors
  if (errorPageData) {
    return (<div>Something went wrong</div>);
  }

  return (
    <HomePageContext.Provider
      value={{
        homePageData: homePageData || { title: "", description: "", image: "" },
      }}
    >
      {!isLoadingHomedata ? children : <Preloader />}
    </HomePageContext.Provider>
  );
}
export function useHomePage() {
  const context = useContext(HomePageContext);
  if (!context) {
    throw new Error("useHomePage must be used within a HomePageProvider");
  }
  return context;
}

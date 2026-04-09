"use client";

import { createContext, useContext } from "react";
import { homePageData } from "../data/home_data";

interface HomePageContextType {
  homePageData: any;
}

const HomePageContext = createContext<HomePageContextType | undefined>(
  undefined
);

export function HomePageProvider({ children }: { children: React.ReactNode }) {
  return (
    <HomePageContext.Provider value={{ homePageData }}>
      {children}
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

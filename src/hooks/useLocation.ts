"use client";

import { useQuery, keepPreviousData } from "@tanstack/react-query";
import { GetLocationResponse } from "@/interfaces/media-placement";

const useLocation = () => {
  const useGetCountries = () => {
    return useQuery<GetLocationResponse>({
      queryKey: ["locations", "countries"],
      queryFn: async () => {
        const res = await fetch("/api/locations");
        if (!res.ok) throw new Error("Failed to fetch countries");
        return res.json();
      },
      staleTime: 1000 * 60 * 10,
    });
  };

  const useGetStates = (country: string) => {
    return useQuery<GetLocationResponse>({
      queryKey: ["locations", "states", country],
      queryFn: async () => {
        const res = await fetch(
          `/api/locations?country=${encodeURIComponent(country)}`,
        );
        if (!res.ok) throw new Error("Failed to fetch states");
        return res.json();
      },
      enabled: !!country,
      staleTime: 1000 * 60 * 10,
    });
  };

  const useGetCities = (country: string, state: string) => {
    return useQuery<GetLocationResponse>({
      queryKey: ["locations", "cities", country, state],
      queryFn: async () => {
        const res = await fetch(
          `/api/locations?country=${encodeURIComponent(country)}&state=${encodeURIComponent(state)}`,
        );
        if (!res.ok) throw new Error("Failed to fetch cities");
        return res.json();
      },
      enabled: !!country && !!state,
      staleTime: 1000 * 60 * 10,
    });
  };

  return { useGetCountries, useGetStates, useGetCities };
};

export default useLocation;

"use client";

import { useQuery, keepPreviousData } from "@tanstack/react-query";
import {
  GetLocationResponse,
  MediaPlacementResponse,
} from "@/interfaces/media-placement";

interface LocationParams {
  country?: string;
  state?: string;
  city?: string;
}

type LocationFilters = { country?: string; state?: string; city?: string };

const useMediaPlacement = () => {
  const useGetMediaPlacement = (
    search: string,
    page: number,
    limit: number,
    sort_by?: string,
    order_by?: "asc" | "desc",
    location?: LocationFilters,
    disclaimers?: string[],
    tags?: string[],
  ) => {
    return useQuery<MediaPlacementResponse>({
      queryKey: [
        "mediaPlacement",
        search,
        page,
        limit,
        sort_by,
        order_by,
        location,
        disclaimers,
        tags,
      ],
      queryFn: async () => {
        const queryObj: Record<string, string> = {
          page: page.toString(),
          limit: limit.toString(),
          sort_by: sort_by || "created_at",
          order_by: order_by || "desc",
        };

        if (search) queryObj["filters[search]"] = search;
        if (location?.country) queryObj["filters[country]"] = location.country;
        if (location?.state) queryObj["filters[state]"] = location.state;
        if (location?.city) queryObj["filters[city]"] = location.city;

        if (disclaimers && disclaimers.length > 0) {
          const mapped = disclaimers.map((d) =>
            d === "No Disclaimer" ? "" : d,
          );
          queryObj["filters[disclaimer]"] = mapped.join(",");
        }

        if (tags && tags.length > 0) {
          tags.forEach((tag, i) => {
            queryObj[`filters[tags][${i}]`] = tag;
          });
        }

        const query = new URLSearchParams(queryObj).toString();
        const res = await fetch(`/api/media-placement?${query}`);
        if (!res.ok) throw new Error("Failed to fetch media placements");
        return res.json();
      },
      staleTime: 1000 * 60 * 5,
    });
  };

  const useGetLocation = ({ country, state, city }: LocationParams) => {
    return useQuery<GetLocationResponse>({
      queryKey: ["location", country, state, city],
      queryFn: async () => {
        const params: Record<string, string> = {};
        if (country) params.country = country;
        if (state) params.state = state;
        if (city) params.city = city;

        const query = new URLSearchParams(params).toString();
        const res = await fetch(`/api/locations${query ? `?${query}` : ""}`);
        if (!res.ok) throw new Error("Failed to fetch locations");
        return res.json();
      },
      staleTime: 1000 * 60 * 5,
      placeholderData: keepPreviousData,
    });
  };

  const useGetAllTags = () => {
    return useQuery<string[]>({
      queryKey: ["allTags"],
      queryFn: async () => {
        const res = await fetch(
          `/api/media-placement?page=1&limit=1000&sort_by=created_at&order_by=desc`,
        );
        if (!res.ok) throw new Error("Failed to fetch tags");
        const data: MediaPlacementResponse = await res.json();
        const set = new Set<string>();
        data.records.forEach((r) => r.tags?.forEach((t) => set.add(t.name)));
        return Array.from(set).sort();
      },
      staleTime: 1000 * 60 * 10,
    });
  };

  return { useGetMediaPlacement, useGetLocation, useGetAllTags };
};

export default useMediaPlacement;

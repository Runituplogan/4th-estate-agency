"use client";

import { useCallback, useMemo, useState } from "react";
import {
  Search,
  Funnel,
  Sparkles,
  Loader2,
  CircleAlert,
  SearchX,
  Info,
  ChevronRight,
  ChevronLeft,
} from "lucide-react";
import useMediaPlacement from "@/hooks/useMediaPlacement";
import { MediaPlacementResponse } from "@/interfaces/media-placement";
import { PublicationDialog } from "./_components/publication-dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import SortFilterDrawer, {
  DEFAULT_FILTER_VALUES,
  SortFilterValues,
} from "./_components/filter";
import { applyFilters, countActiveFilters, DISCLAIMER_STYLES } from "@/helper";

export default function MediaPlacementsPage() {
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(25);
  const [search, setSearch] = useState("");
  const [sortBy, setSortBy] = useState("created_at");
  const [orderBy, setOrderBy] = useState<"asc" | "desc">("desc");
  const [isNewest, setIsNewest] = useState(false);
  const [selectedRecord, setSelectedRecord] = useState<
    MediaPlacementResponse["records"][0] | null
  >(null);
  const [filterOpen, setFilterOpen] = useState(false);
  const [filters, setFilters] = useState<SortFilterValues>(
    DEFAULT_FILTER_VALUES,
  );

  const { useGetMediaPlacement } = useMediaPlacement();

  const { data, isLoading, error } = useGetMediaPlacement(
    search,
    page,
    limit,
    sortBy,
    orderBy,
    filters.location,
    filters.disclaimers,
    filters.tags,
  );

  const totalPages = data?.total_pages ?? 0;
  const getPageNumbers = (): number[] => {
    const pages: number[] = [];
    const start = Math.max(1, page - 1);
    const end = Math.min(totalPages, start + 2);
    for (let i = start; i <= end; i++) pages.push(i);
    return pages;
  };

  const filteredRecords = useMemo(
    () => applyFilters(data?.records ?? [], filters),
    [data?.records, filters],
  );

  const handleFilterChange = (next: SortFilterValues) => {
    setFilters(next);
    setPage(1); // important
  };

  const handleReset = useCallback(() => {
    setFilters(DEFAULT_FILTER_VALUES);
    setPage(1);
  }, []);

  const activeCount = countActiveFilters(filters);

  return (
    <div className="flex flex-col gap-6 w-full">
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
        <h2 className="text-[38px] leading-12 font-semibold">
          Media Placements
        </h2>

        <div className="flex flex-col sm:flex-row sm:items-center gap-2">
          <div className="relative flex-1 min-w-25 md:min-w-100">
            <input
              type="text"
              placeholder="Search publications"
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
                setPage(1);
              }}
              className="w-full pr-10 pl-3 py-2 rounded-lg border border-gray-200 bg-white text-sm focus:outline-none focus:ring-1 focus:ring-black"
            />

            <span className="absolute right-10 top-1/2 h-8 border-r border-gray-300 -translate-y-1/2"></span>

            <Search
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
              size={18}
            />
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <button
              onClick={() => setFilterOpen(true)}
              className="uppercase relative bg-white flex items-center gap-2 px-3 py-2 rounded-lg border text-sm tracking-wide transition-all duration-150 hover:bg-gray-50 hover:border-gray-300"
            >
              <Funnel size={16} strokeWidth={2.5} />
              Filter
              {activeCount > 0 && (
                <span className="absolute -top-1.5 -right-1.5 bg-gray-900 text-white text-[10px] font-bold rounded-full w-4 h-4 flex items-center justify-center leading-none">
                  {activeCount}
                </span>
              )}
            </button>

            <button
              onClick={() => {
                setIsNewest(!isNewest);
                setSortBy("created_at");
                setOrderBy(isNewest ? "desc" : "asc");
                setPage(1);
              }}
              className={`uppercase bg-white flex items-center gap-2 px-3 py-2 rounded-lg border text-sm tracking-wide transition-all duration-150 whitespace-nowrap ${
                isNewest ? "bg-[#1e3a5f] text-[#1e3a5f] border-[#1e3a5f]" : ""
              }`}
            >
              <Sparkles size={16} strokeWidth={2.5} />
              New (Last 30 Days)
            </button>
          </div>
        </div>
      </div>
      {/* <div className="flex items-center justify-between mb-6">
        <h2 className="text-base text-[#565454]">
          Showing{" "}
          <strong className="text-black">
            {Math.min(page * limit, data?.total_records ?? 0)}
          </strong>{" "}
          of <span className="">{data?.total_records ?? 0} results</span>
        </h2>
        <div className="flex items-center gap-2">
          <span className="text-sm text-[#565454]">Rows per page</span>
          <Select
            defaultValue="25"
            onValueChange={(val) => {
              setLimit(Number(val));
              setPage(1);
            }}
          >
            <SelectTrigger className="w-30 rounded-full border-gray-200 bg-white">
              <SelectValue>{(value: string) => `${value}`}</SelectValue>
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="25">25</SelectItem>
              <SelectItem value="50">50</SelectItem>
              <SelectItem value="100">100</SelectItem>
              <SelectItem value="200">200</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div> */}
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between mb-6">
        <h2 className="text-base text-[#565454]">
          Showing{" "}
          <strong className="text-black">
            {Math.min(page * limit, data?.total_records ?? 0)}
          </strong>{" "}
          of <span className="">{data?.total_records ?? 0} results</span>
        </h2>
        <div className="flex items-center gap-2">
          <span className="text-sm text-[#565454]">Rows per page</span>
          <Select
            defaultValue="25"
            onValueChange={(val) => {
              setLimit(Number(val));
              setPage(1);
            }}
          >
            <SelectTrigger className="w-30 rounded-full border-gray-200 bg-white">
              <SelectValue>{(value: string) => `${value}`}</SelectValue>
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="25">25</SelectItem>
              <SelectItem value="50">50</SelectItem>
              <SelectItem value="100">100</SelectItem>
              <SelectItem value="200">200</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      <div className="rounded-lg border overflow-hidden">
        <div className="w-full overflow-x-auto">
          <table className="min-w-275 w-full text-sm bg-white">
            <thead className="bg-[#F6F8FA] text-[#525866]">
              <tr>
                <th className="text-left px-6 py-3 min-w-[320px] font-normal!">
                  Publications
                </th>
                <th className="text-left px-6 py-3 font-normal!">Price</th>
                <th className="text-left px-6 py-3 font-normal!">Tags</th>
                <th className="text-left px-6 py-3 whitespace-nowrap font-normal!">
                  <Tooltip>
                    <TooltipTrigger>
                      <span className="inline-flex items-center gap-1 cursor-default">
                        DR <Info size={14} />
                      </span>
                    </TooltipTrigger>
                    <TooltipContent>Domain Rating</TooltipContent>
                  </Tooltip>
                </th>
                <th className="text-left px-6 py-3 whitespace-nowrap font-normal!">
                  <Tooltip>
                    <TooltipTrigger>
                      <span className="inline-flex items-center gap-1 cursor-default">
                        DA <Info size={14} />
                      </span>
                    </TooltipTrigger>
                    <TooltipContent>Domain Authority</TooltipContent>
                  </Tooltip>
                </th>
                <th className="text-left px-6 py-3 whitespace-nowrap font-normal!">
                  <Tooltip>
                    <TooltipTrigger>
                      <span className="inline-flex items-center gap-1 cursor-default">
                        TAT <Info size={14} />
                      </span>
                    </TooltipTrigger>
                    <TooltipContent>Turnaround Time</TooltipContent>
                  </Tooltip>
                </th>
                <th className="text-left px-6 py-3 whitespace-nowrap font-normal!">
                  Location
                </th>
                <th className="text-left px-6 py-3 whitespace-nowrap font-normal!">
                  Do Follow
                </th>
                <th className="text-left px-6 py-3 whitespace-nowrap font-normal!">
                  Disclaimer
                </th>
              </tr>
            </thead>

            <tbody>
              {isLoading && (
                <tr>
                  <td colSpan={9} className="h-96 text-center">
                    <div className="flex flex-col items-center gap-3">
                      <Loader2 size={32} className="animate-spin" />
                      Loading publications...
                    </div>
                  </td>
                </tr>
              )}

              {error && (
                <tr>
                  <td colSpan={9} className="h-96 text-center">
                    <div className="flex flex-col items-center gap-3 text-red-500">
                      <CircleAlert size={32} />
                      Failed to load publications
                    </div>
                  </td>
                </tr>
              )}

              {!isLoading && !error && filteredRecords.length === 0 && (
                <tr>
                  <td colSpan={9} className="h-96 text-center">
                    <div className="flex flex-col items-center gap-3 text-gray-400">
                      <SearchX size={32} />
                      {(data?.records?.length ?? 0) > 0
                        ? "No publications match your filters"
                        : "No publications found"}
                    </div>
                  </td>
                </tr>
              )}

              {!isLoading &&
                !error &&
                filteredRecords.map((record) => {
                  const channel = record.channels?.[0];
                  return (
                    <tr
                      key={record.id}
                      onClick={() => setSelectedRecord(record)}
                      className="cursor-pointer transition bg-white border hover:bg-[#FFFCF9]"
                    >
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center gap-3 min-w-[320px]">
                          <img
                            src={record.logo}
                            alt={record.name}
                            className="w-12 h-12 rounded-full object-cover shrink-0"
                          />
                          <div className="flex flex-col">
                            <span>{record.outlet_name}</span>
                            <span className="text-[#737373] text-xs">
                              {record.website_url}
                            </span>
                          </div>
                        </div>
                      </td>

                      <td className="px-6 py-4">
                        ${record.prices?.[0]?.unit_amount}
                      </td>

                      {/* <td className="px-6 py-4">
                        <div className="flex flex-col gap-1 w-fit">
                          <div className="flex gap-1">
                            {record.tags.slice(0, 2).map((tag) => (
                              <span
                                key={tag.name}
                                className="px-3 py-1 rounded-full border text-sm whitespace-nowrap"
                              >
                                {tag.name}
                              </span>
                            ))}
                          </div>
                          {record.tags.length > 2 && (
                            <div className="flex gap-1">
                              <span className="px-3 py-1 rounded-full border text-sm whitespace-nowrap">
                                {record.tags[2].name}
                              </span>
                              {record.tags.length > 3 && (
                                <Tooltip>
                                  <TooltipTrigger>
                                    <span className="px-3 py-1 rounded-full border text-sm cursor-pointer">
                                      +{record.tags.length - 3}
                                    </span>
                                  </TooltipTrigger>
                                  <TooltipContent>
                                    <div className="flex flex-wrap gap-2 max-w-50 p-1">
                                      {record.tags.slice(3).map((tag) => (
                                        <span
                                          key={tag.name}
                                          className="px-3 py-1 rounded-full border text-sm"
                                        >
                                          {tag.name}
                                        </span>
                                      ))}
                                    </div>
                                  </TooltipContent>
                                </Tooltip>
                              )}
                            </div>
                          )}
                        </div>
                      </td> */}
                      <td className="px-6 py-4 uppercase font-semibold">
                        {!record.tags || record.tags.length === 0 ? (
                          <span className="text-sm text-gray-400 italic">
                            No tags
                          </span>
                        ) : (
                          <div className="flex flex-col gap-1 w-fit">
                            <div className="flex gap-1">
                              {record.tags.slice(0, 2).map((tag) => (
                                <span
                                  key={tag.name}
                                  className="px-3 py-1 rounded-full border text-sm whitespace-nowrap"
                                >
                                  {tag.name}
                                </span>
                              ))}
                            </div>

                            {record.tags.length > 2 && (
                              <div className="flex gap-1">
                                <span className="px-3 py-1 rounded-full border text-sm whitespace-nowrap">
                                  {record.tags[2].name}
                                </span>

                                {record.tags.length > 3 && (
                                  <Tooltip>
                                    <TooltipTrigger>
                                      <span className="px-3 py-1 rounded-full border text-sm cursor-pointer">
                                        +{record.tags.length - 3}
                                      </span>
                                    </TooltipTrigger>

                                    <TooltipContent>
                                      <div className="flex flex-wrap gap-2 max-w-50 p-1">
                                        {record.tags.slice(3).map((tag) => (
                                          <span
                                            key={tag.name}
                                            className="px-3 py-1 rounded-full border text-sm"
                                          >
                                            {tag.name}
                                          </span>
                                        ))}
                                      </div>
                                    </TooltipContent>
                                  </Tooltip>
                                )}
                              </div>
                            )}
                          </div>
                        )}
                      </td>

                      <td className="px-6 py-4 whitespace-nowrap">
                        {channel?.domain_ranking ?? "N/A"}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        {channel?.domain_authority ?? "N/A"}
                      </td>

                      <td className="px-6 py-4 whitespace-nowrap">
                        {record.min_delivery_days}–{record.max_delivery_days}{" "}
                        days
                      </td>

                      <td className="px-6 py-4 whitespace-nowrap">
                        {[record.city, record.state, record.country]
                          .filter(Boolean)
                          .join(", ") || "N/A"}
                      </td>

                      <td className="px-6 py-4 whitespace-nowrap">
                        <span
                          className={`px-2 py-1 rounded text-xs font-semibold uppercase ${channel?.is_do_follow ? "bg-green-100 text-green-700" : "bg-red-100 text-red-600"}`}
                        >
                          {channel?.is_do_follow ? "DO FOLLOW" : "NO FOLLOW"}
                        </span>
                      </td>

                      <td className="px-6 py-4 whitespace-nowrap">
                        {channel?.disclaimer_name ? (
                          <span
                            className={`px-2 py-1 rounded text-xs font-semibold uppercase ${DISCLAIMER_STYLES[channel.disclaimer_name] ?? "bg-gray-100 text-gray-600"}`}
                          >
                            {channel.disclaimer_name}
                          </span>
                        ) : (
                          "N/A"
                        )}
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </table>

          <SortFilterDrawer
            open={filterOpen}
            onClose={() => setFilterOpen(false)}
            values={filters}
            onChange={handleFilterChange}
            onReset={handleReset}
          />
        </div>
        {!isLoading && !error && totalPages > 1 && (
          <div className="flex items-center justify-center gap-1 py-4 w-full">
            <button
              onClick={() => setPage((p) => Math.max(1, p - 1))}
              disabled={page === 1}
              className="flex items-center gap-1 px-4 py-2 rounded-lg text-sm font-medium disabled:opacity-40 disabled:cursor-not-allowed transition shrink-0 whitespace-nowrap"
            >
              <ChevronLeft size={16} />
              Previous
            </button>

            {getPageNumbers().map((pageNum, idx, arr) => {
              const showLeadingEllipsis = idx === 0 && pageNum > 1;
              const showTrailingEllipsis =
                idx === arr.length - 1 && pageNum < totalPages;

              return (
                <div key={pageNum} className="flex items-center gap-1">
                  {showLeadingEllipsis && (
                    <span className="px-2 py-2 text-gray-400 text-sm">...</span>
                  )}
                  <button
                    onClick={() => setPage(pageNum)}
                    className={`w-9 h-9 rounded-lg text-sm font-medium transition ${
                      page === pageNum
                        ? "bg-gray-900 text-white"
                        : "text-gray-600 hover:bg-gray-100"
                    }`}
                  >
                    {pageNum}
                  </button>
                  {showTrailingEllipsis && (
                    <span className="px-2 py-2 text-gray-400 text-sm">...</span>
                  )}
                </div>
              );
            })}

            <button
              onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
              disabled={page === totalPages}
              className="flex items-center gap-1 px-4 py-2 rounded-lg text-sm font-medium disabled:opacity-40 disabled:cursor-not-allowed transition shrink-0 whitespace-nowrap"
            >
              Next
              <ChevronRight size={16} />
            </button>
          </div>
        )}
      </div>
      <PublicationDialog
        record={selectedRecord}
        open={!!selectedRecord}
        onOpenChange={(open) => !open && setSelectedRecord(null)}
      />
    </div>
  );
}

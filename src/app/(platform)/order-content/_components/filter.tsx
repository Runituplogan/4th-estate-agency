"use client";

import { useState, useEffect, useRef } from "react";
import { X, Search, ChevronDown, ChevronUp, Funnel } from "lucide-react";
import useMediaPlacement from "@/hooks/useMediaPlacement";
import useLocation from "@/hooks/useLocation";

export interface SortFilterValues {
  sortBy: string;
  price: { min: string; max: string };
  domainAuthority: { min: string; max: string };
  domainRanking: { min: string; max: string };
  turnaroundTime: { min: string; max: string };
  doFollow: boolean;
  googleIndexed: boolean;
  location: { country: string; state: string; city: string };
  disclaimers: string[];
  tags: string[];
}

interface SortFilterDrawerProps {
  open: boolean;
  onClose: () => void;
  values?: Partial<SortFilterValues>;
  onChange?: (values: SortFilterValues) => void;
  onReset?: () => void;
}

const SORT_OPTIONS = [
  "Lowest Domain Authority",
  "Highest Domain Rating",
  "Lowest Domain Rating",
  "Lowest Price",
  "Highest Price",
  "A - Z",
  "Z - A",
];

const DISCLAIMER_OPTIONS = [
  "Advertisement Disclaimer",
  "Partnership Disclaimer",
  "No Disclaimer",
  "Sponsored Disclaimer",
  "Contributor Disclaimer",
  "Branded Content",
  "Branded Contributor Content",
  "Affiliate Disclaimer",
  "Editorial Independence Disclaimer",
  "External Contributor Disclaimer",
  "Partner Content",
  "Contributor Content",
  "Non-Sponsored",
];

export const DEFAULT_FILTER_VALUES: SortFilterValues = {
  sortBy: "",
  price: { min: "", max: "" },
  domainAuthority: { min: "", max: "" },
  domainRanking: { min: "", max: "" },
  turnaroundTime: { min: "", max: "" },
  doFollow: false,
  googleIndexed: false,
  location: { country: "", state: "", city: "" },
  disclaimers: [],
  tags: [],
};

function RangeInputs({
  label,
  minValue,
  maxValue,
  minPlaceholder = "Min",
  maxPlaceholder = "Max",
  onChange,
}: {
  label: string;
  minValue: string;
  maxValue: string;
  minPlaceholder?: string;
  maxPlaceholder?: string;
  onChange: (min: string, max: string) => void;
}) {
  return (
    <div className="mb-6">
      <p className="text-sm font-semibold mb-3">{label}</p>

      <div className="flex items-center gap-3">
        <input
          type="number"
          placeholder={minPlaceholder}
          value={minValue}
          onChange={(e) => onChange(e.target.value, maxValue)}
          className="w-[45%] min-w-0 border border-[#E5E5E5] rounded-xl px-4 py-3 text-sm text-gray-500 placeholder-gray-300 focus:outline-none focus:border-gray-400 transition-colors bg-white"
        />

        <span className="font-medium shrink-0 text-[#E5E5E5]">—</span>

        <input
          type="number"
          placeholder={maxPlaceholder}
          value={maxValue}
          onChange={(e) => onChange(minValue, e.target.value)}
          className="w-[45%] min-w-0 border border-[#E5E5E5] rounded-xl px-4 py-3 text-sm text-gray-500 placeholder-gray-300 focus:outline-none focus:border-gray-400 transition-colors bg-white"
        />
      </div>
    </div>
  );
}

function Toggle({
  checked,
  onChange,
}: {
  checked: boolean;
  onChange: (v: boolean) => void;
}) {
  return (
    <button
      type="button"
      onClick={() => onChange(!checked)}
      className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors duration-200 focus:outline-none ${checked ? "bg-blue-500" : "bg-gray-200"}`}
    >
      <span
        className={`inline-block h-4 w-4 transform rounded-full bg-white shadow transition-transform duration-200 ${checked ? "translate-x-6" : "translate-x-1"}`}
      />
    </button>
  );
}

function SelectDropdown({
  placeholder,
  value,
  options,
  onChange,
  disabled,
}: {
  placeholder: string;
  value: string;
  options: string[];
  onChange: (v: string) => void;
  disabled?: boolean;
}) {
  return (
    <div className="relative">
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        disabled={disabled}
        className={`w-full appearance-none border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-gray-400 transition-colors bg-white pr-10 ${value ? "text-gray-800" : "text-gray-300"} ${disabled ? "opacity-40 cursor-not-allowed" : "cursor-pointer"}`}
      >
        <option value="" disabled>
          {placeholder}
        </option>
        {options.map((o) => (
          <option key={o} value={o}>
            {o}
          </option>
        ))}
      </select>
      <ChevronDown
        size={16}
        className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"
      />
    </div>
  );
}

function SearchableDropdown({
  placeholder,
  value,
  options,
  disabled,
  loading,
  onChange,
}: {
  placeholder: string;
  value: string;
  options: string[];
  disabled?: boolean;
  loading?: boolean;
  onChange: (v: string) => void;
}) {
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState("");
  const containerRef = useRef<HTMLDivElement>(null);

  const filtered = options.filter((o) =>
    o.toLowerCase().includes(search.toLowerCase()),
  );

  useEffect(() => {
    function handler(e: MouseEvent) {
      if (
        containerRef.current &&
        !containerRef.current.contains(e.target as Node)
      ) {
        setOpen(false);
        setSearch("");
      }
    }
    if (open) document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [open]);

  const handleSelect = (v: string) => {
    onChange(v);
    setOpen(false);
    setSearch("");
  };

  const handleClear = (e: React.MouseEvent) => {
    e.stopPropagation();
    onChange("");
    setOpen(false);
    setSearch("");
  };

  return (
    <div ref={containerRef} className="relative">
      <button
        type="button"
        disabled={disabled}
        onClick={() => !disabled && setOpen((p) => !p)}
        className={`w-full flex items-center justify-between border border-gray-200 rounded-xl px-4 py-3 text-sm text-left transition-colors bg-white focus:outline-none
          ${disabled ? "opacity-40 cursor-not-allowed" : "cursor-pointer hover:border-gray-300"}
          ${open ? "border-gray-400" : ""}
        `}
      >
        <span className={value ? "text-gray-800" : "text-gray-300"}>
          {loading ? "Loading..." : value || placeholder}
        </span>
        <span className="flex items-center gap-1 shrink-0 ml-2">
          {value && !disabled && (
            <span
              onClick={handleClear}
              className="text-gray-300 hover:text-gray-500 transition-colors cursor-pointer p-0.5"
            >
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path
                  d="M2 2l8 8M10 2l-8 8"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          )}
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            className={`text-gray-400 transition-transform duration-150 ${open ? "rotate-180" : ""}`}
          >
            <path
              d="M4 6l4 4 4-4"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      </button>

      {open && (
        <div className="absolute z-50 top-full left-0 right-0 mt-1.5 bg-white border border-gray-200 rounded-xl shadow-lg overflow-hidden">
          <div className="p-2 border-b border-gray-100">
            <div className="relative">
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-300"
              >
                <circle
                  cx="6"
                  cy="6"
                  r="4.5"
                  stroke="currentColor"
                  strokeWidth="1.5"
                />
                <path
                  d="M10 10l2.5 2.5"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
              <input
                autoFocus
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder={`Search...`}
                className="w-full pl-8 pr-3 py-2 text-sm border border-gray-200 rounded-lg focus:outline-none focus:border-gray-400 bg-white placeholder-gray-300"
              />
            </div>
          </div>

          <div className="max-h-52 overflow-y-auto">
            {loading ? (
              <div className="flex items-center justify-center gap-2 py-6 text-sm text-gray-400">
                <svg
                  className="animate-spin"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                >
                  <circle
                    cx="8"
                    cy="8"
                    r="6"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeOpacity="0.2"
                  />
                  <path
                    d="M8 2a6 6 0 016 6"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
                Loading...
              </div>
            ) : filtered.length === 0 ? (
              <div className="py-6 text-center text-sm text-gray-400">
                No results found
              </div>
            ) : (
              filtered.map((opt) => (
                <button
                  key={opt}
                  type="button"
                  onClick={() => handleSelect(opt)}
                  className={`w-full text-left px-4 py-2.5 text-sm transition-colors
                    ${opt === value ? "bg-gray-50 text-gray-900 font-medium" : "text-gray-700 hover:bg-gray-50"}`}
                >
                  {opt}
                </button>
              ))
            )}
          </div>
        </div>
      )}
    </div>
  );
}

function SectionDivider() {
  return <div className="h-px bg-gray-100 my-6" />;
}

export default function SortFilterDrawer({
  open,
  onClose,
  values,
  onChange,
  onReset,
}: SortFilterDrawerProps) {
  const [form, setForm] = useState<SortFilterValues>({
    ...DEFAULT_FILTER_VALUES,
    ...values,
  });
  const [disclaimerSearch, setDisclaimerSearch] = useState("");
  const [disclaimersExpanded, setDisclaimersExpanded] = useState(true);

  const [tagSearch, setTagSearch] = useState("");
  const [tagsExpanded, setTagsExpanded] = useState(true);

  useEffect(() => {
    if (values) setForm((prev) => ({ ...prev, ...values }));
  }, [values]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (open) document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [open, onClose]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const update = <K extends keyof SortFilterValues>(
    key: K,
    val: SortFilterValues[K],
  ) => {
    setForm((prev) => {
      const next = { ...prev, [key]: val };
      onChange?.(next);
      return next;
    });
  };

  const handleReset = () => {
    setForm({ ...DEFAULT_FILTER_VALUES });
    setDisclaimerSearch("");
    setTagSearch("");
    onChange?.({ ...DEFAULT_FILTER_VALUES });
    onReset?.();
  };

  const toggleDisclaimer = (d: string) => {
    setForm((prev) => {
      const next = {
        ...prev,
        disclaimers: prev.disclaimers.includes(d)
          ? prev.disclaimers.filter((x) => x !== d)
          : [...prev.disclaimers, d],
      };
      onChange?.(next);
      return next;
    });
  };

  const toggleTag = (t: string) => {
    setForm((prev) => {
      const next = {
        ...prev,
        tags: prev.tags.includes(t)
          ? prev.tags.filter((x) => x !== t)
          : [...prev.tags, t],
      };
      onChange?.(next);
      return next;
    });
  };

  const filteredDisclaimers = DISCLAIMER_OPTIONS.filter((d) =>
    d.toLowerCase().includes(disclaimerSearch.toLowerCase()),
  );

  const { useGetCountries, useGetStates, useGetCities } = useLocation();

  const { data: countryData, isLoading: loadingCountries } = useGetCountries();

  const { data: stateData, isLoading: loadingStates } = useGetStates(
    form.location.country,
  );
  const { useGetAllTags } = useMediaPlacement();
  const { data: tagOptions = [] } = useGetAllTags();

  const { data: cityData, isLoading: loadingCities } = useGetCities(
    form.location.country,
    form.location.state,
  );

  const countries = countryData?.countries ?? [];
  const states = form.location.country ? (stateData?.states ?? []) : [];
  const cities = form.location.state ? (cityData?.cities ?? []) : [];

  return (
    <>
      <div
        onClick={onClose}
        className={`fixed inset-0 bg-black/25 z-40 transition-opacity duration-300 ${open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
      />

      <div
        className={`fixed top-0 right-0 h-full w-114 max-w-full bg-white z-50 shadow-2xl flex flex-col transition-transform duration-300 ease-in-out ${open ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="flex items-center justify-between px-6 py-5 border-b border-gray-100 shrink-0">
          <h2 className="text-[25px] leading-12 font-semibold">
            Sort & Filter
          </h2>
          <div className="flex items-center gap-4">
            <button
              onClick={handleReset}
              className="text-sm font-semibold text-purple-700 transition-colors cursor-pointer"
            >
              Reset all
            </button>
            <button
              onClick={onClose}
              className="transition-colors cursor-pointer"
            >
              <X size={25} />
            </button>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto px-6 py-5">
          <p className="text-sm mb-3 font-semibold">Sort by</p>
          <div className="flex flex-col gap-2 mb-6 font-semibold">
            {SORT_OPTIONS.map((opt) => (
              <label
                key={opt}
                className="flex items-center gap-3 cursor-pointer group"
                onClick={() => update("sortBy", opt)}
              >
                <div
                  className={`w-5 h-5 rounded-full border-2 flex items-center justify-center shrink-0 transition-colors ${form.sortBy === opt ? "border-gray-800" : "border-gray-300 group-hover:border-gray-400"}`}
                >
                  {form.sortBy === opt && (
                    <div className="w-2.5 h-2.5 rounded-full bg-black" />
                  )}
                </div>
                <span className="text-sm select-none">{opt}</span>
              </label>
            ))}
          </div>

          <SectionDivider />

          <RangeInputs
            label="Price ($)"
            minValue={form.price.min}
            maxValue={form.price.max}
            onChange={(min, max) => update("price", { min, max })}
          />

          <SectionDivider />

          <RangeInputs
            label="Domain Authority"
            minValue={form.domainAuthority.min}
            maxValue={form.domainAuthority.max}
            minPlaceholder="0"
            maxPlaceholder="100"
            onChange={(min, max) => update("domainAuthority", { min, max })}
          />

          <SectionDivider />

          <RangeInputs
            label="Domain Ranking"
            minValue={form.domainRanking.min}
            maxValue={form.domainRanking.max}
            minPlaceholder="0"
            maxPlaceholder="100"
            onChange={(min, max) => update("domainRanking", { min, max })}
          />

          <SectionDivider />

          <RangeInputs
            label="Turnaround Time (days)"
            minValue={form.turnaroundTime.min}
            maxValue={form.turnaroundTime.max}
            onChange={(min, max) => update("turnaroundTime", { min, max })}
          />

          <SectionDivider />

          <p className="text-sm font-semibold text-gray-800 mb-2">
            Publication options
          </p>
          <div className="flex flex-col mb-6">
            <div className="flex items-center justify-between py-3.5 border-b border-gray-100">
              <span className="text-sm text-gray-700">Do-Follow</span>
              <Toggle
                checked={form.doFollow}
                onChange={(v) => update("doFollow", v)}
              />
            </div>
          </div>

          <SectionDivider />

          <p className="text-sm font-semibold text-gray-800 mb-4">Location</p>
          <div className="flex flex-col gap-3 mb-6">
            <div>
              <p className="text-xs text-gray-500 mb-1.5">Country</p>
              <SearchableDropdown
                placeholder="Select country..."
                value={form.location.country}
                options={countries}
                loading={loadingCountries}
                onChange={(v) =>
                  update("location", { country: v, state: "", city: "" })
                }
              />
            </div>
            <div>
              <p className="text-xs text-gray-500 mb-1.5">State</p>
              <SelectDropdown
                placeholder={loadingStates ? "Loading..." : "Select state..."}
                value={form.location.state}
                options={states}
                disabled={!form.location.country || loadingStates}
                onChange={(v) =>
                  update("location", { ...form.location, state: v, city: "" })
                }
              />
            </div>
            <div>
              <p className="text-xs text-gray-500 mb-1.5">City</p>
              <SearchableDropdown
                placeholder="Select city..."
                value={form.location.city}
                options={cities}
                loading={loadingCities}
                disabled={!form.location.state}
                onChange={(v) =>
                  update("location", { ...form.location, city: v })
                }
              />
            </div>
          </div>

          <SectionDivider />

          <div className="mb-6">
            <button
              className="flex items-center justify-between w-full mb-4"
              onClick={() => setDisclaimersExpanded((p) => !p)}
            >
              <p className="text-sm font-semibold text-gray-800">Disclaimers</p>
              {disclaimersExpanded ? (
                <ChevronUp size={18} className="text-gray-400" />
              ) : (
                <ChevronDown size={18} className="text-gray-400" />
              )}
            </button>

            {disclaimersExpanded && (
              <>
                <div className="relative mb-3">
                  <Search
                    size={15}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-300"
                  />
                  <input
                    type="text"
                    placeholder="Search disclaimers..."
                    value={disclaimerSearch}
                    onChange={(e) => setDisclaimerSearch(e.target.value)}
                    className="w-full border border-gray-200 rounded-xl pl-10 pr-4 py-3 text-sm placeholder-gray-300 focus:outline-none focus:border-gray-400 transition-colors bg-white"
                  />
                </div>
                <div className="flex flex-col gap-1">
                  {filteredDisclaimers.map((d) => (
                    <label
                      key={d}
                      className="flex items-center gap-3 cursor-pointer group py-2"
                      onClick={() => toggleDisclaimer(d)}
                    >
                      <div
                        className={`w-5 h-5 rounded border-2 flex items-center justify-center shrink-0 transition-colors ${form.disclaimers.includes(d) ? "border-gray-800 bg-gray-800" : "border-gray-300 group-hover:border-gray-400"}`}
                      >
                        {form.disclaimers.includes(d) && (
                          <svg
                            width="10"
                            height="8"
                            viewBox="0 0 10 8"
                            fill="none"
                          >
                            <path
                              d="M1 4L3.5 6.5L9 1"
                              stroke="white"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        )}
                      </div>
                      <span className="text-sm text-gray-700 select-none">
                        {d}
                      </span>
                    </label>
                  ))}
                  {filteredDisclaimers.length === 0 && (
                    <p className="text-sm text-gray-400 py-2">
                      No disclaimers found.
                    </p>
                  )}
                </div>
              </>
            )}
          </div>
          <div className="h-4" />
          <SectionDivider />

          <div className="mb-6">
            <button
              className="flex items-center justify-between w-full mb-4"
              onClick={() => setTagsExpanded((p) => !p)}
            >
              <p className="text-sm font-semibold text-gray-800">Tags</p>
              {tagsExpanded ? (
                <ChevronUp size={18} className="text-gray-400" />
              ) : (
                <ChevronDown size={18} className="text-gray-400" />
              )}
            </button>

            {tagsExpanded && (
              <>
                <div className="relative mb-3">
                  <Search
                    size={15}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-300"
                  />
                  <input
                    type="text"
                    placeholder="Search tags..."
                    value={tagSearch}
                    onChange={(e) => setTagSearch(e.target.value)}
                    className="w-full border border-gray-200 rounded-xl pl-10 pr-4 py-3 text-sm placeholder-gray-300 focus:outline-none focus:border-gray-400 transition-colors bg-white"
                  />
                </div>
                <div className="flex flex-col gap-1">
                  {tagOptions
                    .filter((t) =>
                      t.toLowerCase().includes(tagSearch.toLowerCase()),
                    )
                    .slice(0, tagSearch ? undefined : 5)
                    .map((t) => (
                      <label
                        key={t}
                        className="flex items-center gap-3 cursor-pointer group py-2"
                        onClick={() => toggleTag(t)}
                      >
                        <div
                          className={`w-5 h-5 rounded border-2 flex items-center justify-center shrink-0 transition-colors ${form.tags.includes(t) ? "border-gray-800 bg-gray-800" : "border-gray-300 group-hover:border-gray-400"}`}
                        >
                          {form.tags.includes(t) && (
                            <svg
                              width="10"
                              height="8"
                              viewBox="0 0 10 8"
                              fill="none"
                            >
                              <path
                                d="M1 4L3.5 6.5L9 1"
                                stroke="white"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          )}
                        </div>
                        <span className="text-sm text-gray-700 select-none">
                          {t}
                        </span>
                      </label>
                    ))}
                  {tagOptions.filter((t) =>
                    t.toLowerCase().includes(tagSearch.toLowerCase()),
                  ).length === 0 && (
                    <p className="text-sm text-gray-400 py-2">No tags found.</p>
                  )}
                </div>
              </>
            )}
          </div>

          <div className="h-4" />
        </div>
      </div>
    </>
  );
}

export function FilterButton({ onClick }: { onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className="bg-white flex items-center gap-2 px-3 py-2 rounded-lg border text-sm font-semibold transition-all duration-150 hover:bg-gray-50 hover:border-gray-300"
    >
      <Funnel size={16} strokeWidth={2.5} />
      Filter
    </button>
  );
}

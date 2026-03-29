import {
  DEFAULT_FILTER_VALUES,
  SortFilterValues,
} from "@/app/(platform)/order-content/_components/filter";
import { MediaPlacementResponse } from "@/interfaces/media-placement";

export enum SignupMode {
  OAUTH = "OAUTH",
  REGULAR = "REGULAR",
}

export enum UserStatus {
  ACTIVE = "ACTIVE",
  SUSPENDED = "SUSPENDED",
  DELETED = "DELETED",
  DEACTIVATED = "DEACTIVATED",
}

export enum CartStatus {
  ACTIVE = "ACTIVE",
  CHECKED_OUT = "CHECKED_OUT",
  ABANDONED = "ABANDONED",
}

export enum OrderStatus {
  PENDING = "PENDING",
  PAID = "PAID",
  FAILED = "FAILED",
  REFUNDED = "REFUNDED",
}

export enum PaymentStatus {
  PENDING = "PENDING",
  SUCCEEDED = "SUCCEEDED",
  FAILED = "FAILED",
  REFUNDED = "REFUNDED",
  PARTIALLY_REFUNDED = "PARTIALLY_REFUNDED",
  DISPUTED = "DISPUTED",
}

export const DISCLAIMER_STYLES: any = {
  "Contributor Disclaimer": "bg-[#FFF3CD] text-[#856404]",
  "External Contributor Disclaimer": "bg-[#E8F8F5] text-[#117864]",
  "Branded Contributor Content": "bg-[#F5EEF8] text-[#6C3483]",
  "Partnership Disclaimer": "bg-[#D1ECF1] text-[#0C5460]",
  "Branded Content": "bg-[#D4EDDA] text-[#155724]",
  "Advertisement Disclaimer": "bg-[#F8D7DA] text-[#721C24]",
  "Affiliate Disclaimer": "bg-[#E2D9F3] text-[#4B2D83]",
  "Editorial Independence Disclaimer": "bg-[#FDEBD0] text-[#784212]",
  "Partner Content": "bg-[#D6EAF8] text-[#1A5276]",
  "Sponsored Disclaimer": "bg-[#FADBD8] text-[#922B21]",
  "Contributor Content": "bg-[#D5F5E3] text-[#1E8449]",
  "Non-Sponsored": "bg-[#FEF9E7] text-[#7D6608]",
  "No Disclaimer": "bg-[#CAC2FF] text-[#2B1664]",
};

type MediaRecord = MediaPlacementResponse["records"][0];

export function inRange(
  value: number | null | undefined,
  min: string,
  max: string,
): boolean {
  if (value == null) return true;
  const lo = min !== "" ? parseFloat(min) : -Infinity;
  const hi = max !== "" ? parseFloat(max) : Infinity;
  return value >= lo && value <= hi;
}

export function applyFilters(
  records: MediaRecord[],
  f: SortFilterValues,
): MediaRecord[] {
  let result = records.filter((r) => {
    const channel = r.channels?.[0];
    const price = r.prices?.[0]?.unit_amount;
    const tat =
      r.min_delivery_days != null && r.max_delivery_days != null
        ? (r.min_delivery_days + r.max_delivery_days) / 2
        : null;

    if (!inRange(price, f.price.min, f.price.max)) return false;
    if (
      !inRange(
        channel?.domain_authority,
        f.domainAuthority.min,
        f.domainAuthority.max,
      )
    )
      return false;
    if (
      !inRange(
        channel?.domain_ranking,
        f.domainRanking.min,
        f.domainRanking.max,
      )
    )
      return false;
    if (!inRange(tat, f.turnaroundTime.min, f.turnaroundTime.max)) return false;
    if (f.doFollow && !channel?.is_do_follow) return false;
    if (
      f.location.country &&
      r.country?.toLowerCase() !== f.location.country.toLowerCase() &&
      r.country?.toLowerCase() !== "global"
    )
      return false;
    if (
      f.location.state &&
      r.state?.toLowerCase() !== f.location.state.toLowerCase() &&
      r.country?.toLowerCase() !== "global"
    )
      return false;
    if (
      f.location.city &&
      r.city?.toLowerCase() !== f.location.city.toLowerCase() &&
      r.country?.toLowerCase() !== "global"
    )
      return false;

    return true;
  });

  switch (f.sortBy) {
    case "Lowest Price":
      result.sort(
        (a, b) =>
          (a.prices?.[0]?.unit_amount ?? 0) - (b.prices?.[0]?.unit_amount ?? 0),
      );
      break;
    case "Highest Price":
      result.sort(
        (a, b) =>
          (b.prices?.[0]?.unit_amount ?? 0) - (a.prices?.[0]?.unit_amount ?? 0),
      );
      break;
    case "Lowest Domain Authority":
      result.sort(
        (a, b) =>
          (a.channels?.[0]?.domain_authority ?? 0) -
          (b.channels?.[0]?.domain_authority ?? 0),
      );
      break;
    case "Highest Domain Rating":
      result.sort(
        (a, b) =>
          (b.channels?.[0]?.domain_ranking ?? 0) -
          (a.channels?.[0]?.domain_ranking ?? 0),
      );
      break;
    case "Lowest Domain Rating":
      result.sort(
        (a, b) =>
          (a.channels?.[0]?.domain_ranking ?? 0) -
          (b.channels?.[0]?.domain_ranking ?? 0),
      );
      break;
    case "Newest":
      result.sort(
        (a, b) =>
          new Date(b.created_at ?? 0).getTime() -
          new Date(a.created_at ?? 0).getTime(),
      );
      break;
    case "A - Z":
      result.sort((a, b) =>
        (a.outlet_name ?? "").localeCompare(b.outlet_name ?? ""),
      );
      break;
    case "Z - A":
      result.sort((a, b) =>
        (b.outlet_name ?? "").localeCompare(a.outlet_name ?? ""),
      );
      break;
  }

  return result;
}

export function countActiveFilters(f: SortFilterValues): number {
  let n = 0;

  if (f.sortBy !== DEFAULT_FILTER_VALUES.sortBy) n++;
  if (f.price?.min || f.price?.max) n++;
  if (f.domainAuthority?.min || f.domainAuthority?.max) n++;
  if (f.domainRanking?.min || f.domainRanking?.max) n++;
  if (f.turnaroundTime?.min || f.turnaroundTime?.max) n++;
  if (f.doFollow) n++;
  if (f.location?.country) n++;
  if (f.disclaimers?.length > 0) n++;

  return n;
}

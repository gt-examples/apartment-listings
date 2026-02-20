"use client";

import { useRouter, usePathname } from "next/navigation";
import { T } from "gt-next";
import { useGT } from "gt-next/client";

export default function ApartmentFilters({
  currentBedrooms,
  currentNeighborhood,
  currentStatus,
}: {
  currentBedrooms: string;
  currentNeighborhood: string;
  currentStatus: string;
}) {
  const router = useRouter();
  const pathname = usePathname();
  const t = useGT();

  function updateFilter(key: string, value: string) {
    const params = new URLSearchParams();
    const current: Record<string, string> = {
      bedrooms: currentBedrooms,
      neighborhood: currentNeighborhood,
      status: currentStatus,
    };
    current[key] = value;
    for (const [k, v] of Object.entries(current)) {
      if (v !== "any") params.set(k, v);
    }
    const qs = params.toString();
    router.push(qs ? `${pathname}?${qs}` : pathname);
  }

  const selectClass =
    "bg-neutral-800 border border-neutral-700 text-neutral-200 text-sm rounded-lg px-3 py-2 focus:outline-none focus:border-neutral-500 transition-colors";

  return (
    <div className="mb-8 flex flex-wrap gap-3 items-center">
      <div className="flex items-center gap-2">
        <T>
          <label className="text-xs text-neutral-500">Bedrooms</label>
        </T>
        <select
          className={selectClass}
          value={currentBedrooms}
          onChange={(e) => updateFilter("bedrooms", e.target.value)}
        >
          <option value="any">{t("Any")}</option>
          <option value="0">{t("Studio")}</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3+</option>
        </select>
      </div>

      <div className="flex items-center gap-2">
        <T>
          <label className="text-xs text-neutral-500">Neighborhood</label>
        </T>
        <select
          className={selectClass}
          value={currentNeighborhood}
          onChange={(e) => updateFilter("neighborhood", e.target.value)}
        >
          <option value="any">{t("Any")}</option>
          <option value="Downtown">{t("Downtown")}</option>
          <option value="Waterfront">{t("Waterfront")}</option>
          <option value="Midtown">{t("Midtown")}</option>
          <option value="Suburbs">{t("Suburbs")}</option>
          <option value="Eastside">{t("Eastside")}</option>
          <option value="Northgate">{t("Northgate")}</option>
        </select>
      </div>

      <div className="flex items-center gap-2">
        <T>
          <label className="text-xs text-neutral-500">Status</label>
        </T>
        <select
          className={selectClass}
          value={currentStatus}
          onChange={(e) => updateFilter("status", e.target.value)}
        >
          <option value="any">{t("Any")}</option>
          <option value="available">{t("Available")}</option>
          <option value="pending">{t("Pending")}</option>
          <option value="leased">{t("Leased")}</option>
        </select>
      </div>
    </div>
  );
}

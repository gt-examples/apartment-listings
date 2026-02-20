import { T, Branch } from "gt-next";
import { getGT } from "gt-next/server";
import { LocaleSelector } from "gt-next";
import { Num, Currency, DateTime } from "gt-next";

interface Apartment {
  id: number;
  name: string;
  neighborhood: string;
  bedrooms: number;
  bathrooms: number;
  sqft: number;
  rent: number;
  availableFrom: string;
  features: string[];
  status: "available" | "pending" | "leased";
}

const apartments: Apartment[] = [
  {
    id: 1,
    name: "Sunset Terrace",
    neighborhood: "Downtown",
    bedrooms: 2,
    bathrooms: 1,
    sqft: 850,
    rent: 2400,
    availableFrom: "2026-03-01",
    features: ["In-unit laundry", "Balcony", "Parking"],
    status: "available",
  },
  {
    id: 2,
    name: "Harbor View Loft",
    neighborhood: "Waterfront",
    bedrooms: 1,
    bathrooms: 1,
    sqft: 620,
    rent: 1850,
    availableFrom: "2026-03-15",
    features: ["Gym access", "Rooftop deck"],
    status: "available",
  },
  {
    id: 3,
    name: "Elm Street Studio",
    neighborhood: "Midtown",
    bedrooms: 0,
    bathrooms: 1,
    sqft: 420,
    rent: 1200,
    availableFrom: "2026-02-20",
    features: ["Utilities included", "Pet friendly"],
    status: "pending",
  },
  {
    id: 4,
    name: "Maple Court",
    neighborhood: "Suburbs",
    bedrooms: 3,
    bathrooms: 2,
    sqft: 1200,
    rent: 3100,
    availableFrom: "2026-04-01",
    features: ["Garage", "Backyard", "Fireplace", "In-unit laundry"],
    status: "available",
  },
  {
    id: 5,
    name: "Pine Ridge Flat",
    neighborhood: "Eastside",
    bedrooms: 2,
    bathrooms: 2,
    sqft: 950,
    rent: 2750,
    availableFrom: "2026-03-10",
    features: ["Gym access", "Pool", "Concierge"],
    status: "leased",
  },
  {
    id: 6,
    name: "Birch Lane Apartment",
    neighborhood: "Northgate",
    bedrooms: 1,
    bathrooms: 1,
    sqft: 550,
    rent: 1450,
    availableFrom: "2026-05-01",
    features: ["Pet friendly", "Storage unit"],
    status: "available",
  },
];

function StatusBadge({ status }: { status: Apartment["status"] }) {
  const colors = {
    available: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
    pending: "bg-amber-500/10 text-amber-400 border-amber-500/20",
    leased: "bg-neutral-500/10 text-neutral-400 border-neutral-500/20",
  };
  return (
    <span
      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border ${colors[status]}`}
    >
      <T>
        <Branch
          branch={status}
          available="Available"
          pending="Pending"
          leased="Leased"
        />
      </T>
    </span>
  );
}

function FeatureTag({ feature }: { feature: string }) {
  return (
    <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-neutral-800 text-neutral-300 border border-neutral-700">
      {feature}
    </span>
  );
}

export default async function Home() {
  const gt = await getGT();

  const featureTranslations: Record<string, string> = {
    "In-unit laundry": gt("In-unit laundry"),
    Balcony: gt("Balcony"),
    Parking: gt("Parking"),
    "Gym access": gt("Gym access"),
    "Rooftop deck": gt("Rooftop deck"),
    "Utilities included": gt("Utilities included"),
    "Pet friendly": gt("Pet friendly"),
    Garage: gt("Garage"),
    Backyard: gt("Backyard"),
    Fireplace: gt("Fireplace"),
    Pool: gt("Pool"),
    Concierge: gt("Concierge"),
    "Storage unit": gt("Storage unit"),
  };

  const neighborhoodTranslations: Record<string, string> = {
    Downtown: gt("Downtown"),
    Waterfront: gt("Waterfront"),
    Midtown: gt("Midtown"),
    Suburbs: gt("Suburbs"),
    Eastside: gt("Eastside"),
    Northgate: gt("Northgate"),
  };

  return (
    <div className="min-h-screen bg-neutral-950 font-sans text-neutral-200">
      <header className="border-b border-neutral-800 bg-neutral-950">
        <div className="max-w-5xl mx-auto px-6 py-5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <a
              href="https://generaltranslation.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-neutral-400 hover:text-neutral-200 transition-colors"
            >
              General Translation
            </a>
            <span className="text-neutral-700">/</span>
            <h1 className="text-sm font-semibold text-neutral-100">
              {gt("Apartment Listings")}
            </h1>
          </div>
          <div className="flex items-center gap-3">
            <a
              href="https://github.com/gt-examples/apartment-listings"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-400 hover:text-neutral-200 transition-colors"
              aria-label="View on GitHub"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
              </svg>
            </a>
            <LocaleSelector />
          </div>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-6 py-12">
        <div className="mb-10">
          <T>
            <h2 className="text-2xl font-semibold text-neutral-100 mb-3">
              Find your next home
            </h2>
            <p className="text-base text-neutral-400 max-w-2xl leading-relaxed">
              Browse available apartments with rent prices, square footage, and
              availability dates. All listings are displayed with locale-aware
              formatting.
            </p>
          </T>
        </div>

        <div className="mb-6 p-3 rounded-lg bg-neutral-900 border border-neutral-800">
          <T>
            <p className="text-xs text-neutral-500">
              This is an example application built with General Translation to
              demonstrate internationalization. Listings are fictional.
            </p>
          </T>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {apartments.map((apt) => (
            <div
              key={apt.id}
              className="rounded-xl border border-neutral-800 bg-neutral-900 p-5 flex flex-col gap-4 hover:border-neutral-700 transition-colors"
            >
              <div className="flex items-start justify-between gap-2">
                <div>
                  <h3 className="text-base font-semibold text-neutral-100">
                    {apt.name}
                  </h3>
                  <p className="text-sm text-neutral-400">
                    {neighborhoodTranslations[apt.neighborhood] ??
                      apt.neighborhood}
                  </p>
                </div>
                <StatusBadge status={apt.status} />
              </div>

              <div className="text-2xl font-bold text-neutral-100">
                <T>
                  <Currency currency="USD">{apt.rent}</Currency>
                  <span className="text-sm font-normal text-neutral-500">
                    {" "}
                    / month
                  </span>
                </T>
              </div>

              <div className="grid grid-cols-3 gap-3 text-center">
                <div className="rounded-lg bg-neutral-800/50 p-2">
                  {apt.bedrooms === 0 ? (
                    <T>
                      <div className="text-sm font-semibold text-neutral-100">
                        Studio
                      </div>
                      <div className="text-xs text-neutral-500">Type</div>
                    </T>
                  ) : (
                    <T>
                      <div className="text-sm font-semibold text-neutral-100">
                        <Num>{apt.bedrooms}</Num>
                      </div>
                      <div className="text-xs text-neutral-500">Beds</div>
                    </T>
                  )}
                </div>
                <T>
                  <div className="rounded-lg bg-neutral-800/50 p-2">
                    <div className="text-sm font-semibold text-neutral-100">
                      <Num>{apt.bathrooms}</Num>
                    </div>
                    <div className="text-xs text-neutral-500">Baths</div>
                  </div>
                </T>
                <T>
                  <div className="rounded-lg bg-neutral-800/50 p-2">
                    <div className="text-sm font-semibold text-neutral-100">
                      <Num>{apt.sqft}</Num>
                    </div>
                    <div className="text-xs text-neutral-500">Sq Ft</div>
                  </div>
                </T>
              </div>

              <div>
                <T>
                  <p className="text-xs text-neutral-500 mb-1">
                    Available from
                  </p>
                </T>
                <p className="text-sm text-neutral-300">
                  <DateTime options={{ dateStyle: "medium" }}>
                    {new Date(apt.availableFrom)}
                  </DateTime>
                </p>
              </div>

              <div className="flex flex-wrap gap-1.5">
                {apt.features.map((f) => (
                  <FeatureTag
                    key={f}
                    feature={featureTranslations[f] ?? f}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

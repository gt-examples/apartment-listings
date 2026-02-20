import { T, Branch } from "gt-next";
import { getGT } from "gt-next/server";
import { Num, Currency, DateTime } from "gt-next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { apartments, getApartmentBySlug } from "@/data/apartments";
import type { Metadata } from "next";

export function generateStaticParams() {
  return apartments.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  const apt = getApartmentBySlug(slug);
  if (!apt) return {};
  const gt = await getGT();
  const title = gt("Apartment Listings | General Translation");
  const description = gt(
    "Browse apartment rental listings with rent prices, square footage, and availability dates."
  );
  return {
    title: `${apt.name} — ${title}`,
    description,
    openGraph: {
      title: `${apt.name} — ${title}`,
      description,
      locale,
      type: "website",
      siteName: "General Translation",
    },
    twitter: { card: "summary", title: `${apt.name} — ${title}`, description },
  };
}

// Pre-translate all apartment-specific strings as literals so gtx-cli can find them
async function getApartmentTranslations(slug: string) {
  const gt = await getGT();

  const descriptions: Record<string, string> = {
    "sunset-terrace": gt(
      "A bright corner unit with floor-to-ceiling windows offering panoramic views of the downtown skyline. The open-plan living area flows into a modern kitchen with quartz countertops and stainless steel appliances. The private balcony is perfect for morning coffee or evening relaxation."
    ),
    "harbor-view-loft": gt(
      "An industrial-chic loft with exposed brick walls, polished concrete floors, and soaring ceilings. The oversized windows frame views of the harbor and marina. The building includes a state-of-the-art fitness center and a shared rooftop deck with grilling stations."
    ),
    "elm-street-studio": gt(
      "A cozy and efficient studio apartment ideal for students or young professionals. The cleverly designed layout maximizes every square foot, with a murphy bed, built-in shelving, and a compact but fully equipped kitchenette. All utilities are included in the rent."
    ),
    "maple-court": gt(
      "A spacious family-friendly apartment in a quiet residential complex. The open living room features a wood-burning fireplace and flows into a bright dining area. The private backyard is fully fenced, and the attached two-car garage offers secure parking and extra storage."
    ),
    "pine-ridge-flat": gt(
      "A luxury flat in a full-service building with resort-style amenities. The unit features an open kitchen with a breakfast bar, a spacious living area, and two ensuite bedrooms. Residents enjoy a heated pool, fitness center, and 24-hour concierge service."
    ),
    "birch-lane-apartment": gt(
      "A charming one-bedroom apartment in a well-maintained brick building. The unit features original hardwood floors, updated fixtures, and a sunny eat-in kitchen. A private storage unit in the basement is included with the lease."
    ),
  };

  const neighborhoodInfos: Record<string, string> = {
    "sunset-terrace": gt(
      "Downtown is the cultural heart of the city, with restaurants, galleries, and theaters within walking distance. Public transit is steps away, and the waterfront park is a ten-minute stroll."
    ),
    "harbor-view-loft": gt(
      "The Waterfront district is a vibrant area with seafood restaurants, weekend farmers markets, and scenic walking trails along the harbor. The ferry terminal connects to nearby islands."
    ),
    "elm-street-studio": gt(
      "Midtown is a bustling neighborhood popular with students and creatives. Independent bookshops, coffee houses, and coworking spaces line the tree-shaded streets. The university campus is a short bus ride away."
    ),
    "maple-court": gt(
      "The Suburbs offer a peaceful atmosphere with tree-lined streets, top-rated schools, and family parks. A community shopping center with grocery stores and dining is a five-minute drive away."
    ),
    "pine-ridge-flat": gt(
      "The Eastside is an upscale neighborhood known for its boutique shopping, fine dining, and weekend art walks. Several parks and nature trails are nearby, and the expressway provides quick access to the city center."
    ),
    "birch-lane-apartment": gt(
      "Northgate is a quiet, established neighborhood with a strong community feel. Local bakeries, a weekly farmers market, and a large public library make it a comfortable place to call home. The light rail station is two blocks away."
    ),
  };

  const petPolicies: Record<string, string> = {
    "sunset-terrace": gt("Cats allowed, no dogs"),
    "harbor-view-loft": gt("No pets"),
    "elm-street-studio": gt("Pets welcome with deposit"),
    "maple-court": gt("Pets welcome, breed restrictions apply"),
    "pine-ridge-flat": gt("Small pets allowed with approval"),
    "birch-lane-apartment": gt("Pets welcome, no weight limit"),
  };

  const leaseTerms: Record<string, string> = {
    "sunset-terrace": gt("12-month minimum lease"),
    "harbor-view-loft": gt("12-month minimum lease"),
    "elm-street-studio": gt("6-month minimum lease"),
    "maple-court": gt("12-month minimum lease"),
    "pine-ridge-flat": gt("12-month minimum lease"),
    "birch-lane-apartment": gt("12-month minimum lease"),
  };

  return {
    description: descriptions[slug] ?? "",
    neighborhoodInfo: neighborhoodInfos[slug] ?? "",
    petPolicy: petPolicies[slug] ?? "",
    leaseTerms: leaseTerms[slug] ?? "",
  };
}

export default async function ApartmentDetailPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { slug } = await params;
  const apt = getApartmentBySlug(slug);
  if (!apt) notFound();

  const gt = await getGT();
  const translated = await getApartmentTranslations(slug);

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

  const amenityTranslations: Record<string, string> = {
    "Central heating and cooling": gt("Central heating and cooling"),
    "Hardwood floors": gt("Hardwood floors"),
    "Stainless steel appliances": gt("Stainless steel appliances"),
    "Quartz countertops": gt("Quartz countertops"),
    "Walk-in closet": gt("Walk-in closet"),
    "In-unit washer and dryer": gt("In-unit washer and dryer"),
    "Private balcony": gt("Private balcony"),
    "Dedicated parking spot": gt("Dedicated parking spot"),
    "Exposed brick walls": gt("Exposed brick walls"),
    "Polished concrete floors": gt("Polished concrete floors"),
    "High ceilings": gt("High ceilings"),
    "Building gym": gt("Building gym"),
    "Rooftop deck with grill": gt("Rooftop deck with grill"),
    "Bike storage": gt("Bike storage"),
    "Package locker system": gt("Package locker system"),
    "Controlled building access": gt("Controlled building access"),
    "Murphy bed": gt("Murphy bed"),
    "Built-in shelving": gt("Built-in shelving"),
    "Full kitchenette": gt("Full kitchenette"),
    "All utilities included": gt("All utilities included"),
    "Shared laundry room": gt("Shared laundry room"),
    "Bicycle parking": gt("Bicycle parking"),
    "On-site maintenance": gt("On-site maintenance"),
    "High-speed internet ready": gt("High-speed internet ready"),
    "Wood-burning fireplace": gt("Wood-burning fireplace"),
    "Private fenced backyard": gt("Private fenced backyard"),
    "Two-car garage": gt("Two-car garage"),
    "Central air conditioning": gt("Central air conditioning"),
    "Walk-in closets": gt("Walk-in closets"),
    Dishwasher: gt("Dishwasher"),
    "Playground on premises": gt("Playground on premises"),
    "Heated swimming pool": gt("Heated swimming pool"),
    "Fitness center": gt("Fitness center"),
    "24-hour concierge": gt("24-hour concierge"),
    "Breakfast bar": gt("Breakfast bar"),
    "Ensuite bathrooms": gt("Ensuite bathrooms"),
    "Visitor parking": gt("Visitor parking"),
    "Updated kitchen fixtures": gt("Updated kitchen fixtures"),
    "Eat-in kitchen": gt("Eat-in kitchen"),
    "Private basement storage": gt("Private basement storage"),
    "Shared courtyard": gt("Shared courtyard"),
    "On-site laundry": gt("On-site laundry"),
    "Street parking": gt("Street parking"),
    "Smoke-free building": gt("Smoke-free building"),
  };

  const statusColors = {
    available: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
    pending: "bg-amber-500/10 text-amber-400 border-amber-500/20",
    leased: "bg-neutral-500/10 text-neutral-400 border-neutral-500/20",
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
            <Link
              href="/"
              className="text-sm font-semibold text-neutral-400 hover:text-neutral-200 transition-colors"
            >
              {gt("Apartment Listings")}
            </Link>
            <span className="text-neutral-700">/</span>
            <span className="text-sm font-semibold text-neutral-100">
              {apt.name}
            </span>
          </div>
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
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-6 py-12">
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-sm text-neutral-400 hover:text-neutral-200 transition-colors mb-8"
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M19 12H5M12 19l-7-7 7-7" />
          </svg>
          <T>Back to all listings</T>
        </Link>

        <div className="grid gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2 space-y-8">
            <div>
              <div className="flex items-start justify-between gap-4 mb-2">
                <h1 className="text-2xl font-semibold text-neutral-100">
                  {apt.name}
                </h1>
                <span
                  className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border whitespace-nowrap ${statusColors[apt.status]}`}
                >
                  <T>
                    <Branch
                      branch={apt.status}
                      available="Available"
                      pending="Pending"
                      leased="Leased"
                    />
                  </T>
                </span>
              </div>
              <p className="text-sm text-neutral-400">
                {neighborhoodTranslations[apt.neighborhood] ??
                  apt.neighborhood}
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              <div className="rounded-lg bg-neutral-900 border border-neutral-800 p-4 text-center">
                {apt.bedrooms === 0 ? (
                  <T>
                    <div className="text-lg font-semibold text-neutral-100">
                      Studio
                    </div>
                    <div className="text-xs text-neutral-500 mt-1">Type</div>
                  </T>
                ) : (
                  <T>
                    <div className="text-lg font-semibold text-neutral-100">
                      <Num>{apt.bedrooms}</Num>
                    </div>
                    <div className="text-xs text-neutral-500 mt-1">
                      Bedrooms
                    </div>
                  </T>
                )}
              </div>
              <T>
                <div className="rounded-lg bg-neutral-900 border border-neutral-800 p-4 text-center">
                  <div className="text-lg font-semibold text-neutral-100">
                    <Num>{apt.bathrooms}</Num>
                  </div>
                  <div className="text-xs text-neutral-500 mt-1">Bathrooms</div>
                </div>
              </T>
              <T>
                <div className="rounded-lg bg-neutral-900 border border-neutral-800 p-4 text-center">
                  <div className="text-lg font-semibold text-neutral-100">
                    <Num>{apt.sqft}</Num>
                  </div>
                  <div className="text-xs text-neutral-500 mt-1">Sq Ft</div>
                </div>
              </T>
              <T>
                <div className="rounded-lg bg-neutral-900 border border-neutral-800 p-4 text-center">
                  <div className="text-lg font-semibold text-neutral-100">
                    <Num>{apt.floor}</Num>
                  </div>
                  <div className="text-xs text-neutral-500 mt-1">Floor</div>
                </div>
              </T>
            </div>

            <div>
              <T>
                <h2 className="text-lg font-semibold text-neutral-100 mb-3">
                  About this apartment
                </h2>
              </T>
              <p className="text-sm text-neutral-400 leading-relaxed">
                {translated.description}
              </p>
            </div>

            <div>
              <T>
                <h2 className="text-lg font-semibold text-neutral-100 mb-3">
                  Amenities
                </h2>
              </T>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {apt.amenities.map((amenity) => (
                  <div
                    key={amenity}
                    className="flex items-center gap-2 text-sm text-neutral-300"
                  >
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      className="text-emerald-400 shrink-0"
                    >
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                    {amenityTranslations[amenity] ?? amenity}
                  </div>
                ))}
              </div>
            </div>

            <div>
              <T>
                <h2 className="text-lg font-semibold text-neutral-100 mb-3">
                  Neighborhood
                </h2>
              </T>
              <p className="text-sm text-neutral-400 leading-relaxed">
                {translated.neighborhoodInfo}
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <div className="rounded-xl border border-neutral-800 bg-neutral-900 p-6">
              <div className="text-3xl font-bold text-neutral-100 mb-1">
                <T>
                  <Currency currency="USD">{apt.rent}</Currency>
                  <span className="text-sm font-normal text-neutral-500">
                    {" "}
                    / month
                  </span>
                </T>
              </div>
              <div className="space-y-3 mt-5">
                <div className="flex justify-between text-sm">
                  <T>
                    <span className="text-neutral-500">Security deposit</span>
                  </T>
                  <span className="text-neutral-200">
                    <Currency currency="USD">{apt.deposit}</Currency>
                  </span>
                </div>
                <div className="flex justify-between text-sm">
                  <T>
                    <span className="text-neutral-500">Available from</span>
                  </T>
                  <span className="text-neutral-200">
                    <DateTime options={{ dateStyle: "medium" }}>
                      {new Date(apt.availableFrom)}
                    </DateTime>
                  </span>
                </div>
                <div className="flex justify-between text-sm">
                  <T>
                    <span className="text-neutral-500">Year built</span>
                  </T>
                  <span className="text-neutral-200">{apt.yearBuilt}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <T>
                    <span className="text-neutral-500">Lease terms</span>
                  </T>
                  <span className="text-neutral-200">
                    {translated.leaseTerms}
                  </span>
                </div>
                <div className="flex justify-between text-sm">
                  <T>
                    <span className="text-neutral-500">Pet policy</span>
                  </T>
                  <span className="text-neutral-200">
                    {translated.petPolicy}
                  </span>
                </div>
              </div>

              <div className="border-t border-neutral-800 mt-5 pt-5">
                <div className="flex flex-wrap gap-1.5">
                  {apt.features.map((f) => (
                    <span
                      key={f}
                      className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-neutral-800 text-neutral-300 border border-neutral-700"
                    >
                      {featureTranslations[f] ?? f}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="rounded-xl border border-neutral-800 bg-neutral-900 p-6">
              <T>
                <h3 className="text-base font-semibold text-neutral-100 mb-3">
                  Interested in this apartment?
                </h3>
                <p className="text-sm text-neutral-400 mb-4">
                  Get in touch to schedule a viewing or ask questions about this
                  listing.
                </p>
              </T>
              <div className="space-y-3">
                <T>
                  <button className="w-full rounded-lg bg-neutral-100 text-neutral-900 text-sm font-medium py-2.5 hover:bg-neutral-200 transition-colors">
                    Schedule a viewing
                  </button>
                </T>
                <T>
                  <button className="w-full rounded-lg border border-neutral-700 text-neutral-200 text-sm font-medium py-2.5 hover:bg-neutral-800 transition-colors">
                    Send a message
                  </button>
                </T>
              </div>
              <T>
                <p className="text-xs text-neutral-600 mt-3 text-center">
                  This is a demo. No real inquiries are sent.
                </p>
              </T>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

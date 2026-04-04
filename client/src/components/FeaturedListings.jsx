import { useState } from "react";
import ListingCard from "./ListCard";
import { LISTINGS, FILTER_TABS } from "../data/constants";

export default function FeaturedListings() {
  const [activeFilter, setActiveFilter] = useState("All Stays");
  return (
    <section className="py-20 bg-indigo-50/50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div>
            <h2 className="text-3xl font-black text-slate-900 mb-2">Top PGs Near You</h2>
            <p className="text-slate-500">Curated premium stays in popular hubs</p>
          </div>
          <div className="flex flex-wrap gap-2">
            {FILTER_TABS.map((tab) => (
              <button key={tab} onClick={() => setActiveFilter(tab)}
                className={`px-4 py-2 rounded-full text-sm font-bold transition-all ${activeFilter === tab ? "bg-indigo-600 text-white shadow-md" : "bg-white border border-slate-200 text-slate-600 hover:border-indigo-600 hover:text-indigo-600"}`}>
                {tab}
              </button>
            ))}
          </div>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {LISTINGS.map((listing) => <ListingCard key={listing.name} listing={listing} />)}
        </div>
      </div>
    </section>
  );
}
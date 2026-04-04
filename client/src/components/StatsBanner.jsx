import { STATS } from "../data/constants";

export default function StatsBanner() {
  return (
    <section className="py-16 bg-indigo-600">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {STATS.map((stat) => (
            <div key={stat.label} className="text-center text-white">
              <p className="text-4xl md:text-5xl font-black mb-2">{stat.value}</p>
              <p className="text-indigo-100 font-medium">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
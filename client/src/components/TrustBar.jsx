import Icon from "./Icon";
import { TRUST_ITEMS } from "../data/constants";

export default function TrustBar() {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {TRUST_ITEMS.map((item) => (
            <div key={item.title} className="flex flex-col items-center text-center">
              <div className={`w-12 h-12 ${item.bg} ${item.color} rounded-full flex items-center justify-center mb-4`}>
                <Icon name={item.icon} />
              </div>
              <h3 className="font-bold text-slate-900">{item.title}</h3>
              <p className="text-xs text-slate-500 mt-1">{item.sub}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
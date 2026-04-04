import Icon from "./Icon";

export default function ListingCard({ listing }) {
  const { img, badge, name, rating, location, rent, deposit, tags } = listing;
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-xl border border-slate-100 group">
      <div className="relative h-64">
        <img src={img} alt={name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
        <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded-lg flex items-center gap-1">
          <Icon name="verified" className="text-green-600 text-sm" />
          <span className="text-[10px] font-bold uppercase text-slate-700 tracking-tighter">Verified</span>
        </div>
        {badge && (
          <div className="absolute top-4 right-4 bg-indigo-600 text-white px-3 py-1 rounded-lg text-[10px] font-bold uppercase tracking-tighter">{badge}</div>
        )}
      </div>
      <div className="p-6">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-lg font-bold text-slate-900">{name}</h3>
          <div className="flex items-center text-indigo-600">
            <Icon name="star" className="text-base" />
            <span className="text-sm font-bold ml-1">{rating}</span>
          </div>
        </div>
        <p className="text-slate-500 text-sm flex items-center gap-1 mb-4">
          <Icon name="location_on" className="text-sm" />{location}
        </p>
        <div className="bg-indigo-50/50 rounded-xl p-3 mb-6 flex justify-between items-center">
          <div>
            <p className="text-[10px] uppercase font-bold text-slate-400">Rent starts at</p>
            <p className="text-lg font-black text-indigo-600">{rent}<span className="text-xs font-normal text-slate-500">/mo</span></p>
          </div>
          <div className="text-right">
            <p className="text-[10px] uppercase font-bold text-slate-400">Security Dep.</p>
            <p className="text-sm font-bold text-slate-700">{deposit}</p>
          </div>
        </div>
        <div className="flex gap-2 mb-6 flex-wrap">
          {tags.map((tag) => (
            <span key={tag} className="px-2 py-1 bg-slate-100 rounded text-[10px] font-semibold text-slate-600 uppercase">{tag}</span>
          ))}
        </div>
        <button className="w-full bg-slate-900 text-white py-3 rounded-xl font-bold text-sm hover:bg-indigo-600 transition-colors">
           Check Details
        </button>
      </div>
    </div>
  );
}
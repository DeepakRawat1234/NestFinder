export default function ListingCard({ title, location ,link}) {
  return (
    <div className="bg-white rounded-lg shadow overflow-hidden">
      <img
        src={link}
        className="h-40 w-full object-cover"
      />

      <div className="p-4">
        <h3 className="font-bold text-lg">{title}</h3>
        <p className="text-gray-500 text-sm">{location}</p>

        <div className="flex justify-between mt-4 text-sm">
          <span>👁 1.2k</span>
          <span>📩 42</span>
        </div>
      </div>
    </div>
  );
}
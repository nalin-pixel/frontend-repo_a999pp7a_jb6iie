export default function CarCard({ car, onBook }) {
  const title = `${car.year} ${car.make} ${car.model}`;
  return (
    <div className="group rounded-xl bg-white shadow-sm ring-1 ring-slate-200 overflow-hidden hover:shadow-xl transition">
      {car.image && (
        <img src={car.image} alt={title} className="h-44 w-full object-cover" />
      )}
      <div className="p-4">
        <div className="flex items-start justify-between">
          <div>
            <h3 className="font-semibold text-slate-900">{title}</h3>
            <p className="text-sm text-slate-500">{car.transmission} • {car.fuel} • {car.seats || 5} seats</p>
          </div>
          <div className="text-right">
            <div className="text-xl font-bold">${car.daily_rate}
              <span className="text-xs text-slate-500 font-normal">/day</span>
            </div>
            {car.available ? (
              <span className="mt-1 inline-block text-xs text-emerald-600">Available</span>
            ) : (
              <span className="mt-1 inline-block text-xs text-rose-600">Unavailable</span>
            )}
          </div>
        </div>
        <div className="mt-4 flex gap-2">
          <button
            onClick={() => onBook(car)}
            className="flex-1 rounded-lg bg-slate-900 text-white px-4 py-2 font-medium hover:bg-slate-800 transition disabled:opacity-50"
            disabled={!car.available}
          >
            Book now
          </button>
        </div>
      </div>
    </div>
  );
}

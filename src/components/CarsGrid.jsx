import { useEffect, useState } from 'react';
import CarCard from './CarCard';

export default function CarsGrid({ onBook }) {
  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const API = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000';

  useEffect(() => {
    async function fetchCars() {
      try {
        setLoading(true);
        setError('');
        const res = await fetch(`${API}/cars`);
        if (!res.ok) throw new Error('Failed to load cars');
        const data = await res.json();
        setCars(data);
      } catch (e) {
        setError(e.message);
      } finally {
        setLoading(false);
      }
    }
    fetchCars();
  }, [API]);

  if (loading) {
    return (
      <section id="cars" className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-2xl font-semibold">Available cars</h2>
        <p className="text-slate-500 mt-2">Loading...</p>
      </section>
    );
  }

  if (error) {
    return (
      <section id="cars" className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-2xl font-semibold">Available cars</h2>
        <p className="text-rose-600 mt-2">{error}</p>
        <button
          onClick={async () => {
            try {
              await fetch(`${API}/seed`, { method: 'POST' });
              const res = await fetch(`${API}/cars`);
              const data = await res.json();
              setCars(data);
              setError('');
            } catch {}
          }}
          className="mt-4 rounded-md bg-slate-900 text-white px-4 py-2"
        >
          Seed sample cars
        </button>
      </section>
    );
  }

  return (
    <section id="cars" className="mx-auto max-w-6xl px-6 py-16">
      <div className="flex items-end justify-between gap-4">
        <div>
          <h2 className="text-3xl font-bold text-slate-900">Available cars</h2>
          <p className="text-slate-600">Pick your ride and get moving.</p>
        </div>
      </div>

      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {cars.map((car) => (
          <CarCard key={car._id} car={car} onBook={onBook} />
        ))}
      </div>
    </section>
  );
}

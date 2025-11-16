import { useState } from 'react';

export default function BookingModal({ car, onClose }) {
  const API = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000';
  const [form, setForm] = useState({
    name: '',
    email: '',
    start_date: '',
    end_date: '',
    pickup_location: 'Downtown',
    notes: ''
  });
  const [submitting, setSubmitting] = useState(false);
  const [message, setMessage] = useState('');

  if (!car) return null;

  const submit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setMessage('');
    try {
      const res = await fetch(`${API}/bookings`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          car_id: car._id,
          ...form,
        })
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.detail || 'Failed to create booking');
      setMessage('Booking confirmed! We\'ve sent a confirmation email.');
    } catch (e) {
      setMessage(e.message);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4">
      <div className="w-full max-w-lg rounded-2xl bg-white p-6 shadow-xl">
        <div className="flex items-start justify-between">
          <div>
            <h3 className="text-xl font-semibold text-slate-900">Book {car.make} {car.model}</h3>
            <p className="text-slate-600 text-sm">${car.daily_rate}/day</p>
          </div>
          <button onClick={onClose} className="rounded-md px-2 py-1 text-slate-500 hover:bg-slate-100">✕</button>
        </div>
        <form onSubmit={submit} className="mt-4 grid grid-cols-1 gap-3">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <input required placeholder="Your name" className="rounded-md border border-slate-300 px-3 py-2" value={form.name} onChange={(e)=>setForm({...form, name:e.target.value})} />
            <input required type="email" placeholder="Email" className="rounded-md border border-slate-300 px-3 py-2" value={form.email} onChange={(e)=>setForm({...form, email:e.target.value})} />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <input required type="date" className="rounded-md border border-slate-300 px-3 py-2" value={form.start_date} onChange={(e)=>setForm({...form, start_date:e.target.value})} />
            <input required type="date" className="rounded-md border border-slate-300 px-3 py-2" value={form.end_date} onChange={(e)=>setForm({...form, end_date:e.target.value})} />
          </div>
          <input placeholder="Pickup location" className="rounded-md border border-slate-300 px-3 py-2" value={form.pickup_location} onChange={(e)=>setForm({...form, pickup_location:e.target.value})} />
          <textarea placeholder="Notes (optional)" className="rounded-md border border-slate-300 px-3 py-2" value={form.notes} onChange={(e)=>setForm({...form, notes:e.target.value})} />
          <button disabled={submitting} className="mt-2 rounded-lg bg-slate-900 text-white px-4 py-2 font-medium hover:bg-slate-800 disabled:opacity-50">
            {submitting ? 'Booking...' : 'Confirm booking'}
          </button>
          {message && <p className="text-sm text-slate-700">{message}</p>}
        </form>
      </div>
    </div>
  );
}

import { useState } from 'react';
import Hero from './components/Hero';
import CarsGrid from './components/CarsGrid';
import BookingModal from './components/BookingModal';

function App() {
  const [selectedCar, setSelectedCar] = useState(null);

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <header className="fixed top-0 inset-x-0 z-40 backdrop-blur bg-white/60 border-b border-white/40">
        <div className="mx-auto max-w-6xl px-6 h-14 flex items-center justify-between">
          <div className="font-bold">SwiftRide</div>
          <nav className="hidden sm:flex gap-6 text-sm text-slate-600">
            <a href="#cars" className="hover:text-slate-900">Cars</a>
            <a href="#how" className="hover:text-slate-900">How it works</a>
            <a href="#contact" className="hover:text-slate-900">Contact</a>
          </nav>
          <a href="#cars" className="rounded-lg bg-slate-900 text-white px-3 py-1.5 text-sm font-medium">Book</a>
        </div>
      </header>
      <main className="pt-14">
        <Hero />
        <CarsGrid onBook={(car)=>setSelectedCar(car)} />
        <section id="how" className="mx-auto max-w-6xl px-6 py-20">
          <h2 className="text-3xl font-bold">How it works</h2>
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="rounded-xl border p-4">
              <div className="font-semibold">1. Choose your car</div>
              <p className="text-sm text-slate-600">Browse our curated fleet and pick what fits your trip.</p>
            </div>
            <div className="rounded-xl border p-4">
              <div className="font-semibold">2. Pick dates</div>
              <p className="text-sm text-slate-600">Select start and end dates. Transparent daily pricing.</p>
            </div>
            <div className="rounded-xl border p-4">
              <div className="font-semibold">3. Drive off</div>
              <p className="text-sm text-slate-600">Pick up at your chosen location and enjoy the ride.</p>
            </div>
          </div>
        </section>
        <footer id="contact" className="border-t py-10">
          <div className="mx-auto max-w-6xl px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-sm text-slate-600">© {new Date().getFullYear()} SwiftRide. All rights reserved.</div>
            <div className="text-sm text-slate-600">24/7 Support • support@swiftride.example</div>
          </div>
        </footer>
      </main>
      {selectedCar && <BookingModal car={selectedCar} onClose={() => setSelectedCar(null)} />}
    </div>
  );
}

export default App;

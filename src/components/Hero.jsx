import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative min-h-[80vh] w-full overflow-hidden bg-gradient-to-b from-slate-900 via-slate-900 to-slate-800 text-white">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/8fw9Z-c-rqW3nWBN/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="relative z-10 mx-auto max-w-6xl px-6 py-24">
        <div className="max-w-2xl">
          <span className="inline-flex items-center rounded-full bg-white/10 px-3 py-1 text-xs font-medium backdrop-blur">
            🚗 Two cars racing • Modern • Interactive
          </span>
          <h1 className="mt-6 text-4xl font-bold leading-tight sm:text-6xl">
            Rent your perfect ride in minutes
          </h1>
          <p className="mt-4 text-slate-300 text-lg">
            Choose from premium sedans, SUVs, and EVs. Transparent pricing, instant booking, and 24/7 support.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a href="#cars" className="inline-flex items-center justify-center rounded-lg bg-white text-slate-900 px-5 py-3 font-semibold shadow hover:shadow-lg transition">
              Browse cars
            </a>
            <a href="#how" className="inline-flex items-center justify-center rounded-lg bg-white/10 text-white px-5 py-3 font-semibold ring-1 ring-white/20 hover:bg-white/15 transition">
              How it works
            </a>
          </div>
        </div>
      </div>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent" />
    </section>
  );
}

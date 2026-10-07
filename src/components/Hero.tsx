import { Shield, Cloud, Lock, Cpu, ChevronRight } from 'lucide-react';

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden bg-stone-900"
    >
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-stone-900 via-stone-900 to-stone-900" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(180,83,9,0.12),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(217,119,6,0.08),transparent_50%)]" />

      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            'linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      <div className="relative mx-auto w-full max-w-7xl px-6 py-24 lg:py-32">
        <div className="max-w-3xl">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-amber-600/20 bg-amber-600/10 px-4 py-1.5 text-sm font-medium text-amber-400">
            <Shield className="h-4 w-4" />
            Microsoft Solutions Partner
          </div>

          <h1 className="text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
            Enterprise Microsoft &amp; Cloud Solutions, Delivered with Precision
          </h1>

          <p className="mt-6 text-lg leading-relaxed text-stone-300 sm:text-xl">
            UK BAKSHI LTD specialises in Microsoft Entra ID, Intune, Windows Autopilot,
            Azure Cloud, and cybersecurity — empowering organisations to modernise, secure,
            and scale their digital infrastructure with confidence.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-amber-700 px-7 py-3.5 font-semibold text-white shadow-lg shadow-amber-900/30 transition hover:bg-amber-600 hover:shadow-amber-800/40"
            >
              Get in Touch
              <ChevronRight className="h-5 w-5" />
            </a>
            <a
              href="#services"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-stone-600 bg-stone-800/50 px-7 py-3.5 font-semibold text-stone-200 backdrop-blur-sm transition hover:border-stone-500 hover:bg-stone-800"
            >
              Explore Services
            </a>
          </div>

          <div className="mt-14 grid grid-cols-2 gap-8 sm:grid-cols-4">
            {[
              { icon: Cloud, label: 'Azure Cloud' },
              { icon: Lock, label: 'Cybersecurity' },
              { icon: Shield, label: 'Identity & Access' },
              { icon: Cpu, label: 'AI & GenAI' },
            ].map(({ icon: Icon, label }) => (
              <div key={label} className="flex flex-col items-start gap-2">
                <Icon className="h-6 w-6 text-amber-500" />
                <span className="text-sm font-medium text-stone-400">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
}

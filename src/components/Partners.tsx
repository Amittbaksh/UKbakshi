import { Handshake } from 'lucide-react';

const PARTNERS = [
  {
    name: 'Tech Mahindra',
    description:
      'A global systems integrator and IT services leader. Through our partnership with Tech Mahindra, we extend our delivery capacity for large-scale Microsoft transformation programmes, bringing global scale and proven methodologies to UK enterprises.',
    accent: 'from-stone-700 to-stone-900',
    tag: 'Global Delivery Partner',
  },
  {
    name: 'SymphonyAI Retail',
    description:
      'A leader in AI-driven retail and CPaaS solutions. Our partnership with SymphonyAI Retail brings cutting-edge artificial intelligence and GenAI capabilities to retail clients — from demand forecasting to personalised customer experiences.',
    accent: 'from-amber-700 to-amber-900',
    tag: 'AI & Retail Partner',
  },
  {
    name: 'Viasat',
    description:
      'A global communications and satellite technology company. Our partnership with Viasat enables resilient, secure connectivity solutions that complement our cloud and cybersecurity offerings — critical for distributed and remote-first organisations.',
    accent: 'from-stone-600 to-stone-800',
    tag: 'Connectivity Partner',
  },
];

export default function Partners() {
  return (
    <section id="partners" className="bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-bold uppercase tracking-widest text-amber-700">
            Strategic Partners
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-stone-900 sm:text-4xl lg:text-5xl">
            Powering Solutions Through Trusted Alliances
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-stone-600">
            We collaborate with industry-leading technology partners to extend our capabilities
            and deliver comprehensive, end-to-end solutions.
          </p>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {PARTNERS.map(({ name, description, accent, tag }) => (
            <div
              key={name}
              className="group relative overflow-hidden rounded-2xl border border-stone-200 bg-white shadow-sm transition hover:shadow-xl hover:shadow-stone-200/60"
            >
              <div className={`h-2 bg-gradient-to-r ${accent}`} />
              <div className="p-8">
                <div className="mb-5 flex items-center gap-3">
                  <div
                    className={`flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${accent} text-white shadow-lg`}
                  >
                    <Handshake className="h-6 w-6" />
                  </div>
                  <span className="rounded-full bg-stone-100 px-3 py-1 text-xs font-semibold text-stone-600">
                    {tag}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-stone-900">{name}</h3>
                <p className="mt-4 text-sm leading-relaxed text-stone-600">{description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

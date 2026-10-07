import { Target, Eye, Award, Users } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-bold uppercase tracking-widest text-amber-700">About Us</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-stone-900 sm:text-4xl lg:text-5xl">
            Trusted Microsoft &amp; Cloud Transformation Partner
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-stone-600">
            UK BAKSHI LTD is a UK-based technology consultancy delivering enterprise-grade
            Microsoft solutions. We help organisations of all sizes navigate identity, security,
            device management, and cloud migration with a pragmatic, outcome-driven approach.
          </p>
        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {[
            {
              icon: Target,
              title: 'Our Mission',
              text: 'To simplify complex Microsoft ecosystems so businesses can focus on what matters most — their people and their growth.',
            },
            {
              icon: Eye,
              title: 'Our Vision',
              text: 'To be the most trusted Microsoft solutions partner in the UK, recognised for technical excellence and integrity.',
            },
            {
              icon: Award,
              title: 'Our Expertise',
              text: 'Deep, hands-on experience across the full Microsoft stack — from identity and security to cloud and AI.',
            },
            {
              icon: Users,
              title: 'Our Partners',
              text: 'Strategic alliances with Tech Mahindra, SymphonyAI, and Viasat extend our reach and capabilities globally.',
            },
          ].map(({ icon: Icon, title, text }) => (
            <div
              key={title}
              className="group rounded-2xl border border-stone-200 bg-stone-50 p-8 transition hover:border-amber-200 hover:shadow-lg hover:shadow-amber-100/40"
            >
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-amber-700 text-white shadow-lg shadow-amber-800/20 transition group-hover:scale-110">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-bold text-stone-900">{title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-stone-600">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

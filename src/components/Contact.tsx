import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import ContactForm from './ContactForm';

export default function Contact() {
  return (
    <section id="contact" className="bg-stone-50 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-bold uppercase tracking-widest text-amber-700">Contact</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-stone-900 sm:text-4xl lg:text-5xl">
            Let&apos;s Build Something Together
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-stone-600">
            Whether you need a full Microsoft migration or targeted security hardening,
            our team is ready to help. Send us a message and we&apos;ll respond within 1–2 business days.
          </p>
        </div>

        <div className="mt-16 grid gap-12 lg:grid-cols-5">
          {/* Contact info */}
          <div className="lg:col-span-2">
            <div className="space-y-6">
              {[
                {
                  icon: Mail,
                  label: 'Email Us',
                  value: 'info@ukbakshi.com',
                  href: 'mailto:info@ukbakshi.com',
                },
                {
                  icon: Phone,
                  label: 'Call Us',
                  value: '+44 20 0000 0000',
                  href: 'tel:+442000000000',
                },
                {
                  icon: MapPin,
                  label: 'Location',
                  value: 'United Kingdom',
                  href: null,
                },
                {
                  icon: Clock,
                  label: 'Business Hours',
                  value: 'Mon–Fri, 9:00 AM – 5:30 PM GMT',
                  href: null,
                },
              ].map(({ icon: Icon, label, value, href }) => (
                <div key={label} className="flex items-start gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-amber-700 text-white shadow-lg shadow-amber-800/20">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-stone-500">{label}</p>
                    {href ? (
                      <a
                        href={href}
                        className="text-base font-medium text-stone-900 transition hover:text-amber-700"
                      >
                        {value}
                      </a>
                    ) : (
                      <p className="text-base font-medium text-stone-900">{value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10 rounded-2xl border border-amber-100 bg-amber-50 p-6">
              <h3 className="font-bold text-amber-900">Why choose UK BAKSHI LTD?</h3>
              <ul className="mt-3 space-y-2 text-sm text-amber-800">
                <li>Microsoft-certified engineers and architects</li>
                <li>Proven delivery across enterprise and SMB</li>
                <li>Security-first approach to every engagement</li>
                <li>Transparent pricing and clear timelines</li>
              </ul>
            </div>
          </div>

          {/* Contact form */}
          <div className="lg:col-span-3">
            <div className="rounded-2xl border border-stone-200 bg-white p-8 shadow-sm">
              <h3 className="mb-6 text-xl font-bold text-stone-900">Send Us a Message</h3>
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

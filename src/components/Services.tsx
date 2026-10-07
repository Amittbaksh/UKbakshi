import {
  KeyRound,
  Smartphone,
  Rocket,
  ShieldCheck,
  Cloud,
  Mail,
  Lock,
  Sparkles,
} from 'lucide-react';

const SERVICES = [
  {
    icon: KeyRound,
    title: 'Microsoft Entra ID',
    text: 'Identity and access management at scale — conditional access, MFA, B2B/B2C collaboration, privileged identity, and governance.',
  },
  {
    icon: Smartphone,
    title: 'Intune',
    text: 'Mobile device and application management with Microsoft Intune — secure BYOD, corporate devices, and app protection policies.',
  },
  {
    icon: Rocket,
    title: 'Windows Autopilot',
    text: 'Zero-touch device provisioning and deployment. Streamline onboarding with self-deploying Windows devices straight from the OEM.',
  },
  {
    icon: ShieldCheck,
    title: 'Conditional Access',
    text: 'Granular, risk-based access policies that protect your data without frustrating users — adaptive security at every sign-in.',
  },
  {
    icon: Cloud,
    title: 'Azure Cloud',
    text: 'Cloud migration, architecture, and optimisation on Azure — IaaS, PaaS, hybrid scenarios, cost management, and governance.',
  },
  {
    icon: Mail,
    title: 'Microsoft 365',
    text: 'Full M365 deployment and management — Exchange Online, SharePoint, Teams, and productivity suite adoption and governance.',
  },
  {
    icon: Lock,
    title: 'Cybersecurity',
    text: 'End-to-end security posture hardening — threat protection, SIEM/SOC with Sentinel, vulnerability management, and compliance.',
  },
  {
    icon: Sparkles,
    title: 'AI & GenAI',
    text: 'Harness Microsoft Copilot, Azure OpenAI, and custom GenAI solutions to automate workflows and unlock intelligent insights.',
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-stone-50 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-bold uppercase tracking-widest text-amber-700">Services</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-stone-900 sm:text-4xl lg:text-5xl">
            Comprehensive Microsoft &amp; Cloud Services
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-stone-600">
            From identity and security to cloud and AI, we cover the full spectrum of
            Microsoft technologies to modernise and protect your organisation.
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map(({ icon: Icon, title, text }) => (
            <div
              key={title}
              className="group rounded-2xl border border-stone-200 bg-white p-7 transition hover:-translate-y-1 hover:border-amber-200 hover:shadow-xl hover:shadow-amber-100/40"
            >
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-amber-50 text-amber-700 transition group-hover:bg-amber-700 group-hover:text-white">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="text-base font-bold text-stone-900">{title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-stone-600">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

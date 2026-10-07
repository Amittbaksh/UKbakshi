import { KeyRound, Smartphone, Rocket, ShieldCheck, Cloud, Mail, Lock, Sparkles, ArrowRight } from 'lucide-react';

const EXPERTISE = [
  {
    icon: KeyRound,
    title: 'Microsoft Entra ID',
    points: [
      'Tenant design, hybrid sync, and directory hardening',
      'Conditional access, MFA, and passwordless authentication',
      'Privileged Identity Management (PIM) and access reviews',
      'B2B and B2C identity collaboration',
    ],
  },
  {
    icon: Smartphone,
    title: 'Intune',
    points: [
      'Device enrolment and compliance policy design',
      'App protection policies for BYOD and corporate devices',
      'Autopilot integration for zero-touch provisioning',
      'Configuration profiles and endpoint analytics',
    ],
  },
  {
    icon: Rocket,
    title: 'Windows Autopilot',
    points: [
      'Autopilot profile design and deployment',
      'OEM/ reseller registration and hardware hashing',
      'Self-deploying and user-driven enrolment flows',
      'Entra ID Join and hybrid join scenarios',
    ],
  },
  {
    icon: ShieldCheck,
    title: 'Conditional Access',
    points: [
      'Risk-based and location-based access policies',
      'Session controls and continuous access evaluation',
      'Integration with Defender for Cloud and Identity Protection',
      'Break-glass account planning and policy testing',
    ],
  },
  {
    icon: Cloud,
    title: 'Azure Cloud',
    points: [
      'Landing zone design and cloud migration strategy',
      'IaaS / PaaS architecture and hybrid connectivity',
      'Cost optimisation and Azure governance frameworks',
      'Infrastructure-as-Code with Bicep and ARM templates',
    ],
  },
  {
    icon: Mail,
    title: 'Microsoft 365',
    points: [
      'Tenant setup, migration, and mailbox coexistence',
      'ShareOnline, Teams, and collaboration governance',
      'Sensitivity labels and data loss prevention (DLP)',
      'Adoption and change management services',
    ],
  },
  {
    icon: Lock,
    title: 'Cybersecurity',
    points: [
      'Security posture assessment and hardening',
      'Microsoft Sentinel SIEM and SOC operations',
      'Threat hunting with Defender XDR suite',
      'ISO 27001, Cyber Essentials, and compliance mapping',
    ],
  },
  {
    icon: Sparkles,
    title: 'AI & GenAI',
    points: [
      'Microsoft Copilot readiness and deployment',
      'Azure OpenAI custom model integration',
      'RAG pipelines and enterprise knowledge mining',
      'AI governance, responsible AI, and cost control',
    ],
  },
];

export default function MicrosoftExpertise() {
  return (
    <section id="expertise" className="relative overflow-hidden bg-stone-900 py-24 lg:py-32">
      {/* Background accents */}
      <div className="absolute inset-0 bg-gradient-to-b from-stone-900 to-stone-900" />
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            'linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-bold uppercase tracking-widest text-amber-500">
            Microsoft Expertise
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Deep Technical Capabilities Across the Microsoft Stack
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-stone-400">
            Our certified engineers bring years of hands-on experience across identity,
            endpoint, cloud, security, and AI — covering every layer of your Microsoft estate.
          </p>
        </div>

        <div className="mt-16 grid gap-6 lg:grid-cols-2">
          {EXPERTISE.map(({ icon: Icon, title, points }) => (
            <div
              key={title}
              className="group rounded-2xl border border-stone-700/50 bg-stone-800/40 p-7 backdrop-blur-sm transition hover:border-amber-600/30 hover:bg-stone-800/70"
            >
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-amber-700/15 text-amber-500 transition group-hover:bg-amber-700 group-hover:text-white">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-bold text-white">{title}</h3>
              </div>
              <ul className="mt-5 space-y-3">
                {points.map((point) => (
                  <li key={point} className="flex items-start gap-3 text-sm text-stone-400">
                    <ArrowRight className="mt-0.5 h-4 w-4 shrink-0 text-amber-600" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

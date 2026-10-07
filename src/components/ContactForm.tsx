import { useState, type FormEvent } from 'react';
import { supabase } from '@/lib/supabase';
import { Send, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';

const SERVICES = [
  'Microsoft Entra ID',
  'Intune',
  'Windows Autopilot',
  'Conditional Access',
  'Azure Cloud',
  'Microsoft 365',
  'Cybersecurity',
  'AI & GenAI',
  'General Enquiry',
];

export default function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = (formData.get('name') as string)?.trim();
    const email = (formData.get('email') as string)?.trim();
    const company = (formData.get('company') as string)?.trim() || null;
    const phone = (formData.get('phone') as string)?.trim() || null;
    const service = (formData.get('service') as string) || null;
    const message = (formData.get('message') as string)?.trim();

    if (!name || !email || !message) {
      setStatus('error');
      setErrorMessage('Please fill in your name, email, and message.');
      return;
    }

    setStatus('submitting');
    setErrorMessage('');

    const { error } = await supabase.from('contact_submissions').insert({
      name,
      email,
      company,
      phone,
      service,
      message,
    });

    if (error) {
      setStatus('error');
      setErrorMessage('Something went wrong sending your message. Please try again.');
      return;
    }

    setStatus('success');
    e.currentTarget.reset();
  }

  if (status === 'success') {
    return (
      <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-8 text-center">
        <CheckCircle2 className="mx-auto h-14 w-14 text-emerald-600" />
        <h3 className="mt-4 text-xl font-bold text-emerald-900">Message sent successfully</h3>
        <p className="mt-2 text-emerald-700">
          Thank you for reaching out. Our team will get back to you within 1–2 business days.
        </p>
        <button
          onClick={() => setStatus('idle')}
          className="mt-6 rounded-lg border border-emerald-300 px-5 py-2.5 font-semibold text-emerald-700 transition hover:bg-emerald-100"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {status === 'error' && (
        <div className="flex items-center gap-3 rounded-lg border border-red-200 bg-red-50 p-4 text-red-700">
          <AlertCircle className="h-5 w-5 shrink-0" />
          <span className="text-sm font-medium">{errorMessage}</span>
        </div>
      )}

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-1.5 block text-sm font-semibold text-stone-700">
            Full Name <span className="text-red-500">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            className="w-full rounded-lg border border-stone-300 px-4 py-2.5 text-stone-900 outline-none transition focus:border-amber-600 focus:ring-2 focus:ring-amber-200"
            placeholder="Jane Smith"
          />
        </div>
        <div>
          <label htmlFor="email" className="mb-1.5 block text-sm font-semibold text-stone-700">
            Email <span className="text-red-500">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className="w-full rounded-lg border border-stone-300 px-4 py-2.5 text-stone-900 outline-none transition focus:border-amber-600 focus:ring-2 focus:ring-amber-200"
            placeholder="jane@company.com"
          />
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="company" className="mb-1.5 block text-sm font-semibold text-stone-700">
            Company
          </label>
          <input
            id="company"
            name="company"
            type="text"
            className="w-full rounded-lg border border-stone-300 px-4 py-2.5 text-stone-900 outline-none transition focus:border-amber-600 focus:ring-2 focus:ring-amber-200"
            placeholder="Company Ltd"
          />
        </div>
        <div>
          <label htmlFor="phone" className="mb-1.5 block text-sm font-semibold text-stone-700">
            Phone
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            className="w-full rounded-lg border border-stone-300 px-4 py-2.5 text-stone-900 outline-none transition focus:border-amber-600 focus:ring-2 focus:ring-amber-200"
            placeholder="+44 7000 000000"
          />
        </div>
      </div>

      <div>
        <label htmlFor="service" className="mb-1.5 block text-sm font-semibold text-stone-700">
          Service of Interest
        </label>
        <select
          id="service"
          name="service"
          className="w-full rounded-lg border border-stone-300 px-4 py-2.5 text-stone-900 outline-none transition focus:border-amber-600 focus:ring-2 focus:ring-amber-200"
          defaultValue=""
        >
          <option value="" disabled>
            Select a service
          </option>
          {SERVICES.map((s) => (
            <option key={s} value={s}>
              {s}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="message" className="mb-1.5 block text-sm font-semibold text-stone-700">
          Message <span className="text-red-500">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className="w-full resize-y rounded-lg border border-stone-300 px-4 py-2.5 text-stone-900 outline-none transition focus:border-amber-600 focus:ring-2 focus:ring-amber-200"
          placeholder="Tell us about your project or requirements..."
        />
      </div>

      <button
        type="submit"
        disabled={status === 'submitting'}
        className="flex w-full items-center justify-center gap-2 rounded-lg bg-amber-700 px-6 py-3.5 font-semibold text-white shadow-lg shadow-amber-800/20 transition hover:bg-amber-800 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {status === 'submitting' ? (
          <>
            <Loader2 className="h-5 w-5 animate-spin" />
            Sending...
          </>
        ) : (
          <>
            <Send className="h-5 w-5" />
            Send Message
          </>
        )}
      </button>
    </form>
  );
}

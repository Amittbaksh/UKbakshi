import { Shield } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-stone-800 bg-stone-900 py-12">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
          <div className="flex items-center gap-2.5">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-amber-700 text-white">
              <Shield className="h-5 w-5" />
            </div>
            <span className="text-lg font-bold text-white">UK BAKSHI LTD</span>
          </div>

          <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-stone-400">
            <a href="#home" className="transition hover:text-white">Home</a>
            <a href="#about" className="transition hover:text-white">About Us</a>
            <a href="#services" className="transition hover:text-white">Services</a>
            <a href="#expertise" className="transition hover:text-white">Expertise</a>
            <a href="#partners" className="transition hover:text-white">Partners</a>
            <a href="#contact" className="transition hover:text-white">Contact</a>
          </nav>
        </div>

        <div className="mt-8 border-t border-stone-800 pt-8 text-center">
          <p className="text-sm text-stone-500">
            &copy; {new Date().getFullYear()} UK BAKSHI LTD. All rights reserved.
            Microsoft, Azure, Microsoft 365, and Intune are trademarks of Microsoft Corporation.
          </p>
        </div>
      </div>
    </footer>
  );
}

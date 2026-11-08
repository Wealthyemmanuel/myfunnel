import React, { useState } from 'react';
import { SubscriberData, MAILERLITE_ACTION_URL } from '../types';
import { User, Mail, Lock } from 'lucide-react';

interface OptinPageProps {
  onSuccess: (data: SubscriberData) => void;
  subscriber: SubscriberData;
}

export const OptinPage: React.FC<OptinPageProps> = ({ onSuccess, subscriber }) => {
  const [name, setName] = useState(subscriber.name || '');
  const [email, setEmail] = useState(subscriber.email || '');
  const [isLoading, setIsLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) {
      setErrorMsg('Please enter your name to continue');
      return;
    }
    if (!email.trim() || !email.includes('@')) {
      setErrorMsg('Please enter a valid email address');
      return;
    }

    setIsLoading(true);
    setErrorMsg(null);

    const leadData: SubscriberData = {
      name: name.trim(),
      email: email.trim(),
      submittedAt: new Date().toISOString(),
    };

    // Submit to MailerLite endpoint in background
    try {
      const formData = new FormData();
      formData.append('fields[name]', leadData.name);
      formData.append('fields[email]', leadData.email);
      formData.append('ml-submit', '1');
      formData.append('anticsrf', 'true');

      fetch(MAILERLITE_ACTION_URL, {
        method: 'POST',
        body: formData,
        mode: 'no-cors',
      }).catch((err) => {
        console.warn('MailerLite sync note:', err);
      });
    } catch (err) {
      console.warn('Form dispatch handled:', err);
    }

    // Save and transition to the Story page
    setTimeout(() => {
      setIsLoading(false);
      onSuccess(leadData);
    }, 450);
  };

  return (
    <div className="min-h-screen bg-black text-white flex flex-col justify-between selection:bg-cyan-400 selection:text-black">
      {/* Main Hero Container - Starts cleanly with NO bars or headers above the preheader */}
      <main className="flex-1 max-w-4xl mx-auto px-4 sm:px-6 py-12 md:py-20 flex flex-col items-center justify-center text-center">
        {/* Preheader */}
        <div className="mb-4">
          <p className="text-cyan-400 font-extrabold text-base sm:text-lg md:text-xl tracking-wider uppercase drop-shadow-[0_0_12px_rgba(6,182,212,0.6)]">
            IF YOU HAVE A SMARTPHONE AND YOU ARE NOT MAKING PASSIVE INCOME WITH IT, THIS IS FOR YOU
          </p>
        </div>

        {/* Main Headline */}
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight text-white uppercase leading-[1.1] mb-6 max-w-3xl">
          WHO ELSE WANTS TO LEARN HOW TO MAKE{' '}
          <span className="text-cyan-400 underline decoration-cyan-500 decoration-4 underline-offset-4">
            $2,000 ONLINE
          </span>{' '}
          USING THEIR SMARTPHONE?
        </h1>

        {/* Sub-headline */}
        <p className="text-slate-300 text-base sm:text-lg md:text-xl font-normal max-w-2xl mb-10 leading-relaxed">
          Without owning a single product, without renting a shop, and without burning cash on expensive ads.
          Discover the exact blueprint that took complete beginners from zero to over $20k with free organic traffic.
        </p>

        {/* Rearranged MailerLite Form Card */}
        <div className="w-full max-w-lg bg-neutral-900/90 border border-neutral-800 rounded-2xl p-6 sm:p-8 shadow-2xl">
          <p className="text-slate-300 text-sm font-medium mb-5">
            Fill in your details below to get instant access:
          </p>

          <form onSubmit={handleSubmit} className="space-y-4 text-left">
            {errorMsg && (
              <div className="p-3 rounded-lg bg-red-950/80 border border-red-500/50 text-red-200 text-xs">
                {errorMsg}
              </div>
            )}

            {/* Field 1: Name */}
            <div>
              <label htmlFor="lead-name" className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1.5">
                Your First Name <span className="text-cyan-400">*</span>
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                  <User className="w-4 h-4" />
                </div>
                <input
                  id="lead-name"
                  type="text"
                  name="fields[name]"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Emmanuel"
                  className="w-full pl-10 pr-4 py-3 bg-black border border-neutral-700 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 rounded-lg text-white placeholder-neutral-500 text-sm transition outline-none"
                />
              </div>
            </div>

            {/* Field 2: Email */}
            <div>
              <label htmlFor="lead-email" className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1.5">
                Your Best Email Address <span className="text-cyan-400">*</span>
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                  <Mail className="w-4 h-4" />
                </div>
                <input
                  id="lead-email"
                  type="email"
                  name="fields[email]"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="e.g. name@example.com"
                  className="w-full pl-10 pr-4 py-3 bg-black border border-neutral-700 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 rounded-lg text-white placeholder-neutral-500 text-sm transition outline-none"
                />
              </div>
            </div>

            {/* CTA Button */}
            <div className="pt-2">
              <button
                type="submit"
                disabled={isLoading}
                className="w-full py-4 px-6 bg-cyan-400 hover:bg-cyan-300 active:scale-[0.99] text-black font-black text-base sm:text-lg tracking-wider uppercase rounded-lg transition duration-200 shadow-[0_0_25px_rgba(6,182,212,0.4)] hover:shadow-[0_0_35px_rgba(6,182,212,0.7)] flex items-center justify-center gap-2 cursor-pointer disabled:opacity-70"
              >
                {isLoading ? (
                  <div className="flex items-center gap-2">
                    <div className="w-5 h-5 border-2 border-black border-t-transparent rounded-full animate-spin"></div>
                    <span>LOADING...</span>
                  </div>
                ) : (
                  <span>&gt; CLICK HERE &amp; GET INSTANT ACCESS &lt;</span>
                )}
              </button>
            </div>

            {/* Privacy notice */}
            <div className="flex items-center justify-center gap-1.5 text-[11px] text-neutral-400 pt-1">
              <Lock className="w-3.5 h-3.5 text-cyan-400" />
              <span>100% privacy. Zero spam. Unsubscribe anytime.</span>
            </div>
          </form>
        </div>

        {/* Statement below the form */}
        <div className="mt-8 text-center max-w-lg px-4">
          <p className="text-base sm:text-lg md:text-xl font-bold text-slate-200 tracking-wide">
            In the next <span className="text-cyan-400 font-extrabold underline decoration-cyan-400/40 underline-offset-4">30 minutes – 1 hour</span>, I will show you how.
          </p>
        </div>
      </main>

      {/* Footer */}
      <footer className="w-full border-t border-neutral-900 py-6 px-4 text-center text-xs text-neutral-500">
        <div className="max-w-4xl mx-auto space-y-2">
          <p className="font-bold text-neutral-400 tracking-wider uppercase">
            NAVAL &bull; EMMANUEL IFENNA NSODUKWA
          </p>
          <div className="flex items-center justify-center gap-4 text-neutral-400 text-xs pt-1">
            <a href="#terms" onClick={(e) => e.preventDefault()} className="hover:text-cyan-400 transition">Terms</a>
            <span>&bull;</span>
            <a href="#privacy" onClick={(e) => e.preventDefault()} className="hover:text-cyan-400 transition">Privacy</a>
            <span>&bull;</span>
            <a href="#disclaimer" onClick={(e) => e.preventDefault()} className="hover:text-cyan-400 transition">Disclaimer</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

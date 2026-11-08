import React from 'react';
import { SubscriberData, TARGET_URL } from '../types';
import {
  ArrowRight,
  Gift,
  Mail,
  Zap,
  CheckCircle2,
  Quote,
  ShieldCheck,
  Sparkles
} from 'lucide-react';

interface StoryPageProps {
  subscriber: SubscriberData;
}

export const StoryPage: React.FC<StoryPageProps> = ({ subscriber }) => {
  const beforePhoto = 'https://i.ibb.co/6cgknL8N/Screenshot-20250626-134238-Drive.jpg';
  const afterPhoto = 'https://i.ibb.co/b5GxMwhC/i54kw8.jpg';

  const bonuses = [
    { id: 1, title: 'Private Community Membership of Active Marketers', desc: 'Direct peer network and daily accountability.' },
    { id: 2, title: 'Monthly Interactive Live Q&A Sessions', desc: 'Real-time answers and campaign feedback.' },
    { id: 3, title: 'Social Media Cash-Flow Playbook', desc: 'How to turn idle smartphone chatting into recurring income.' },
    { id: 4, title: 'Organic Traffic Generation System ($0 Ad Spend)', desc: 'How to reach eager prospects without spending on ads.' },
    { id: 5, title: 'Complete Internet Marketing Resource Vault', desc: 'Templates, frameworks, and proven swipe files.' },
    { id: 6, title: 'Done-For-You WhatsApp Closing Scripts', desc: 'Plug-and-play conversation scripts you can use immediately.' },
    { id: 7, title: 'High-Converting Presentation Guide', desc: 'How to present recommendations so people ask to buy.' },
    { id: 8, title: 'Toyin Omotoso’s “201 Marketing Lessons”', desc: 'Exclusive wisdom from the founder of Expertnaire.' },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 selection:bg-cyan-400 selection:text-black">
      {/* 1. THANK YOU & FREE GIFT HEADER BANNER */}
      <section className="bg-gradient-to-b from-cyan-950/70 via-slate-900 to-slate-950 border-b border-cyan-800/30 py-8 px-4 text-center">
        <div className="max-w-3xl mx-auto">
          {/* Registration Confirmed Notice */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-400/30 text-cyan-300 text-xs font-bold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>Registration Confirmed</span>
          </div>

          <h1 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight mb-3">
            Thank You For Signing Up To Learn This Secret!
          </h1>

          {/* Email Free Gift Alert */}
          <div className="my-4 p-4 rounded-xl bg-slate-900/90 border border-cyan-500/40 max-w-xl mx-auto flex items-center gap-3 text-left">
            <div className="p-2.5 rounded-lg bg-cyan-500/20 text-cyan-300 shrink-0">
              <Gift className="w-5 h-5" />
            </div>
            <div>
              <p className="text-sm font-bold text-white flex items-center gap-1.5">
                <Mail className="w-4 h-4 text-cyan-400" /> Check your email right now!
              </p>
              <p className="text-xs text-slate-300 mt-0.5">
                I just sent you a <strong className="text-cyan-300">free gift</strong> for registering. Please check your inbox (and check your spam/promotions folder just in case).
              </p>
            </div>
          </div>

          <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto mb-6">
            Hey <span className="text-cyan-400 font-bold">{subscriber.name || 'Friend'}</span>, before you see the full blueprint on the next page, here is a quick 2-minute message about how I started.
          </p>

          {/* CALL TO ACTION #1 (TOP) */}
          <div className="pt-1">
            <a
              href={TARGET_URL}
              className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-8 py-4 bg-cyan-400 hover:bg-cyan-300 active:scale-95 text-slate-950 font-black text-sm sm:text-base uppercase tracking-wider rounded-xl shadow-[0_0_25px_rgba(6,182,212,0.45)] hover:shadow-[0_0_35px_rgba(6,182,212,0.7)] transition"
            >
              <span>👉 Click Here To See The Complete Blueprint Now</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* 2. THE STORY LETTER */}
      <main className="max-w-3xl mx-auto px-4 sm:px-6 py-10 leading-relaxed font-normal text-slate-200">
        <article className="space-y-6 text-base sm:text-lg">
          {/* Header Meta */}
          <div className="border-b border-slate-800 pb-3 text-xs sm:text-sm text-slate-400 flex items-center justify-between">
            <div>
              <span className="text-cyan-400 font-bold uppercase">From:</span> Naval (Emmanuel Ifenna Nsodukwa)
            </div>
            <div>
              <span className="text-cyan-400 font-bold uppercase">Subject:</span> The Real Story &amp; The Blueprint
            </div>
          </div>

          <p className="text-xl sm:text-2xl font-bold text-white pt-2">
            Dear Friend,
          </p>

          <p>
            My name is <strong className="text-white">Emmanuel Ifenna Nsodukwa</strong>. Most people who know me online call me <strong className="text-cyan-400 font-bold">Naval</strong>.
          </p>

          <p>
            Before I show you the blueprint, I need to tell you the real story of how I started. The short, raw truth.
          </p>

          {/* 2023 Story & Before Photo */}
          <div className="p-5 rounded-2xl bg-slate-900 border border-slate-800 space-y-4">
            <p className="font-bold text-cyan-300 text-sm uppercase tracking-wider">
              2023: Broke, Invisible, and Questioning Everything
            </p>
            <p className="text-sm sm:text-base text-slate-300">
              It started in 2023 right after I graduated secondary school. I had failed my exams. Just like that, every plan I had for my future felt erased. No roadmap, no certainty, no hope—just the heavy weight of feeling like a failure.
            </p>
            <p className="text-sm sm:text-base text-slate-300">
              I wasn&apos;t from a wealthy home. My parents provided what they could, but there were things I wanted that nobody could hand me: <strong className="text-white">a pair of shoes I picked out myself, or enough money to take someone out somewhere nice.</strong>
            </p>

            {/* Before Photo */}
            <div className="pt-2 text-center">
              <div className="inline-block rounded-xl overflow-hidden border-2 border-slate-700 bg-black max-w-sm">
                <img
                  src={beforePhoto}
                  alt="Naval - Emmanuel Ifenna Nsodukwa (Before)"
                  className="w-full max-h-80 object-cover object-top"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
                <div className="p-2.5 bg-slate-950 text-xs text-slate-300 font-medium">
                  📸 <span className="text-red-400 font-bold">BEFORE:</span> Broke, confused, and trying to find a way out in 2023.
                </div>
              </div>
            </div>
          </div>

          <h2 className="text-xl sm:text-2xl font-black text-white pt-2">
            The Search Begins — And The Scam That Made Me Walk Away
          </h2>

          <p>
            So I went looking for a way to make money online with my phone. I spent six months on TikTok and YouTube watching videos about dropshipping, crypto, and freelancing. I burned what little money I had on courses that went nowhere.
          </p>

          <p>
            Then I noticed the dirty cycle everyone was running:
          </p>

          <blockquote className="border-l-2 border-cyan-400 pl-4 py-2 italic text-slate-300 bg-slate-900/60 rounded-r-lg">
            &quot;Host a free WhatsApp masterclass, promise to teach affiliate marketing, sell them the exact course you just bought, and have them repeat the cycle.&quot;
          </blockquote>

          <p>
            It was a pyramid scheme disguised as a business.
            I couldn&apos;t do it. How could I teach someone something I hadn&apos;t figured out myself?
          </p>

          <p>
            So I walked away. Instead, I dug deep into real copywriting and human psychology.
          </p>

          {/* Breakthrough & After Photo */}
          <div className="p-5 rounded-2xl bg-gradient-to-r from-slate-900 via-cyan-950/40 to-slate-900 border border-cyan-800/40 my-6 space-y-4">
            <h3 className="text-lg sm:text-xl font-black text-cyan-300 flex items-center gap-2">
              <Zap className="w-5 h-5 text-cyan-400" />
              The Turning Point: ZTHA Academy &amp; Trust Engineering
            </h3>
            <p className="text-sm sm:text-base text-slate-300">
              Then Gabriel Simon introduced me to ZTHA Academy (where I became a proud graduate of Batch 4).
              There, one principle rearranged everything I thought I knew:
            </p>
            <p className="text-base sm:text-lg font-bold text-white">
              👉 <span className="text-cyan-400">TRUST ENGINEERING</span>.
            </p>
            <p className="text-sm sm:text-base text-slate-300">
              I realized that people don&apos;t fail because of the economy or the price. People buy iPhones and bet on Bet9ja every week.
              When people don&apos;t buy, it&apos;s simply because: <strong className="text-white">&quot;They do not trust you yet.&quot;</strong>
            </p>
            <p className="text-sm sm:text-base text-slate-300">
              Once you learn how to engineer trust using simple WhatsApp conversations and your phone, you don&apos;t need to spend millions on ads or build complicated websites. People reach out to you and willingly ask you how to get started.
            </p>

            {/* After Photo */}
            <div className="pt-2 text-center">
              <div className="inline-block rounded-xl overflow-hidden border-2 border-cyan-500/50 bg-black max-w-sm shadow-[0_0_20px_rgba(6,182,212,0.3)]">
                <img
                  src={afterPhoto}
                  alt="Naval - Emmanuel Ifenna Nsodukwa (After)"
                  className="w-full max-h-80 object-cover object-top"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
                <div className="p-2.5 bg-slate-950 text-xs text-slate-300 font-medium">
                  ✨ <span className="text-cyan-400 font-bold">AFTER:</span> Confident, building real leverage, and guiding others to win.
                </div>
              </div>
            </div>
          </div>

          {/* CALL TO ACTION #2 (MIDDLE) */}
          <div className="my-8 p-6 rounded-2xl bg-slate-900 border border-cyan-500/30 text-center space-y-3 shadow-lg">
            <h3 className="text-xl sm:text-2xl font-extrabold text-white">
              Ready To See The Exact System In Action?
            </h3>
            <p className="text-slate-300 text-xs sm:text-sm max-w-md mx-auto">
              See the documented blueprint that took beginners from zero to over $20k with free smartphone traffic.
            </p>
            <div className="pt-2">
              <a
                href={TARGET_URL}
                className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-7 py-3.5 bg-cyan-400 hover:bg-cyan-300 text-slate-950 font-black text-sm uppercase tracking-wider rounded-xl transition"
              >
                <span>👉 Click Here To Discover How The Blueprint Works</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          <h2 className="text-xl sm:text-2xl font-black text-white pt-2">
            Real Proof From Real Beginners
          </h2>

          <p>
            This isn&apos;t theory. Here is what happened when everyday people applied this exact blueprint:
          </p>

          <div className="space-y-3 my-4">
            <div className="p-4 rounded-xl bg-slate-900 border border-slate-800">
              <div className="flex justify-between items-center mb-1">
                <span className="font-bold text-white text-base">Chigozie Mmebo</span>
                <span className="text-xs text-cyan-400 font-semibold">Ex-Jumia Staff</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-300">
                Was looking for an extra 10k. Went on to make over N1.15M in single weekly payouts and won a Toyota Camry car.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-900 border border-slate-800">
              <div className="flex justify-between items-center mb-1">
                <span className="font-bold text-white text-base">Caleb Nwanneka</span>
                <span className="text-xs text-cyan-400 font-semibold">Student</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-300">
                Received N2,020,000 in payouts, generated 8 figures on WhatsApp in 9 months, and won a car and a trip to Egypt.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-900 border border-slate-800">
              <div className="flex justify-between items-center mb-1">
                <span className="font-bold text-white text-base">Joseph Ineh</span>
                <span className="text-xs text-cyan-400 font-semibold">Organic Marketer</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-300">
                Did over $9,000 in recommendations without spending a single dime on ads.
              </p>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 flex items-start gap-3 my-4">
            <Quote className="w-6 h-6 text-cyan-400 shrink-0 mt-0.5" />
            <p className="text-xs sm:text-sm text-slate-300 italic">
              &ldquo;This is not theory. It is based on real-world results that made Bruno one of the top earners in Nigeria. A clear roadmap that will lead you to real internet profits.&rdquo; — <strong className="text-white">Toyin Omotoso (Founder, Expertnaire)</strong>
            </p>
          </div>

          {/* BONUSES OVERVIEW */}
          <div className="my-8 p-6 rounded-2xl bg-neutral-900 border border-cyan-800/40 space-y-4">
            <div className="flex items-center gap-2">
              <Gift className="w-5 h-5 text-cyan-400" />
              <h3 className="text-lg sm:text-xl font-bold text-white">
                All These Materials &amp; Bonuses Are Waiting For You:
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs sm:text-sm">
              {bonuses.map((b) => (
                <div key={b.id} className="p-3 rounded-lg bg-black/60 border border-neutral-800 flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-white">{b.title}</span>
                    <p className="text-neutral-400 text-xs">{b.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Clean bonus instruction without sales talk */}
            <div className="pt-2 text-center">
              <p className="text-sm font-medium text-cyan-300">
                👉 If you want to get your hands on all these materials, templates, and bonuses, you should check out the next page!
              </p>
            </div>
          </div>

          {/* Guarantee note */}
          <div className="p-4 rounded-xl bg-emerald-950/30 border border-emerald-500/30 flex items-start gap-3">
            <ShieldCheck className="w-6 h-6 text-emerald-400 shrink-0 mt-0.5" />
            <p className="text-xs sm:text-sm text-slate-300">
              <strong className="text-white">30-Day Peace of Mind:</strong> If you review the blueprint and put the steps into practice for 30 days and don&apos;t get value, you can request a complete refund. No stress.
            </p>
          </div>

          <div className="pt-2 space-y-3">
            <p className="text-slate-300">
              You are just one real idea away from changing everything.
            </p>
            <p className="text-white font-bold">
              Dream Big, Market Smart,<br />
              <span className="text-cyan-400 text-lg">Naval (Emmanuel Ifenna Nsodukwa)</span>
            </p>
          </div>

          {/* CALL TO ACTION #3 (BOTTOM) */}
          <div className="pt-6 pb-4">
            <div className="p-6 sm:p-8 rounded-2xl bg-neutral-900 border-2 border-cyan-400 text-center space-y-4 shadow-[0_0_30px_rgba(6,182,212,0.3)]">
              <h3 className="text-xl sm:text-2xl font-black text-white uppercase tracking-tight">
                SEE THE COMPLETE BLUEPRINT &amp; ALL BONUSES
              </h3>
              <p className="text-slate-300 text-xs sm:text-sm max-w-md mx-auto">
                Click below to proceed directly to the next page and get complete access.
              </p>

              <div>
                <a
                  href={TARGET_URL}
                  className="inline-flex items-center justify-center gap-2 w-full py-4 px-6 bg-cyan-400 hover:bg-cyan-300 active:scale-95 text-slate-950 font-black text-base uppercase tracking-wider rounded-xl transition cursor-pointer"
                >
                  <span>👉 Click Here To Go To The Next Page &amp; See Everything</span>
                  <ArrowRight className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </article>
      </main>

      {/* Footer */}
      <footer className="w-full border-t border-slate-900 py-6 px-4 text-center text-xs text-slate-500">
        <p className="text-slate-400">
          Naval &bull; Emmanuel Ifenna Nsodukwa
        </p>
      </footer>
    </div>
  );
};

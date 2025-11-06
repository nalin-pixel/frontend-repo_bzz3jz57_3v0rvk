import { Rocket, Lock, Play } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-indigo-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/20 text-indigo-200 border border-indigo-400/30 mb-6">
            <Lock className="h-4 w-4" />
            Master Cybersecurity
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold leading-tight">
            Launch your cybersecurity career with a full‑fledged LMS
          </h1>
          <p className="mt-4 text-slate-200 text-lg">
            Hands‑on labs, attack/defense drills, quizzes, and certificates—all in one place.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <button className="inline-flex items-center gap-2 px-5 py-3 rounded-md bg-indigo-600 hover:bg-indigo-700">
              <Rocket className="h-4 w-4" /> Start Learning
            </button>
            <button className="inline-flex items-center gap-2 px-5 py-3 rounded-md border border-white/20 hover:bg-white/10">
              <Play className="h-4 w-4" /> Watch Demo
            </button>
          </div>
          <div className="mt-6 text-sm text-slate-300">
            • Red/Blue Team paths • CTF‑style labs • Skill tracking • Certificates
          </div>
        </div>
        <div className="relative">
          <div className="aspect-video rounded-xl border border-white/10 bg-gradient-to-br from-indigo-600/30 to-sky-500/30 p-4">
            <div className="h-full w-full rounded-lg bg-slate-900/60 grid place-items-center text-center">
              <div>
                <div className="text-6xl font-black tracking-tight">LMS</div>
                <div className="mt-2 text-slate-300">Cyber ranges • Labs • Quizzes</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

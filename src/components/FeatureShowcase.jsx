import { Trophy, LineChart, Layers, BadgeCheck } from "lucide-react";

const features = [
  {
    icon: Trophy,
    title: "CTF-Style Labs",
    desc: "Hands-on challenges with flags, hints, and write-ups.",
  },
  {
    icon: LineChart,
    title: "Skill Tracking",
    desc: "Progress analytics, streaks, and role-based goals.",
  },
  {
    icon: Layers,
    title: "Learning Paths",
    desc: "Red/Blue/Cloud Security paths with prerequisites.",
  },
  {
    icon: BadgeCheck,
    title: "Certificates",
    desc: "Generate shareable certificates after final exams.",
  },
];

function Feature({ icon: Icon, title, desc }) {
  return (
    <div className="p-6 rounded-xl border border-slate-200 bg-white hover:shadow-md transition">
      <div className="h-10 w-10 grid place-items-center rounded-lg bg-indigo-600 text-white">
        <Icon className="h-5 w-5" />
      </div>
      <h3 className="mt-4 font-semibold text-slate-900">{title}</h3>
      <p className="mt-1 text-slate-600 text-sm">{desc}</p>
    </div>
  );
}

export default function FeatureShowcase() {
  return (
    <section id="features" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-slate-900">Built for security education</h2>
        <p className="text-slate-600">Everything you need to deliver world-class cyber training</p>
        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f) => (
            <Feature key={f.title} {...f} />
          ))}
        </div>
      </div>
    </section>
  );
}

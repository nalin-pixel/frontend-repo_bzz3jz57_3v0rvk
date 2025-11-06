import { ShieldCheck, Terminal, Wifi, Bug } from "lucide-react";

const courses = [
  {
    id: 1,
    title: "Network Security Fundamentals",
    level: "Beginner",
    lessons: 18,
    icon: Wifi,
    color: "from-indigo-500 to-sky-500",
  },
  {
    id: 2,
    title: "Ethical Hacking & Pentesting",
    level: "Intermediate",
    lessons: 24,
    icon: Bug,
    color: "from-rose-500 to-orange-500",
  },
  {
    id: 3,
    title: "Blue Team: Incident Response",
    level: "Intermediate",
    lessons: 20,
    icon: ShieldCheck,
    color: "from-emerald-500 to-teal-500",
  },
  {
    id: 4,
    title: "Linux Foundations for Security",
    level: "Beginner",
    lessons: 15,
    icon: Terminal,
    color: "from-slate-600 to-slate-800",
  },
];

function CourseCard({ course }) {
  const Icon = course.icon;
  return (
    <div className="group rounded-xl border border-slate-200 bg-white overflow-hidden hover:shadow-xl transition-shadow">
      <div className={`h-24 bg-gradient-to-r ${course.color} relative`}></div>
      <div className="p-5">
        <div className="flex items-center gap-2">
          <div className="-mt-12 h-12 w-12 grid place-items-center rounded-lg bg-white border border-slate-200 shadow-sm">
            <Icon className="h-6 w-6 text-slate-800" />
          </div>
          <span className="ml-auto text-xs px-2 py-1 rounded-full bg-slate-100 text-slate-600">
            {course.level}
          </span>
        </div>
        <h3 className="mt-3 font-semibold text-slate-900">{course.title}</h3>
        <p className="mt-1 text-sm text-slate-600">{course.lessons} lessons</p>
        <button className="mt-4 inline-flex items-center gap-2 text-indigo-600 hover:text-indigo-700 font-medium">
          View syllabus →
        </button>
      </div>
    </div>
  );
}

export default function CourseGrid() {
  return (
    <section id="courses" className="bg-slate-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-6">
          <div>
            <h2 className="text-2xl font-bold text-slate-900">Popular Courses</h2>
            <p className="text-slate-600">Curated tracks for red and blue teams</p>
          </div>
          <button className="hidden sm:inline-flex px-3 py-2 rounded-md border border-slate-300 hover:bg-white">
            Browse all
          </button>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {courses.map((c) => (
            <CourseCard key={c.id} course={c} />
          ))}
        </div>
      </div>
    </section>
  );
}

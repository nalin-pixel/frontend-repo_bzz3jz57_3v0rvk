import { Shield, User } from "lucide-react";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="p-2 rounded-md bg-indigo-600 text-white">
            <Shield className="h-5 w-5" />
          </div>
          <span className="font-semibold text-slate-900">CyberLearn LMS</span>
        </div>
        <nav className="hidden md:flex items-center gap-6 text-slate-600">
          <a href="#courses" className="hover:text-slate-900">Courses</a>
          <a href="#tracks" className="hover:text-slate-900">Learning Paths</a>
          <a href="#features" className="hover:text-slate-900">Features</a>
          <a href="#contact" className="hover:text-slate-900">Contact</a>
        </nav>
        <div className="flex items-center gap-2">
          <button className="hidden sm:inline-flex items-center gap-2 px-3 py-2 rounded-md border border-slate-300 text-slate-700 hover:bg-slate-50">
            <User className="h-4 w-4" />
            Sign in
          </button>
          <button className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-indigo-600 text-white hover:bg-indigo-700">
            Get Started
          </button>
        </div>
      </div>
    </header>
  );
}

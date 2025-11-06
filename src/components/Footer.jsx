export default function Footer() {
  return (
    <footer id="contact" className="bg-slate-900 text-slate-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-white font-semibold">CyberLearn LMS</h3>
            <p className="mt-2 text-sm">
              A modern platform for teaching cybersecurity through hands-on labs and structured paths.
            </p>
          </div>
          <div>
            <h4 className="text-white font-medium">Resources</h4>
            <ul className="mt-2 space-y-1 text-sm">
              <li><a href="#courses" className="hover:underline">Courses</a></li>
              <li><a href="#tracks" className="hover:underline">Learning Paths</a></li>
              <li><a href="#features" className="hover:underline">Features</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-medium">Contact</h4>
            <p className="mt-2 text-sm">hello@cyberlearn.example</p>
            <p className="text-sm">Mon–Fri, 9am–6pm</p>
          </div>
        </div>
        <div className="mt-10 border-t border-white/10 pt-6 text-xs text-slate-400">
          © {new Date().getFullYear()} CyberLearn. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

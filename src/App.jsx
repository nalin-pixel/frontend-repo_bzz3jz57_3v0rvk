import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import CourseGrid from "./components/CourseGrid";
import FeatureShowcase from "./components/FeatureShowcase";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <CourseGrid />
        <FeatureShowcase />
      </main>
      <Footer />
    </div>
  );
}

export default App;

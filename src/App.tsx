import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Publications } from './components/Publications';
import { Projects } from './components/Projects';
import { News } from './components/News';
import { Awards } from './components/Awards';
import { AcademicService } from './components/AcademicService';
import { Hobbies } from './components/Hobbies';
import { Affiliations } from './components/Affiliations'; 

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <main className="max-w-3xl mx-auto px-6 py-12">
        <Hero />
        <About />
        
        <Publications />
        <Projects />
        <News />
        <Awards />
        <AcademicService />
        <Affiliations />
        <Hobbies />
      </main>
      <footer className="border-t border-gray-200 mt-20">
        <div className="max-w-3xl mx-auto px-6 py-8 text-center text-gray-500">
          © 2025 · Last updated December 2025
        </div>
      </footer>
    </div>
  );
}
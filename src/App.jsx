import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';

function Footer() {
  return (
    <footer className="border-t border-gray-200 dark:border-neutral-800 py-8 mt-10">
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8 flex items-center justify-between text-sm text-gray-600 dark:text-gray-400">
        <p>© 2025 Vaibhav J P</p>
        <p>Built with ❤️ using React & Tailwind CSS.</p>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-neutral-950 selection:bg-blue-500/20 selection:text-blue-700 dark:selection:text-blue-300">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

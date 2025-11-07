import { useEffect, useState } from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const linkClasses =
    'text-sm md:text-base text-gray-600 dark:text-gray-300 hover:text-primary-500 dark:hover:text-primary-400 transition-colors';

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all ${
      scrolled ? 'backdrop-blur bg-white/70 dark:bg-neutral-900/60 shadow-sm' : 'bg-transparent'
    }`}>
      <nav className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#home" className="font-semibold tracking-tight text-gray-900 dark:text-white">
          Vaibhav J P
        </a>
        <div className="hidden md:flex items-center gap-6">
          <a href="#about" className={linkClasses}>About</a>
          <a href="#projects" className={linkClasses}>Projects</a>
          <a href="#contact" className={linkClasses}>Contact</a>
        </div>
        <div className="flex items-center gap-3">
          <a
            href="https://github.com/geeky-vaiiib"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-neutral-800 transition-colors"
          >
            <Github className="h-5 w-5" />
          </a>
          <a
            href="https://www.linkedin.com/in/vaibhav-jp-687256314/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-neutral-800 transition-colors"
          >
            <Linkedin className="h-5 w-5" />
          </a>
          <a
            href="#contact"
            className="ml-1 inline-flex items-center rounded-md bg-gradient-to-r from-blue-500 to-cyan-500 px-3 py-2 text-sm font-medium text-white shadow-sm hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Say Hi
          </a>
        </div>
      </nav>
    </header>
  );
}

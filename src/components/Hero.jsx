import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] pt-24 overflow-hidden">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/60 via-white/40 to-white dark:from-neutral-950/60 dark:via-neutral-950/40 dark:to-neutral-950" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 md:px-6 lg:px-8 flex items-center">
        <div className="max-w-3xl py-16">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl font-extrabold tracking-tight text-gray-900 dark:text-white"
          >
            Hi, I’m Vaibhav J P 👋
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.05 }}
            className="mt-4 text-lg md:text-xl text-gray-700 dark:text-gray-300"
          >
            Learning, Building & Innovating for the Web
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="mt-2 text-base md:text-lg text-gray-600 dark:text-gray-400"
          >
            Full-Stack Developer | Open-Source Contributor
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="mt-8 flex flex-wrap gap-3"
          >
            <a href="#projects" className="inline-flex items-center rounded-md bg-gradient-to-r from-blue-500 to-cyan-500 px-5 py-3 text-sm md:text-base font-semibold text-white shadow-lg shadow-blue-500/20 hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
              View My Work
            </a>
            <a href="#contact" className="inline-flex items-center rounded-md border border-gray-300 dark:border-neutral-700 px-5 py-3 text-sm md:text-base font-semibold text-gray-900 dark:text-white hover:bg-gray-50 dark:hover:bg-neutral-900">
              Let’s Talk
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-10 text-gray-600 dark:text-gray-400"
          >
            <span className="mr-2">Typing:</span>
            <TypingWords words={[
              'Web Developer',
              'Open-Source Contributor',
              'Lifelong Learner',
            ]} />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function TypingWords({ words }) {
  const duration = 2000;
  return (
    <span className="inline-flex h-6 items-center overflow-hidden align-middle">
      {words.map((word, i) => (
        <motion.span
          key={word}
          initial={{ y: '100%', opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: '-100%', opacity: 0 }}
          transition={{ duration: 0.5, delay: (i * duration) / 1000 }}
          className="absolute"
        >
          {word}
        </motion.span>
      ))}
    </span>
  );
}

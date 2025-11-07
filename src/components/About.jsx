import { User, MapPin, GraduationCap } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="relative py-20">
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-10 items-start">
          <div className="md:col-span-1">
            <div className="relative mx-auto w-40 h-40 overflow-hidden rounded-full ring-4 ring-blue-500/20">
              <img
                src="https://avatars.githubusercontent.com/u/174812781?v=4"
                alt="Vaibhav J P"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
          <div className="md:col-span-2">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900 dark:text-white">About Me</h2>
            <p className="mt-4 text-gray-700 dark:text-gray-300 leading-relaxed">
              I’m Vaibhav J P, a web developer passionate about building scalable web apps and learning by doing. Currently studying at
              <span className="font-medium"> Siddaganga Institute of Technology</span>, I love exploring TypeScript, JavaScript, and open-source development. I believe in solving problems creatively and continuously improving my craft.
            </p>
            <div className="mt-6 grid sm:grid-cols-2 gap-4">
              <Info icon={MapPin} label="Mysuru, Karnataka, India" />
              <Info icon={GraduationCap} label="Student at Siddaganga Institute of Technology" />
              <Info icon={User} label="Web & Open-Source Enthusiast" />
            </div>
            <div className="mt-6 flex gap-3">
              <a
                href="https://github.com/geeky-vaiiib"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center rounded-md bg-gradient-to-r from-blue-500 to-cyan-500 px-4 py-2 text-sm font-semibold text-white shadow hover:opacity-90"
              >
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/vaibhav-jp-687256314/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center rounded-md border border-gray-300 dark:border-neutral-700 px-4 py-2 text-sm font-semibold text-gray-900 dark:text-white hover:bg-gray-50 dark:hover:bg-neutral-900"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Info({ icon: Icon, label }) {
  return (
    <div className="flex items-center gap-3 text-gray-700 dark:text-gray-300">
      <Icon className="h-5 w-5 text-blue-500" />
      <span className="text-sm md:text-base">{label}</span>
    </div>
  );
}

import { Mail, Github, Linkedin } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="relative py-20">
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <div className="mb-8">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900 dark:text-white">Contact</h2>
          <p className="mt-2 text-gray-600 dark:text-gray-400">Let’s collaborate or talk tech! Feel free to reach out for projects, ideas, or just to say hi.</p>
        </div>
        <div className="grid md:grid-cols-2 gap-10">
          <form action="https://formspree.io/f/mgvwjgqv" method="POST" className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Name</label>
              <input name="name" required className="mt-1 w-full rounded-md border border-gray-300 dark:border-neutral-700 bg-white dark:bg-neutral-950 px-3 py-2 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Email</label>
              <input type="email" name="email" required className="mt-1 w-full rounded-md border border-gray-300 dark:border-neutral-700 bg-white dark:bg-neutral-950 px-3 py-2 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Message</label>
              <textarea name="message" rows="5" required className="mt-1 w-full rounded-md border border-gray-300 dark:border-neutral-700 bg-white dark:bg-neutral-950 px-3 py-2 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>
            <button type="submit" className="inline-flex items-center rounded-md bg-gradient-to-r from-blue-500 to-cyan-500 px-5 py-3 text-sm font-semibold text-white shadow hover:opacity-90">
              Send Message
            </button>
          </form>

          <div className="space-y-4">
            <a href="mailto:vaibhav@example.com" className="flex items-center gap-3 text-gray-700 dark:text-gray-300 hover:underline">
              <Mail className="h-5 w-5" /> vaibhav@example.com
            </a>
            <a href="https://github.com/geeky-vaiiib" target="_blank" rel="noreferrer" className="flex items-center gap-3 text-gray-700 dark:text-gray-300 hover:underline">
              <Github className="h-5 w-5" /> github.com/geeky-vaiiib
            </a>
            <a href="https://www.linkedin.com/in/vaibhav-jp-687256314/" target="_blank" rel="noreferrer" className="flex items-center gap-3 text-gray-700 dark:text-gray-300 hover:underline">
              <Linkedin className="h-5 w-5" /> LinkedIn Profile
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

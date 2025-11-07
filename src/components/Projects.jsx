import { useEffect, useState } from 'react';
import { Github, ExternalLink } from 'lucide-react';

const HIGHLIGHTED = ['ReNova', 'ServeToSave', 'BankEase', 'ProdEase', 'AlumniVerse', 'Uni-Bot'];

export default function Projects() {
  const [repos, setRepos] = useState([]);
  const [filter, setFilter] = useState('All');

  useEffect(() => {
    async function fetchRepos() {
      try {
        const res = await fetch('https://api.github.com/users/geeky-vaiiib/repos?per_page=100&sort=updated');
        const data = await res.json();
        const list = data
          .filter((r) => HIGHLIGHTED.includes(r.name))
          .map((r) => ({
            id: r.id,
            name: r.name,
            description: r.description,
            html_url: r.html_url,
            homepage: r.homepage,
            topics: r.topics || [],
            language: r.language,
          }));
        setRepos(list);
      } catch (e) {
        console.error(e);
      }
    }
    fetchRepos();
  }, []);

  const tags = ['All', ...Array.from(new Set(repos.flatMap((r) => [r.language, ...(r.topics || [])]).filter(Boolean)))];
  const filtered = filter === 'All' ? repos : repos.filter((r) => r.language === filter || (r.topics || []).includes(filter));

  return (
    <section id="projects" className="relative py-20">
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <div className="mb-8">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900 dark:text-white">Projects</h2>
          <p className="mt-2 text-gray-600 dark:text-gray-400">Selected work highlighting learning-by-building and open-source spirit.</p>
        </div>

        <div className="mb-8 flex flex-wrap gap-2">
          {tags.map((t) => (
            <button
              key={t}
              onClick={() => setFilter(t)}
              className={`rounded-full border px-3 py-1 text-sm transition ${
                filter === t
                  ? 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white border-transparent'
                  : 'border-gray-300 dark:border-neutral-700 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-neutral-900'
              }`}
            >
              {t}
            </button>
          ))}
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((r) => (
            <article
              key={r.id}
              className="group relative rounded-xl border border-gray-200 dark:border-neutral-800 bg-white dark:bg-neutral-950 p-5 shadow-sm hover:shadow-lg transition-shadow"
            >
              <div className="aspect-video w-full rounded-lg bg-gradient-to-br from-blue-500/10 to-cyan-500/10 ring-1 ring-inset ring-gray-200 dark:ring-neutral-800 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{r.name}</h3>
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-400 line-clamp-3">
                {r.description || 'A modern web app project by Vaibhav.'}
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                {[r.language, ...(r.topics || [])].filter(Boolean).slice(0, 4).map((t) => (
                  <span key={t} className="text-xs rounded-full bg-gray-100 dark:bg-neutral-900 border border-gray-200 dark:border-neutral-800 px-2 py-0.5 text-gray-700 dark:text-gray-300">
                    {t}
                  </span>
                ))}
              </div>
              <div className="mt-5 flex items-center gap-3">
                <a
                  href={r.html_url}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1 text-sm text-gray-800 dark:text-gray-200 hover:underline"
                >
                  <Github className="h-4 w-4" /> View on GitHub
                </a>
                {r.homepage && (
                  <a
                    href={r.homepage}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 text-sm text-primary-600 dark:text-primary-400 hover:underline"
                  >
                    <ExternalLink className="h-4 w-4" /> Live Demo
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

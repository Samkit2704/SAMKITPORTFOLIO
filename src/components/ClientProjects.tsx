import { motion } from 'framer-motion';
import { ArrowUpRight, ExternalLink } from 'lucide-react';
import { projects, type Project } from '../data/portfolio';
import { ProjectArt } from './Poster';

const projectProofPoints = ['Responsive storefront', 'Product discovery', 'Cart & checkout'];

export default function ClientProjects({ onOpen }: { onOpen: (project: Project) => void }) {
  return (
    <div className="gutter mx-auto max-w-7xl">
      <header className="mb-10 max-w-3xl sm:mb-14">
        <p className="mb-3 text-[10px] font-bold tracking-[0.35em] text-amber-300">[ CASE STUDIES ]</p>
        <h2 className="font-display text-4xl tracking-wider text-bone sm:text-6xl">FEATURED CAMPAIGNS &amp; RESULTS</h2>
        <p className="mt-4 font-serif text-xl italic text-mist">
          Selected work, with the scope and outcomes kept grounded in the facts.
        </p>
      </header>

      <div className="grid gap-5 md:grid-cols-2">
        {projects.map((project, index) => (
          <motion.article
            key={project.id}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.55, delay: index * 0.08 }}
            className="overflow-hidden rounded-2xl border border-white/10 bg-[#0f0f14]"
          >
            <div className="relative aspect-video overflow-hidden">
              <ProjectArt project={project} />
              <span className="absolute left-4 top-4 rounded-full border border-white/15 bg-black/45 px-3 py-1.5 text-[9px] font-bold uppercase tracking-[0.18em] text-bone backdrop-blur-md">
                Personal project
              </span>
              <div className="absolute inset-x-5 bottom-4">
                <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/65">{project.genre}</p>
                <p className="mt-1 font-display text-3xl tracking-wide text-white sm:text-4xl">{project.title}</p>
              </div>
            </div>

            <div className="p-5 sm:p-6">
              <p className="text-sm leading-6 text-mist">{project.logline}</p>
              <div className="mt-5 flex flex-wrap gap-2" aria-label="Project highlights">
                {projectProofPoints.map((point) => (
                  <span key={point} className="rounded-full border border-amber-300/20 bg-amber-300/[0.06] px-3 py-1.5 text-[10px] font-medium text-amber-100/90">
                    {point}
                  </span>
                ))}
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.stack.slice(0, 5).map((tag) => (
                  <span key={tag} className="rounded-md bg-white/[0.05] px-2.5 py-1.5 text-[10px] text-mist">
                    {tag}
                  </span>
                ))}
              </div>
              <div className="mt-6 flex flex-wrap gap-3 border-t border-white/10 pt-5">
                <button
                  type="button"
                  onClick={() => onOpen(project)}
                  className="inline-flex min-h-11 items-center gap-2 rounded-full bg-bone px-5 text-xs font-bold text-ink transition hover:bg-white"
                >
                  View case study <ArrowUpRight size={15} aria-hidden />
                </button>
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex min-h-11 items-center gap-2 rounded-full border border-white/15 px-5 text-xs font-semibold text-bone transition hover:border-white/40"
                  >
                    Live link <ExternalLink size={14} aria-hidden />
                  </a>
                )}
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </div>
  );
}

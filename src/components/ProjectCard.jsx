import { ExternalLink, Eye, IndianRupee } from 'lucide-react'

export default function ProjectCard({ project }) {
  const { name, description, price, technologies, image, demoUrl } = project

  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-navy-900/10">
      <div className="relative overflow-hidden bg-navy-50">
        <img
          src={image}
          alt={`${name} screenshot`}
          loading="lazy"
          className="aspect-[16/10] w-full object-cover transition-transform duration-500 group-hover:scale-105"
          onError={(e) => {
            e.currentTarget.onerror = null
            e.currentTarget.src =
              'data:image/svg+xml;utf8,' +
              encodeURIComponent(
                `<svg xmlns="http://www.w3.org/2000/svg" width="640" height="400"><rect width="100%" height="100%" fill="#eef2f7"/><text x="50%" y="50%" font-family="Arial" font-size="24" fill="#1f3a5c" text-anchor="middle">${name}</text></svg>`
              )
          }}
        />
        <span className="absolute bottom-3 left-3 inline-flex items-center gap-1 rounded-full bg-navy-900/90 px-3 py-1.5 text-xs font-semibold text-white backdrop-blur-sm">
          <IndianRupee className="h-3 w-3" />
          {price.replace('Starting ', '')}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <h3 className="font-display text-lg font-semibold text-navy-900">{name}</h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600">{description}</p>

        <div className="mt-4 flex flex-wrap gap-1.5">
          {technologies.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-electric-200 bg-electric-50 px-2.5 py-1 text-[11px] font-medium text-electric-700"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="mt-5 flex flex-wrap items-center gap-2">
          <button
            type="button"
            onClick={() => window.open(demoUrl || image, '_blank', 'noopener')}
            className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-lg bg-navy-900 px-3.5 py-2.5 text-xs font-semibold text-white transition-colors hover:bg-navy-700"
          >
            {demoUrl ? <ExternalLink className="h-3.5 w-3.5" /> : <Eye className="h-3.5 w-3.5" />}
            {demoUrl ? 'Live Demo' : 'View Details'}
          </button>
          <a
            href="#contact"
            aria-label={`Enquire about ${name}`}
            className="inline-flex items-center justify-center gap-1.5 rounded-lg border-2 border-electric-500 bg-electric-50 px-3.5 py-2.5 text-xs font-semibold text-electric-700 transition-colors hover:bg-electric-500 hover:text-white"
          >
            Enquire
          </a>
        </div>
      </div>
    </article>
  )
}

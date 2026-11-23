import { Github, Linkedin, Code as Code2 } from 'lucide-react'
import { socialLinks } from '../config/contact'

const techBadges = [
  'React.js',
  'Node.js',
  'Express.js',
  'MongoDB',
  'JavaScript',
  'Tailwind CSS',
]

export default function About() {
  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[auto_1fr] lg:gap-14">
          <div className="relative mx-auto w-56 lg:w-72">
            <div
              aria-hidden="true"
              className="absolute -inset-3 rounded-[2rem] bg-gradient-to-br from-electric-100 to-navy-100"
            />
            <img
              src="/images/profile.png"
              alt="Developer profile"
              loading="lazy"
              className="relative aspect-square w-full rounded-3xl border-4 border-white object-cover shadow-xl shadow-navy-900/15"
              onError={(e) => {
                e.currentTarget.onerror = null
                e.currentTarget.src =
                  'data:image/svg+xml;utf8,' +
                  encodeURIComponent(
                    `<svg xmlns="http://www.w3.org/2000/svg" width="400" height="400"><rect width="100%" height="100%" fill="#d9e2ee"/><text x="50%" y="50%" font-family="Arial" font-size="22" fill="#1f3a5c" text-anchor="middle">Profile Photo</text></svg>`
                  )
              }}
            />
          </div>

          <div className="text-center lg:text-left">
            <h2 className="font-display text-3xl font-bold text-navy-900 sm:text-4xl">
              Meet Your Developer
            </h2>
            <p className="mt-5 text-base leading-relaxed text-slate-600 sm:text-lg">
              Main ek passionate web developer hoon jo businesses aur individuals ke liye modern
              websites aur web applications develop karta hoon. Mera focus affordable pricing,
              clean design aur user-friendly experience par hai.
            </p>

            <div className="mt-6 flex flex-wrap justify-center gap-2 lg:justify-start">
              {techBadges.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-navy-200 bg-navy-50 px-3.5 py-1.5 text-xs font-semibold text-navy-700"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="mt-8 flex items-center justify-center gap-3 lg:justify-start">
              <a
                href={socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub profile"
                className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 bg-white text-navy-900 shadow-sm transition-all hover:-translate-y-0.5 hover:border-navy-900 hover:bg-navy-900 hover:text-white"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href={socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn profile"
                className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 bg-white text-navy-900 shadow-sm transition-all hover:-translate-y-0.5 hover:border-electric-600 hover:bg-electric-600 hover:text-white"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <span className="ml-2 inline-flex items-center gap-1.5 text-xs font-medium text-slate-400">
                <Code2 className="h-3.5 w-3.5" />
                ClickCraft Ranchi
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

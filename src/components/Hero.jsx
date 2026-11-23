import { ArrowRight, Phone, BadgeCheck, Sparkles } from 'lucide-react'
import { callLink } from '../config/contact'

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-gradient-to-b from-navy-50/70 via-white to-white">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 right-0 h-96 w-96 rounded-full bg-electric-100 blur-3xl opacity-60"
      />
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 pb-16 pt-12 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8 lg:pb-24 lg:pt-20">
        <div className="text-center lg:text-left">
          <span className="inline-flex items-center gap-2 rounded-full border border-electric-200 bg-electric-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-electric-700">
            <Sparkles className="h-3.5 w-3.5" />
            Affordable Website Development
          </span>

          <h1 className="mt-6 font-display text-4xl font-bold leading-tight text-navy-900 sm:text-5xl lg:text-[3.25rem]">
            Apna Business Online Lao,{' '}
            <span className="relative whitespace-nowrap text-electric-600">
              Website Banwao
            </span>{' '}
            Saste Mein!
          </h1>

          <p className="mt-6 text-base leading-relaxed text-slate-600 sm:text-lg sm:leading-relaxed">
            Hum aapke business ke liye modern, fast aur mobile-friendly websites
            aur web applications banate hain, woh bhi affordable price mein.
          </p>

          <div className="mt-8 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center lg:justify-start">
            <a
              href="#projects"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-navy-900 px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-navy-900/20 transition-all hover:bg-navy-800 hover:shadow-xl hover:shadow-navy-900/25"
            >
              Trust On My Work
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href={8}
              className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-navy-200 bg-white px-7 py-3.5 text-sm font-semibold text-navy-900 transition-all hover:border-electric-400 hover:bg-electric-50"
            >
              <Phone className="h-4 w-4" />
              Call Now
            </a>
          </div>

          <p className="mt-6 text-sm font-medium text-slate-500">
            Websites Starting at <span className="font-bold text-navy-900">₹3,999</span>
          </p>
        </div>

        <div className="relative mx-auto w-full max-w-sm lg:max-w-md">
          <div
            aria-hidden="true"
            className="absolute -inset-4 rounded-[2.5rem] bg-gradient-to-tr from-electric-200/60 via-navy-100/40 to-electric-100/60"
          />
          <div className="relative overflow-hidden rounded-[2rem] border-4 border-white bg-navy-100 shadow-2xl shadow-navy-900/20">
            <img
              src="/images/profile.png"
              alt="ClickCraft Ranchi developer profile"
              className="aspect-[4/5] w-full object-cover"
              onError={(e) => {
                e.currentTarget.onerror = null
                e.currentTarget.src =
                  'data:image/svg+xml;utf8,' +
                  encodeURIComponent(
                    `<svg xmlns="http://www.w3.org/2000/svg" width="400" height="500"><rect width="100%" height="100%" fill="#d9e2ee"/><text x="50%" y="50%" font-family="Arial" font-size="22" fill="#1f3a5c" text-anchor="middle">Profile Photo</text></svg>`
                  )
              }}
            />
          </div>
          <div className="absolute -bottom-5 left-1/2 flex -translate-x-1/2 items-center gap-2 whitespace-nowrap rounded-2xl border border-slate-100 bg-white px-5 py-3 shadow-xl shadow-navy-900/10">
            <BadgeCheck className="h-5 w-5 text-electric-600" />
            <span className="text-sm font-semibold text-navy-900">MERN Stack Developer</span>
          </div>
        </div>
      </div>
    </section>
  )
}

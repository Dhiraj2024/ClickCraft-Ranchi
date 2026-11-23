import { Phone, MessageCircle, Smartphone, Globe } from 'lucide-react'
import { callLink, whatsappLink } from '../config/contact'

export default function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden bg-navy-900 py-16 lg:py-24">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-32 left-1/2 h-96 w-[42rem] -translate-x-1/2 rounded-full bg-electric-600/20 blur-3xl"
      />
      <div className="relative mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-electric-600/20 text-electric-400 ring-1 ring-electric-400/40">
          <Globe className="h-7 w-7" />
        </div>

        <h2 className="mt-6 font-display text-3xl font-bold text-white sm:text-4xl">
          Apni Website Banwana Chahte Hain?
        </h2>
        <p className="mt-4 text-base leading-relaxed text-slate-300 sm:text-lg">
          Apne business idea ko online le jaane ke liye aaj hi contact karein.
        </p>

        <div className="mt-10 flex flex-col items-stretch justify-center gap-4 sm:flex-row">
          <a
            href={callLink}
            className="inline-flex items-center justify-center gap-2.5 rounded-xl bg-white px-8 py-4 text-sm font-semibold text-navy-900 shadow-lg transition-all hover:-translate-y-0.5 hover:shadow-xl"
          >
            <Phone className="h-5 w-5 text-electric-600" />
            Call Now
          </a>
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2.5 rounded-xl bg-emerald-500 px-8 py-4 text-sm font-semibold text-white shadow-lg shadow-emerald-500/25 transition-all hover:-translate-y-0.5 hover:bg-emerald-600 hover:shadow-xl hover:shadow-emerald-500/30"
          >
            <MessageCircle className="h-5 w-5" />
            WhatsApp Now
          </a>
        </div>

        <div className="mt-10 flex flex-col items-center justify-center gap-2 text-sm text-slate-400 sm:flex-row sm:gap-6">
          <span className="inline-flex items-center gap-2">
            <Phone className="h-4 w-4 text-electric-400" />
            Call ya WhatsApp - dono available
          </span>
          <span className="inline-flex items-center gap-2">
            <Smartphone className="h-4 w-4 text-electric-400" />
            Quick reply guaranteed
          </span>
        </div>
      </div>
    </section>
  )
}

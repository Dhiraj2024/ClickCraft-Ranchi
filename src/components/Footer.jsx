import { Code as Code2, Github, Linkedin, Phone, MessageCircle } from 'lucide-react'
import { callLink, whatsappLink, socialLinks } from '../config/contact'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-slate-200 bg-white py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-8 md:flex-row md:items-start md:justify-between">
          <div className="max-w-xs text-center md:text-left">
            <a href="#home" className="inline-flex items-center gap-2.5">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-navy-900 text-electric-400">
                <Code2 className="h-4.5 w-4.5" strokeWidth={2.5} />
              </span>
              <span className="font-display text-lg font-bold text-navy-900">
                ClickCraft <span className="text-electric-600">Ranchi</span>
              </span>
            </a>
            <p className="mt-3 text-sm text-slate-500">
              Website Banwao Saste Mein! Aapka Business, Ab Online!
            </p>
          </div>

          <div className="flex flex-col items-center gap-2 md:items-start">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-400">Links</h3>
            <a href="#home" className="text-sm text-slate-600 transition-colors hover:text-electric-600">
              Home
            </a>
            <a href="#contact" className="text-sm text-slate-600 transition-colors hover:text-electric-600">
              Contact
            </a>
          </div>

          <div className="flex flex-col items-center gap-3 md:items-start">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-400">Connect</h3>
            <div className="flex items-center gap-2">
              <a
                href={socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub profile"
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 text-slate-600 transition-all hover:border-navy-900 hover:bg-navy-900 hover:text-white"
              >
                <Github className="h-4 w-4" />
              </a>
              <a
                href={socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn profile"
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 text-slate-600 transition-all hover:border-electric-600 hover:bg-electric-600 hover:text-white"
              >
                <Linkedin className="h-4 w-4" />
              </a>
            </div>
            <div className="flex items-center gap-2">
              <a
                href={callLink}
                aria-label="Call now"
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 text-slate-600 transition-all hover:border-electric-600 hover:bg-electric-600 hover:text-white"
              >
                <Phone className="h-4 w-4" />
              </a>
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 text-slate-600 transition-all hover:border-emerald-500 hover:bg-emerald-500 hover:text-white"
              >
                <MessageCircle className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-slate-100 pt-6 text-center">
          <p className="text-xs text-slate-500">
            © {year} ClickCraft Ranchi. All rights reserved. Designed &amp; Developed by ClickCraft Ranchi.
          </p>
        </div>
      </div>
    </footer>
  )
}

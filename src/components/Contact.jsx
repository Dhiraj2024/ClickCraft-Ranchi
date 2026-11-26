import { useState } from 'react'
import { Send, CheckCircle, Mail, Globe } from 'lucide-react'
import { CONTACT_EMAIL } from '../config/contact'

const projectTypes = [
  'Business Website',
  'Portfolio Website',
  'E-commerce / Online Store',
  'Blog / News Website',
  'Custom Web Application',
  'Other',
]

const initialForm = {
  name: '',
  email: '',
  project_type: '',
  features: '',
  description: '',
  budget: '',
}

const inputClasses =
  'w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 outline-none transition-all focus:border-electric-500 focus:ring-2 focus:ring-electric-200'

export default function Contact() {
  const [form, setForm] = useState(initialForm)
  const [sent, setSent] = useState(false)

  const update = (field) => (e) => {
    setForm((f) => ({ ...f, [field]: e.target.value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const subject = `New Website Enquiry from ${form.name} (${form.budget})`
    const body = [
      `Name: ${form.name}`,
      `Email: ${form.email}`,
      `Project Type: ${form.project_type}`,
      `Features: ${form.features}`,
      `Description: ${form.description || '-'}`,
      `Budget: ${form.budget}`,
    ].join('\n')

    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`

    setSent(true)
  }

  return (
    <section id="contact" className="relative overflow-hidden bg-navy-900 py-16 lg:py-24">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-32 left-1/2 h-96 w-[42rem] -translate-x-1/2 rounded-full bg-electric-600/20 blur-3xl"
      />

      <div className="relative mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-electric-600/20 text-electric-400 ring-1 ring-electric-400/40">
            <Globe className="h-7 w-7" />
          </div>

          <h2 className="mt-6 font-display text-3xl font-bold text-white sm:text-4xl">
            Apni Website Banwana Chahte Hain?
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-300 sm:text-lg">
            Neeche form bharein — apni details, project type, features aur budget batayein.
            Aapki enquiry seedha humein email ho jayegi aur hum jaldi reply karenge.
          </p>
        </div>

        {sent ? (
          <div className="mx-auto mt-10 max-w-xl rounded-2xl border border-emerald-400/30 bg-emerald-500/10 p-8 text-center">
            <CheckCircle className="mx-auto h-12 w-12 text-emerald-400" />
            <h3 className="mt-4 font-display text-xl font-semibold text-white">
              Aapka Email App Khul Gaya!
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-300">
              Aapki details email mein bhar chuki hain. Bas "Send" dabayein — aapki
              enquiry hum tak pahunch jayegi.
            </p>
            <button
              type="button"
              onClick={() => setSent(false)}
              className="mt-6 inline-flex items-center justify-center rounded-xl bg-white px-6 py-2.5 text-sm font-semibold text-navy-900 transition-colors hover:bg-slate-100"
            >
              Ek aur enquiry bhejein
            </button>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="mt-10 rounded-2xl border border-white/10 bg-white/5 p-6 shadow-2xl shadow-black/20 backdrop-blur-sm sm:p-8"
          >
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-slate-200">
                  Aapka Naam <span className="text-electric-400">*</span>
                </label>
                <input
                  id="name"
                  type="text"
                  required
                  value={form.name}
                  onChange={update('name')}
                  placeholder="Rahul Sharma"
                  className={inputClasses}
                />
              </div>

              <div>
                <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-slate-200">
                  Email <span className="text-electric-400">*</span>
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={update('email')}
                  placeholder="aapka@email.com"
                  className={inputClasses}
                />
              </div>

              <div>
                <label htmlFor="project_type" className="mb-1.5 block text-sm font-medium text-slate-200">
                  Kis Tarah Ki Website? <span className="text-electric-400">*</span>
                </label>
                <select
                  id="project_type"
                  required
                  value={form.project_type}
                  onChange={update('project_type')}
                  className={`${inputClasses} ${form.project_type ? '' : 'text-slate-400'}`}
                >
                  <option value="" disabled>
                    Select karein
                  </option>
                  {projectTypes.map((type) => (
                    <option key={type} value={type} className="text-slate-900">
                      {type}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="budget" className="mb-1.5 block text-sm font-medium text-slate-200">
                  Aapka Budget <span className="text-electric-400">*</span>
                </label>
                <input
                  id="budget"
                  type="text"
                  required
                  value={form.budget}
                  onChange={update('budget')}
                  placeholder="e.g. ₹5,000 – ₹10,000"
                  className={inputClasses}
                />
              </div>

              <div className="sm:col-span-2">
                <label htmlFor="features" className="mb-1.5 block text-sm font-medium text-slate-200">
                  Website Mein Kaun Kaun Se Features Chahiye? <span className="text-electric-400">*</span>
                </label>
                <textarea
                  id="features"
                  required
                  rows={3}
                  value={form.features}
                  onChange={update('features')}
                  placeholder="e.g. Login system, payment option, admin panel, gallery, contact form..."
                  className={`${inputClasses} resize-y`}
                />
              </div>

              <div className="sm:col-span-2">
                <label htmlFor="description" className="mb-1.5 block text-sm font-medium text-slate-200">
                  Apni Query / Description
                </label>
                <textarea
                  id="description"
                  rows={4}
                  value={form.description}
                  onChange={update('description')}
                  placeholder="Apne business aur project ke baare mein aur batayein..."
                  className={`${inputClasses} resize-y`}
                />
              </div>
            </div>

            <button
              type="submit"
              className="mt-7 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-electric-600 px-8 py-4 text-sm font-semibold text-white shadow-lg shadow-electric-600/30 transition-all hover:-translate-y-0.5 hover:bg-electric-500"
            >
              <Send className="h-5 w-5" />
              Enquiry Bhejein
            </button>

            <p className="mt-4 flex items-center justify-center gap-2 text-center text-xs text-slate-400">
              <Mail className="h-3.5 w-3.5" />
              Form bharne ke baad aapka email app khulega — details ke saath seedha humein email karein.
            </p>
          </form>
        )}
      </div>
    </section>
  )
}

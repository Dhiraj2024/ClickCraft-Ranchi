import { useState } from 'react'
import { Send, CheckCircle, AlertCircle, Loader2, Globe } from 'lucide-react'
import { supabase } from '../lib/supabase'

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
  const [status, setStatus] = useState('idle')
  const [errorMessage, setErrorMessage] = useState('')

  const update = (field) => (e) => {
    setForm((f) => ({ ...f, [field]: e.target.value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (status === 'loading') return
    setStatus('loading')
    setErrorMessage('')

    try {
      const apiUrl = `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/send-enquiry`
      const res = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${import.meta.env.VITE_SUPABASE_ANON_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(form),
      })
      const data = await res.json().catch(() => null)
      if (!res.ok) {
        throw new Error(data?.error || 'Request failed. Please try again.')
      }
      setForm(initialForm)
      setStatus('success')
    } catch (err) {
      setErrorMessage(
        err?.message ? 'Request failed. Please try again.' : 'Request failed. Please try again.'
      )
      setStatus('error')
    }
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

        {status === 'success' ? (
          <div className="mx-auto mt-10 max-w-xl rounded-2xl border border-emerald-400/30 bg-emerald-500/10 p-8 text-center">
            <CheckCircle className="mx-auto h-12 w-12 text-emerald-400" />
            <h3 className="mt-4 font-display text-xl font-semibold text-white">
              Enquiry Bhej Di Gayi!
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-300">
              Dhanyavaad! Aapki details email kar di gayi hain. Hum 24 ghante ke andar aapko reply karenge.
            </p>
            <button
              type="button"
              onClick={() => setStatus('idle')}
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

            {status === 'error' && (
              <div className="mt-5 flex items-center gap-2.5 rounded-xl border border-red-400/30 bg-red-500/10 px-4 py-3 text-sm text-red-200">
                <AlertCircle className="h-4 w-4 flex-none" />
                {errorMessage}
              </div>
            )}

            <button
              type="submit"
              disabled={status === 'loading'}
              className="mt-7 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-electric-600 px-8 py-4 text-sm font-semibold text-white shadow-lg shadow-electric-600/30 transition-all hover:-translate-y-0.5 hover:bg-electric-500 disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0"
            >
              {status === 'loading' ? (
                <>
                  <Loader2 className="h-5 w-5 animate-spin" />
                  Bheja Ja Raha Hai...
                </>
              ) : (
                <>
                  <Send className="h-5 w-5" />
                  Enquiry Bhejein
                </>
              )}
            </button>

            <p className="mt-4 text-center text-xs text-slate-400">
              Form bharne ke baad aapki details seedha humein email par pahunch jayengi.
            </p>
          </form>
        )}
      </div>
    </section>
  )
}

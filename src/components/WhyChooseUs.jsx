import { IndianRupee, Smartphone, Palette, Headset } from 'lucide-react'

const reasons = [
  {
    icon: IndianRupee,
    title: 'Affordable Pricing',
    description: 'Professional websites at prices that fit small business budgets.',
  },
  {
    icon: Smartphone,
    title: 'Mobile Friendly Design',
    description: 'Every website looks and works great on phones, tablets and desktops.',
  },
  {
    icon: Palette,
    title: 'Modern UI/UX',
    description: 'Clean, modern designs that keep visitors engaged and easy to navigate.',
  },
  {
    icon: Headset,
    title: 'Direct Developer Support',
    description: 'Talk directly with the developer - no middlemen, quick responses.',
  },
]

export default function WhyChooseUs() {
  return (
    <section className="bg-slate-50 py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-bold text-navy-900 sm:text-4xl">
            Why Choose ClickCraft Ranchi?
          </h2>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {reasons.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-navy-900/10"
            >
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-electric-50 text-electric-600 ring-4 ring-electric-100/60">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 font-display text-base font-semibold text-navy-900">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

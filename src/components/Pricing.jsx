import { Check } from 'lucide-react'

const plans = [
  {
    name: 'Basic Website',
    price: '₹2,999',
    prefix: 'Starting',
    features: ['1–3 pages', 'Mobile responsive', 'Contact section'],
    featured: false,
  },
  {
    name: 'Business Website',
    price: '₹4,999',
    prefix: 'Starting',
    features: ['4–7 pages', 'Professional design', 'Enquiry integration'],
    featured: true,
  },
  {
    name: 'Custom Web Application',
    price: 'Custom Pricing',
    prefix: '',
    features: ['Login system', 'Admin dashboard', 'Database integration', 'Custom features'],
    featured: false,
  },
]

export default function Pricing() {
  return (
    <section id="pricing" className="bg-slate-50 py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-bold text-navy-900 sm:text-4xl">
            Simple, Affordable Pricing
          </h2>
          <p className="mt-3 text-base text-slate-600">
            Final pricing depends on project requirements, hosting and additional features.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative flex flex-col rounded-2xl p-7 transition-all duration-300 hover:-translate-y-1 ${
                plan.featured
                  ? 'bg-navy-900 text-white shadow-xl shadow-navy-900/25'
                  : 'border border-slate-200 bg-white shadow-sm hover:shadow-lg hover:shadow-navy-900/10'
              }`}
            >
              {plan.featured && (
                <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full bg-electric-600 px-4 py-1 text-xs font-semibold text-white shadow-md">
                  Most Popular
                </span>
              )}
              <h3 className={`font-display text-lg font-semibold ${plan.featured ? 'text-white' : 'text-navy-900'}`}>
                {plan.name}
              </h3>
              <p className="mt-4">
                {plan.prefix && (
                  <span className={`text-xs font-medium uppercase tracking-wide ${plan.featured ? 'text-slate-300' : 'text-slate-500'}`}>
                    {plan.prefix}
                  </span>
                )}
                <span className={`block font-display text-3xl font-bold ${plan.featured ? 'text-electric-400' : 'text-navy-900'}`}>
                  {plan.price}
                </span>
              </p>
              <ul className="mt-6 flex-1 space-y-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2.5 text-sm">
                    <span
                      className={`flex h-5 w-5 flex-none items-center justify-center rounded-full ${
                        plan.featured ? 'bg-electric-600/30 text-electric-400' : 'bg-electric-50 text-electric-600'
                      }`}
                    >
                      <Check className="h-3 w-3" strokeWidth={3} />
                    </span>
                    <span className={plan.featured ? 'text-slate-200' : 'text-slate-600'}>{feature}</span>
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                className={`mt-8 inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3 text-sm font-semibold transition-all ${
                  plan.featured
                    ? 'bg-electric-600 text-white shadow-lg shadow-electric-600/30 hover:bg-electric-500'
                    : 'border-2 border-navy-900 text-navy-900 hover:bg-navy-900 hover:text-white'
                }`}
              >
                Contact for Price
              </a>
            </div>
          ))}
        </div>

        <p className="mt-8 text-center text-xs text-slate-500">
          * Prices are approximate starting prices. Final pricing depends on project requirements, hosting and additional features.
        </p>
      </div>
    </section>
  )
}

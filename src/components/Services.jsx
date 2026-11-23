import { Globe, ShoppingCart, CalendarCheck, AppWindow } from 'lucide-react'

const services = [
  {
    icon: Globe,
    title: 'Business Websites',
    description: 'Professional websites that build trust and bring customers to your business.',
  },
  {
    icon: ShoppingCart,
    title: 'E-commerce Websites',
    description: 'Online stores with product listing, cart and enquiry or order handling.',
  },
  {
    icon: CalendarCheck,
    title: 'Booking Websites',
    description: 'Room, cycle or service booking platforms with easy enquiry management.',
  },
  {
    icon: AppWindow,
    title: 'Custom Web Applications',
    description: 'Tailored web apps with login, admin dashboard and database integration.',
  },
]

export default function Services() {
  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-bold text-navy-900 sm:text-4xl">
            What I Can Build For You
          </h2>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-electric-200 hover:shadow-lg hover:shadow-navy-900/10"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-navy-900 text-electric-400 transition-colors group-hover:bg-electric-600 group-hover:text-white">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="mt-5 font-display text-base font-semibold text-navy-900">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

import { MessageSquare, PenTool, Code as Code2, Rocket } from 'lucide-react'

const steps = [
  { icon: MessageSquare, step: 1, title: 'Contact', description: 'Share your requirements.' },
  { icon: PenTool, step: 2, title: 'Planning', description: 'Discuss design and features.' },
  { icon: Code2, step: 3, title: 'Development', description: 'Build and test the website.' },
  { icon: Rocket, step: 4, title: 'Delivery', description: 'Launch and hand over the website.' },
]

export default function HowItWorks() {
  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-bold text-navy-900 sm:text-4xl">
            How It Works
          </h2>
        </div>

        <div className="relative mt-12">
          <div
            aria-hidden="true"
            className="absolute left-1/2 top-8 hidden h-0.5 w-[70%] -translate-x-1/2 bg-gradient-to-r from-electric-200 via-electric-400 to-electric-200 lg:block"
          />
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map(({ icon: Icon, step, title, description }) => (
              <div key={step} className="relative flex flex-col items-center text-center">
                <div className="relative z-10 flex h-16 w-16 items-center justify-center rounded-2xl bg-navy-900 text-electric-400 shadow-lg shadow-navy-900/20">
                  <Icon className="h-7 w-7" />
                  <span className="absolute -right-2 -top-2 flex h-6 w-6 items-center justify-center rounded-full bg-electric-600 text-[11px] font-bold text-white">
                    {step}
                  </span>
                </div>
                <h3 className="mt-4 font-display text-base font-semibold text-navy-900">{title}</h3>
                <p className="mt-1.5 max-w-[220px] text-sm leading-relaxed text-slate-600">
                  {description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

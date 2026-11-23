import { useState } from 'react'
import { ChevronDown, CircleHelp as HelpCircle } from 'lucide-react'

const faqs = [
  {
    question: 'Website banane mein kitna time lagta hai?',
    answer:
      'Ek simple website 3-7 din mein ready ho jati hai. Bade projects jaise booking systems ya web applications mein 2-4 week lag sakte hain, project ke size par depend karta hai.',
  },
  {
    question: 'Kya website mobile-friendly hogi?',
    answer:
      'Haan bilkul! Har website mobile, tablet aur desktop sabhi devices par perfectly kaam karti hai.',
  },
  {
    question: 'Kya domain aur hosting included hai?',
    answer:
      'Domain aur hosting alag se liya jata hai, lekin main aapko pura setup aur best options choose karne mein help karunga. Cost aapke budget ke hisaab se hogi.',
  },
  {
    question: 'Kya website baad mein update kar sakte hain?',
    answer:
      'Haan, website launch ke baad bhi aap content, images ya features update karwa sakte hain. Chhote updates ke liye support available hai.',
  },
  {
    question: 'Kya admin panel bhi milega?',
    answer:
      'Web applications aur booking websites ke saath admin panel milta hai jisse aap bookings, products ya content manage kar sakte hain. Simple websites mein yeh optional hota hai.',
  },
]

function FaqItem({ question, answer, isOpen, onToggle }) {
  return (
    <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-shadow hover:shadow-md">
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
      >
        <span className="text-sm font-semibold text-navy-900 sm:text-base">{question}</span>
        <ChevronDown
          className={`h-5 w-5 flex-none text-electric-600 transition-transform duration-300 ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </button>
      <div
        className={`grid transition-all duration-300 ease-in-out ${
          isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
        }`}
      >
        <div className="overflow-hidden">
          <p className="px-5 pb-5 text-sm leading-relaxed text-slate-600">{answer}</p>
        </div>
      </div>
    </div>
  )
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section className="bg-slate-50 py-16 lg:py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-electric-200 bg-electric-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-electric-700">
            <HelpCircle className="h-3.5 w-3.5" />
            FAQ
          </span>
          <h2 className="mt-4 font-display text-3xl font-bold text-navy-900 sm:text-4xl">
            Aksar Puche Jane Wale Sawal
          </h2>
        </div>

        <div className="mt-10 space-y-4">
          {faqs.map((faq, index) => (
            <FaqItem
              key={faq.question}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              onToggle={() => setOpenIndex(openIndex === index ? -1 : index)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

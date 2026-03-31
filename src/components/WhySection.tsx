import { useState } from 'react'
import whyMedia from '../assets/why-media.png'

export default function WhySection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const items = [
    {
      title: "Doctor-led care",
      content: "Injectables and prescriptions are assessed and performed by doctors."
    },
    {
      title: "MOH-registered clinic",
      content: "Medical protocols, hygiene standards, and patient safety come first."
    },
    {
      title: "Evidence-based planning",
      content: "We explain expected outcomes, risks, downtime, and alternatives."
    }
  ]

  return (
    <section className="w-full h-auto lg:h-[100dvh] bg-bg-beige font-serif text-text-dark border-t border-divider lg:overflow-hidden flex flex-col justify-center p-4 sm:p-8">
      <div className="w-full max-w-[1200px] h-full mx-auto flex flex-col lg:flex-row gap-8 lg:gap-16 items-center lg:overflow-hidden py-12 lg:py-0">

        {/* Left Column - Media */}
        <div className="w-full lg:w-1/2 flex flex-col items-center justify-center shrink-0 lg:shrink py-4">
          
          <div className="w-full relative h-[300px] sm:h-[400px] lg:h-[450px] mb-8">
            {/* Primary Media Block */}
            <div className="w-[85%] h-[90%] bg-bg-lightgreen rounded-[32px] absolute z-10 border border-accent-green/30 flex items-center justify-center shadow-lg top-0 left-0 hover:scale-[1.02] transition-transform duration-500 overflow-hidden">
              <img src={whyMedia} alt="Nexus Clinical Environment" className="w-full h-full object-cover object-center" />
            </div>

            {/* Overlapping Secondary Block (Hidden on mobile if too crowded) */}
            <div className="hidden sm:flex w-[40%] h-[40%] bg-bg-cream rounded-[24px] absolute right-[-2%] bottom-[-2%] z-20 shadow-[-10px_-10px_30px_rgba(47,93,80,0.05)] border border-divider items-center justify-center hover:scale-105 transition-transform duration-500 overflow-hidden">
               <div className="w-full h-full bg-brand-teal/5 flex items-center justify-center text-center p-4">
                  <span className="font-sans text-brand-dark tracking-widest uppercase font-bold text-[9px] leading-tight">
                    Clinical<br />Excellence
                  </span>
               </div>
            </div>
          </div>

          <div className="w-full bg-bg-cream p-6 lg:p-7 rounded-[28px] border border-divider shadow-sm mt-auto shrink-0 z-30 relative">
            <div className="w-8 h-1 bg-brand-teal mb-4 rounded-full"></div>
            <p className="font-serif text-base sm:text-lg lg:text-xl text-text-dark leading-relaxed italic">
              "Our team follows conservative dosing and ethical patient selection. If a treatment is unsuitable, we discuss safer options."
            </p>
          </div>
        </div>

        {/* Right Column - Text & Accordion */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center shrink-0 lg:shrink py-4">
          <h2 className="font-sans text-3xl sm:text-4xl lg:text-5xl font-extrabold text-brand-dark tracking-tight mb-6 leading-[1.1]">
            Why Nexus Clinic Kuala Lumpur
          </h2>

          <p className="font-serif text-lg sm:text-xl text-text-grey leading-relaxed mb-8">
            We are a medical aesthetic clinic, not a beauty salon. Our approach is doctor-led and diagnosis-driven, prioritizing safety and long-term skin health.
          </p>

          <div className="flex flex-col gap-4">
            {items.map((item, index) => {
              const isOpen = openIndex === index;
              return (
                <div
                  key={index}
                  className={`border border-divider rounded-[24px] overflow-hidden transition-all duration-300 ${isOpen ? 'bg-white shadow-md border-brand-teal/20' : 'bg-transparent hover:border-brand-teal/30 cursor-pointer'}`}
                >
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className="w-full flex items-center justify-between p-5 sm:p-6 text-left focus:outline-none"
                  >
                    <span className={`font-sans text-lg sm:text-xl font-bold ${isOpen ? 'text-brand-dark' : 'text-brand-dark/80 transition-colors'}`}>
                      {item.title}
                    </span>
                    <div className={`w-8 h-8 flex items-center justify-center rounded-full transition-all duration-300 ${isOpen ? 'bg-brand-dark text-white rotate-180' : 'bg-divider/30 text-text-grey'}`}>
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </button>

                  <div
                    className={`grid transition-[grid-template-rows,opacity] duration-300 ease-in-out ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
                  >
                    <div className="overflow-hidden">
                      <p className="font-serif text-base sm:text-lg text-text-grey px-6 pb-6 pt-0 leading-relaxed">
                        {item.content}
                      </p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

      </div>
    </section>
  )
}

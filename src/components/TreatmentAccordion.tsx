import { useState } from 'react'
import regenerative from '../assets/regenerative.png'
import skinAcne from '../assets/skin-acne.png'
import weightLoss from '../assets/weight-loss.png'
import hairRestoration from '../assets/hair-restoration.png'

interface Treatment {
  title: string
  collapsed: string
  description: string
  benefits: string[]
  options: string[]
  cta: string
  image: string
}

const treatments: Treatment[] = [
  {
    title: "1. Regenerative Rejuvenation & Skin Repair",
    collapsed: "Stimulates natural healing for healthier skin and hair",
    description: "Activates your body’s natural repair process to improve skin quality, elasticity, and hair health over time.",
    benefits: [
      "Improves skin texture and tone",
      "Boosts collagen production",
      "Supports long-term skin & hair health",
      "Minimal downtime"
    ],
    options: [
      "PRP skin rejuvenation",
      "PRP for hair & scalp",
      "Stem cell–based therapies (doctor assessed)",
      "Medical-grade regenerative injectables"
    ],
    cta: "Check Suitability",
    image: regenerative
  },
  {
    title: "2. Skin, Acne & Pigmentation",
    collapsed: "Safe, precise treatments tailored for your skin type",
    description: "Doctor-guided treatments designed to safely target acne, pigmentation, and uneven skin tone.",
    benefits: [
      "Reduces acne and scars",
      "Treats pigmentation & melasma",
      "Minimizes risk of PIH (important for Asian skin)",
      "Improves overall skin clarity"
    ],
    options: [
      "Pico laser treatments",
      "Acne & acne scar treatments",
      "Melasma correction programmes",
      "Medical chemical peels"
    ],
    cta: "Explore Treatments",
    image: skinAcne
  },
  {
    title: "3. Hair Restoration & Scalp Health",
    collapsed: "Treat hair thinning at the root cause",
    description: "Medical evaluation of hormonal, genetic, and scalp factors to guide effective hair restoration.",
    benefits: [
      "Reduces hair fall",
      "Improves scalp health",
      "Supports regrowth",
      "Long-term maintenance plans"
    ],
    options: [
      "PRP for hair loss",
      "Hair mesotherapy",
      "Scalp rejuvenation treatments",
      "Keratin treatments"
    ],
    cta: "Check Suitability",
    image: hairRestoration
  },
  {
    title: "4. Weight Loss & Body Contouring",
    collapsed: "Doctor-supervised weight loss with real results",
    description: "Personalised, medically guided programmes based on your metabolism, hormones, and health profile.",
    benefits: [
      "Clinically guided weight loss",
      "Targets stubborn fat areas",
      "Safe, monitored approach",
      "Personalised plans"
    ],
    options: [
      "Ozempic (Semaglutide) programme",
      "Mounjaro (Tirzepatide) programme",
      "HCG programmes (assessment required)",
      "CoolSculpting fat reduction"
    ],
    cta: "Book Consultation",
    image: weightLoss
  }
]

export default function TreatmentAccordion() {
  const [activeIdx, setActiveIdx] = useState<number>(0)

  return (
    <section className="w-full bg-bg-cream flex flex-col justify-center border-t border-divider pt-20 pb-24 lg:py-32">
      <div className="w-full max-w-[1400px] mx-auto flex flex-col lg:flex-row gap-12 lg:gap-20 lg:items-start px-6 sm:px-12 relative">
        
        {/* Left Column - Accordion */}
        <div className="flex-1 w-full">
          <div className="flex flex-col gap-6 w-full">
            {treatments.map((t, idx) => {
              const isOpen = activeIdx === idx
              return (
                <div 
                  key={idx} 
                  onClick={() => setActiveIdx(idx)}
                  className={`border border-divider rounded-[32px] transition-all duration-500 overflow-hidden cursor-pointer relative group ${isOpen ? 'bg-white lg:bg-white shadow-md border-accent-green/40 ring-1 ring-brand-teal/20' : 'bg-white/30 hover:border-brand-teal/30'}`}
                >
                  {/* Mobile Background Image (Only visible on open card on mobile) */}
                  {isOpen && (
                    <div className="lg:hidden absolute inset-0 z-0">
                      <img src={t.image} alt="" className="w-full h-full object-cover opacity-[0.08]" />
                    </div>
                  )}

                  <div className="p-6 sm:p-8 flex flex-col gap-2 relative z-10">
                    {/* Active Indicator Line */}
                    {isOpen && <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1.5 h-12 bg-brand-teal rounded-r-lg"></div>}
                    <h3 className={`font-sans text-2xl sm:text-3xl font-bold transition-colors duration-300 ${isOpen ? 'text-brand-dark' : 'text-text-dark'}`}>
                      {t.title}
                    </h3>
                    {!isOpen && (
                      <p className="font-serif text-xl sm:text-2xl italic text-text-grey leading-snug">
                        {t.collapsed}
                      </p>
                    )}
                  </div>
                  
                  <div className={`grid transition-[grid-template-rows,opacity,padding] duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] ${isOpen ? 'grid-rows-[1fr] opacity-100 pb-10 px-6 sm:px-8' : 'grid-rows-[0fr] opacity-0 pb-0 px-6 sm:px-8 pointer-events-none'}`}>
                    <div className="overflow-hidden flex flex-col gap-8">
                      <div className="flex flex-col gap-6 pt-2 border-t border-divider/50">
                        <div>
                          <span className="font-sans text-sm tracking-[0.2em] font-bold text-brand-teal block mb-3 uppercase">Description</span>
                          <p className="font-serif text-xl sm:text-2xl text-text-dark leading-relaxed max-w-[95%]">
                            {t.description}
                          </p>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                          <div>
                            <span className="font-sans text-sm tracking-[0.2em] font-bold text-brand-teal block mb-4 uppercase">Key Benefits</span>
                            <ul className="flex flex-col gap-3">
                              {t.benefits.map((b, i) => (
                                <li key={i} className="font-serif text-lg sm:text-xl text-text-grey flex items-start gap-3 leading-snug">
                                  <span className="w-2 h-2 rounded-full bg-accent-green shrink-0 mt-2.5"></span>
                                  {b}
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div>
                            <span className="font-sans text-sm tracking-[0.2em] font-bold text-brand-teal block mb-4 uppercase">Available Options</span>
                            <ul className="flex flex-col gap-3">
                              {t.options.map((o, i) => (
                                <li key={i} className="font-serif text-lg sm:text-xl text-text-grey flex items-start gap-3 leading-snug">
                                  <span className="w-2 h-2 rounded-full bg-divider shrink-0 mt-2.5"></span>
                                  {o}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>

                      <button className="self-start font-sans text-sm sm:text-base font-bold px-8 py-4 bg-brand-dark text-white rounded-full hover:bg-brand-teal transition-all shadow-lg active:scale-95 uppercase tracking-widest mt-2 border border-brand-teal/20 hover:border-brand-teal/40">
                        {t.cta}
                      </button>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Right Column - Media (Desktop Only Sticky) */}
        <div className="hidden lg:flex w-full lg:w-[45%] xl:w-[40%] flex-shrink-0 lg:sticky lg:top-12 lg:h-[calc(100vh-6rem)] max-h-[800px]">
          <div className="w-full h-full bg-bg-beige rounded-[40px] border border-divider shadow-sm relative overflow-hidden group">
            {/* Dynamically active media mapped to accordion state */}
            <img 
              key={activeIdx}
              src={treatments[activeIdx].image} 
              alt={treatments[activeIdx].title} 
              className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-[1.03] transition-transform duration-[1.5s] ease-out animate-in fade-in zoom-in-95" 
            />
            
            {/* Gradient Overlay for bottom base visibility */}
            <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-brand-dark/30 to-transparent pointer-events-none"></div>

            {/* Accent tag */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 px-6 py-3 bg-white/90 backdrop-blur-md rounded-full border border-divider shadow-sm z-10 transition-transform duration-300">
               <span className="font-sans text-xs sm:text-sm font-bold uppercase tracking-widest text-brand-teal">Nexus Clinic KL</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}

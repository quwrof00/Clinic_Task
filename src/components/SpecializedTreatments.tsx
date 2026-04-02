import { specializedTreatments } from '../data';

export default function SpecializedTreatments() {
  return (
    <section id="treatments" aria-labelledby="specialized-title" className="w-full h-auto lg:h-[100dvh] bg-bg-cream flex flex-col justify-center py-12 lg:py-10 px-4 sm:px-8 border-t border-divider font-serif text-text-dark lg:overflow-hidden relative">
      <div className="w-full max-w-[1200px] mx-auto flex flex-col items-center max-h-full h-full">
        
        {/* Header */}
        <div className="text-center mb-6 sm:mb-10 max-w-[700px] shrink-0 pt-12 lg:pt-0">
          <h2 id="specialized-title" className="font-sans text-3xl md:text-4xl lg:text-5xl font-extrabold text-brand-dark tracking-tight mb-3">
            Our Specialized Treatments
          </h2>
          <p className="font-serif text-lg sm:text-xl text-text-grey leading-snug">
            Medically guided solutions for Face, Body, and Hair.
          </p>
        </div>

        {/* Natural container on Mobile / Grid with scroll for Desktop if needed */}
        <div className="w-full h-auto lg:h-full lg:overflow-y-auto lg:hide-scrollbar lg:grid lg:grid-cols-3 gap-6 xl:gap-8 pb-10 lg:pb-0" role="list">
          
          {specializedTreatments.map((item, index) => (
            <div key={index} role="listitem" className="flex flex-col h-auto lg:h-full bg-white rounded-[32px] border border-divider shadow-sm overflow-hidden hover:shadow-xl hover:border-accent-green transition-all duration-500 group mb-6 lg:mb-0">
              
              {/* Media Space */}
              <div className={`relative w-full h-[200px] sm:h-[240px] flex items-center justify-center p-0 ${item.accent} shrink-0 overflow-hidden group/media`}>
                <div className="absolute inset-0 bg-brand-dark/[0.05] mix-blend-multiply transition-colors group-hover/media:bg-transparent z-10 pointer-events-none"></div>
                <img src={item.image} alt="" aria-hidden="true" className="w-full h-full object-cover group-hover/media:scale-105 transition-transform duration-[1.5s] ease-out" />
              </div>

              {/* Card Content Area */}
              <div className="p-6 sm:p-8 flex flex-col flex-1">
                <h3 className="font-sans text-xl sm:text-2xl font-bold text-brand-dark mb-3">
                  {item.title}
                </h3>
                <p className="font-serif text-base sm:text-lg text-text-grey leading-relaxed mb-6 flex-1">
                  {item.desc}
                </p>
                
                <div className="mt-auto shrink-0">
                  <button className="font-sans text-xs sm:text-sm font-bold text-text-dark bg-bg-beige px-5 py-3 rounded-full hover:bg-brand-dark hover:text-white transition-colors duration-300 shadow-sm relative overflow-hidden group/btn flex items-center justify-between w-full border border-divider hover:border-brand-dark active:scale-[0.98] outline-none focus-visible:ring-2 focus-visible:ring-brand-dark">
                    <span>{item.linkText}</span>
                    <span className="w-7 h-7 rounded-full bg-bg-cream flex items-center justify-center font-serif text-brand-teal group-hover/btn:bg-white/20 transition-colors text-lg pb-[2px]" aria-hidden="true">
                      →
                    </span>
                  </button>
                </div>
              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  )
}


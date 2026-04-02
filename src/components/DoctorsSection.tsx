import { doctors } from '../data';

export default function DoctorsSection() {
  return (
    <section id="doctors" aria-labelledby="doctors-title" className="w-full bg-bg-cream h-auto lg:h-screen lg:overflow-hidden flex flex-col justify-center py-16 lg:py-10 px-4 sm:px-8 md:px-12 border-t border-divider">
      <div className="w-full max-w-[1400px] mx-auto flex flex-col h-full">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 shrink-0 mb-8 mt-auto md:mt-0 pt-8 lg:pt-0">
          <div className="max-w-xl">
            <h2 id="doctors-title" className="font-sans text-3xl md:text-4xl lg:text-5xl font-extrabold text-brand-dark tracking-tight mb-3">
              Our Medical Team
            </h2>
            <p className="font-serif text-base sm:text-lg md:text-2xl text-text-grey leading-relaxed">
              Doctor-led care means that all injectables, prescriptions, and medical protocols are assessed and performed by certified professionals prioritizing your safety.
            </p>
          </div>
        </div>

        {/* Doctors Grid: Natural stacking on Mobile / Scroll/Grid on Desktop */}
        <div className="flex flex-col lg:grid lg:grid-cols-4 gap-8 lg:gap-6 w-full lg:flex-1 lg:min-h-0 lg:overflow-visible lg:hide-scrollbar pb-4 lg:pb-0" role="list">
          {doctors.map((d, index) => (
            <div key={index} role="listitem" className="w-full h-auto lg:h-full flex flex-col group cursor-pointer gap-4">

              {/* Individual Portrait Space */}
              <div className="w-full h-[400px] sm:h-[500px] lg:flex-1 lg:min-h-[200px] rounded-[32px] bg-bg-beige border border-divider shadow-[0_4px_20px_rgba(47,93,80,0.03)] group-hover:shadow-[0_20px_50px_rgba(47,93,80,0.12)] transition-all duration-500 relative overflow-hidden group-hover:-translate-y-1.5">
                
                {/* Official Portrait */}
                <img 
                  src={d.image} 
                  alt={`${d.name} - ${d.title}`} 
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover object-top transition-all duration-[1s] ease-out group-hover:scale-105" 
                />

                {/* Subtle Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                {/* Decorative border accent */}
                <div className="absolute inset-0 border border-brand-teal/0 group-hover:border-brand-teal/20 rounded-[32px] transition-all duration-500" aria-hidden="true"></div>
              </div>

              {/* Text Info (Sleek Alignment) */}
              <div className="flex flex-col text-center sm:text-left shrink-0 pb-2">
                <h3 className="font-sans font-extrabold text-xl md:text-2xl text-brand-dark group-hover:text-brand-teal transition-colors">
                  {d.name}
                </h3>
                <p className="font-sans text-brand-teal text-[10px] sm:text-[11px] tracking-[0.2em] uppercase font-bold mt-1">
                  {d.title}
                </p>
                <div className="w-10 h-[2px] bg-brand-teal/20 mx-auto sm:mx-0 mt-3 mb-2 transition-all group-hover:w-20 group-hover:bg-brand-teal/40" aria-hidden="true"></div>
                <p className="font-serif text-text-grey text-sm lg:text-[15px] leading-snug max-w-[95%] mx-auto sm:mx-0 opacity-80">
                  {d.description}
                </p>
              </div>

            </div>
          ))}
        </div>

        {/* Universal Centralized CTA Down */}
        <div className="flex justify-center shrink-0 mt-6 lg:mt-8 pt-4 border-t border-divider/50 mb-auto md:mb-0">
          <button className="w-full sm:w-auto font-sans text-xs sm:text-sm tracking-widest font-bold uppercase px-10 py-4 rounded-full bg-brand-dark text-white hover:bg-brand-teal transition-all shadow-md hover:shadow-lg active:scale-95 border border-transparent outline-none focus-visible:ring-2 focus-visible:ring-brand-dark">
            Meet Our Doctors Team
          </button>
        </div>

      </div>
    </section>
  )
}


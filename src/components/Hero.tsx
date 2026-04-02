import heroBg from '../assets/hero-background.png';
import { clinicStats, specializedTreatments } from '../data';

export default function Hero() {
  return (
    <div id="hero" role="banner" className="flex flex-col lg:flex-row h-auto lg:h-[100dvh] w-full bg-bg-lightgreen font-serif text-text-dark lg:overflow-hidden relative pb-12 lg:pb-0">
      <img src={heroBg} alt="" className="absolute inset-0 w-full h-full object-cover z-0 opacity-40 pointer-events-none" aria-hidden="true" />
      <div className="absolute inset-0 bg-brand-dark/10 z-0 pointer-events-none"></div>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col h-full p-6 sm:p-8 md:p-12 xl:p-16 relative z-10 lg:overflow-hidden">

        {/* Content Container */}
        <div className="w-full max-w-[1200px] mx-auto pt-24 lg:pt-0 flex-1 flex flex-col lg:flex-row gap-10 xl:gap-20 items-center justify-center">

          {/* Left Column - Main Copy */}
          <div className="w-full lg:flex-1 flex flex-col justify-center text-center lg:text-left">
            <div className="mb-6 lg:mb-4 flex justify-center lg:justify-start">
              <span className="font-sans text-[9px] lg:text-[10px] uppercase tracking-[0.2em] font-bold px-4 py-2 bg-bg-lightgreen/80 text-brand-dark rounded-full border border-accent-green/30 shadow-sm backdrop-blur-sm">
                MOH Accredited Clinic
              </span>
            </div>

            <h1 className="font-sans text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-brand-dark tracking-tight mb-6 lg:mb-8 leading-[1.1]">
              Advanced Aesthetic <br className="hidden lg:block" /> and Medical Weight Loss
            </h1>

            <h2 className="font-sans text-base sm:text-lg lg:text-xl font-medium text-brand-teal mb-8 lg:mb-10 leading-relaxed max-w-[500px] mx-auto lg:mx-0">
              Doctor-led, non-surgical results for face, skin, hair, and body. Registered and compliant.
            </h2>

            <div className="hidden lg:block w-12 h-[1px] bg-brand-teal/30 mb-8"></div>

            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
              <button className="w-full sm:w-auto font-sans text-xs lg:text-sm font-bold px-8 py-4 bg-brand-dark text-white rounded-full hover:bg-brand-teal transition-all shadow-lg active:scale-95 tracking-widest uppercase outline-none focus-visible:ring-2 focus-visible:ring-brand-dark">
                Book Assessment
              </button>
              <button className="w-full sm:w-auto font-sans text-xs lg:text-sm font-bold px-8 py-4 bg-white/50 backdrop-blur-md text-brand-dark rounded-full hover:bg-white transition-all active:scale-95 border border-white/40 tracking-widest uppercase outline-none focus-visible:ring-2 focus-visible:ring-white">
                Learn More
              </button>
            </div>
          </div>

          {/* Right Column - Featured Box (Visible on Tablet/Desktop) */}
          <div className="w-full lg:w-[380px] xl:w-[450px] shrink-0">
            <div className="w-full bg-white/30 backdrop-blur-xl rounded-[40px] p-8 lg:p-10 flex flex-col justify-center relative border border-white/40 shadow-[0_30px_60px_rgba(47,93,80,0.08)] overflow-hidden group/box">
              <div className="absolute top-0 right-0 w-[60%] h-[60%] bg-brand-teal/5 rounded-bl-[100px] transition-transform duration-700 group-hover/box:scale-110"></div>

              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-8 h-[1px] bg-brand-teal/40"></div>
                  <h3 className="font-sans text-[10px] tracking-[0.3em] uppercase font-bold text-brand-dark">
                    Featured treatments
                  </h3>
                </div>

                <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4 w-full">
                  {specializedTreatments.map((item, i) => (
                    <li key={i} className="flex flex-col gap-0.5 group cursor-default">
                      <div className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-brand-teal opacity-40 group-hover:opacity-100 transition-opacity"></div>
                        <span className="font-sans font-extrabold text-[13px] sm:text-sm text-brand-dark tracking-tight">
                          {item.title}
                        </span>
                      </div>
                      <span className="font-serif text-[12px] italic text-text-grey leading-tight pl-3.5 opacity-80">
                        {item.desc.split('.')[0]}.
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right Stats Strip (Desktop Only) */}
      <div className="w-[110px] xl:w-[130px] h-full bg-bg-lightgreen/80 backdrop-blur-md border-l border-white/20 hidden lg:flex flex-col justify-evenly pt-24 pb-16 px-2 items-center text-center shrink-0 z-30 relative shadow-[-20px_0_40px_rgba(0,0,0,0.02)]">
        {clinicStats.map((stat, i) => (
          <div key={i} className="flex flex-col items-center gap-1 group">
            <span className="font-sans font-extrabold text-2xl xl:text-3xl text-brand-dark group-hover:scale-110 transition-transform">{stat.val}</span>
            <span className="font-sans text-[9px] uppercase tracking-widest text-brand-teal font-bold leading-tight">{stat.lbl}</span>
            {i < clinicStats.length - 1 && <div className="w-8 h-[1px] bg-brand-teal/20 mt-4"></div>}
          </div>
        ))}
      </div>
    </div>
  );
}


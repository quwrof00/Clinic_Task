import { useRef } from "react";

export default function Testimonials() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const testimonials = [
    {
      text: "The medical approach to my pigmentation issues was refreshing. No hard selling, just a clear plan that actually worked.",
      author: "Sarah T.",
      treatment: "Acne & Pigmentation"
    },
    {
      text: "Dr. Aris explained everything so clearly. My Botox results look completely natural, which is exactly what I wanted.",
      author: "Michelle K.",
      treatment: "Facial Aesthetics"
    },
    {
      text: "Finally a clinic that prioritizes safety over trends. The hair restoration program has given me significantly more density after 3 months.",
      author: "David L.",
      treatment: "Hair Restoration"
    },
    {
      text: "The attention to detail and hygiene standards here are unmatched. I felt completely safe throughout my entire Sculptra treatment.",
      author: "Elena R.",
      treatment: "Collagen Stimulation"
    },
    {
      text: "Professional, ethical, and results-driven. They actually advised me against a treatment I didn't need and suggested a better alternative.",
      author: "Jessica W.",
      treatment: "Medical Consultation"
    }
  ]

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  return (
    <section className="w-full bg-bg-beige h-auto lg:h-screen flex flex-col justify-center py-16 lg:py-10 px-4 sm:px-8 md:px-12 border-t border-divider lg:overflow-hidden">
      <div className="w-full max-w-[1400px] mx-auto flex flex-col h-full">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 lg:mb-12 shrink-0">
          <div className="max-w-xl">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-brand-dark font-sans tracking-tight mb-3">
              Look At What They Said
            </h2>
            <p className="font-serif text-lg sm:text-xl md:text-2xl text-text-grey leading-snug">
              These compelling testimonials are a collection of genuine feedback and experiences shared by real users:
            </p>
          </div>

          {/* Carousel buttons - Top Right on Desktop */}
          <div className="hidden md:flex gap-2 mb-1">
            <button
              onClick={scrollLeft}
              className="h-10 w-10 md:h-12 md:w-12 rounded-full bg-white flex items-center justify-center border border-divider hover:bg-bg-cream transition-all shadow-sm text-brand-dark"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <button
              onClick={scrollRight}
              className="h-10 w-10 md:h-12 md:w-12 rounded-full bg-white flex items-center justify-center border border-divider hover:bg-bg-cream transition-all shadow-sm text-brand-dark"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
        </div>

        {/* Carousel track */}
        <div
          ref={scrollRef}
          className="w-full lg:flex-1 lg:min-h-0 overflow-x-auto overscroll-x-contain snap-x snap-mandatory hide-scrollbar flex items-stretch gap-4 pb-6"
        >
          {testimonials.map((t, index) => (
            <div
              key={index}
              className="snap-start shrink-0 w-[85vw] sm:w-[45vw] lg:w-[400px] h-auto lg:h-full rounded-[32px] bg-white border border-divider shadow-sm hover:shadow-xl transition-all relative p-6 sm:p-8 flex flex-col justify-between group"
            >
              <div className="absolute top-0 right-4 text-7xl font-serif text-bg-lightgreen/30 pointer-events-none">"</div>
              
              <div className="relative z-10 flex flex-col h-full">
                <span className="text-[10px] tracking-widest font-bold text-brand-teal uppercase mb-4">{t.treatment}</span>
                <p className="text-text-dark text-base sm:text-lg lg:text-xl font-bold font-serif leading-relaxed italic mb-8">
                  "{t.text}"
                </p>

                <div className="mt-auto flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-bg-lightgreen flex items-center justify-center text-brand-teal font-sans font-bold text-sm">
                    {t.author.charAt(0)}
                  </div>
                  <span className="font-sans font-extrabold text-brand-dark text-sm sm:text-base">{t.author}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

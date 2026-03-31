import skinAcne from '../assets/skin-acne.png';
import weightLoss from '../assets/weight-loss.png';
import hairRestoration from '../assets/hair-restoration.png';
import regenerative from '../assets/regenerative.png';
import heroBg from '../assets/hero-background.png';
import whyMedia from '../assets/why-media.png';

const blogs = [
  {
    title: "The Science Behind Polynucleotides: Next-Gen Skin Healing",
    category: "Skin Rejuvenation",
    date: "March 15, 2026",
    snippet: "Exploring how DNA-derived treatments are changing the landscape of cellular repair and natural anti-aging protocols.",
    image: regenerative
  },
  {
    title: "Debunking Medical Weight Loss Myths",
    category: "Body Contouring",
    date: "March 02, 2026",
    snippet: "An honest, doctor-led discussion separating viral social media claims from actual clinical evidence regarding semaglutide.",
    image: weightLoss
  },
  {
    title: "Post-Treatment Care: Maximizing Pico Laser Results",
    category: "Clinical Advice",
    date: "February 24, 2026",
    snippet: "Why your at-home skincare routine is just as important as the clinical laser procedure itself for treating pigmentation.",
    image: skinAcne
  },
  {
    title: "Why Doctor-Led Aesthetics Matter More Than Ever",
    category: "Patient Safety",
    date: "February 18, 2026",
    snippet: "Understanding the crucial difference between aesthetic spa treatments and regulated medical-grade procedures.",
    image: whyMedia
  },
  {
    title: "Understanding Hair Restoration: PRP vs. Mesotherapy",
    category: "Hair Health",
    date: "February 05, 2026",
    snippet: "A breakdown of the two most proven clinical interventions for thinning hair, driven by your own biological factors.",
    image: hairRestoration
  },
  {
    title: "The Rise of Preventative 'Baby Botox' in KL",
    category: "Injectables",
    date: "January 29, 2026",
    snippet: "How younger demographics are utilizing micro-dosing to prevent structural wrinkles without freezing facial expressions.",
    image: heroBg
  }
];

export default function BlogsSection() {
  return (
    <section id="blogs" className="w-full bg-bg-cream h-auto lg:h-[100dvh] flex flex-col justify-center py-16 lg:py-10 px-4 sm:px-8 md:px-12 border-t border-divider lg:overflow-hidden relative">
      <div className="w-full max-w-[1400px] mx-auto flex flex-col lg:flex-row h-full gap-8 lg:gap-14 lg:items-center lg:justify-between">

        {/* Left Side: Container with All Blogs -> Adjusted to w-52% */}
        <div className="w-full lg:w-[52%] flex flex-col h-auto lg:h-full shrink-0">
          {/* Header */}
          <div className="mb-6 lg:mb-8 shrink-0">

            <h2 className="font-sans text-3xl md:text-4xl lg:text-5xl font-extrabold text-brand-dark tracking-tight mb-3">
              Explore Our Latest Blogs
            </h2>
            <p className="font-serif text-base sm:text-lg text-text-grey leading-relaxed max-w-xl">
              Evidence-based articles, treatment guides, and clinical perspectives from our medical team.
            </p>
          </div>

          {/* Scrollable Blogs List */}
          <div className="flex-1 min-h-[0px] overflow-y-auto hide-scrollbar rounded-3xl pb-4 pr-1 lg:pr-4">
            <div className="flex flex-col gap-4 lg:gap-5">
              {blogs.map((blog, index) => (
                <div
                  key={index}
                  className="flex flex-col sm:flex-row gap-4 sm:gap-6 p-4 rounded-[28px] border border-divider bg-white hover:border-brand-teal hover:shadow-[0_10px_30px_rgba(47,93,80,0.08)] transition-all duration-500 group cursor-pointer"
                >
                  {/* Media on the left */}
                  <div className="w-full sm:w-[150px] lg:w-[180px] h-[180px] sm:h-[150px] lg:h-[170px] shrink-0 rounded-[20px] overflow-hidden relative bg-bg-beige">
                    <img
                      src={blog.image}
                      alt={blog.title}
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-[1.5s] ease-out"
                    />
                    <div className="absolute inset-0 bg-brand-dark/0 group-hover:bg-brand-dark/10 transition-colors duration-500"></div>
                  </div>

                  {/* Text on the right */}
                  <div className="flex flex-col justify-center flex-1 py-1 sm:pr-4">
                    <div className="flex items-center gap-3 mb-2 sm:mb-3">
                      <span className="font-sans text-[10px] sm:text-[11px] font-bold tracking-widest uppercase text-brand-teal bg-bg-lightgreen px-3 py-1 rounded-full">
                        {blog.category}
                      </span>
                      <span className="font-serif text-xs sm:text-sm text-text-grey italic">
                        {blog.date}
                      </span>
                    </div>
                    <h3 className="font-sans font-extrabold text-lg sm:text-xl text-brand-dark leading-snug mb-2 group-hover:text-brand-teal transition-colors duration-300">
                      {blog.title}
                    </h3>
                    <p className="font-serif text-sm sm:text-[15px] text-text-grey leading-relaxed line-clamp-2">
                      {blog.snippet}
                    </p>

                    <div className="mt-4 flex items-center gap-2 group/btn self-start">
                      <span className="font-sans text-xs font-bold uppercase tracking-widest text-brand-dark group-hover/btn:text-brand-teal transition-colors">
                        Read Article
                      </span>
                      <div className="w-5 h-5 rounded-full bg-bg-beige flex items-center justify-center group-hover/btn:translate-x-1 group-hover/btn:bg-bg-lightgreen transition-all">
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" className="text-brand-dark group-hover/btn:text-brand-teal transition-colors">
                          <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Side: Sticky Featured Subscription Block -> Adjusted to w-42% */}
        <div className="hidden lg:flex lg:w-[42%] h-full shrink-0 flex-col justify-center pointer-events-none">
          <div className="w-full h-full max-h-[750px] bg-brand-dark rounded-[40px] relative overflow-hidden flex flex-col border border-brand-teal/20 pointer-events-auto shadow-2xl">

            {/* Dark Aesthetic Image Background */}
            <div className="absolute inset-0 opacity-40 mix-blend-overlay">
              <img src={whyMedia} className="w-full h-full object-cover" alt="Clinical Aesthetics" />
            </div>

            <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/80 to-transparent"></div>

            {/* Top Tag */}
            <div className="absolute top-8 right-8 z-20">
              <span className="font-sans text-xs tracking-widest uppercase font-bold text-bg-lightgreen bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/10">
                Nexus Newsletter
              </span>
            </div>

            {/* Content Bottom */}
            <div className="relative z-20 mt-auto p-12 flex flex-col gap-6">
              <div className="w-12 h-1 bg-brand-teal rounded-full mb-2"></div>

              <h3 className="font-sans text-4xl xl:text-5xl font-extrabold text-white leading-[1.1] tracking-tight">
                Deep Dive Into Modern Clinical Aesthetics.
              </h3>

              <p className="font-serif text-lg text-bg-cream/70 leading-relaxed max-w-sm">
                Join our exclusive mailing list to receive doctor-approved protocols, exclusive access to new treatments, and medical insights directly to your inbox.
              </p>

              <div className="flex flex-col gap-3 mt-4">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="w-full bg-white/5 border border-white/10 rounded-full px-6 py-4 font-sans text-sm text-white placeholder-white/40 focus:outline-none focus:border-brand-teal backdrop-blur-sm transition-all shadow-inner"
                />
                <button className="w-full bg-white text-brand-dark font-sans font-bold uppercase tracking-widest text-sm px-6 py-4 rounded-full hover:bg-brand-teal hover:text-white transition-all duration-300 shadow-md active:scale-[0.98]">
                  Subscribe Now
                </button>
              </div>

              <p className="font-sans text-[10px] text-white/40 tracking-wider text-center mt-2 uppercase">
                We respect your privacy. No spam.
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

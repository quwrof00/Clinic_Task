import logo from '../assets/logo.png';
import { contactInfo } from '../data';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-brand-dark text-white pt-20 pb-10 px-6 sm:px-12 flex flex-col border-t border-white/10 relative overflow-hidden" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">Footer</h2>
      {/* Decorative Background Element */}
      <div className="absolute top-0 right-0 w-[40%] h-[40%] bg-brand-teal/5 rounded-bl-[200px] pointer-events-none" aria-hidden="true"></div>

      <div className="w-full max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 relative z-10">

        {/* Left Column: Brand & Mission */}
        <div className="lg:col-span-5 flex flex-col gap-10">
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-4">
              <img src={logo} alt="Nexus Clinic Logo" className="w-[120px] object-contain invert opacity-90" />
            </div>
            <div className="flex flex-col gap-4 max-w-md">
              <p className="font-serif text-lg text-bg-cream/80 leading-relaxed italic">
                "Founded in 2001, Nexus Clinic is a top-notch aesthetic center, providing a comprehensive range of non-surgical aesthetic procedures and advanced laser treatments."
              </p>
              <p className="font-serif text-base text-bg-cream/60 leading-relaxed">
                Nexus Clinic is dedicated to serve our clients’ needs by providing confidential, professional and personalized aesthetic services to both local and regional market.
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <span className="font-sans text-[10px] uppercase tracking-[0.3em] font-bold text-brand-teal">Clinical Standard</span>
            <p className="font-sans text-sm font-bold uppercase tracking-widest text-bg-cream/40">
              Ministry of Health Registered (MOH)
            </p>
          </div>
        </div>

        {/* Right Columns: Locations & Details */}
        <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">

          {/* Main Clinic Info */}
          <div className="flex flex-col gap-6">
            <h4 className="font-sans text-xs uppercase tracking-[0.2em] font-bold text-brand-teal">
              {contactInfo.kl.name}
            </h4>
            <div className="flex flex-col gap-4">
              <address className="not-italic font-serif text-lg text-bg-cream/80 leading-relaxed">
                {contactInfo.kl.address}
              </address>
              <div className="flex flex-col gap-1">
                <p className="font-serif text-base text-bg-cream/60">Mobile: {contactInfo.kl.mobile}</p>
                <p className="font-sans text-sm font-bold text-white uppercase tracking-wider">Main Line: {contactInfo.kl.mainLine}</p>
              </div>
            </div>

            <div className="mt-2">
              <span className="font-sans text-[10px] uppercase tracking-[0.2em] font-bold text-brand-teal block mb-2">Opening Hours</span>
              <p className="font-serif text-base text-bg-cream/80">{contactInfo.kl.hours}</p>
              <p className="font-serif text-sm text-bg-cream/40 italic">{contactInfo.kl.closed}</p>
            </div>
          </div>

          {/* Secondary Clinic Info */}
          <div className="flex flex-col gap-6">
            <h4 className="font-sans text-xs uppercase tracking-[0.2em] font-bold text-brand-teal">
              {contactInfo.klcc.name}
            </h4>
            <div className="flex flex-col gap-4">
              <address className="not-italic font-serif text-lg text-bg-cream/80 leading-relaxed">
                {contactInfo.klcc.address}
              </address>
              <div className="flex items-center gap-2 text-brand-teal">
                <div className="w-2 h-2 rounded-full bg-brand-teal animate-pulse" aria-hidden="true"></div>
                <span className="font-sans text-xs font-bold uppercase tracking-widest">{contactInfo.klcc.status}</span>
              </div>
            </div>

            {/* Quick Links Overlay */}
            <div className="mt-auto pt-8 border-t border-white/5 flex flex-wrap gap-4">
              {contactInfo.socials.map((platform) => (
                <a
                  key={platform}
                  href="#"
                  className="font-sans text-[10px] uppercase tracking-[0.2em] font-bold text-bg-cream/30 hover:text-white transition-colors no-underline focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white rounded-sm px-1"
                >
                  {platform}
                </a>
              ))}
            </div>
          </div>

        </div>

      </div>

      {/* Extreme Bottom bar */}
      <div className="w-full max-w-[1400px] mx-auto mt-20 pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 relative z-10">
        <p className="font-serif text-xs text-bg-cream/20">
          Important: Medical aesthetic results vary between individuals. Consultations are mandatory to assess suitability. All treatments are performed by qualified medical professionals.
        </p>
        <p className="font-serif text-xs text-bg-cream/30">
          &copy; {currentYear} Nexus Clinic. All rights reserved.
        </p>
      </div>
    </footer>
  );
}


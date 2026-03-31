import { useState, useEffect } from 'react';
import logo from '../assets/logo.png';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: "Treatments", hasDropdown: true },
    { label: "Our Doctors", hasDropdown: false },
    { label: "Why Nexus", hasDropdown: false },
    { label: "Journal", hasDropdown: false },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 px-6 sm:px-12 lg:px-20 py-6 flex items-center justify-between ${
        isScrolled 
          ? "bg-bg-cream/90 backdrop-blur-md border-b border-divider py-4" 
          : "bg-transparent py-8"
      }`}
    >
      {/* Brand Logo - Top Left */}
      <a href="#hero" className="flex items-center group cursor-pointer lg:pr-12 outline-none">
        <img 
          src={logo} 
          alt="Nexus Clinic" 
          className="h-10 md:h-14 w-auto object-contain transition-all duration-300 group-hover:scale-[1.03] grayscale brightness-0 opacity-100" 
        />
      </a>

      {/* Main Navigation: Centered with massive gaps for premium look */}
      <div className="hidden xl:flex items-center gap-14 text-brand-dark">
        {navLinks.map((link) => (
          <div key={link.label} className="group relative py-2">
            <div className="flex items-center gap-2 cursor-pointer transition-all duration-300 hover:text-brand-teal">
              <span className="font-sans text-[11px] font-extrabold uppercase tracking-[0.2em]">
                {link.label}
              </span>
              {link.hasDropdown && (
                <svg className="w-3 h-3 opacity-50 group-hover:rotate-180 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M19 9l-7 7-7-7" />
                </svg>
              )}
            </div>
            {/* Minimalist Hover Underline Indicator */}
            <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-brand-teal transition-all duration-300 group-hover:w-full"></div>
          </div>
        ))}
      </div>

      {/* Action Buttons with padding for balance */}
      <div className="flex items-center gap-10">
        <div className="hidden lg:flex items-center gap-6">
          <button className="font-sans text-[11px] font-extrabold uppercase tracking-[0.2em] text-brand-dark hover:text-brand-teal transition-colors pr-6 border-r border-divider">
            Shop
          </button>
          <button className="font-sans text-[11px] font-extrabold uppercase tracking-[0.2em] text-brand-dark hover:text-brand-teal transition-colors">
            KLCC / Bangsar
          </button>
        </div>

        <button className={`px-8 py-3.5 rounded-full font-sans font-extrabold uppercase tracking-[0.15em] text-[11px] transition-all duration-500 shadow-sm active:scale-95 ${
          isScrolled 
            ? "bg-brand-dark text-white hover:bg-brand-teal" 
            : "bg-white text-brand-dark hover:bg-brand-dark hover:text-white border border-divider"
        }`}>
          Book Consultation
        </button>

        {/* Minimalist Multi-line Hamburger for Mobile */}
        <button 
          className="xl:hidden flex flex-col gap-1.5 p-2 group"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <div className={`w-6 h-0.5 bg-brand-dark rounded-full transition-all duration-300 ${isMenuOpen ? "rotate-45 translate-y-2" : ""}`}></div>
          <div className={`w-4 h-0.5 bg-brand-dark rounded-full transition-all duration-300 ${isMenuOpen ? "opacity-0" : ""}`}></div>
          <div className={`w-6 h-0.5 bg-brand-dark rounded-full transition-all duration-300 ${isMenuOpen ? "-rotate-45 -translate-y-2" : ""}`}></div>
        </button>
      </div>

      {/* Mobile Menu Overlay with elegant fade */}
      <div 
        className={`absolute top-full left-0 w-full bg-white/95 backdrop-blur-xl transition-all duration-500 border-t border-divider pointer-events-auto ${
          isMenuOpen ? "max-h-screen opacity-100 py-16 visible" : "max-h-0 opacity-0 py-0 invisible"
        }`}
      >
        <div className="flex flex-col items-center gap-10 text-brand-dark">
          {navLinks.map((link) => (
            <a key={link.label} href="#" className="font-sans text-lg font-extrabold uppercase tracking-[0.3em] hover:text-brand-teal transition-colors">
              {link.label}
            </a>
          ))}
          <div className="w-12 h-[1px] bg-divider my-4"></div>
          <button className="font-sans text-sm font-extrabold uppercase tracking-[0.2em] text-brand-dark">
            Shop Products
          </button>
          <button className="px-12 py-5 bg-brand-dark text-white rounded-full font-sans font-extrabold uppercase tracking-[0.2em] text-xs">
            Book Now
          </button>
        </div>
      </div>
    </nav>
  );
}

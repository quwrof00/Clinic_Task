export default function ContactStrip() {
  return (
    <section className="w-full bg-bg-lightgreen py-20 px-6 sm:px-12 border-t border-divider flex flex-col justify-center overflow-hidden">
      <div className="w-full max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
        
        {/* Left Side: Large Heading */}
        <div className="flex flex-col gap-6">
          <div className="w-12 h-1.5 bg-brand-teal rounded-full mb-2"></div>
          <h2 className="font-sans text-4xl md:text-6xl lg:text-7xl font-extrabold text-brand-dark leading-[1.1] tracking-tight">
            Get in touch.
          </h2>
          <p className="font-serif text-xl md:text-2xl text-text-grey leading-relaxed max-w-md">
            Visit Nexus Clinic Kuala Lumpur for a professional medical assessment.
          </p>
        </div>

        {/* Right Side: Contact Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 bg-white p-8 md:p-12 rounded-[40px] shadow-[0_20px_50px_rgba(47,93,80,0.05)] border border-divider">
          
          {/* Address Block */}
          <div className="flex flex-col gap-4 md:col-span-2">
            <span className="font-sans text-xs tracking-[0.3em] font-bold text-brand-teal uppercase">Location</span>
            <p className="font-serif text-lg md:text-xl text-text-dark leading-relaxed">
              LG 10, Lower Ground Floor, Wisma UOA II,<br />
              Jalan Pinang, 50450 Kuala Lumpur, Malaysia
            </p>
          </div>

          {/* Phone Block */}
          <div className="flex flex-col gap-4">
            <span className="font-sans text-xs tracking-[0.3em] font-bold text-brand-teal uppercase">Contact Numbers</span>
            <div className="flex flex-col gap-1.5">
              <p className="font-serif text-lg text-text-dark">Phone: 016-702 5699</p>
              <p className="font-serif text-lg text-text-dark">Phone: 03-2163 5699</p>
              <p className="font-serif text-lg font-bold text-brand-dark">Main: +016-921 5699</p>
            </div>
          </div>

          {/* Hours Block */}
          <div className="flex flex-col gap-4">
            <span className="font-sans text-xs tracking-[0.3em] font-bold text-brand-teal uppercase">Opening Hours</span>
            <div className="flex flex-col gap-1.5">
              <p className="font-serif text-lg text-text-dark">Monday to Saturday: 9:00am - 6:00pm</p>
              <p className="font-serif text-sm italic text-text-grey">Sunday and Public Holidays: Closed</p>
            </div>
          </div>

          {/* Action Button */}
          <div className="md:col-span-2 mt-4">
            <button className="w-full bg-brand-dark text-white font-sans font-bold uppercase tracking-widest text-sm px-8 py-5 rounded-full hover:bg-brand-teal transition-all duration-300 shadow-lg active:scale-[0.98]">
              Navigate via Google Maps
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}

import { useState } from "react";

type FaqItem = {
  question: string;
  answer: string;
};

const faqs: Record<string, FaqItem[]> = {
  "Clinic Profile": [
    { question: "What is an aesthetic clinic?", answer: "An aesthetic clinic is a medical facility that offers non-surgical and minimally invasive procedures aimed at improving cosmetic appearance." },
    { question: "Is Nexus Clinic a medical aesthetic clinic?", answer: "Yes, we are a fully accredited medical aesthetic clinic staffed by certified medical professionals and doctors." },
    { question: "Is the clinic doctor-led?", answer: "Absolutely. All assessments, prescriptions, and complex treatments are led and supervised by our medical doctors." },
    { question: "Where is your clinic located and is parking available?", answer: "We are located centrally with secure, dedicated parking available directly at the premise for our patients' convenience." },
    { question: "What languages does your team speak?", answer: "Our staff is multilingual, fluent in English, and several local dialects to ensure transparent communication." }
  ],
  "Treatments & Services": [
    { question: "What are aesthetic treatments?", answer: "These are medical procedures designed to improve skin quality, reduce signs of aging, or contour the body, emphasizing natural results." },
    { question: "Does Nexus Clinic only sell weight loss products?", answer: "No, we offer a comprehensive range of aesthetic services including facial injectables, skin rejuvenation, and hair restoration." },
    { question: "Does Nexus Clinic provide a medical weight loss programme?", answer: "Yes, we provide doctor-supervised medical weight loss programs utilizing evidence-based treatments." },
    { question: "Are your products and equipment medically approved?", answer: "We use only highly vetted, FDA-approved, and CE-marked medical products and equipment for maximum efficacy and safety." }
  ],
  "Booking & Visit": [
    { question: "How can I book an appointment with your clinic?", answer: "You can book directly through our website, via phone, or securely through WhatsApp." },
    { question: "Is consultation required before proceeding?", answer: "Yes, a thorough medical consultation is mandatory to evaluate suitability and ensure your safety before any treatment." },
    { question: "Do you accept walk-ins or is booking required?", answer: "To ensure adequate time and privacy for every patient, we operate strictly by prior appointment." }
  ],
  "Support & Privacy": [
    { question: "Do you offer WhatsApp support for enquiries?", answer: "Yes, our dedicated WhatsApp line allows you to ask questions and coordinate appointments easily." },
    { question: "How do you ensure patient privacy and confidentiality?", answer: "We strictly adhere to medical confidentiality laws. Your records, consultations, and treatments are completely private." },
    { question: "How can I contact the clinic after my visit?", answer: "You will be provided with a direct post-care contact number to ensure any questions are answered rapidly by our medical team." }
  ]
};

const categories = Object.keys(faqs);

export default function FaqSection() {
  const [activeCategory, setActiveCategory] = useState(categories[0]);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <section className="w-full bg-bg-beige h-auto lg:h-screen flex flex-col justify-center py-16 lg:py-10 px-4 sm:px-8 md:px-12 border-t border-divider lg:overflow-hidden">
      <div className="w-full max-w-[1400px] mx-auto flex flex-col lg:flex-row h-full gap-8 lg:gap-16 items-start">

        {/* Left Side: Header & Categories */}
        <div className="w-full lg:w-[35%] flex flex-col shrink-0 lg:h-full lg:justify-center">
          <div className="mb-6 lg:mb-10 lg:pl-4">

            <h2 className="font-sans text-3xl md:text-4xl lg:text-5xl font-extrabold text-brand-dark tracking-tight mb-4">
              Frequently Asked Questions
            </h2>
            <p className="font-serif text-base sm:text-lg text-text-grey leading-snug">
              Clear, transparent answers to help you navigate your clinical aesthetic journey.
            </p>
          </div>

          {/* Mobile: 2x2 Grid for Categories */}
          <div className="lg:hidden grid grid-cols-2 gap-3 pb-6 w-full border-b border-divider/40">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => { setActiveCategory(cat); setOpenFaq(0); }}
                className={`w-full px-4 py-3 rounded-2xl font-sans text-[10px] sm:text-xs font-bold uppercase tracking-widest transition-all duration-300 ${activeCategory === cat
                    ? "bg-brand-dark text-white border border-transparent shadow-[0_4px_15px_rgba(47,93,80,0.2)]"
                    : "bg-white text-text-grey border border-divider hover:border-brand-teal"
                  }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Desktop: Vertical List */}
          <div className="hidden lg:flex flex-col gap-3 pl-4">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => { setActiveCategory(cat); setOpenFaq(0); }}
                className={`w-full text-left px-6 py-4 rounded-2xl font-sans text-sm font-bold uppercase tracking-widest transition-all duration-300 ${activeCategory === cat
                    ? "bg-brand-dark text-white shadow-[0_10px_30px_rgba(47,93,80,0.15)] pointer-events-none -translate-y-[2px]"
                    : "bg-white text-text-grey border border-divider hover:border-accent-green hover:text-brand-dark"
                  }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Right Side: Scrollable FAQ Accordion */}
        <div className="w-full lg:w-[65%] flex-1 min-h-[0px] lg:h-full flex flex-col justify-start lg:justify-center">
          <div className="flex flex-col flex-1 min-h-[0px] overflow-y-auto hide-scrollbar rounded-3xl pb-2 pr-1 lg:pr-4">
            <div className="flex flex-col gap-3 lg:gap-4 pb-8 lg:pb-0">
              {faqs[activeCategory].map((faq, index) => {
                const isOpen = openFaq === index;
                return (
                  <div
                    key={index}
                    className={`flex flex-col rounded-[24px] lg:rounded-[32px] transition-all duration-500 overflow-hidden cursor-pointer ${isOpen ? "bg-white border border-brand-teal shadow-[0_10px_30px_rgba(47,93,80,0.08)]" : "bg-white/60 border border-divider hover:border-accent-green hover:bg-white"
                      }`}
                    onClick={() => toggleFaq(index)}
                  >
                    {/* Collapsed / Title Form */}
                    <div className="w-full flex items-center justify-between p-5 md:p-6 lg:p-8 select-none">
                      <h3 className={`font-sans font-bold text-sm md:text-base lg:text-lg transition-colors pr-4 ${isOpen ? "text-brand-dark" : "text-text-dark"}`}>
                        {faq.question}
                      </h3>
                      <div className={`w-8 h-8 md:w-10 md:h-10 shrink-0 rounded-full flex items-center justify-center transition-all duration-500 ${isOpen ? "bg-brand-teal text-white rotate-45" : "bg-bg-beige text-brand-dark"}`}>
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M12 5V19M5 12H19" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </div>
                    </div>

                    {/* Expanded Content */}
                    <div
                      className={`grid transition-all duration-500 ease-in-out ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}
                    >
                      <div className="overflow-hidden">
                        <div className="p-5 md:p-6 lg:p-8 pt-0 md:pt-0 lg:pt-0 border-t border-divider/40 mx-5 md:mx-6 lg:mx-8">
                          <p className="font-serif text-[15px] sm:text-base lg:text-lg text-text-grey leading-relaxed mt-4 md:mt-5">
                            {faq.answer}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

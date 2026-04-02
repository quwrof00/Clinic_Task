import regenerative from '../assets/regenerative.png';
import skinAcne from '../assets/skin-acne.png';
import weightLoss from '../assets/weight-loss.png';
import hairRestoration from '../assets/hair-restoration.png';
import regenerativeImg from '../assets/regenerative.png'; // duplicate to avoid confusion if needed
import whyMedia from '../assets/why-media.png';
import heroBg from '../assets/hero-background.png';
import doctor1 from '../assets/doctor1.png';
import doctor2 from '../assets/doctor2.png';
import doctor3 from '../assets/doctor3.png';
import doctor4 from '../assets/doctor4.png';

export interface NavLink {
  label: string;
  href: string;
  hasDropdown: boolean;
}

export const navLinks: NavLink[] = [
  { label: "Treatments", href: "#treatments", hasDropdown: true },
  { label: "Our Doctors", href: "#doctors", hasDropdown: false },
  { label: "Why Nexus", href: "#why", hasDropdown: false },
  { label: "Journal", href: "#blogs", hasDropdown: false },
];

export interface Blog {
  title: string;
  category: string;
  date: string;
  snippet: string;
  image: string;
}

export const blogs: Blog[] = [
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

export interface Treatment {
  title: string;
  collapsed: string;
  description: string;
  benefits: string[];
  options: string[];
  cta: string;
  image: string;
}

export const treatments: Treatment[] = [
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
    image: regenerativeImg
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
];

export interface Doctor {
  name: string;
  title: string;
  image: string;
  description: string;
}

export const doctors: Doctor[] = [
  {
    name: "Dr. Aris",
    title: "Medical Director",
    image: doctor1,
    description: "Specializing in advanced injectables and holistic facial harmony."
  },
  {
    name: "Dr. Preeta",
    title: "Aesthetic Doctor",
    image: doctor2,
    description: "Expertise in clinical skin rejuvenation and pigmentation protocols."
  },
  {
    name: "Dr. Liana",
    title: "Aesthetic Doctor",
    image: doctor3,
    description: "Focusing on evidence-based medical weight loss and contouring."
  },
  {
    name: "Dr. Jane",
    title: "Aesthetic Doctor",
    image: doctor4,
    description: "Specialized in regenerative medicine and clinical hair restoration."
  }
];

export interface SpecializedTreatment {
  title: string;
  desc: string;
  linkText: string;
  accent: string;
  image: string;
}

export const specializedTreatments: SpecializedTreatment[] = [
  {
    title: "Facial & Anti-Aging",
    desc: "Restore balance, not freeze expressions. We specialize in Botox, Fillers, Sculptra, and HIFU.",
    linkText: "View Facial Treatments",
    accent: "bg-bg-lightgreen",
    image: regenerativeImg
  },
  {
    title: "Medical Weight Loss",
    desc: "Science-backed programs including Ozempic, Mounjaro, and CoolSculpting fat reduction.",
    linkText: "Explore Programs",
    accent: "bg-bg-beige",
    image: weightLoss
  },
  {
    title: "Hair Restoration",
    desc: "Medical-grade PRP and mesotherapy for thinning hair and scalp rejuvenation.",
    linkText: "Hair Solutions",
    accent: "bg-accent-green/20",
    image: hairRestoration
  }
];

export const clinicStats = [
  { val: "5000+", lbl: "Patients" },
  { val: "15+", lbl: "Years" },
  { val: "FDA", lbl: "Approved" },
  { val: "98%", lbl: "Success" }
];

export const contactInfo = {
  kl: {
    name: "Nexus Clinic Kuala Lumpur",
    address: "LG 10, Lower Ground Floor, Wisma UOA II, Jalan Pinang, 50450 Kuala Lumpur, Malaysia.",
    mobile: "016-7025699 / 03-21635699",
    mainLine: "+016-774 5699",
    hours: "Monday – Saturday: 9.00am to 6.00pm",
    closed: "Sundays & Public Holidays: Close"
  },
  klcc: {
    name: "KLCC Wellness Clinic Kuala Lumpur",
    address: "LG 9, Lower Ground Floor, Wisma UOA 2, Jalan Pinang, Kuala Lumpur, 50450, Wilayah Persekutuan Kuala Lumpur, Malaysia.",
    status: "Available via Mobile"
  },
  socials: ['Instagram', 'Facebook', 'WhatsApp']
};

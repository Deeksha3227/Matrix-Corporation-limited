import React from 'react';
import { motion } from 'motion/react';
import { 
  Truck, 
  Box, 
  Store, 
  Headphones, 
  Handshake, 
  Mail, 
  ArrowRight
} from 'lucide-react';

interface ServicesProps {
  onNavigate?: (page: string) => void;
}

// Reusable elegant blue wavy lines component matching the About page
const BlueWaves = ({ className = "absolute inset-0" }: { className?: string }) => (
  <div className={`${className} pointer-events-none overflow-hidden z-0`}>
    <svg className="w-full h-full text-sky-200/40" viewBox="0 0 1440 400" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
      <path d="M0,150 C320,250 640,50 960,220 C1120,290 1280,160 1440,110" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M0,220 C420,110 840,320 1260,160 C1340,110 1390,130 1440,160" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeDasharray="6 8" />
      <path d="M0,80 C260,190 520,30 780,130 C1040,230 1280,70 1440,140" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
      <path d="M0,310 C360,200 720,380 1080,260 C1240,210 1360,280 1440,310" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeDasharray="12 16" />
    </svg>
  </div>
);

export default function Services({ onNavigate }: ServicesProps) {
  const services = [
    {
      num: "01",
      title: "Delivery",
      desc: "District-wide delivery within 2–3 business days",
      icon: <Truck className="w-6 h-6 text-red-600" />,
      tag: "AGILE LOGISTICS",
      bgClass: "from-sky-50/50 to-white hover:border-sky-300"
    },
    {
      num: "02",
      title: "Bulk Orders",
      desc: "Bulk order supply for retailers and businesses",
      icon: <Box className="w-6 h-6 text-red-600" />,
      tag: "SCALABLE INVENTORY",
      bgClass: "from-amber-50/50 to-white hover:border-amber-300"
    },
    {
      num: "03",
      title: "After-Sales Support",
      desc: "Assistance with warranty claims and service referrals",
      icon: <Headphones className="w-6 h-6 text-red-600" />,
      tag: "CUSTOMER CARE",
      bgClass: "from-rose-50/50 to-white hover:border-rose-300"
    },
    {
      num: "04",
      title: "Retail Supply",
      desc: "Supply to shops and hardware stores across Mangalore & Udupi",
      icon: <Store className="w-6 h-6 text-red-600" />,
      tag: "RETAIL PARTNER",
      bgClass: "from-emerald-50/50 to-white hover:border-emerald-300"
    },
    {
      num: "05",
      title: "Other Services",
      desc: "Dedicated commercial logistics, customized supply plans, and localized trade assistance tailored to your requirements.",
      icon: <Handshake className="w-6 h-6 text-red-600" />,
      tag: "TAILORED SOLUTIONS",
      bgClass: "from-purple-50/50 to-white hover:border-purple-300 lg:col-span-12"
    }
  ];

  return (
    <div className="w-full bg-slate-50 font-sans overflow-hidden min-h-screen">
      
      {/* ── HERO BANNER SECTION ── */}
      <section className="relative py-16 md:py-24 px-6 md:px-12 text-white overflow-hidden min-h-[440px] flex items-center bg-[#0D1B3E]">
        {/* Background image covering the entire section */}
        <div className="absolute inset-0 z-0">
          <img 
            src="services_truck.png" 
            alt="Logistics Fleet & Network Map" 
            className="w-full h-full object-cover object-center"
            onError={(e) => {
              e.currentTarget.src = "slide1.png";
            }}
          />
          {/* Rich navy-to-transparent gradient overlay for text readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#0D1B3E] via-[#0D1B3E]/95 to-transparent lg:to-[#0D1B3E]/35" />
          <div className="absolute inset-0 bg-slate-950/40" />
        </div>
        
        {/* Ambient glow effect decorative elements on top of background */}
        <div className="absolute -left-20 -top-20 w-80 h-80 bg-red-600/15 rounded-full blur-3xl pointer-events-none z-1" />
        <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-yellow-500/10 rounded-full blur-3xl pointer-events-none z-1" />
        
        <div className="max-w-7xl mx-auto w-full relative z-10">
          {/* Left Text Details */}
          <div className="max-w-2xl flex flex-col justify-center">
            <span className="text-xs md:text-sm font-extrabold text-[#F28C28] uppercase tracking-widest block mb-3">
              WHAT WE EXCEL IN
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tight mb-6 leading-tight">
              OUR <span className="text-[#F28C28]">SERVICES</span>
            </h1>
            <p className="text-slate-100 text-sm md:text-base leading-relaxed max-w-xl mb-8 font-medium">
              From Pan-India dealer logistics to customer care & warranty after-sales support, we support Mangalore & Udupi retailers at every step.
            </p>
            {/* Breadcrumbs */}
            <div className="flex items-center gap-2.5 text-xs text-slate-300 font-bold uppercase tracking-widest">
              <span 
                onClick={() => onNavigate && onNavigate('home')} 
                className="hover:text-white transition-colors cursor-pointer"
              >
                Home
              </span>
              <span>&gt;</span>
              <span className="text-[#F28C28]">Services</span>
            </div>
          </div>
        </div>
      </section>


      {/* ── SERVICES OFFERED SECTION (UNIQUE ASYMMETRIC BENTO GRID) ── */}
      <section className="py-24 px-6 bg-white relative">
        {/* Elegant blue wavy lines spanning across the background */}
        <BlueWaves className="absolute inset-x-0 top-1/4 h-[500px] opacity-40" />
        <BlueWaves className="absolute inset-x-0 bottom-1/4 h-[500px] opacity-20 rotate-180" />

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Section Header */}
          <div className="text-center mb-20 max-w-3xl mx-auto">
            <span className="text-xs font-bold text-red-600 uppercase tracking-widest block mb-2">
              Capabilities
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#0D1B3E] uppercase tracking-tight mb-4">
              Services Offered
            </h2>
            <p className="text-slate-500 text-sm md:text-base leading-relaxed">
              Describe what services you provide alongside product distribution.
            </p>
          </div>

          {/* Dynamic, High-End Bento Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            
            {/* 1. Delivery Card (Spans 7 cols on large screens) */}
            <motion.article 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="md:col-span-12 lg:col-span-7 bg-gradient-to-br from-sky-50/60 to-white border border-slate-100 hover:border-sky-300 rounded-3xl p-8 lg:p-10 hover:-translate-y-1.5 hover:shadow-xl transition-all duration-300 flex flex-col justify-between relative group overflow-hidden min-h-[300px]"
            >
              {/* Colored top accent bar */}
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-sky-500 to-blue-400" />

              {/* Corner big number */}
              <div className="absolute top-6 right-8 font-mono text-6xl font-black text-sky-100/70 group-hover:text-sky-200/70 transition-colors pointer-events-none select-none">
                01
              </div>
              
              {/* Relatable background image with elegant soft overlay */}
              <div className="absolute inset-0 z-0 opacity-12 group-hover:opacity-22 transition-opacity duration-500 pointer-events-none">
                <img 
                  src="services_truck.png" 
                  alt="Delivery background" 
                  className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  onError={(e) => {
                    e.currentTarget.src = "slide1.png";
                  }}
                />
                <div className="absolute inset-0 bg-sky-100/10 mix-blend-overlay" />
              </div>

              {/* Hover Wave decoration inside */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300 pointer-events-none z-0">
                <BlueWaves className="h-full scale-125" />
              </div>

              <div className="relative z-10 pt-4">
                <h3 className="font-extrabold text-[#0D1B3E] text-2xl mb-3 leading-snug">
                  Delivery
                </h3>
                <p className="text-slate-500 text-base leading-relaxed max-w-lg">
                  District-wide delivery within 2–3 business days. We operate a highly synchronized regional routing network ensuring safe and rapid delivery to your doorstep.
                </p>
              </div>

              <div className="pt-6 border-t border-slate-100/80 relative z-10 mt-8 flex justify-between items-center">
                <span className="text-xs font-black text-sky-600 uppercase tracking-widest">
                  AGILE LOGISTICS
                </span>
                <span className="text-xs font-bold text-slate-400 group-hover:text-sky-600 transition-colors flex items-center gap-1.5">
                  Swift Dispatch <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </span>
              </div>
            </motion.article>

            {/* 2. Bulk Orders Card (Spans 5 cols on large screens) */}
            <motion.article 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="md:col-span-12 lg:col-span-5 bg-gradient-to-br from-amber-50/50 to-white border border-slate-100 hover:border-amber-300 rounded-3xl p-8 lg:p-10 hover:-translate-y-1.5 hover:shadow-xl transition-all duration-300 flex flex-col justify-between relative group overflow-hidden min-h-[300px]"
            >
              {/* Colored top accent bar */}
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-amber-500 to-yellow-400" />

              <div className="absolute top-6 right-8 font-mono text-6xl font-black text-amber-100/60 group-hover:text-amber-200/60 transition-colors pointer-events-none select-none">
                02
              </div>

              {/* Relatable background image with elegant soft overlay */}
              <div className="absolute inset-0 z-0 opacity-12 group-hover:opacity-22 transition-opacity duration-500 pointer-events-none">
                <img 
                  src="about_warehouse.png" 
                  alt="Bulk Orders warehouse" 
                  className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  onError={(e) => {
                    e.currentTarget.src = "slide2.png";
                  }}
                />
                <div className="absolute inset-0 bg-amber-100/10 mix-blend-overlay" />
              </div>

              <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300 pointer-events-none z-0">
                <BlueWaves className="h-full scale-125" />
              </div>

              <div className="relative z-10 pt-4">
                <h3 className="font-extrabold text-[#0D1B3E] text-2xl mb-3 leading-snug">
                  Bulk Orders
                </h3>
                <p className="text-slate-500 text-base leading-relaxed">
                  Bulk order supply for retailers and businesses. Access real-time volume pricing, depth-first inventory, and scheduled dispatch options.
                </p>
              </div>

              <div className="pt-6 border-t border-slate-100/80 relative z-10 mt-8 flex justify-between items-center">
                <span className="text-xs font-black text-amber-600 uppercase tracking-widest">
                  SCALABLE INVENTORY
                </span>
                <span className="text-xs font-bold text-slate-400 group-hover:text-amber-600 transition-colors flex items-center gap-1.5">
                  Scale Up <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </span>
              </div>
            </motion.article>

            {/* 3. After-Sales Support (Spans 4 cols on large screens) */}
            <motion.article 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="md:col-span-12 lg:col-span-4 bg-gradient-to-br from-rose-50/50 to-white border border-slate-100 hover:border-rose-300 rounded-3xl p-8 hover:-translate-y-1.5 hover:shadow-xl transition-all duration-300 flex flex-col justify-between relative group overflow-hidden"
            >
              {/* Colored top accent bar */}
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-rose-500 to-red-400" />

              <div className="absolute top-6 right-8 font-mono text-5xl font-black text-rose-100/60 group-hover:text-rose-200/60 transition-colors pointer-events-none select-none">
                03
              </div>

              {/* Relatable background image with elegant soft overlay */}
              <div className="absolute inset-0 z-0 opacity-12 group-hover:opacity-22 transition-opacity duration-500 pointer-events-none">
                <img 
                  src="about_hero_appliances.png" 
                  alt="After-Sales Support backdrop" 
                  className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  onError={(e) => {
                    e.currentTarget.src = "slide3.png";
                  }}
                />
                <div className="absolute inset-0 bg-rose-100/10 mix-blend-overlay" />
              </div>

              <div className="relative z-10 pt-4">
                <h3 className="font-extrabold text-[#0D1B3E] text-xl mb-3 leading-snug">
                  After-Sales Support
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-6">
                  Assistance with warranty claims and brand authorized service referrals across Mangalore and Udupi districts.
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100 relative z-10">
                <span className="text-[10px] font-black text-rose-600 uppercase tracking-wider block">
                  CUSTOMER CARE
                </span>
              </div>
            </motion.article>

            {/* 4. Retail Supply (Spans 4 cols on large screens) */}
            <motion.article 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="md:col-span-12 lg:col-span-4 bg-gradient-to-br from-emerald-50/50 to-white border border-slate-100 hover:border-emerald-300 rounded-3xl p-8 hover:-translate-y-1.5 hover:shadow-xl transition-all duration-300 flex flex-col justify-between relative group overflow-hidden"
            >
              {/* Colored top accent bar */}
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-emerald-500 to-teal-400" />

              <div className="absolute top-6 right-8 font-mono text-5xl font-black text-emerald-100/70 group-hover:text-emerald-200/70 transition-colors pointer-events-none select-none">
                04
              </div>

              {/* Relatable background image with elegant soft overlay */}
              <div className="absolute inset-0 z-0 opacity-12 group-hover:opacity-22 transition-opacity duration-500 pointer-events-none">
                <img 
                  src="about_showroom.png" 
                  alt="Retail supply showroom" 
                  className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  onError={(e) => {
                    e.currentTarget.src = "slide1.png";
                  }}
                />
                <div className="absolute inset-0 bg-emerald-100/10 mix-blend-overlay" />
              </div>

              <div className="relative z-10 pt-4">
                <h3 className="font-extrabold text-[#0D1B3E] text-xl mb-3 leading-snug">
                  Retail Supply
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-6">
                  Supply to shops, appliance showrooms, and specialized hardware stores across Mangalore & Udupi regional belts.
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100 relative z-10">
                <span className="text-[10px] font-black text-emerald-600 uppercase tracking-wider block">
                  RETAIL PARTNER
                </span>
              </div>
            </motion.article>

            {/* 5. Other Services (Spans 4 cols on large screens) */}
            <motion.article 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="md:col-span-12 lg:col-span-4 bg-gradient-to-br from-purple-50/50 to-white border border-slate-100 hover:border-purple-300 rounded-3xl p-8 hover:-translate-y-1.5 hover:shadow-xl transition-all duration-300 flex flex-col justify-between relative group overflow-hidden"
            >
              {/* Colored top accent bar */}
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-purple-500 to-indigo-400" />

              <div className="absolute top-6 right-8 font-mono text-5xl font-black text-purple-100/60 group-hover:text-purple-200/60 transition-colors pointer-events-none select-none">
                05
              </div>

              {/* Relatable background image with elegant soft overlay */}
              <div className="absolute inset-0 z-0 opacity-[0.08] group-hover:opacity-16 transition-opacity duration-500 pointer-events-none">
                <img 
                  src="trust_bg.png" 
                  alt="Other Services background" 
                  className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  onError={(e) => {
                    e.currentTarget.src = "slide2.png";
                  }}
                />
                <div className="absolute inset-0 bg-purple-100/10 mix-blend-overlay" />
              </div>

              <div className="relative z-10 pt-4">
                <h3 className="font-extrabold text-[#0D1B3E] text-xl mb-3 leading-snug">
                  Other Services
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-6">
                  Dedicated commercial logistics, customized supply plans, and localized trade assistance tailored to your requirements.
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100 relative z-10">
                <span className="text-[10px] font-black text-purple-600 uppercase tracking-wider block">
                  TAILORED SOLUTIONS
                </span>
              </div>
            </motion.article>

          </div>
        </div>
      </section>


      {/* ── BOTTOM PARTNERSHIP CTA SECTION ── */}
      <section className="py-8 px-6 bg-slate-50 pb-16">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gradient-to-r from-[#802D24] via-[#A83D31] to-[#D15A4C] rounded-3xl p-8 md:p-10 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden group">
            
            {/* Subtle glow orb */}
            <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-white/5 rounded-full blur-2xl group-hover:bg-white/10 transition-colors duration-500" />
            
            <div className="flex items-center gap-5 relative z-10">
              {/* Mail badge */}
              <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center text-white border border-white/20 shadow-inner flex-shrink-0">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-extrabold text-xl md:text-2xl leading-tight mb-1">
                  Let's Build Something Stronger
                </h3>
                <p className="text-white/80 text-xs md:text-sm max-w-xl">
                  Partner with us and grow your business with trusted products, reliable supply, and dedicated support.
                </p>
              </div>
            </div>

            <button 
              onClick={() => onNavigate && onNavigate('enquiry')}
              className="bg-white hover:bg-slate-100 text-slate-950 font-extrabold text-xs md:text-sm px-6 py-4 rounded-full flex items-center gap-2 shadow-lg hover:shadow-xl hover:translate-x-0.5 transition-all duration-300 flex-shrink-0 cursor-pointer"
            >
              <span>Become a Partner</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}

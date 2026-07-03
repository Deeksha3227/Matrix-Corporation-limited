import React from 'react';
import { 
  Award, MapPin, Check, Target, Phone, MessageSquare, Shield, Users, Truck
} from 'lucide-react';
import { WhatsAppIcon } from './WhatsAppIcon';

// Reusable elegant blue wavy lines component
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

export default function About() {
  return (
    <div className="w-full bg-slate-50 min-h-screen font-sans relative overflow-hidden">
      {/* Background container waves */}
      <BlueWaves className="absolute inset-x-0 top-1/4 h-[600px] opacity-60" />
      <BlueWaves className="absolute inset-x-0 bottom-1/4 h-[600px] opacity-40 rotate-180" />

      {/* ── HERO SECTION ── */}
      <section className="bg-white pt-12 pb-16 px-6 lg:px-12 border-b border-slate-100 relative overflow-hidden">
        {/* Ambient blue waves in hero */}
        <BlueWaves className="absolute inset-0 opacity-80" />
        
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
          {/* Left Column Text */}
          <div className="space-y-6">
            <span className="text-xs font-bold uppercase tracking-wider text-red-600 block">About Us</span>
            <h1 className="text-4xl lg:text-5xl font-extrabold text-[#0D1B3E] tracking-tight leading-tight">
              About <span className="text-[#F5A623]">Matrix</span> <br />Corporation
            </h1>
            <div className="space-y-2">
              <h3 className="text-lg font-bold text-slate-800">Distributor Of Electrical And Electronics</h3>
              <p className="text-base font-semibold text-red-600">
                Serving Mangalore & Udupi <span className="text-[#F5A623]">Since 2026</span>
              </p>
            </div>
            <p className="text-slate-600 text-sm md:text-base leading-relaxed max-w-xl">
              Matrix Corporation is a trusted name in high-efficiency consumer electronics distribution, dedicated to bringing world-class electrical and electronic appliances to retailers and consumers throughout Coastal Karnataka.
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <a 
                href="#about-details" 
                className="bg-[#0D1B3E] hover:bg-red-600 text-white font-bold text-xs md:text-sm px-6 py-3 rounded shadow-md transition-all duration-200"
              >
                Know More About Us
              </a>
              <a 
                href="/business-enquiry" 
                className="border-2 border-[#0D1B3E] text-[#0D1B3E] hover:bg-[#0D1B3E] hover:text-white font-bold text-xs md:text-sm px-6 py-3 rounded transition-all duration-200"
              >
                Business Enquiry
              </a>
            </div>
          </div>

          {/* Right Column Image */}
          <div className="relative flex justify-center">
            <div className="w-full max-w-xl rounded-2xl overflow-hidden shadow-lg border border-slate-100 bg-gradient-to-br from-white to-slate-50 p-2 relative bg-white">
              <img 
                src="about_hero_appliances.png" 
                alt="Appliances Lineup" 
                className="w-full h-auto object-contain rounded-xl relative z-10"
                onError={(e) => {
                  e.currentTarget.src = "slide1.png";
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── 2. ABOUT US SECTION (PROPER PARAGRAPHS) ── */}
      <section id="about-details" className="py-20 px-6 lg:px-12 bg-white relative">
        <BlueWaves className="absolute inset-x-0 top-0 h-64 opacity-50" />
        
        <div className="max-w-7xl mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          {/* Left Side: Warehouse Image */}
          <div className="lg:col-span-5 relative">
            <div className="rounded-2xl overflow-hidden shadow-xl border border-slate-100 relative group bg-slate-50">
              <img 
                src="about_showroom.png" 
                alt="Appliances Showroom" 
                className="w-full h-[400px] object-cover group-hover:scale-105 transition-transform duration-500"
                onError={(e) => {
                  e.currentTarget.src = "slide1.png";
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent" />
              {/* Floating Badge */}
              <div className="absolute top-4 left-4 bg-[#0D1B3E]/95 backdrop-blur-sm text-white py-2 px-4 rounded-lg shadow-lg flex items-center gap-2 border border-slate-700/50">
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
              </div>
            </div>
          </div>

          {/* Right Side: Text & Bullet Points */}
          <div className="lg:col-span-7 space-y-6">
            <span className="text-xs font-bold uppercase tracking-wider text-red-600 block">Corporate Profile</span>
            <h2 className="text-3xl lg:text-4xl font-extrabold text-[#0D1B3E] tracking-tight">
              About Us
            </h2>
            
            <div className="space-y-4 text-slate-600 text-sm md:text-base leading-relaxed">
              <p>
                Matrix Corporation is the distributor cross the entire Mangalore and Udupi districts. Established by a dedicated team of professionals, we bring together deep combined experience in sales, logistics, and supply chain distribution. This multi-sector competence allows us to streamline operations, facilitate high-volume dealer transactions, and ensure unmatched market responsiveness.
              </p>
              <p>
                Our core mission and goal are to provide highly reliable, smooth, and quick distribution of our premium products to partner outlets and consumers across the coastal districts. Recognizing that efficient distribution is the backbone of retail growth, we maintain a persistent focus on inventory depth, transparent trade pricing, and rapid delivery loops that minimize lead times.
              </p>
              <p>
                The foundations of Matrix Corporation rest upon three key strengths: intimate local market knowledge, an agile delivery infrastructure for swift order fulfillment, and dedicated, personalized customer service. By maintaining seamless integration with official service networks and offering close sales support, we serve as the reliable growth partner for electronic dealers across Mangalore and Udupi.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── STRICT HIGHLIGHTS GRID ── */}




      <section className="py-20 px-6 lg:px-12 bg-slate-50">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-xl font-bold uppercase tracking-[0.35em] text-red-600 mb-6">Authorised Distributors Of</p>
          <div className="bg-white p-10 rounded-3xl shadow-xl border border-slate-200 inline-flex items-center justify-center mx-auto">
            <img src="kenstar-logo-min.avif" alt="KENSTAR logo" className="h-32 md:h-36 object-contain" />
          </div>
        </div>
      </section>

      {/* ── REAL INTERACTIVE GOOGLE MAP SECTION ── */}
      <section className="py-12 px-6 lg:px-12 bg-white relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-xl mx-auto mb-10">
            <span className="text-xs font-bold text-red-600 uppercase tracking-widest block mb-2">
              OUR WAREHOUSE & OFFICE LOCATION
            </span>
            <h3 className="font-extrabold text-[#0D1B3E] text-2xl lg:text-3xl uppercase tracking-tight">
              FIND US IN MANGALURU
            </h3>
            <div className="w-12 h-1 bg-[#F5A623] mx-auto mt-3 rounded-full"></div>
            <p className="text-slate-500 text-xs md:text-sm mt-3 font-medium">
              Visit our central depot and distribution office at Pumpwell, Mangaluru.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            {/* Interactive Map Iframe */}
            <div className="lg:col-span-8 rounded-3xl overflow-hidden shadow-lg border border-slate-100 h-[450px] relative">
              <iframe 
                src="https://maps.google.com/maps?q=12.8601000,74.8682000&z=16&output=embed" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0 w-full h-full"
                title="Matrix Corporation Office and Warehouse Location Map"
              />
            </div>

            {/* Quick Details Card next to map */}
            <div className="lg:col-span-4 bg-slate-50 border border-slate-100 rounded-3xl p-8 flex flex-col justify-between shadow-sm">
              <div className="space-y-6">
                <div>
                  <span className="text-[10px] font-black text-[#F5A623] uppercase tracking-wider block mb-1">
                    Central Distribution Hub
                  </span>
                  <h4 className="text-xl font-extrabold text-[#0D1B3E] leading-snug">
                    Matrix Corporation
                  </h4>
                </div>

                <div className="space-y-4">
                  <div className="flex gap-3 items-start text-xs md:text-sm">
                    <MapPin className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-bold text-slate-800">Address:</p>
                      <p className="text-slate-600 leading-relaxed font-medium mt-0.5">
                        Guruprasad Ln, Pumpwell,<br />
                        Mangaluru, Karnataka 575002
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-3 items-start text-xs md:text-sm">
                    <Phone className="w-5 h-5 text-[#25D366] flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-bold text-slate-800">Support / Business Lines:</p>
                      <p className="text-slate-600 font-medium mt-0.5">
                        +91 831-0235515
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-slate-200 mt-6 lg:mt-0">
                <a 
                  href="https://www.google.com/maps?q=12.8601000,74.8682000&entry=gps&shh=CAE&lucs=,94297699,94231188,94280568,47071704,94218641,94282134,100813464,94286869,100820247&g_ep=CAISEjI2LjI1LjMuOTMyMTI1MTg3MBgAIIgnKlMsOTQyOTc2OTksOTQyMzExODgsOTQyODA1NjgsNDcwNzE3MDQsOTQyMTg2NDEsOTQyODIxMzQsMTAwODEzNDY0LDk0Mjg2ODY5LDEwMDgyMDI0N0ICR0I%3D&skid=6805d373-7bae-419d-a07b-db19978c9541&g_st=iw"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-[#0D1B3E] hover:bg-red-600 text-white font-bold text-xs uppercase py-3.5 rounded-xl transition-all duration-300 text-center block shadow-sm hover:shadow-md"
                >
                  Open in Google Maps
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── BOTTOM CALL TO ACTION CONTAINER ── */}
      <section className="py-12 px-6 lg:px-12 bg-white pb-24 relative">
        <div className="max-w-7xl mx-auto bg-gradient-to-br from-[#0D1B3E] to-[#122147] rounded-3xl p-8 lg:p-12 text-white shadow-xl flex flex-col lg:flex-row items-center justify-between gap-8 relative z-10">
          {/* Left Block Text */}
          <div className="space-y-4 text-center lg:text-left">
            <span className="text-xs font-bold text-[#F5A623] uppercase tracking-wider block">Let's Grow Together</span>
            <h2 className="text-3xl font-extrabold tracking-tight">
              Ready to Partner With Us?
            </h2>
            <p className="text-slate-300 text-xs md:text-sm max-w-xl">
              We are here to support your business with premium electrical and electronic products, fast regional logistics, and stellar customer service.
            </p>
          </div>

          {/* Right Block CTAs */}
          <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
            <a 
              href="/business-enquiry" 
              className="border border-white/40 hover:bg-white/10 text-white font-bold text-xs md:text-sm px-6 py-3.5 rounded-lg w-full sm:w-auto text-center transition-all duration-200"
            >
              Business Enquiry
            </a>
            <a 
              href="tel:+918310235515" 
              className="bg-white/10 hover:bg-white/20 text-white font-bold text-xs md:text-sm px-6 py-3.5 rounded-lg w-full sm:w-auto text-center flex items-center justify-center gap-2 border border-white/10 transition-all duration-200"
            >
              <Phone className="w-4 h-4 fill-current" />
              <span>+91 831-0235515</span>
            </a>
            <a 
              href="https://wa.me/918310235515" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-xs md:text-sm px-6 py-3.5 rounded-lg w-full sm:w-auto text-center flex items-center justify-center gap-2 shadow-md transition-all duration-200"
            >
              <WhatsAppIcon className="w-4 h-4 fill-current" />
              <span>Chat on WhatsApp</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Product } from '../data/products';
import { 
  ChevronRight, Award, Truck, ShieldCheck, CheckCircle, 
  TrendingUp, Percent, MessageSquare, Star, ArrowRight, Shield 
} from 'lucide-react';

interface HomeProps {
  products: Product[];
  onViewProduct: (product: Product) => void;
  onSelectCategory: (category: string) => void;
  onBuyNow: (product: Product) => void;
  setCurrentPage: (page: string) => void;
}

export default function Home({
  products,
  onViewProduct,
  onSelectCategory,
  onBuyNow,
  setCurrentPage
}: HomeProps) {
  // SLIDER STATE
  const [activeSlide, setActiveSlide] = useState(0);
  const slides = [
    {
      title: "Smart Kitchen. Happy Life.",
      subtitle: "Experience cooking with our modern, rapid-heating micro-crystal cooktops and solo convection microwaves.",
      buttonText: "Explore Kitchen Range",
      category: "Kitchen Appliances",
      image: "slide2.png",
      fallbackImage: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&q=80&w=1200",
      accent: "from-amber-600/30 to-slate-900/90"
    },
    {
      title: "Cool Comfort. Better Living.",
      subtitle: "Breathe fresh, chilled air with the ultra-dense 3D Honeycomb Turbocool cooling range, engineered for dry tropical summers.",
      buttonText: "Browse Air Coolers",
      category: "Coolers",
      image: "slide3.png",
      fallbackImage: "https://images.unsplash.com/photo-1585338111522-a306f2dfad36?auto=format&fit=crop&q=80&w=1200",
      accent: "from-blue-600/30 to-slate-900/90"
    },
    {
      title: "Premium Appliances. Local Trust.",
      subtitle: "Get guaranteed genuine premium ceiling fans, heavy-duty washing machines, and anti-corrosive storage water geysers.",
      buttonText: "View Full Catalog",
      category: "All",
      image: "slide1.png",
      fallbackImage: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&q=80&w=1200",
      accent: "from-red-600/30 to-slate-900/90"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  // BESTSELLERS STATE
  const [activeTab, setActiveTab] = useState<string>("Fans");
  const filteredBestsellers = products.filter(p => p.category === activeTab).slice(0, 12);

  // TRUST ROTATOR CAROUSEL STATE
  const [trustIndex, setTrustIndex] = useState(0);
  const trustItems = [
    {
      title: "Officially Authorised Distributor",
      desc: "Matrix Corporation holds official authorization to distribute high-efficiency electrical and electronic products in Mangalore and Udupi. Every unit is 100% authentic with a brand-backed manufacturer warranty.",
      icon: <Shield className="w-8 h-8 text-white" />
    },
    {
      title: "District-Wide Delivery in 2–3 Days",
      desc: "Equipped with our local warehouse and a private logistics fleet, we guarantee delivery to sub-dealers and retailers in Mangalore and Udupi within 48 to 72 hours, with zero third-party delay.",
      icon: <Truck className="w-8 h-8 text-white" />
    },
    {
      title: "Engineered for Shopkeepers & Sub-Dealers",
      desc: "We understand cashflows and local market trends. We offer customized flexible credit terms, maximum sub-dealer profit margins, marketing assets, and direct phone lines that are always answered.",
      icon: <Award className="w-8 h-8 text-white" />
    },
    {
      title: "Transparent Billing, Zero Hidden Costs",
      desc: "Our business values trust over quick profits. What we quote is exactly what you pay on your GST invoices. No surprising delivery surcharges or handling fees, ever.",
      icon: <Percent className="w-8 h-8 text-white" />
    },
    {
      title: "Real Local Support & Quick Warranty Fixes",
      desc: "Located locally in Pumpwell, Mangaluru. We speak your language (Kannada, Tulu, English, Konkani) and handle on-site customer service or geyser escalations within hours.",
      icon: <MessageSquare className="w-8 h-8 text-white" />
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setTrustIndex((prev) => (prev + 1) % trustItems.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Image error state tracker to substitute fallbacks
  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>, fallback: string) => {
    e.currentTarget.src = fallback;
  };

  return (
    <div className="w-full">
      {/* HERO SLIDER SECTION */}
      <section className="relative w-full h-[520px] bg-slate-950 overflow-hidden">
        {slides.map((slide, idx) => (
          <div 
            key={idx}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${idx === activeSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
          >
            {/* Background Image with Fallback */}
            <img 
              src={slide.image} 
              alt={slide.title}
              onError={(e) => handleImageError(e, slide.fallbackImage)}
              className="w-full h-full object-cover object-center"
              referrerPolicy="no-referrer"
            />
            {/* Soft gradient Overlay */}
            <div className={`absolute inset-0 bg-gradient-to-r ${slide.accent} mix-blend-multiply`} />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/40 to-transparent" />

            {/* Slider Content */}
            <div className="absolute inset-0 flex items-center">
              <div className="max-w-4xl mx-auto px-6 md:px-12 w-full text-white">
                <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-4 leading-tight">
                  {slide.title.split('.').map((part, i) => (
                    <span key={i} className={i === 1 ? "text-yellow-400 block md:inline" : ""}>
                      {part}{i === 0 ? "." : ""}
                    </span>
                  ))}
                </h1>
                <p className="text-sm md:text-lg text-slate-200 font-medium max-w-xl mb-8 leading-relaxed">
                  {slide.subtitle}
                </p>
                <div className="flex flex-wrap gap-4">
                  <button 
                    onClick={() => {
                      if (slide.category !== 'All') {
                        onSelectCategory(slide.category);
                      } else {
                        onSelectCategory('');
                      }
                      setCurrentPage('products');
                    }}
                    className="bg-red-600 hover:bg-red-700 text-white font-bold py-3.5 px-8 rounded-lg shadow-lg hover:shadow-red-600/35 transition-all flex items-center gap-2 group hover:-translate-y-0.5 cursor-pointer"
                  >
                    {slide.buttonText}
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </button>
                  <button 
                    onClick={() => {
                      setCurrentPage('enquiry');
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="bg-white/10 hover:bg-white/20 text-white border border-white/20 font-semibold py-3.5 px-8 rounded-lg transition-all hover:border-white cursor-pointer"
                  >
                    Become a Partner
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* SLIDER CONTROLS */}
        <div className="absolute bottom-6 left-0 right-0 z-20 flex justify-between items-center max-w-5xl mx-auto px-6">
          <div className="flex gap-2">
            {slides.map((_, i) => (
              <button 
                key={i}
                onClick={() => setActiveSlide(i)}
                className={`w-2.5 h-2.5 rounded-full transition-all ${i === activeSlide ? 'bg-yellow-400 scale-125 w-6' : 'bg-white/40 hover:bg-white/60'}`}
              />
            ))}
          </div>
          <div className="text-white text-xs font-bold font-mono tracking-widest bg-slate-900/60 py-1.5 px-3 rounded-md backdrop-blur-sm">
            0{activeSlide + 1} / 03
          </div>
        </div>
      </section>

      

      {/* DISCOVER OUR PRODUCTS - THE CATEGORY GRID WITH SLIDING ANIMATIONS */}
      <section className="py-16 px-6 bg-slate-50 overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <div className="text-center md:text-left mb-12">
            <h2 className="text-2xl md:text-3xl font-black text-[#0D1B3E] uppercase tracking-wider">
              Discover Our Products
            </h2>
            <p className="text-xs text-red-600 uppercase tracking-widest font-bold mt-1">Explore the Collection</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                id: "heaters",
                categoryName: "Water Heaters",
                title: "Storage Geysers",
                tag: "Safe Bath",
                tagBg: "bg-red-600",
                image: "prod_heater.png",
                fallback: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=600",
                slideDirection: "left"
              },
              {
                id: "fans",
                categoryName: "Fans",
                title: "Energy Saving Fans",
                tag: "BLDC Tech",
                tagBg: "bg-yellow-500 text-slate-950",
                image: "prod_fan.png",
                fallback: "https://images.unsplash.com/photo-1618943716616-9818b2c45300?auto=format&fit=crop&q=80&w=600",
                slideDirection: "right"
              },
              {
                id: "coolers",
                categoryName: "Coolers",
                title: "Desert & Tower Coolers",
                tag: "Extreme Cool",
                tagBg: "bg-red-600",
                image: "prod_cooler.png",
                fallback: "https://images.unsplash.com/photo-1585338111522-a306f2dfad36?auto=format&fit=crop&q=80&w=600",
                slideDirection: "left"
              },
              {
                id: "kitchen",
                categoryName: "Kitchen Appliances",
                title: "Kitchen Helpers",
                tag: "Smart Kitchen",
                tagBg: "bg-amber-500 text-slate-950",
                image: "prod_kitchen.png",
                fallback: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&q=80&w=1200",
                slideDirection: "right"
              },
              {
                id: "steamers",
                categoryName: "Steamers",
                title: "Steam & Dry Irons",
                tag: "Crisp Press",
                tagBg: "bg-red-600",
                image: "prod_iron.png",
                fallback: "https://images.unsplash.com/photo-1489274495757-95c7c837b101?auto=format&fit=crop&q=80&w=600",
                slideDirection: "left"
              },
              {
                id: "home_appliances",
                categoryName: "Home Appliances",
                title: "Washing Machines",
                tag: "Home Laundry",
                tagBg: "bg-blue-600",
                image: "prod_washing.png",
                fallback: "https://images.unsplash.com/photo-1582730149719-611130850a11?auto=format&fit=crop&q=80&w=600",
                slideDirection: "right"
              }
            ].map((item, idx) => {
              const slideLeft = item.slideDirection === "left";
              return (
                <motion.div
                  key={item.id}
                  onClick={() => onSelectCategory(item.categoryName)}
                  initial={{ opacity: 0, x: slideLeft ? -100 : 100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, ease: "easeOut", delay: idx * 0.05 }}
                  className="group relative rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 cursor-pointer h-[240px]"
                >
                  <img 
                    src={item.image} 
                    alt={item.categoryName}
                    onError={(e) => handleImageError(e, item.fallback)}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/40 to-transparent" />
                  <div className="absolute bottom-6 left-6 text-white">
                    <span className={`${item.tagBg} text-[9px] uppercase font-bold py-1 px-2.5 rounded-full mb-2 inline-block`}>
                      {item.tag}
                    </span>
                    <h3 className="font-bold text-lg">{item.title}</h3>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* BESTSELLERS TABS DYNAMIC CATALOG */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <span className="text-xs font-bold text-red-600 uppercase tracking-widest block mb-2">Highly Rated Range</span>
              <h2 className="text-3xl font-extrabold text-[#0D1B3E] uppercase tracking-tight">
                Our Top <span className="text-red-600">Bestsellers</span>
              </h2>
            </div>

            {/* Scrollable Tabs */}
            <div className="flex gap-2 overflow-x-auto pb-2 mt-6 md:mt-0 no-scrollbar">
              {["Fans", "Coolers", "Kitchen Appliances", "Home Appliances", "Steamers", "Water Heaters"].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all cursor-pointer whitespace-nowrap ${activeTab === tab ? 'bg-red-600 text-white shadow-md shadow-red-600/10' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'}`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {filteredBestsellers.map((product) => {
              const emi = Math.round(product.mrp / 9);
              return (
                <article 
                  key={product.id}
                  className="bg-slate-900 rounded-2xl overflow-hidden shadow-lg border border-slate-800 flex flex-col group hover:-translate-y-1 transition-all duration-300"
                >
                  {/* Image container */}
                  <div 
                    onClick={() => onViewProduct(product)}
                    className="relative bg-white p-8 flex items-center justify-center h-72 cursor-pointer hover:bg-slate-50 transition-colors duration-200"
                  >
                    <img 
                      src={product.image} 
                      alt={product.name}
                      onError={(e) => handleImageError(e, product.fallbackImage)}
                      className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-300"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute top-4 right-4 bg-slate-900 text-yellow-400 text-[10px] font-bold py-1 px-3 rounded-full uppercase tracking-wider">
                      {product.tag}
                    </div>
                  </div>

                  {/* Body container */}
                  <div className="p-6 flex flex-col justify-between flex-1">
                    <div>
                      {/* Rating row */}
                      <div className="flex items-center gap-1.5 mb-2.5">
                        <div className="flex text-yellow-400">
                          {Array.from({ length: 5 }).map((_, i) => (
                            <Star key={i} className={`w-3.5 h-3.5 fill-current ${i < Math.floor(product.rating) ? '' : 'opacity-30'}`} />
                          ))}
                        </div>
                        <span className="text-[10px] font-bold text-slate-400 tracking-wider">
                          {product.reviewsCount}
                        </span>
                      </div>

                      <h3 className="text-white font-bold text-base mb-3 leading-snug hover:text-red-400 transition-colors cursor-pointer" onClick={() => onViewProduct(product)}>
                        {product.name}
                      </h3>
                    </div>

                    <div className="mt-4 pt-4 border-t border-slate-800">
                      {/* Price Row */}
                      <div className="flex items-baseline gap-2 mb-4">
                        <span className="text-xl font-extrabold text-white">
                          ₹{product.mrp.toLocaleString('en-IN')}
                        </span>
                      </div>

                      {/* CTA Buttons */}
                      <div className="w-full">
                        <button 
                          onClick={() => onViewProduct(product)}
                          className="w-full bg-red-600 hover:bg-red-700 text-white text-xs font-bold uppercase py-3.5 px-4 rounded-lg text-center transition-colors cursor-pointer"
                        >
                          View Details
                        </button>
                      </div>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>

          {products.filter(p => p.category === activeTab).length > 12 && (
            <div className="text-center mt-12">
              <button 
                onClick={() => {
                  onSelectCategory(activeTab);
                  setCurrentPage('products');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="inline-flex items-center gap-2 bg-[#0D1B3E] hover:bg-red-600 text-white font-bold text-xs uppercase py-3.5 px-8 rounded-lg shadow-lg hover:shadow-red-600/25 transition-all cursor-pointer"
              >
                View All {activeTab} ({products.filter(p => p.category === activeTab).length} products)
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          )}
        </div>
      </section>

      {/* WHY CHOOSE MATRIX - INTERACTIVE ROTATING TRUST SECTION */}
      <section className="py-20 px-6 bg-[#0D1B3E] relative overflow-hidden">
        {/* Glow Effects */}
        <div className="absolute top-1/4 right-0 w-80 h-80 bg-red-600/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-yellow-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <span className="text-xs font-bold text-yellow-400 uppercase tracking-widest block mb-2">Built on Trust · Backed by Action</span>
            <h2 className="text-4xl font-extrabold text-white leading-tight">
              Why Partner with <span className="text-yellow-400">Matrix Corporation?</span>
            </h2>
            <p className="text-slate-300 text-sm max-w-xl mx-auto mt-4 leading-relaxed">
              We aren't just an appliance supplier, we are your reliable local hub for original electrical and electronic products across Mangalore & Udupi districts.
            </p>
          </div>

          <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-16">
            {/* Interactive Ring Node Spinner */}
            <div className="relative w-80 h-80 md:w-96 md:h-84 flex-shrink-0 flex items-center justify-center">
              {/* Central Active Icon Box */}
              <div className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-slate-900 border-4 border-slate-800 flex flex-col items-center justify-center text-center p-4 shadow-xl z-20">
                <div className="w-12 h-12 rounded-full bg-red-600 flex items-center justify-center shadow-lg shadow-red-600/30 mb-2">
                  {trustItems[trustIndex].icon}
                </div>
                <span className="text-[10px] uppercase font-bold tracking-widest text-yellow-400">
                  Matrix Trust
                </span>
              </div>

              {/* Dashed Orbital Orbit Ring */}
              <div className="absolute w-[240px] h-[240px] md:w-[300px] md:h-[300px] rounded-full border-2 border-dashed border-slate-700/60 animate-spin-slow pointer-events-none" />

              {/* Orbital Nodes */}
              {trustItems.map((item, idx) => {
                const angle = (idx * (360 / trustItems.length) - 90) * (Math.PI / 180);
                const radius = window.innerWidth < 768 ? 120 : 150; // Dynamic spacing
                const x = Math.cos(angle) * radius;
                const y = Math.sin(angle) * radius;

                return (
                  <button
                    key={idx}
                    onClick={() => setTrustIndex(idx)}
                    style={{ transform: `translate(${x}px, ${y}px)` }}
                    className={`absolute w-12 h-12 rounded-full flex items-center justify-center shadow-lg border-2 z-30 transition-all duration-300 cursor-pointer ${idx === trustIndex ? 'bg-red-600 border-yellow-400 scale-125 shadow-red-600/40' : 'bg-slate-900 border-slate-700 hover:bg-slate-800'}`}
                  >
                    <span className="text-white text-xs font-bold">0{idx + 1}</span>
                  </button>
                );
              })}
            </div>

            {/* Rotating Description Board card */}
            <div className="flex-1 bg-slate-900/60 border border-slate-800 backdrop-blur-md rounded-2xl p-8 max-w-lg shadow-xl relative">
              <div className="absolute -top-3.5 left-8 bg-yellow-500 text-slate-950 font-bold text-[9px] uppercase tracking-wider px-3.5 py-1 rounded-full">
                Metric 0{trustIndex + 1}
              </div>
              <h3 className="text-white font-extrabold text-xl mb-4 leading-tight mt-1">
                {trustItems[trustIndex].title}
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed mb-6">
                {trustItems[trustIndex].desc}
              </p>
              <div className="flex gap-1">
                {trustItems.map((_, i) => (
                  <span 
                    key={i} 
                    className={`h-1.5 rounded-full transition-all ${i === trustIndex ? 'bg-yellow-400 w-8' : 'bg-slate-700 w-2.5'}`} 
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* QUICK B2B PROPOSAL CALLOUT */}
      <section className="py-16 px-6 bg-red-600 text-white relative">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h2 className="text-2xl md:text-3xl font-extrabold uppercase tracking-tight mb-2">
              Looking for a Distributorship in Mangalore & Udupi?
            </h2>
            <p className="text-white/80 text-sm max-w-xl">
              Become a verified retail sub-dealer or wholesale partner. Stock original high-demand electrical and electronic products with high-end support.
            </p>
          </div>
          <button 
            onClick={() => {
              setCurrentPage('enquiry');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="flex-shrink-0 bg-slate-950 hover:bg-slate-900 text-white font-bold text-xs uppercase tracking-widest py-4 px-8 rounded-lg shadow-xl hover:shadow-black/25 transition-all hover:-translate-y-0.5"
          >
            Apply for Distributorship
          </button>
        </div>
      </section>
    </div>
  );
}

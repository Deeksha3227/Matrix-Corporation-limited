import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Products from './components/Products';
import Services from './components/Services';
import Contact from './components/Contact';
import Enquiry from './components/Enquiry';
import { Product, PRODUCTS } from './data/products';
import { MapPin, Phone, Mail, Clock, Shield, Search, ArrowRight, MessageSquare, ChevronUp, Download, Eye, EyeOff, Facebook, Instagram, Linkedin } from 'lucide-react';
import { WhatsAppIcon } from './components/WhatsAppIcon';

interface Lead {
  name: string;
  phone: string;
  interest: string;
  message: string;
  date: string;
  type: string;
}

export default function App() {
  // GLOBAL STATE ROUTER
  const [currentPage, setCurrentPage] = useState<string>('home');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedCategory, setSelectedCategory] = useState<string>('');
  const [selectedType, setSelectedType] = useState<string>('');

  // MODAL PRODUCT DETAILS
  const [activeProduct, setActiveProduct] = useState<Product | null>(null);

  // PERSISTED LEADS (Saved across refreshes)
  const [leads, setLeads] = useState<Lead[]>([]);
  const [showAdminLeads, setShowAdminLeads] = useState<boolean>(false);

  // SCROLL-TO-TOP TRIGGER
  const [showScrollTop, setShowScrollTop] = useState<boolean>(false);

  // Load leads from localStorage on initial render
  useEffect(() => {
    const savedLeads = localStorage.getItem('matrix_leads');
    if (savedLeads) {
      try {
        setLeads(JSON.parse(savedLeads));
      } catch (e) {
        console.error('Failed to parse leads', e);
      }
    }

    // Scroll listener for Top indicator
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Save new lead
  const handleAddLead = (newLead: Lead) => {
    const updated = [newLead, ...leads];
    setLeads(updated);
    localStorage.setItem('matrix_leads', JSON.stringify(updated));
  };

  // Clear leads
  const handleClearLeads = () => {
    setLeads([]);
    localStorage.removeItem('matrix_leads');
  };

  // Helper trigger to browse to details modal
  const handleViewProductDetails = (product: Product) => {
    setSelectedCategory(product.category);
    setSearchQuery('');
    setActiveProduct(product);
    setCurrentPage('products');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Helper trigger to open category in Products catalog
  const handleSelectCategoryAndNavigate = (cat: string) => {
    setSelectedCategory(cat);
    setSelectedType('');
    setSearchQuery('');
    setActiveProduct(null);
    setCurrentPage('products');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectTypeAndNavigate = (cat: string, type: string) => {
    setSelectedCategory(cat);
    setSelectedType(type);
    setSearchQuery('');
    setActiveProduct(null);
    setCurrentPage('products');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Generate WhatsApp links
  const handleWhatsAppEnquiry = (product?: Product) => {
    const defaultNumber = "918310235515";
    let message = "Hi Matrix Corporation Ltd! I am looking to connect regarding custom distributorship and bulk dealership terms for my retail outlet.";
    
    if (product) {
      message = `Hi Matrix Corporation Ltd! I'm interested in knowing more about the following product:\n\n*${product.name}*\nCategory: ${product.category}\nPrice: ₹${product.mrp.toLocaleString('en-IN')}\n\nPlease share wholesale bulk quotes and stock availability.`;
    }

    const waUrl = `https://wa.me/${defaultNumber}?text=${encodeURIComponent(message)}`;
    window.open(waUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="w-full text-slate-800 bg-white font-sans flex flex-col min-h-screen">
      {/* FLOATING TOP BAR & HEADER STITCHED */}
      <Navbar 
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        setSelectedCategory={(cat) => {
          setSelectedCategory(cat);
          setSelectedType('');
          setSearchQuery('');
          setActiveProduct(null);
        }}
        setSelectedType={setSelectedType}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        onSelectSubcategory={(cat, sub) => {
          handleSelectTypeAndNavigate(cat, sub);
        }}
      />

      {/* DYNAMIC PAGE DISPATCH ROUTER */}
      <main className="flex-grow">
        {currentPage === 'home' && (
          <Home 
            products={PRODUCTS}
            onViewProduct={handleViewProductDetails}
            onSelectCategory={handleSelectCategoryAndNavigate}
            onBuyNow={handleWhatsAppEnquiry}
            setCurrentPage={setCurrentPage}
          />
        )}
        {currentPage === 'about' && <About />}
        {currentPage === 'products' && (
          <Products 
            initialType={selectedType}
            initialCategory={selectedCategory}
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            onBuyNow={handleWhatsAppEnquiry}
            activeProduct={activeProduct}
            setActiveProduct={setActiveProduct}
          />
        )}
        {currentPage === 'services' && <Services onNavigate={setCurrentPage} />}
        {currentPage === 'contact' && (
          <Contact onAddLead={handleAddLead} />
        )}
        {currentPage === 'enquiry' && (
          <Enquiry onAddLead={handleAddLead} />
        )}
      </main>


      {/* FOOTER */}
      <footer className="bg-[#050B1B] text-slate-400 pt-16 pb-8 border-t border-slate-900">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12 pb-12 border-b border-slate-900">
          
          {/* Brand outline */}
          <div>
            <div className="flex items-center gap-2.5 mb-4 group cursor-pointer" onClick={() => { setCurrentPage('home'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>
              <img 
                src="logo.png" 
                alt="Matrix Corp" 
                className="w-10 h-10 object-contain rounded-lg transition-all group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="flex flex-col">
                <span className="font-bold text-white text-base tracking-tight leading-none mb-1">
                  Matrix Corp
                </span>
                <span className="text-[9px] text-[#F28C28] uppercase tracking-wider font-extrabold">
                  ELECTRICAL & ELECTRONIC PRODUCTS DISTRIBUTOR
                </span>
              </div>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed mb-6">
              Authorised Distributor across Mangalore & Udupi. Powering trust. Delivering value.
            </p>
            <div className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">
              Authorised Distributor of KENSTAR
            </div>
            <div className="mt-6">
              <img src="kenstar-logo-min.avif" alt="KENSTAR logo" className="h-10 object-contain" />
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-white font-black text-xs uppercase tracking-wider mb-6">QUICK NAVIGATION</h4>
            <ul className="space-y-3.5 text-xs">
              {[
                { id: 'home', label: 'Home' },
                { id: 'about', label: 'About Us' },
                { id: 'products', label: 'Products' },
                { id: 'services', label: 'Services' },
                { id: 'contact', label: 'Contact Us' },
                { id: 'enquiry', label: 'Business Enquiry' }
              ].map((item) => (
                <li key={item.id}>
                  <button 
                    onClick={() => {
                      setCurrentPage(item.id);
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className={`hover:text-red-500 transition-colors cursor-pointer font-bold ${currentPage === item.id ? 'text-[#F28C28]' : 'text-slate-400'}`}
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Category links */}
          <div>
            <h4 className="text-white font-black text-xs uppercase tracking-wider mb-6">APPLIANCE CATEGORIES</h4>
            <ul className="space-y-3.5 text-xs font-bold text-slate-400">
              {["Fans", "Coolers", "Kitchen Appliances", "Home Appliances", "Steamers", "Water Heaters"].map((cat, i) => (
                <li key={i}>
                  <button 
                    onClick={() => handleSelectCategoryAndNavigate(cat)}
                    className="hover:text-red-500 transition-colors cursor-pointer text-left"
                  >
                    {cat}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="text-white font-black text-xs uppercase tracking-wider mb-6">CONTACT DETAILS</h4>
            <ul className="space-y-4 text-xs font-semibold text-slate-400">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                <a 
                  href="https://www.google.com/maps?q=12.8601000,74.8682000&entry=gps&shh=CAE&lucs=,94297699,94231188,94280568,47071704,94218641,94282134,100813464,94286869,100820247&g_ep=CAISEjI2LjI1LjMuOTMyMTI1MTg3MBgAIIgnKlMsOTQyOTc2OTksOTQyMzExODgsOTQyODA1NjgsNDcwNzE3MDQsOTQyMTg2NDEsOTQyODIxMzQsMTAwODEzNDY0LDk0Mjg2ODY5LDEwMDgyMDI0N0ICR0I%3D&skid=6805d373-7bae-419d-a07b-db19978c9541&g_st=iw" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-red-500 transition-colors leading-relaxed"
                >
                  Guruprasad Ln, Pumpwell,<br />
                  Mangaluru, Karnataka 575002, India
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-red-500 flex-shrink-0" />
                <a href="tel:+918310235515" className="hover:text-red-500 transition-colors font-bold text-slate-300">
                  +91 831-0235515
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" />
                <div className="flex flex-col gap-1.5">
                  <a href="mailto:Lestar@matrixcorpltd.com" className="hover:text-red-500 transition-colors text-slate-300 block">
                    Lestar@matrixcorpltd.com
                  </a>
                  <a href="mailto:Sales@matrixcorpltd.com" className="hover:text-red-500 transition-colors text-slate-300 block">
                    Sales@matrixcorpltd.com
                  </a>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Clock className="w-4 h-4 text-red-500 flex-shrink-0" />
                <span className="text-slate-400">Mon - Sat: 10:00 AM - 6:00 PM</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Copy bar */}
        <div className="max-w-7xl mx-auto px-6 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-slate-500 text-[11px] font-bold">
          <span>© 2026 Matrix Corporation. All Rights Reserved.</span>
          <div className="flex items-center gap-4 text-slate-500">
            <span className="cursor-pointer hover:text-white transition-colors">Privacy Policy</span>
            <span>|</span>
            <span className="cursor-pointer hover:text-white transition-colors">Terms & Conditions</span>
          </div>
        </div>
      </footer>

      {/* FLOATING WHATSAPP BUTTON */}
      <button 
        onClick={() => handleWhatsAppEnquiry()}
        className="fixed bottom-6 right-6 bg-[#25D366] hover:bg-[#1da851] text-white p-4 rounded-full shadow-2xl z-40 transition-all duration-300 hover:scale-110 active:scale-95 group flex items-center justify-center cursor-pointer shadow-green-500/25 animate-pulse"
        aria-label="Contact us on WhatsApp"
      >
        <WhatsAppIcon className="w-6 h-6" />
        <span className="absolute right-full mr-3 bg-slate-900 text-white text-[10px] font-bold py-1 px-3 rounded-lg shadow-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
          Quick B2B WhatsApp Enquiry
        </span>
      </button>

      {/* SCROLL TO TOP */}
      {showScrollTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-24 right-6 bg-slate-900 hover:bg-red-600 text-white p-3.5 rounded-full shadow-xl z-40 transition-all duration-300 hover:-translate-y-1 active:translate-y-0 cursor-pointer border border-slate-800"
          aria-label="Scroll to top"
        >
          <ChevronUp className="w-5 h-5" />
        </button>
      )}
    </div>
  );
}

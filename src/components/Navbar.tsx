import React, { useState } from 'react';
import { Phone, Mail, Clock, Search, Mic, Menu, X, ChevronDown } from 'lucide-react';

interface NavbarProps {
  currentPage: string;
  setCurrentPage: (page: string) => void;
  setSelectedCategory: (cat: string) => void;
  setSelectedType: (type: string) => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  onSelectSubcategory?: (cat: string, sub: string) => void;
}

export default function Navbar({
  currentPage,
  setCurrentPage,
  setSelectedCategory,
  setSelectedType,
  searchQuery,
  setSearchQuery,
  onSelectSubcategory
}: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchFocused, setSearchQueryFocused] = useState(false);

  const categories = [
    { 
      name: "Fans", 
      sub: ["Ceiling Fans", "Table Fans", "Exhaust Fans", "BLDC Fans"] 
    },
    { 
      name: "Coolers", 
      sub: ["Desert Coolers", "Personal Cooler", "Tower Coolers"] 
    },
    { 
      name: "Kitchen Appliances", 
      sub: [
        "Food Preparation",
        "Hand Blender",
        "Juicer",
        "Mixer Grinder",
        "Wet Mixer Grinder",
        "Air Fryer",
        "Electric Kettle",
        "Microwave",
        "OTG",
        "Rice Cooker",
        "Sandwich Maker",
        "Toaster"
      ] 
    },
    { 
      name: "Home Appliances", 
      sub: ["Washing Machine", "Refrigerator", "Air Conditioners"] 
    },
    { 
      name: "Steamers", 
      sub: ["Garment Steamer", "Iron"] 
    },
    { 
      name: "Water Heaters", 
      sub: ["Instant Water Heaters", "Storage Water Heaters", "Immersion Rod", "Room Heaters"] 
    }
  ];

  const handleCategoryClick = (catName: string) => {
    setSelectedCategory(catName);
    setSelectedType('');
    setSearchQuery('');
    setCurrentPage('products');
    setMobileMenuOpen(false);
  };

  const handleSubCategoryClick = (catName: string, subItem: string) => {
    if (onSelectSubcategory) {
      onSelectSubcategory(catName, subItem);
    } else {
      setSelectedCategory(catName);
      setSelectedType(subItem);
      setSearchQuery('');
      setCurrentPage('products');
    }
    setMobileMenuOpen(false);
  };

  const handleNavClick = (pageName: string) => {
    setCurrentPage(pageName);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="w-full relative z-50">
      {/* TOP BAR */}
      <div className="bg-[#0D1B3E] text-slate-300 text-xs py-2.5 px-4 md:px-10 flex flex-col md:flex-row justify-between items-center gap-2 border-b border-slate-800">
        <div className="flex items-center gap-2 font-medium tracking-wide">
          <span className="inline-block w-2 h-2 rounded-full bg-red-600 animate-pulse"></span>
          Authorised Distributor of KENSTAR | Mangalore & Udupi District
        </div>
        <div className="flex items-center flex-wrap gap-4 text-slate-400">
          <span className="flex items-center gap-1.5">
            <Clock className="w-3.5 h-3.5 text-yellow-500" />
            Mon–Sat: 9:00 AM – 6:00 PM
          </span>
          <span className="hidden md:inline text-slate-600">|</span>
          <a href="tel:+918310235515" className="flex items-center gap-1.5 hover:text-white transition-colors">
            <Phone className="w-3.5 h-3.5 text-yellow-500" />
            +91 831-0235515
          </a>
        </div>
      </div>

      {/* PRIMARY NAVBAR */}
      <nav className="bg-white h-20 px-4 md:px-10 flex items-center justify-between shadow-md sticky top-0">
        {/* LOGO */}
        <div 
          onClick={() => handleNavClick('home')} 
          className="flex items-center gap-2 cursor-pointer group flex-shrink-0"
        >
          <img 
            src="logo.png" 
            alt="Matrix Corp" 
            className="w-11 h-11 object-contain rounded-xl shadow-md transition-all group-hover:scale-105"
            referrerPolicy="no-referrer"
          />
          <div>
            <span className="font-bold text-lg tracking-tight text-[#0D1B3E] block leading-none">
              Matrix <span className="text-red-600">Corporation</span>
            </span>
            <span className="text-[10px] uppercase font-bold tracking-wider text-slate-500 block mt-1">
              Electrical & Electronic Products Distributor
            </span>
          </div>
        </div>

        {/* SEARCH BAR */}
        <div className={`hidden lg:flex flex-1 max-w-sm mx-8 relative items-center h-11 bg-slate-100 rounded-full px-4 border transition-all ${searchFocused ? 'bg-white border-red-600 ring-2 ring-red-100' : 'border-slate-200'}`}>
          <Search className="w-4 h-4 text-slate-500 mr-2 flex-shrink-0" />
          <input 
            type="text" 
            placeholder="Search appliances..." 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => {
              setSearchQueryFocused(true);
              if (currentPage !== 'products') {
                setCurrentPage('products');
              }
            }}
            onBlur={() => setSearchQueryFocused(false)}
            className="bg-transparent text-sm w-full outline-none text-[#0D1B3E] placeholder-slate-400"
          />
          {searchQuery && (
            <button 
              onClick={() => setSearchQuery('')}
              className="text-xs text-slate-400 hover:text-slate-600 font-bold px-1.5"
            >
              Clear
            </button>
          )}
        </div>

        {/* DESKTOP NAV LINKS */}
        <ul className="hidden md:flex items-center gap-1.5">
          <li>
            <button 
              onClick={() => handleNavClick('home')} 
              className={`px-3.5 py-2 rounded-lg text-sm font-semibold tracking-wide transition-all ${currentPage === 'home' ? 'text-red-600 bg-red-50' : 'text-[#0D1B3E] hover:text-red-600 hover:bg-slate-50'}`}
            >
              Home
            </button>
          </li>
          <li>
            <button 
              onClick={() => handleNavClick('about')} 
              className={`px-3.5 py-2 rounded-lg text-sm font-semibold tracking-wide transition-all ${currentPage === 'about' ? 'text-red-600 bg-red-50' : 'text-[#0D1B3E] hover:text-red-600 hover:bg-slate-50'}`}
            >
              About Us
            </button>
          </li>
          <li>
            <button 
              onClick={() => handleNavClick('products')} 
              className={`px-3.5 py-2 rounded-lg text-sm font-semibold tracking-wide transition-all ${currentPage === 'products' ? 'text-red-600 bg-red-50' : 'text-[#0D1B3E] hover:text-red-600 hover:bg-slate-50'}`}
            >
              Products
            </button>
          </li>
          <li>
            <button 
              onClick={() => handleNavClick('services')} 
              className={`px-3.5 py-2 rounded-lg text-sm font-semibold tracking-wide transition-all ${currentPage === 'services' ? 'text-red-600 bg-red-50' : 'text-[#0D1B3E] hover:text-red-600 hover:bg-slate-50'}`}
            >
              Services
            </button>
          </li>
          <li>
            <button 
              onClick={() => handleNavClick('contact')} 
              className={`px-3.5 py-2 rounded-lg text-sm font-semibold tracking-wide transition-all ${currentPage === 'contact' ? 'text-red-600 bg-red-50' : 'text-[#0D1B3E] hover:text-red-600 hover:bg-slate-50'}`}
            >
              Contact Us
            </button>
          </li>
          <li>
            <button 
              onClick={() => handleNavClick('enquiry')} 
              className="ml-2 bg-[#0D1B3E] hover:bg-red-600 text-white text-xs uppercase font-bold tracking-wider py-2.5 px-5 rounded-lg shadow-md transition-all duration-300 hover:-translate-y-0.5"
            >
              Business Enquiry
            </button>
          </li>
        </ul>

        {/* MOBILE MENU TOGGLE */}
        <button 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-lg text-[#0D1B3E] hover:bg-slate-100 transition-colors"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {/* CATEGORY STRIP WITH DROPDOWNS */}
      <div className="hidden md:flex bg-slate-50 border-y border-slate-200 justify-center gap-1 relative z-40">
        {categories.map((cat, idx) => (
          <div key={idx} className="group relative">
            <button 
              onClick={() => handleCategoryClick(cat.name)}
              className="flex items-center gap-1 py-3.5 px-5 text-xs font-bold text-[#0D1B3E] hover:text-red-600 uppercase tracking-widest transition-colors border-b-2 border-transparent group-hover:border-red-600"
            >
              {cat.name}
              <ChevronDown className="w-3.5 h-3.5 text-slate-400 group-hover:text-red-600 transition-transform duration-200 group-hover:rotate-180" />
            </button>

            {/* DROPDOWN MENU */}
            <div className="absolute top-full left-1/2 -translate-x-1/2 w-60 bg-white rounded-b-xl shadow-xl py-3 border-t-2 border-red-600 hidden group-hover:block animate-fadeIn pointer-events-auto">
              {cat.sub.map((subItem, sIdx) => (
                <button
                  key={sIdx}
                  onClick={() => handleSubCategoryClick(cat.name, subItem)}
                  className="w-full text-left text-xs font-medium text-slate-700 hover:text-red-600 hover:bg-red-50 py-2.5 px-5 transition-colors"
                >
                  {subItem}
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* MOBILE DRAWER */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 bg-slate-900/60 z-50 md:hidden flex justify-end">
          <div className="w-4/5 max-w-sm bg-white h-full shadow-2xl p-6 flex flex-col justify-between animate-slideIn">
            <div>
              <div className="flex items-center justify-between mb-8 pb-4 border-b border-slate-100">
                <div className="flex items-center gap-2">
                  <div className="w-9 h-9 bg-[#0D1B3E] rounded-lg flex items-center justify-center text-white font-extrabold text-base">
                    M
                  </div>
                  <span className="font-bold text-sm tracking-tight text-[#0D1B3E]">
                    Matrix Corp
                  </span>
                </div>
                <button 
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-1.5 text-slate-500 hover:text-[#0D1B3E] rounded-md"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Search in Mobile */}
              <div className="relative flex items-center h-10 bg-slate-100 rounded-full px-3 mb-6 border border-slate-200">
                <Search className="w-4 h-4 text-slate-500 mr-2 flex-shrink-0" />
                <input 
                  type="text" 
                  placeholder="Search products..." 
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onFocus={() => {
                    if (currentPage !== 'products') {
                      setCurrentPage('products');
                    }
                  }}
                  className="bg-transparent text-xs w-full outline-none text-[#0D1B3E] placeholder-slate-400"
                />
              </div>

              {/* Primary Links */}
              <div className="flex flex-col gap-2 mb-8">
                <button 
                  onClick={() => handleNavClick('home')} 
                  className={`w-full text-left py-3 px-4 rounded-xl text-sm font-bold transition-colors ${currentPage === 'home' ? 'text-red-600 bg-red-50' : 'text-[#0D1B3E] hover:bg-slate-50'}`}
                >
                  Home
                </button>
                <button 
                  onClick={() => handleNavClick('about')} 
                  className={`w-full text-left py-3 px-4 rounded-xl text-sm font-bold transition-colors ${currentPage === 'about' ? 'text-red-600 bg-red-50' : 'text-[#0D1B3E] hover:bg-slate-50'}`}
                >
                  About Us
                </button>
                <button 
                  onClick={() => handleNavClick('products')} 
                  className={`w-full text-left py-3 px-4 rounded-xl text-sm font-bold transition-colors ${currentPage === 'products' ? 'text-red-600 bg-red-50' : 'text-[#0D1B3E] hover:bg-slate-50'}`}
                >
                  Products Catalog
                </button>
                <button 
                  onClick={() => handleNavClick('services')} 
                  className={`w-full text-left py-3 px-4 rounded-xl text-sm font-bold transition-colors ${currentPage === 'services' ? 'text-red-600 bg-red-50' : 'text-[#0D1B3E] hover:bg-slate-50'}`}
                >
                  Our Services
                </button>
                <button 
                  onClick={() => handleNavClick('contact')} 
                  className={`w-full text-left py-3 px-4 rounded-xl text-sm font-bold transition-colors ${currentPage === 'contact' ? 'text-red-600 bg-red-50' : 'text-[#0D1B3E] hover:bg-slate-50'}`}
                >
                  Contact Us
                </button>
              </div>

              {/* Product Category shortcuts */}
              <div className="mb-4">
                <h4 className="text-[10px] uppercase font-bold text-slate-400 tracking-wider mb-2 px-4">
                  Product Shortcuts
                </h4>
                <div className="grid grid-cols-2 gap-2 px-2">
                  {categories.map((c, i) => (
                    <button
                      key={i}
                      onClick={() => handleCategoryClick(c.name)}
                      className="text-left text-xs font-semibold text-slate-700 hover:text-red-600 hover:bg-red-50 p-2.5 rounded-lg transition-colors border border-slate-100"
                    >
                      {c.name}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-100">
              <button 
                onClick={() => handleNavClick('enquiry')} 
                className="w-full text-center bg-red-600 hover:bg-red-700 text-white font-bold py-3.5 px-4 rounded-xl text-sm shadow-lg shadow-red-600/20 uppercase tracking-widest"
              >
                Distributor Enquiry
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

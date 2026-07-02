import React, { useState } from 'react';
import { Product, PRODUCTS } from '../data/products';
import { Search, Star, MessageCircle, Info, X, Sliders, CheckCircle2, ChevronRight, HelpCircle, Sparkles, XCircle } from 'lucide-react';
import { WhatsAppIcon } from './WhatsAppIcon';

interface ProductsProps {
  initialCategory: string;
  initialType: string;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  onBuyNow: (product: Product) => void;
  activeProduct: Product | null;
  setActiveProduct: (product: Product | null) => void;
}

export default function Products({
  initialCategory,
  initialType,
  searchQuery,
  setSearchQuery,
  onBuyNow,
  activeProduct,
  setActiveProduct
}: ProductsProps) {
  // FILTER STATES
  const [selectedCategory, setSelectedCategory] = useState<string>(initialCategory || '');
  const [selectedType, setSelectedType] = useState<string>(initialType || '');
  
  // Sync prop category and type to state
  React.useEffect(() => {
    setSelectedCategory(initialCategory || '');
    setSelectedType(initialType || '');
  }, [initialCategory, initialType]);

  const handleCategorySelect = (cat: string) => {
    setSelectedCategory(cat);
    setSelectedType('');
  };

  // EMI CALC STATES FOR MODAL
  const [emiTenure, setEmiTenure] = useState<number>(9); // Default 9 months

  // Filter products logic
  const filteredProducts = PRODUCTS.filter(p => {
    const matchesSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          p.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === '' || p.category === selectedCategory;
    const matchesType = selectedType === '' || p.type === selectedType;
    return matchesSearch && matchesCategory && matchesType;
  });

  // Image error state tracker to substitute fallbacks
  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>, fallback: string) => {
    e.currentTarget.src = fallback;
  };

  const categories = ["Fans", "Coolers", "Kitchen Appliances", "Home Appliances", "Steamers", "Water Heaters"];

  return (
    <div className="w-full bg-slate-50 min-h-screen">
      {/* BANNER HEADER */}
      <section className="bg-[#0D1B3E] py-12 text-center text-white relative">
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <span className="text-xs font-bold text-yellow-400 uppercase tracking-widest block mb-2">Matrix Catalog</span>
          <h1 className="text-3xl md:text-4xl font-extrabold uppercase tracking-tight">
            Product <span className="text-yellow-400">Hub</span>
          </h1>
          <p className="text-xs md:text-sm text-slate-300 max-w-lg mx-auto mt-2">
            Browse our premium range of geysers, air coolers, ceiling fans, and smart kitchen helpers. Filter and enquire instantly.
          </p>
        </div>
      </section>

      {/* FILTER & GRID CONTAINER */}
      <div className="max-w-6xl mx-auto py-12 px-4 md:px-6 grid grid-cols-1 lg:grid-cols-4 gap-8">
        
        {/* LEFT FILTER SIDEBAR */}
        <aside className="bg-white border border-slate-200/60 rounded-2xl p-6 shadow-sm self-start h-fit">
          <div className="flex items-center gap-2 mb-6 pb-3 border-b border-slate-100">
            <Sliders className="w-4 h-4 text-red-600" />
            <h3 className="font-extrabold text-sm text-[#0D1B3E] uppercase tracking-wider">
              Filter Catalog
            </h3>
          </div>

          {/* Search bar inside sidebar (for mobile accessibility) */}
          <div className="mb-6 lg:hidden relative flex items-center h-10 bg-slate-100 rounded-full px-3 border border-slate-200">
            <input 
              type="text" 
              placeholder="Search appliances..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="bg-transparent text-xs w-full outline-none text-[#0D1B3E]"
            />
          </div>

          {/* Category Filter */}
          <div className="mb-6">
            <h4 className="text-[11px] font-bold text-[#0D1B3E] uppercase tracking-wider mb-3">
              Categories
            </h4>
            <div className="flex flex-col gap-1.5">
              <button 
                onClick={() => handleCategorySelect('')}
                className={`w-full text-left text-xs font-semibold py-2 px-3 rounded-lg transition-colors ${selectedCategory === '' ? 'bg-red-50 text-red-600 font-bold' : 'text-slate-600 hover:bg-slate-50'}`}
              >
                All Categories ({PRODUCTS.length})
              </button>
              {categories.map((cat, idx) => {
                const count = PRODUCTS.filter(p => p.category === cat).length;
                return (
                  <button 
                    key={idx}
                    onClick={() => handleCategorySelect(cat)}
                    className={`w-full text-left text-xs font-semibold py-2 px-3 rounded-lg transition-colors ${selectedCategory === cat ? 'bg-red-50 text-red-600 font-bold' : 'text-slate-600 hover:bg-slate-50'}`}
                  >
                    {cat} ({count})
                  </button>
                );
              })}
            </div>
          </div>

          {/* Fan Types Filter */}
          {selectedCategory === 'Fans' && (
            <div className="mb-6 border-t border-slate-100 pt-5">
              <h4 className="text-[11px] font-bold text-[#0D1B3E] uppercase tracking-wider mb-3">
                Fan Types
              </h4>
              <div className="flex flex-col gap-1.5">
                <button 
                  onClick={() => setSelectedType('')}
                  className={`w-full text-left text-xs font-semibold py-2 px-3 rounded-lg transition-colors ${selectedType === '' ? 'bg-red-50 text-red-600 font-bold' : 'text-slate-600 hover:bg-slate-50'}`}
                >
                  All Fans ({PRODUCTS.filter(p => p.category === 'Fans').length})
                </button>
                {["Ceiling Fans", "Table Fans", "Exhaust Fans", "BLDC Fans"].map((type, idx) => {
                  const count = PRODUCTS.filter(p => p.category === 'Fans' && p.type === type).length;
                  return (
                    <button 
                      key={idx}
                      onClick={() => setSelectedType(type)}
                      className={`w-full text-left text-xs font-semibold py-2 px-3 rounded-lg transition-colors ${selectedType === type ? 'bg-red-50 text-red-600 font-bold' : 'text-slate-600 hover:bg-slate-50'}`}
                    >
                      {type} ({count})
                    </button>
                  );
                })}
              </div>
            </div>
          )}

        </aside>

        {/* RIGHT MAIN PRODUCTS GRID */}
        <main className="lg:col-span-3">
          {/* Top summary row */}
          <div className="flex justify-between items-center bg-white border border-slate-200/60 rounded-xl py-3 px-5 mb-6 shadow-sm">
            <span className="text-xs text-slate-500 font-semibold">
              Showing <span className="font-extrabold text-[#0D1B3E]">{filteredProducts.length}</span> matching products
            </span>
            {(selectedCategory || selectedType) && (
              <button 
                onClick={() => {
                  setSelectedCategory('');
                  setSelectedType('');
                }}
                className="text-xs text-red-600 hover:text-red-700 font-bold uppercase tracking-wider"
              >
                Reset filters
              </button>
            )}
          </div>

          {/* Products Empty State */}
          {filteredProducts.length === 0 && (
            <div className="bg-white border border-slate-200/60 rounded-2xl p-16 text-center shadow-sm">
              <Search className="w-12 h-12 text-slate-300 mx-auto" />
              <h3 className="font-extrabold text-[#0D1B3E] text-lg mt-4 mb-2">No Products Found</h3>
              <p className="text-slate-500 text-xs max-w-sm mx-auto">
                We couldn't find any appliances matching your search. Try resetting the filters or adjusting the price range.
              </p>
              <button 
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('');
                  setSelectedType('');
                }}
                className="mt-6 bg-[#0D1B3E] hover:bg-red-600 text-white font-bold text-xs uppercase py-2.5 px-6 rounded-lg transition-colors"
              >
                Reset All Filters
              </button>
            </div>
          )}

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {filteredProducts.map((product) => {
              const emi = Math.round(product.mrp / 9);
              return (
                <article 
                  key={product.id}
                  className="bg-white border border-slate-200/60 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group hover:-translate-y-1"
                >
                  {/* Image container */}
                  <div className="relative bg-white p-6 flex items-center justify-center h-56 border-b border-slate-100 flex-shrink-0">
                    <img 
                      src={product.image} 
                      alt={product.name}
                      onError={(e) => handleImageError(e, product.fallbackImage)}
                      className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-300"
                      referrerPolicy="no-referrer"
                    />
                    <div className={`absolute top-3 right-3 text-[9px] font-bold py-1 px-2.5 rounded-full uppercase tracking-wider ${product.outOfStock ? 'bg-red-600 text-white animate-pulse' : 'bg-red-100 text-red-600'}`}>
                      {product.tag}
                    </div>
                  </div>

                  {/* Body container */}
                  <div className="p-5 flex flex-col justify-between flex-1">
                    <div>
                      {/* Category Label */}
                      <span className="text-[10px] uppercase font-bold text-slate-400 tracking-widest block mb-1">
                        {product.category}
                      </span>
                      <h3 
                        onClick={() => setActiveProduct(product)}
                        className="font-bold text-slate-900 text-sm leading-snug mb-3 hover:text-red-600 transition-colors cursor-pointer"
                      >
                        {product.name}
                      </h3>

                    </div>

                    <div className="pt-3 border-t border-slate-100">
                      <div className="w-full">
                        <button 
                          onClick={() => setActiveProduct(product)}
                          className="w-full bg-[#0D1B3E] hover:bg-red-600 text-white text-[11px] font-extrabold py-2.5 rounded-lg text-center transition-all duration-300 cursor-pointer shadow-sm hover:shadow"
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
        </main>
      </div>

      {/* DYNAMIC PRODUCT DETAILS MODAL */}
      {activeProduct && (
        <div className="fixed inset-0 bg-slate-900/60 z-50 flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-white w-full max-w-4xl rounded-2xl overflow-hidden shadow-2xl relative max-h-[90vh] flex flex-col animate-scaleUp">
            
            {/* Close Button */}
            <button 
              onClick={() => {
                setActiveProduct(null);
                setEmiTenure(9); // Reset tenure
              }}
              className="absolute top-4 right-4 z-10 p-2 bg-slate-100 text-slate-600 hover:bg-slate-200 rounded-full transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Body Scroll Container */}
            <div className="overflow-y-auto p-6 md:p-10 flex-1">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                
                {/* Left Product Image Area */}
                <div>
                  <div className="bg-slate-50 p-8 rounded-xl border border-slate-100 flex items-center justify-center h-80 mb-4">
                    <img 
                      src={activeProduct.image} 
                      alt={activeProduct.name}
                      onError={(e) => handleImageError(e, activeProduct.fallbackImage)}
                      className="max-h-full max-w-full object-contain"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className="bg-red-50 p-4 rounded-xl border border-red-100 text-red-800 text-xs">
                    <h5 className="font-bold flex items-center gap-1.5 mb-1 text-red-900">
                      <Info className="w-3.5 h-3.5" />
                      Authorised Mangalore Supply
                    </h5>
                    <p className="leading-relaxed text-red-700">
                      Every appliance is sourced directly from official brand depots. Includes direct dealer GST invoicing, official accessories, and local area warranty coverage.
                    </p>
                  </div>
                </div>

                {/* Right Specifications and EMI Calculator */}
                <div>
                  <span className="text-xs uppercase font-extrabold text-red-600 tracking-wider block mb-1">
                    {activeProduct.category}
                  </span>
                  
                  {activeProduct.outOfStock && (
                    <div className="bg-red-50 border border-red-200 text-red-700 rounded-lg p-3 mb-2.5 text-xs font-bold flex items-center gap-2 animate-pulse">
                      <span className="inline-block w-2 h-2 rounded-full bg-red-600" />
                      <span>OUT OF STOCK / SOLD OUT</span>
                    </div>
                  )}

                  <h2 className="font-extrabold text-xl text-[#0D1B3E] mb-3 leading-tight flex items-center gap-2">
                    <span>{activeProduct.name}</span>
                    {activeProduct.outOfStock && (
                      <span className="bg-red-600 text-white text-[9px] font-extrabold px-2 py-0.5 rounded uppercase tracking-wider">
                        Sold Out
                      </span>
                    )}
                  </h2>

                  {/* Custom EMI, Cashbacks, and SKU badge */}
                  

                  {/* Description */}
                  <p className="text-slate-600 text-xs leading-relaxed mb-6">
                    {activeProduct.description}
                  </p>

                  {/* Key Features Bullets */}
                  <div className="mb-6">
                    <h4 className="text-[11px] font-bold text-slate-800 uppercase tracking-widest mb-3">
                      Key Highlights
                    </h4>
                    <ul className="flex flex-col gap-2">
                      {activeProduct.features.map((feat, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-xs text-slate-700 font-medium">
                          <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                          {feat}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technical Specs Table */}
                  <div className="mb-8">
                    <h4 className="text-[11px] font-bold text-slate-800 uppercase tracking-widest mb-3">
                      Technical Specifications
                    </h4>
                    <div className="border border-slate-200/60 rounded-xl overflow-hidden text-xs">
                      {Object.entries(activeProduct.specs).map(([key, val], idx) => (
                        <div 
                          key={idx} 
                          className={`grid grid-cols-2 p-3 ${idx % 2 === 0 ? 'bg-slate-50' : 'bg-white'} border-b border-slate-100 last:border-b-0`}
                        >
                          <span className="font-semibold text-slate-500">{key}</span>
                          <span className="font-bold text-slate-800">{val}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}

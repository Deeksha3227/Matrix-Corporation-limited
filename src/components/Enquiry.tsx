import React, { useState } from 'react';
import { Award, Box, Percent, ShieldCheck, CheckSquare, FileText, CheckCircle2, ChevronRight, HelpCircle, AlertCircle, Info } from 'lucide-react';

interface EnquiryProps {
  onAddLead: (lead: { name: string; phone: string; interest: string; message: string; date: string; type: string }) => void;
}

export default function Enquiry({ onAddLead }: EnquiryProps) {
  // FORM STATES
  const [name, setName] = useState('');
  const [company, setCompany] = useState('');
  const [phone, setPhone] = useState('');
  const [location, setLocation] = useState('');
  const [bizType, setBizType] = useState('');
  const [message, setMessage] = useState('');

  // STATUS STATES
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [receiptId, setReceiptId] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  const handleEnquirySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');

    // Native validation
    if (!name.trim()) {
      setErrorMsg('Please enter your name.');
      return;
    }
    const cleanPhone = phone.replace(/\D/g, '');
    if (cleanPhone.length < 10) {
      setErrorMsg('Please enter a valid 10-digit phone number.');
      return;
    }
    if (!location.trim()) {
      setErrorMsg('Please enter your location/town.');
      return;
    }
    if (!bizType) {
      setErrorMsg('Please select your business type.');
      return;
    }

    setSubmitting(true);

    // Simulate server submission
    setTimeout(() => {
      setSubmitting(false);
      const generatedId = `MC-2026-X${Math.floor(1000 + Math.random() * 9000)}`;
      setReceiptId(generatedId);
      setSuccess(true);
      
      // Save lead to parent state/localStorage
      onAddLead({
        name,
        phone,
        interest: `${bizType} Partnership (${company || 'No Company'})`,
        message: `Location: ${location}. Message: ${message || 'No additional message.'}`,
        date: new Date().toLocaleDateString('en-IN'),
        type: 'Distributorship Application'
      });

      // Reset form fields
      setName('');
      setCompany('');
      setPhone('');
      setLocation('');
      setBizType('');
      setMessage('');
    }, 1800);
  };

  const offers = [
    {
      title: "Competitive Margins",
      desc: "Our direct pricing structure allows us to pass down the maximum profitable margins to our sub-dealers and retail partners.",
      icon: <Percent className="w-5 h-5 text-red-600" />
    },
    {
      title: "Reliable Supply",
      desc: "We maintain robust inventory levels at our local Pumpwell depot to ensure stable, on-time product availability and steady deliveries.",
      icon: <Box className="w-5 h-5 text-red-600" />
    },
    {
      title: "Marketing Support",
      desc: "Matrix provides official product catalogs, promotional banners, outdoor storefront signage, and digital branding assets.",
      icon: <Award className="w-5 h-5 text-red-600" />
    }
  ];

  return (
    <div className="w-full bg-slate-50 min-h-screen font-sans">
      {/* HEADER BANNER */}
      <section className="bg-[#0D1B3E] py-16 text-center text-white relative">
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <span className="text-xs font-bold text-yellow-400 uppercase tracking-widest block mb-3">GROW YOUR STORE</span>
          <h1 className="text-4xl md:text-5xl font-extrabold uppercase tracking-tight">
            Partner With Us / <span className="text-yellow-400">Business Enquiry</span>
          </h1>
          <p className="text-slate-300 text-sm max-w-xl mx-auto mt-3 leading-relaxed font-medium">
            We are expanding our network and welcome enquiries from sub-dealers, retailers, and businesses looking for distribution partnerships.
          </p>
          <div className="flex items-center justify-center gap-2 mt-6 text-xs text-slate-400 font-semibold uppercase tracking-wider">
            <span onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="hover:text-white transition-colors cursor-pointer">Home</span>
            <span>/</span>
            <span className="text-yellow-400">Business Enquiry</span>
          </div>
        </div>
      </section>

      {/* BENEFITS & FORM LAYOUT */}
      <div className="max-w-6xl mx-auto py-20 px-4 md:px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
        
        {/* LEFT SIDE: OFFERS & WHO CAN APPLY */}
        <div>
          <span className="text-xs font-bold text-red-600 uppercase tracking-widest block mb-2">B2B COHORT VALUE</span>
          <h2 className="text-3xl font-extrabold text-[#0D1B3E] uppercase tracking-tight mb-6">
            What We Offer Partners
          </h2>
          <p className="text-slate-600 text-sm leading-relaxed mb-8 font-medium">
            Joining the Matrix Corporation network means getting more than just product crates. You get a direct local supply partner invested in your long-term retail growth and customer trust.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-10">
            {offers.map((offer, idx) => (
              <div 
                key={idx}
                className="bg-white border border-slate-200/60 rounded-xl p-5 hover:border-red-600 transition-colors shadow-sm"
              >
                <div className="w-9 h-9 bg-red-50 text-red-600 rounded-lg flex items-center justify-center mb-4">
                  {offer.icon}
                </div>
                <h4 className="font-extrabold text-sm text-[#0D1B3E] mb-2">{offer.title}</h4>
                <p className="text-slate-500 text-[11px] leading-relaxed font-medium">{offer.desc}</p>
              </div>
            ))}
          </div>

          {/* Who can apply card */}
          <div className="bg-[#0D1B3E] text-white rounded-2xl p-8 shadow-lg border border-slate-800">
            <h4 className="font-bold text-sm text-yellow-400 uppercase tracking-wider mb-4">
              Who Can Apply?
            </h4>
            <p className="text-slate-200 text-xs leading-relaxed font-medium mb-4">
              We welcome applications from:
            </p>
            <ul className="space-y-3">
              {[
                "Retailers looking to stock high-demand products at attractive margins",
                "Wholesalers seeking direct distributor sourcing capabilities",
                "Entrepreneurs in Mangalore and nearby areas interested in partnership opportunities",
                "Companies looking for reliable distributors in Mangalore and Udupi districts"
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 text-slate-300 text-xs font-medium">
                  <CheckSquare className="w-4 h-4 text-yellow-400 flex-shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* RIGHT SIDE: BUSINESS APPLICATION ENQUIRY FORM */}
        <div className="bg-white border border-slate-200/60 rounded-2xl p-8 md:p-10 shadow-sm relative">
          <div className="mb-6">
            <span className="text-[10px] font-black text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-full uppercase tracking-wider inline-block mb-3">
              Direct B2B Channels
            </span>
            <h3 className="font-extrabold text-xl text-[#0D1B3E] mb-1.5 leading-tight">
              Business Partnership Enquiry
            </h3>
            <p className="text-slate-500 text-xs leading-relaxed">
              Leads are dispatched directly to: <strong className="text-[#0D1B3E]">Lestar@matrixcorpltd.com</strong> &amp; <strong className="text-[#0D1B3E]">Sales@matrixcorpltd.com</strong>
            </p>
          </div>

          {errorMsg && (
            <div className="bg-red-50 border border-red-100 text-red-700 p-3 rounded-lg text-xs font-bold flex items-center gap-2 mb-6">
              <AlertCircle className="w-4 h-4 text-red-500 flex-shrink-0" />
              {errorMsg}
            </div>
          )}

          <form onSubmit={handleEnquirySubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex flex-col gap-1.5">
                <label className="text-[10px] uppercase font-bold text-slate-500 tracking-wider">Name *</label>
                <input 
                  type="text" 
                  placeholder="Your Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="bg-slate-50 border border-slate-200 rounded-lg p-3 text-xs outline-none focus:bg-white focus:border-red-600 text-slate-800 font-semibold"
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-[10px] uppercase font-bold text-slate-500 tracking-wider">Company Name *</label>
                <input 
                  type="text" 
                  placeholder="Your Store / Firm Name"
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                  required
                  className="bg-slate-50 border border-slate-200 rounded-lg p-3 text-xs outline-none focus:bg-white focus:border-red-600 text-slate-800 font-semibold"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex flex-col gap-1.5">
                <label className="text-[10px] uppercase font-bold text-slate-500 tracking-wider">Contact Number *</label>
                <input 
                  type="tel" 
                  placeholder="e.g. 9876543210"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                  className="bg-slate-50 border border-slate-200 rounded-lg p-3 text-xs outline-none focus:bg-white focus:border-red-600 text-slate-800 font-semibold"
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-[10px] uppercase font-bold text-slate-500 tracking-wider">Location *</label>
                <input 
                  type="text" 
                  placeholder="e.g. Mangalore, Udupi"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  required
                  className="bg-slate-50 border border-slate-200 rounded-lg p-3 text-xs outline-none focus:bg-white focus:border-red-600 text-slate-800 font-semibold"
                />
              </div>
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-[10px] uppercase font-bold text-slate-500 tracking-wider">Type of Business *</label>
              <select
                value={bizType}
                onChange={(e) => setBizType(e.target.value)}
                required
                className="bg-slate-50 border border-slate-200 rounded-lg p-3 text-xs outline-none focus:bg-white focus:border-red-600 text-slate-800 font-semibold cursor-pointer"
              >
                <option value="">Select Business Type</option>
                <option value="Retailer">Retailer (Electronics / Appliance Store)</option>
                <option value="Wholesaler">Wholesaler / Sub-dealer</option>
                <option value="Entrepreneur">Entrepreneur / Hardware Business</option>
                <option value="Company Seeking Distributor">Company looking for Distributor</option>
              </select>
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-[10px] uppercase font-bold text-slate-500 tracking-wider">Message *</label>
              <textarea 
                rows={4}
                placeholder="Please describe your requirements, expected quantity, or partnership scope..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
                className="bg-slate-50 border border-slate-200 rounded-lg p-3 text-xs outline-none focus:bg-white focus:border-red-600 text-slate-800 font-medium resize-none"
              />
            </div>

            <button 
              type="submit"
              disabled={submitting}
              className="w-full bg-[#0D1B3E] hover:bg-red-600 disabled:bg-slate-400 text-white font-bold text-xs uppercase py-3.5 rounded-lg shadow-lg transition-colors flex justify-center items-center gap-2 cursor-pointer"
            >
              {submitting ? (
                <>
                  <span className="w-4 h-4 rounded-full border-2 border-white border-t-transparent animate-spin"></span>
                  Submitting Enquiry...
                </>
              ) : (
                "Submit Business Enquiry →"
              )}
            </button>
          </form>
        </div>

      </div>

      {/* OFFICIAL APPLICATION RECEIPT MODAL POPUP */}
      {success && (
        <div className="fixed inset-0 bg-slate-900/60 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-lg w-full text-slate-800 shadow-2xl relative overflow-hidden animate-scaleUp">
            
            {/* Header branding band */}
            <div className="bg-[#0D1B3E] text-white p-6 text-center border-b-4 border-red-600 relative">
              <div className="w-12 h-12 bg-white text-[#0D1B3E] font-extrabold text-lg flex items-center justify-center rounded-xl mx-auto mb-2.5">
                M
              </div>
              <h3 className="font-extrabold text-sm uppercase tracking-widest text-yellow-400">Official Partnership Receipt</h3>
              <p className="text-[10px] text-slate-400 mt-1 uppercase font-bold">Matrix Corporation Ltd | Mangalore</p>
            </div>

            {/* Receipt Content */}
            <div className="p-6 md:p-8 space-y-4">
              <p className="text-slate-500 text-xs text-center leading-relaxed">
                Your partnership application has been registered in the database.
              </p>

              {/* Specs board */}
              <div className="border border-dashed border-slate-300 rounded-xl p-5 bg-slate-50 space-y-3 font-mono text-xs">
                <div className="flex justify-between border-b border-slate-200 pb-2">
                  <span className="text-slate-400">Tracking Code:</span>
                  <span className="font-bold text-[#0D1B3E]">{receiptId}</span>
                </div>
                <div className="flex justify-between border-b border-slate-200 pb-2">
                  <span className="text-slate-400">Timestamp:</span>
                  <span className="font-bold text-slate-800">{new Date().toLocaleString('en-IN')}</span>
                </div>
                <div className="flex justify-between border-b border-slate-200 pb-2">
                  <span className="text-slate-400">Account Manager:</span>
                  <span className="font-bold text-red-600">Manoj Prasad (Partner)</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Priority Level:</span>
                  <span className="font-extrabold text-emerald-600">HIGH (24h SLA)</span>
                </div>
              </div>

              {/* Instructions */}
              <div className="bg-blue-50 border border-blue-100 p-3.5 rounded-lg text-[10px] text-blue-800 leading-relaxed font-semibold flex items-start gap-2">
                <Info className="w-4.5 h-4.5 text-blue-800 flex-shrink-0 mt-0.5" />
                <span>Our Business Developer, Manoj Prasad, or sales representative will visit your physical store premises with our product catalogs and wholesale quotation sheets. Keep your GST credentials ready.</span>
              </div>

              <button 
                onClick={() => setSuccess(false)}
                className="bg-[#0D1B3E] hover:bg-red-600 text-white font-bold text-xs uppercase py-3.5 rounded-lg w-full tracking-wider transition-colors cursor-pointer"
              >
                Close Receipt & Continue
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

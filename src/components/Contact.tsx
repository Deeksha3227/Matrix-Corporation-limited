import React, { useState } from 'react';
import { 
  User,
  Mail, 
  MapPin, 
  MessageSquare, 
  CheckCircle, 
  AlertCircle, 
  Send,
  Briefcase,
  ExternalLink
} from 'lucide-react';

interface ContactProps {
  onAddLead: (lead: { name: string; phone: string; interest: string; message: string; date: string; type: string }) => void;
  onNavigate?: (page: string) => void;
}

export default function Contact({ onAddLead, onNavigate }: ContactProps) {
  // FORM STATES (Strict to requested fields: Name, Phone Number, Message, Product Interest)
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [interest, setInterest] = useState('');
  const [message, setMessage] = useState('');
  
  // STATUS STATES
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleContactSubmit = (e: React.FormEvent) => {
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
    if (!interest) {
      setErrorMsg('Please select your Product Interest.');
      return;
    }
    if (!message.trim() || message.length < 5) {
      setErrorMsg('Please enter a descriptive message (at least 5 characters).');
      return;
    }

    setSubmitting(true);

    // Simulate submission
    setTimeout(() => {
      setSubmitting(false);
      setSuccess(true);
      
      // Save lead to parent state/localStorage
      onAddLead({
        name: name.trim(),
        phone: phone.trim(),
        interest,
        message: message.trim(),
        date: new Date().toLocaleDateString('en-IN'),
        type: 'Contact Us Inquiry'
      });

      // Reset form fields
      setName('');
      setPhone('');
      setInterest('');
      setMessage('');
    }, 1200);
  };

  return (
    <div className="w-full bg-slate-50 font-sans overflow-hidden">
      
      {/* ── HERO BANNER SECTION ── */}
      <section className="relative py-20 md:py-28 px-6 md:px-12 text-white overflow-hidden min-h-[460px] flex items-center bg-[#0D1B3E]">
        {/* Background image covering the entire section */}
        <div className="absolute inset-0 z-0">
          <img 
            src="services_truck.png" 
            alt="Contact Us Support Backdrop" 
            className="w-full h-full object-cover object-center scale-105"
            onError={(e) => {
              e.currentTarget.src = "slide1.png";
            }}
          />
          {/* Rich navy-to-transparent gradient overlay for text readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#0D1B3E]/95 via-[#0D1B3E]/85 to-slate-950/60" />
          <div className="absolute inset-0 bg-blue-950/40" />
        </div>

        {/* Ambient glow decorative elements */}
        <div className="absolute -left-20 -top-20 w-80 h-80 bg-red-600/15 rounded-full blur-3xl pointer-events-none z-1" />
        <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-yellow-500/10 rounded-full blur-3xl pointer-events-none z-1" />
        
        <div className="max-w-7xl mx-auto w-full relative z-10">
          <div className="max-w-2xl flex flex-col justify-center">
            <span className="text-xs md:text-sm font-extrabold text-[#F28C28] uppercase tracking-widest block mb-3">
              GET IN TOUCH
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tight mb-6 leading-tight">
              CONTACT <span className="text-[#F28C28]">US</span>
            </h1>
            <p className="text-slate-200 text-sm md:text-base leading-relaxed max-w-xl mb-8 font-medium">
              Have a bulk query, warranty request, or want to inquire as a sub-dealer? Reach out to our team, we're ready to help.
            </p>
            {/* Breadcrumbs */}
            <div className="flex items-center gap-2.5 text-xs text-slate-300 font-bold uppercase tracking-widest">
              <span 
                onClick={() => onNavigate && onNavigate('home')} 
                className="hover:text-[#F28C28] transition-colors cursor-pointer"
              >
                Home
              </span>
              <span>&gt;</span>
              <span className="text-[#F28C28]">Contact Us</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── MAIN OFFICE INFO & MESSAGE FORM SECTION ── */}
      <section className="py-20 px-6 bg-white relative">
        <div className="max-w-7xl mx-auto">
          
          {/* Centered Contact Form Section */}
          <div className="max-w-2xl mx-auto mb-20">
            <div className="bg-white border border-slate-100 rounded-3xl p-8 md:p-10 shadow-2xl relative">
              <span className="text-xs font-black text-red-600 uppercase tracking-widest block mb-2 text-center">
                ENQUIRY FORM
              </span>
              <h3 className="font-black text-3xl text-[#0D1B3E] mb-2 leading-tight text-center">
                Contact Us Now
              </h3>
              <p className="text-slate-500 text-xs md:text-sm mb-8 font-medium text-center">
                Please complete the secure form below with your requirements.
              </p>

              {errorMsg && (
                <div className="bg-red-50 border border-red-100 text-red-700 p-4 rounded-xl text-xs font-bold flex items-center gap-2 mb-6 animate-shake">
                  <AlertCircle className="w-4.5 h-4.5 text-red-500 flex-shrink-0" />
                  {errorMsg}
                </div>
              )}

              <form onSubmit={handleContactSubmit} className="space-y-5">
                
                {/* Field 1: Name */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                    Name <span className="text-red-500">*</span>
                  </label>
                  <input 
                    type="text" 
                    placeholder="Enter your full name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    className="bg-slate-50 border border-slate-200 rounded-xl p-4 text-xs md:text-sm outline-none focus:border-[#F28C28] focus:ring-1 focus:ring-[#F28C28] text-slate-800 font-semibold transition-all duration-200 placeholder-slate-400"
                  />
                </div>

                {/* Field 2: Phone Number */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                    Phone Number <span className="text-red-500">*</span>
                  </label>
                  <input 
                    type="tel" 
                    placeholder="e.g. 9876543210 (10 digits)"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    required
                    className="bg-slate-50 border border-slate-200 rounded-xl p-4 text-xs md:text-sm outline-none focus:border-[#F28C28] focus:ring-1 focus:ring-[#F28C28] text-slate-800 font-semibold transition-all duration-200 placeholder-slate-400"
                  />
                </div>

                {/* Field 3: Product Interest */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                    Product Interest <span className="text-red-500">*</span>
                  </label>
                  <select
                    value={interest}
                    onChange={(e) => setInterest(e.target.value)}
                    required
                    className="bg-slate-50 border border-slate-200 rounded-xl p-4 text-xs md:text-sm outline-none focus:border-[#F28C28] focus:ring-1 focus:ring-[#F28C28] text-slate-800 font-semibold cursor-pointer transition-all duration-200"
                  >
                    <option value="" disabled className="text-slate-400">Select product category</option>
                    <option value="Fans" className="text-slate-800">Fans</option>
                    <option value="Coolers" className="text-slate-800">Coolers</option>
                    <option value="Kitchen Appliances" className="text-slate-800">Kitchen & Home Appliances</option>
                    <option value="Heating Products" className="text-slate-800">Heating Products & Water Heaters</option>
                    <option value="General Distributorship" className="text-slate-800">General Distributorship Inquiry</option>
                  </select>
                </div>

                {/* Field 4: Message */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                    Message <span className="text-red-500">*</span>
                  </label>
                  <textarea 
                    rows={5}
                    placeholder="Tell us about your requirements, store location, or custom quantity queries..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                    className="bg-slate-50 border border-slate-200 rounded-xl p-4 text-xs md:text-sm outline-none focus:border-[#F28C28] focus:ring-1 focus:ring-[#F28C28] text-slate-800 font-medium resize-none transition-all duration-200 placeholder-slate-400"
                  />
                </div>

                {/* Submit Button */}
                <button 
                  type="submit"
                  disabled={submitting}
                  className="w-full bg-[#0D1B3E] hover:bg-red-600 disabled:bg-slate-400 text-white font-extrabold text-xs md:text-sm uppercase py-4 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 flex justify-center items-center gap-2 cursor-pointer mt-2"
                >
                  {submitting ? (
                    <>
                      <span className="w-4 h-4 rounded-full border-2 border-white border-t-transparent animate-spin"></span>
                      <span>Transmitting Enquiry...</span>
                    </>
                  ) : (
                    <>
                      <span>Submit Enquiry</span>
                      <Send className="w-4 h-4 text-[#F28C28]" />
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>

          {/* Contact Details Below */}
          <div className="max-w-xl mx-auto border-t border-slate-100 pt-10">
            <div className="bg-[#0D1B3E] text-white rounded-2xl p-6 flex items-start gap-5 hover:shadow-xl transition-all duration-300 border border-slate-800">
              <div className="w-12 h-12 bg-white/10 text-[#F28C28] rounded-xl flex items-center justify-center flex-shrink-0 border border-white/10 shadow-md">
                <MapPin className="w-5 h-5 text-[#F28C28]" />
              </div>
              <div className="flex-grow">
                <span className="text-[10px] font-black text-[#F28C28] uppercase tracking-wider block mb-1">
                  OFFICE / WAREHOUSE ADDRESS
                </span>
                <h4 className="font-extrabold text-sm mb-1">Matrix Corporation</h4>
                <p className="text-slate-300 text-xs leading-relaxed mb-3">
                  Guruprasad Ln, Pumpwell, Mangaluru, Karnataka 575002, India
                </p>
                <a 
                  href="https://www.google.com/maps?q=12.8601000,74.8682000&entry=gps&shh=CAE&lucs=,94297699,94231188,94280568,47071704,94218641,94282134,100813464,94286869,100820247&g_ep=CAISEjI2LjI1LjMuOTMyMTI1MTg3MBgAIIgnKlMsOTQyOTc2OTksOTQyMzExODgsOTQyODA1NjgsNDcwNzE3MDQsOTQyMTg2NDEsOTQyODIxMzQsMTAwODEzNDY0LDk0Mjg2ODY5LDEwMDgyMDI0N0ICR0I%3D&skid=6805d373-7bae-419d-a07b-db19978c9541&g_st=iw"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs text-[#F28C28] font-bold hover:underline"
                >
                  <span>View on Google Maps</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* SUCCESS MODAL POPUP */}
      {success && (
        <div className="fixed inset-0 bg-slate-900/60 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl p-8 max-w-md w-full text-center shadow-2xl relative animate-scaleUp">
            <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="w-8 h-8" />
            </div>
            <h3 className="font-extrabold text-[#0D1B3E] text-lg mb-2">Enquiry Logged</h3>
            <p className="text-slate-500 text-xs leading-relaxed mb-6">
              Thank you for reaching out to us! A sales representative will contact you shortly to coordinate your request.
            </p>
            <button 
              onClick={() => setSuccess(false)}
              className="bg-[#0D1B3E] hover:bg-red-600 text-white text-xs font-bold uppercase tracking-wider py-3 px-8 rounded-lg w-full transition-colors cursor-pointer"
            >
              Acknowledge & Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

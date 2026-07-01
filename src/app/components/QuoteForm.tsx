import { useState } from 'react';
import { Star, ChevronRight, ChevronLeft } from 'lucide-react';
import googleReviews from '../../imports/google-reviews-1-.png';
import homeAdvisor from '../../imports/homeadvisor-logo-png_seeklogo-339538-1.png';
import bbbLogo from '../../imports/240-2405038_bbb-logo-a-plus-rating-bbb-a-rating.png';

interface QuoteFormProps {
  id?: string;
}

export function QuoteForm({ id }: QuoteFormProps) {
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    moveSize: '', moveFrom: '', originZip: '', destinationZip: '',
    firstName: '', lastName: '', email: '', phone: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const payload = {
        access_key: 'defe3469-2cf1-4c55-bd40-d7d8eb0d722a',
        subject: `New Moving Quote Request — ${formData.moveSize} from ${formData.originZip} to ${formData.destinationZip}`,
        name: `${formData.firstName} ${formData.lastName}`,
        email: formData.email,
        phone: formData.phone,
        'Move Size': formData.moveSize,
        'Move From': formData.moveFrom,
        'Origin Zip': formData.originZip,
        'Destination Zip': formData.destinationZip,
      };
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(payload),
      });
      const data = await res.json();
      if (data.success) setSubmitted(true);
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div id={id} className="max-w-6xl mx-auto bg-white rounded-xl md:rounded-2xl shadow-2xl p-8 md:p-12 text-center text-[#00284A]">
        <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
          <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-2xl font-bold mb-2" style={{ fontFamily: 'Syne, sans-serif' }}>Quote Request Sent!</h3>
        <p className="text-gray-600 mb-6">We'll get back to you with a free quote within 1 business day.</p>
        <button onClick={() => { setSubmitted(false); setStep(1); setFormData({ moveSize: '', moveFrom: '', originZip: '', destinationZip: '', firstName: '', lastName: '', email: '', phone: '' }); }} className="text-[#0162B3] hover:underline">
          Submit another request
        </button>
      </div>
    );
  }

  return (
    <div id={id} className="max-w-6xl mx-auto bg-white rounded-xl md:rounded-2xl shadow-2xl p-4 md:p-8 text-[#00284A] w-full">
      <h2 className="text-lg md:text-2xl font-bold text-center mb-4 md:mb-6 leading-snug" style={{ fontFamily: 'Syne, sans-serif' }}>
        Let's Get You Moving — Get Your Free Quote in <span className="text-[#0162B3]">3 Quick Steps!</span>
      </h2>

      {/* Step indicator */}
      <div className="flex items-center justify-center gap-2 mb-6">
        {[1, 2].map(s => (
          <div key={s} className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition ${step >= s ? 'bg-[#0162B3] text-white' : 'bg-gray-200 text-gray-500'}`}>{s}</div>
        ))}
      </div>

      <form onSubmit={handleSubmit}>
        {step === 1 && (
          <>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-3 md:gap-4 mb-4 md:mb-6">
              <select className="px-4 py-3 border-2 border-gray-300 rounded-xl focus:border-[#0162B3] focus:outline-none bg-white text-base" value={formData.moveSize} onChange={e => setFormData({ ...formData, moveSize: e.target.value })} required>
                <option value="">Move size</option>
                <option>Studio</option><option>1 Bedroom</option><option>2 Bedroom</option><option>3 Bedroom</option><option>4+ Bedroom</option><option>Office</option>
              </select>
              <select className="px-4 py-3 border-2 border-gray-300 rounded-xl focus:border-[#0162B3] focus:outline-none bg-white text-base" value={formData.moveFrom} onChange={e => setFormData({ ...formData, moveFrom: e.target.value })} required>
                <option value="">Move From</option>
                <option>Residential</option><option>Commercial</option><option>Storage</option>
              </select>
              <input type="text" placeholder="Origin Zip Code" className="px-4 py-3 border-2 border-gray-300 rounded-xl focus:border-[#0162B3] focus:outline-none text-base" value={formData.originZip} onChange={e => setFormData({ ...formData, originZip: e.target.value })} required />
              <input type="text" placeholder="Destination Zip Code" className="px-4 py-3 border-2 border-gray-300 rounded-xl focus:border-[#0162B3] focus:outline-none text-base" value={formData.destinationZip} onChange={e => setFormData({ ...formData, destinationZip: e.target.value })} required />
            </div>
            <div className="flex justify-center mb-4 md:mb-6">
              <button type="button" onClick={() => setStep(2)} className="bg-[#0162B3] text-white px-8 md:px-12 py-4 rounded-full font-semibold hover:bg-[#004A87] transition flex items-center gap-3 w-full md:w-auto justify-center border-4 border-white shadow-lg">
                <div className="w-3 h-3 rounded-full bg-green-400"></div>
                Next <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </>
        )}

        {step === 2 && (
          <>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-3 md:gap-4 mb-4 md:mb-6">
              <input type="text" placeholder="First Name" className="px-4 py-3 border-2 border-gray-300 rounded-xl focus:border-[#0162B3] focus:outline-none text-base" value={formData.firstName} onChange={e => setFormData({ ...formData, firstName: e.target.value })} required />
              <input type="text" placeholder="Last Name" className="px-4 py-3 border-2 border-gray-300 rounded-xl focus:border-[#0162B3] focus:outline-none text-base" value={formData.lastName} onChange={e => setFormData({ ...formData, lastName: e.target.value })} required />
              <input type="email" placeholder="Email" className="px-4 py-3 border-2 border-gray-300 rounded-xl focus:border-[#0162B3] focus:outline-none text-base" value={formData.email} onChange={e => setFormData({ ...formData, email: e.target.value })} required />
              <input type="tel" placeholder="(201) 555-0123" className="px-4 py-3 border-2 border-gray-300 rounded-xl focus:border-[#0162B3] focus:outline-none text-base" value={formData.phone} onChange={e => setFormData({ ...formData, phone: e.target.value })} required />
            </div>
            <div className="flex flex-col md:flex-row gap-3 justify-center mb-4 md:mb-6">
              <button type="button" onClick={() => setStep(1)} className="bg-[#00284A] text-white px-8 md:px-12 py-4 rounded-full font-semibold hover:bg-[#004A87] transition flex items-center gap-3 w-full md:w-auto justify-center shadow-lg order-2 md:order-1">
                <ChevronLeft className="w-5 h-5" /> Back
              </button>
              <button type="submit" disabled={loading} className="bg-[#0162B3] text-white px-8 md:px-12 py-4 rounded-full font-semibold hover:bg-[#004A87] transition flex items-center gap-3 w-full md:w-auto justify-center shadow-lg order-1 md:order-2 disabled:opacity-70">
                {loading ? 'Sending...' : <><span>Get My Free Quote</span><ChevronRight className="w-5 h-5" /></>}
              </button>
            </div>
          </>
        )}
      </form>

      {/* Review Badges */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mt-8 pt-8 border-t border-gray-200">
        {[
          { img: googleReviews, alt: 'Google Reviews — 4.9 stars', stars: '4.9' },
          { img: bbbLogo, alt: 'BBB Accredited Business — 4.8 stars', stars: '4.8' },
          { img: homeAdvisor, alt: 'HomeAdvisor Approved — 4.8 stars', stars: '4.8' },
        ].map((badge, i) => (
          <div key={i} className="flex flex-col items-center">
            <img src={badge.img} alt={badge.alt} className="h-16 md:h-20 w-auto mb-2" />
            <div className="flex gap-0.5 mb-1">
              {[...Array(5)].map((_, j) => <Star key={j} className="w-4 md:w-5 h-4 md:h-5 text-[#FDB915] fill-[#FDB915]" />)}
            </div>
            <p className="text-xs text-gray-500">Average {badge.stars} Stars</p>
          </div>
        ))}
      </div>
    </div>
  );
}

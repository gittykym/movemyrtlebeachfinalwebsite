import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router';
import { CheckCircle, Phone, ChevronRight } from 'lucide-react';

const plans = [
  {
    title: 'Local Move — 2 Men',
    subtitle: 'Distance Under 50 Miles',
    price: '$120',
    unit: '/hr',
    details: 'Includes one truck + all necessary moving equipment. 3-hour minimum plus 1 hour travel time.',
    features: ['1 truck included', 'All moving equipment', '3-hour minimum', '1 hour travel time', 'Professional crew'],
    highlight: false,
  },
  {
    title: 'Local Move — 3 Men',
    subtitle: 'Distance Under 50 Miles',
    price: '$160',
    unit: '/hr',
    details: 'Includes one truck + all necessary moving equipment. Faster for larger homes. 3-hour minimum plus 1 hour travel time.',
    features: ['1 truck included', 'All moving equipment', '3-hour minimum', '1 hour travel time', 'Best for 2–4 bedrooms'],
    highlight: true,
  },
  {
    title: 'Long Distance',
    subtitle: 'Distance Over 50 Miles',
    price: '+$8',
    unit: '/mile',
    details: 'Door-to-door pricing plus load/unload time billed at local hourly rate. Dedicated truck, same-day direct route.',
    features: ['Door-to-door service', 'Dedicated truck', 'Same-day direct route', 'Load/unload included', 'No broker middlemen'],
    highlight: false,
  },
  {
    title: 'Labor Only',
    subtitle: 'You Just Need The Guys',
    price: '$50',
    unit: '/man/hr',
    details: 'All necessary moving equipment included. Perfect for rental trucks, PODs, or containers. 3-hour minimum.',
    features: ['All equipment included', 'Load or unload (or both)', 'Works with any truck/POD', '3-hour minimum', 'Flexible booking'],
    highlight: false,
  },
];

const faqs = [
  { q: 'Is there a minimum charge?', a: 'Yes — all moves have a 3-hour minimum plus 1 hour of travel time. This covers drive time to and from your location.' },
  { q: 'Are there any hidden fees?', a: 'Never. The rate we quote is the rate you pay. We do not charge extra for stairs, heavy items, or fuel unless discussed upfront.' },
  { q: 'Do you offer free estimates?', a: 'Yes! We highly recommend a free on-site estimate for larger moves to give you the most accurate quote possible.' },
  { q: 'Do you charge for packing materials?', a: 'Packing materials (boxes, tape, bubble wrap) are billed separately if we supply them. We\'ll give you a clear breakdown before any work begins.' },
  { q: 'What payment methods do you accept?', a: 'We accept cash, check, and major credit cards. Payment is due upon completion of the move.' },
  { q: 'Are you licensed and insured?', a: 'Yes — we are PSC Licensed #9843, fully insured, and authorized to operate throughout South Carolina.' },
];

export function PricingPage() {
  return (
    <>
      <Helmet>
        <title>Moving Prices | Move Myrtle Beach — Flat-Rate Local & Long Distance</title>
        <meta name="description" content="Transparent moving prices in Myrtle Beach, SC. $120/hr for 2 men, $160/hr for 3 men, $50/man/hr labor only. No hidden fees. PSC Licensed #9843." />
      </Helmet>

      {/* Header */}
      <div className="bg-[#00284A] text-white py-12 md:py-16">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-blue-300 font-medium mb-2 text-sm">Transparent Pricing</div>
          <h1 className="text-3xl md:text-5xl font-bold mb-3" style={{ fontFamily: 'Syne, sans-serif' }}>
            Simple, Flat-Rate Moving Costs
          </h1>
          <p className="text-blue-200 text-base md:text-lg max-w-2xl">
            We keep pricing clear and honest. The price we quote is the price you pay — no hidden fees, ever.
          </p>
        </div>
      </div>

      {/* Pricing Cards */}
      <section className="py-12 md:py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {plans.map((plan, i) => (
              <div key={i} className={`rounded-2xl p-6 md:p-8 shadow-lg flex flex-col ${plan.highlight ? 'bg-[#0162B3] text-white ring-4 ring-[#0162B3] ring-offset-2' : 'bg-white text-[#00284A]'}`}>
                {plan.highlight && <div className="text-xs font-bold uppercase tracking-wider bg-white text-[#0162B3] rounded-full px-3 py-1 mb-4 self-start">Most Popular</div>}
                <h3 className="font-bold text-lg mb-1" style={{ fontFamily: 'Syne, sans-serif' }}>{plan.title}</h3>
                <p className={`text-xs mb-4 ${plan.highlight ? 'text-blue-200' : 'text-gray-500'}`}>{plan.subtitle}</p>
                <div className="mb-6">
                  <span className="text-4xl font-bold" style={{ fontFamily: 'Syne, sans-serif' }}>{plan.price}</span>
                  <span className={`text-sm ${plan.highlight ? 'text-blue-200' : 'text-gray-500'}`}>{plan.unit}</span>
                </div>
                <ul className="space-y-2 mb-6 flex-1">
                  {plan.features.map((f, j) => (
                    <li key={j} className={`flex items-center gap-2 text-sm ${plan.highlight ? 'text-blue-100' : 'text-gray-600'}`}>
                      <CheckCircle className={`w-4 h-4 flex-shrink-0 ${plan.highlight ? 'text-white' : 'text-[#0162B3]'}`} />
                      {f}
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  className={`block text-center py-3 rounded-full font-semibold transition shadow-md ${plan.highlight ? 'bg-white text-[#0162B3] hover:bg-gray-100' : 'bg-[#0162B3] text-white hover:bg-[#004A87]'}`}
                >
                  Book This
                </Link>
              </div>
            ))}
          </div>

          <p className="text-center text-sm text-gray-500 mt-8 italic">
            Highly recommend a FREE on-site estimate for the most accurate quote.{' '}
            <Link to="/contact" className="text-[#0162B3] hover:underline font-medium not-italic">Schedule Free Estimate →</Link>
          </p>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-[#00284A] mb-3" style={{ fontFamily: 'Syne, sans-serif' }}>Every Move Includes</h2>
          <p className="text-gray-600 mb-10">No matter which rate you choose, these are always included.</p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {['Fully licensed & insured crew', 'Moving truck', 'Moving pads & blankets', 'Dollies & equipment', 'Furniture wrapping', 'Courteous, professional service'].map((item, i) => (
              <div key={i} className="bg-gray-50 rounded-xl p-4 text-sm text-gray-700 flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-[#0162B3] flex-shrink-0" />
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-[#00284A] mb-8 text-center" style={{ fontFamily: 'Syne, sans-serif' }}>Pricing FAQs</h2>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 shadow-sm">
                <h3 className="font-bold text-[#00284A] mb-2">{faq.q}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 md:py-16 bg-[#00284A] text-white text-center px-4">
        <h2 className="text-2xl md:text-4xl font-bold mb-4" style={{ fontFamily: 'Syne, sans-serif' }}>Ready for an Exact Quote?</h2>
        <p className="text-blue-200 mb-8 max-w-xl mx-auto">Fill out our quick form or call us now. We'll get back to you within 1 business day with a detailed, no-obligation estimate.</p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link to="/contact" className="bg-[#0162B3] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#004A87] transition shadow-lg flex items-center gap-2">
            Get A Free Quote <ChevronRight className="w-5 h-5" />
          </Link>
          <a href="tel:8437326683" className="bg-white text-[#00284A] px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition shadow-lg flex items-center gap-2">
            <Phone className="w-5 h-5" /> 843-732-MOVE
          </a>
        </div>
      </section>
    </>
  );
}

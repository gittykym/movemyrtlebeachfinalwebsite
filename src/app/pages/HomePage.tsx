import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router';
import { Phone, MapPin, Mail, Clock, Home, Warehouse, Users, Package, Star, Shield, Award, ChevronRight, X } from 'lucide-react';
import logo from '../../imports/mmb__logo.png';
import heroBackground from '../../imports/movemyrtle.png';
import dirtyPack from '../../imports/dirty_pack.jpg';
import favicon from '../../imports/favicon-mmmbeach.png';
import ogImage from '../../imports/ogimage-mmbeach.png';
import { QuoteForm } from '../components/QuoteForm';
import { ScrollReveal } from '../components/ScrollReveal';

export function HomePage() {
  return (
    <>
      <Helmet>
        <html lang="en" />
        <title>Licensed Movers in Myrtle Beach, SC | Move Myrtle Beach</title>
        <meta name="description" content="Licensed local & long distance movers in Myrtle Beach, SC. Residential, commercial, packing & storage. Free estimates — call (843) 732-6683." />
        <link rel="icon" type="image/png" href={favicon} />
        <meta property="og:title" content="Myrtle Beach Moving Company | Move Myrtle Beach" />
        <meta property="og:description" content="Licensed & insured movers in Myrtle Beach, SC. Local, long distance, packing & storage. Free estimates — call 843-732-MOVE." />
        <meta property="og:url" content="https://myrtlebeachmovingservices.com" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={ogImage} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "MovingCompany",
          "name": "Move Myrtle Beach LLC",
          "url": "https://myrtlebeachmovingservices.com",
          "telephone": "+18437326683",
          "email": "contact@myrtlebeachmovingservices.com",
          "address": { "@type": "PostalAddress", "streetAddress": "3761 Renee Dr", "addressLocality": "Myrtle Beach", "addressRegion": "SC", "postalCode": "29579", "addressCountry": "US" },
          "geo": { "@type": "GeoCoordinates", "latitude": 33.7606062, "longitude": -78.9656216 },
          "openingHoursSpecification": [{ "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"], "opens": "08:00", "closes": "18:00" }],
          "priceRange": "$$",
          "hasCredential": "PSC Licensed #9843",
          "sameAs": ["https://www.facebook.com/movemyrtlebeach", "https://www.bbb.org/us/sc/myrtle-beach/profile/moving-companies/move-myrtle-beach-0593-90354265", "https://www.angi.com/companylist/us/sc/myrtle-beach/move-myrtle-beach,-llc-reviews-9873355.htm"]
        })}</script>
      </Helmet>

      {/* Hero */}
      <section className="relative text-white overflow-hidden min-h-screen flex items-center">
        <div className="absolute inset-0 z-0">
          <img src={heroBackground} alt="Move Myrtle Beach moving truck in Myrtle Beach SC" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/30"></div>
        </div>
        <div className="relative z-10 w-full px-4 md:px-6 py-8 md:py-12">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-6 md:mb-8 animate-[fadeInUp_0.8s_ease-out]">
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold leading-tight mb-3 md:mb-4 drop-shadow-lg" style={{ fontFamily: 'Syne, sans-serif' }}>
                #1 Trusted Moving<br />Company in Myrtle Beach
              </h1>
              <p className="text-base md:text-xl text-white/90 drop-shadow-md max-w-3xl mx-auto px-4">
                Myrtle Beach's most trusted and reliable moving service
              </p>
            </div>
            <QuoteForm id="quote" />
          </div>
        </div>
      </section>

      {/* You'll Avoid Section */}
      <section className="py-12 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <ScrollReveal>
              <div className="flex items-center gap-3 mb-4">
                <img src={logo} alt="Move Myrtle Beach" className="h-12 md:h-16 w-auto m-[5px]" />
              </div>
              <h2 className="text-3xl md:text-5xl font-bold text-[#00284A] mb-4" style={{ fontFamily: 'Syne, sans-serif' }}>
                With Move Myrtle Beach You'll Avoid...
              </h2>
              <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                Late arrivals and broken promises end here. Move Myrtle Beach redefines what a real moving experience should feel like.
              </p>
              <a href="tel:8437326683" className="inline-flex items-center gap-2 mt-6 px-6 py-3 rounded-full text-white font-semibold transition bg-[#0162B3] hover:bg-[#004A87]">
                <Phone className="w-5 h-5" /> Call Now
              </a>
            </ScrollReveal>
            <div className="grid grid-cols-2 gap-4">
              {[
                { image: dirtyPack, title: 'Dirty Packaging', alt: 'Dirty and damaged moving boxes — a problem Move Myrtle Beach prevents' },
                { image: 'https://images.unsplash.com/photo-1541199249251-f713e6145474?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400', title: 'Amateur Movers', alt: 'Untrained amateur movers handling furniture carelessly' },
                { image: 'https://images.unsplash.com/photo-1441804238730-210ce1c2cc00?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400', title: 'Broken Glass', alt: 'Broken glass and damaged items from poor moving practices' },
                { image: 'https://images.unsplash.com/photo-1713947503867-3b27964f042b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400', title: 'Late Crew Arrival', alt: 'Moving crew arriving late — a frustration Move Myrtle Beach eliminates' },
              ].map((item, i) => (
                <div key={i} className="bg-gray-50 rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition">
                  <div className="aspect-video bg-gray-200 overflow-hidden">
                    <img src={item.image} alt={item.alt} className="w-full h-full object-cover" />
                  </div>
                  <div className="p-4 flex items-center gap-2">
                    <X className="w-5 h-5 text-red-500 flex-shrink-0" />
                    <span className="text-sm md:text-base font-medium text-gray-700">{item.title}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-12 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="order-2 md:order-1">
              <div className="bg-gradient-to-br from-blue-50 to-white rounded-3xl overflow-hidden shadow-xl p-4 md:p-6">
                <img src="https://images.unsplash.com/photo-1601467995997-ac1ae9a8fff4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800" alt="Professional movers loading a truck in Myrtle Beach SC" className="w-full h-auto object-cover rounded-2xl" />
              </div>
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-[#00284A] mb-6" style={{ fontFamily: 'Syne, sans-serif' }}>
                Myrtle Beach's Trusted Movers — Built for Local Moves & Nationwide Relocations
              </h2>
              <div className="space-y-4 text-sm md:text-base text-gray-600 leading-relaxed mb-8">
                <p><strong className="text-[#00284A]">Move Myrtle Beach</strong> isn't just another moving company — we're your dedicated relocation partner for stress-free local and long-distance moves.</p>
                <p>Whether you're moving across Myrtle Beach or planning a cross-country relocation, our experienced team handles every detail with professionalism and care.</p>
                <p>Unlike moving brokers, we own our trucks and employ our highly-trained crews. With 5-star reviews and transparent pricing with zero hidden fees, we deliver service with a human touch.</p>
              </div>
              <div className="flex flex-wrap gap-4">
                <a href="#quote" className="bg-[#0162B3] text-white px-6 md:px-8 py-3 md:py-4 rounded-full font-semibold hover:bg-[#004A87] transition shadow-lg flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-green-400"></div> Get An Instant Quote
                </a>
                <Link to="/about" className="bg-[#00284A] text-white px-6 md:px-8 py-3 md:py-4 rounded-full font-semibold hover:bg-[#004A87] transition shadow-lg">
                  Learn About Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-12 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <ScrollReveal className="text-center mb-8 md:mb-16">
            <div className="text-[#0162B3] font-medium mb-2 text-sm md:text-base">What We Offer</div>
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-[#00284A] mb-3 md:mb-4 px-4" style={{ fontFamily: 'Syne, sans-serif' }}>A COMPLETE RANGE OF MOVING SERVICES</h2>
            <p className="text-sm md:text-base text-gray-600 max-w-2xl mx-auto px-4">Whether you're moving across the street or across the state, we have you covered.</p>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {[
              { icon: Home, title: 'Residential Moving', description: 'Our movers have years of experience with every type of furniture. All household items are wrapped in moving pads and safely carried to and from the truck.' },
              { icon: Warehouse, title: 'Climate-Controlled Storage', description: 'Brand new, state-of-the-art facility with high ceilings and lighting. Climate controlled with access available 6am–10pm, 7 days a week.' },
              { icon: Users, title: 'Labor Only', description: 'Our experienced movers handle loading and/or unloading your trailer, truck, or POD. We bring all necessary equipment and tools.' },
              { icon: Package, title: 'Packing Services', description: 'Dedicated team members for packing your belongings safely using only high-grade materials and boxes to get the job done right.' },
            ].map((service, i) => (
              <ScrollReveal key={i} delay={(i % 4) as 0|1|2|3|4} className="bg-white border-t-4 border-[#00284A] rounded-xl p-6 md:p-8 shadow-lg hover:shadow-2xl transition group">
                <div className="w-12 h-12 md:w-16 md:h-16 bg-[#0162B3] bg-opacity-20 rounded-full flex items-center justify-center mb-4 md:mb-6 group-hover:bg-[#0162B3] transition">
                  <service.icon className="w-6 h-6 md:w-8 md:h-8 text-[#00284A]" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-[#00284A] mb-3 md:mb-4" style={{ fontFamily: 'Syne, sans-serif' }}>{service.title}</h3>
                <p className="text-sm md:text-base text-gray-600 mb-4 leading-relaxed">{service.description}</p>
                <Link to="/services" className="text-sm md:text-base text-[#00284A] font-medium hover:text-[#0162B3] inline-flex items-center gap-2">
                  Learn More <ChevronRight className="w-4 h-4" />
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-12 md:py-20 text-white bg-[#004a87]">
        <div className="max-w-7xl mx-auto px-4">
          <ScrollReveal className="text-center mb-8 md:mb-16">
            <div className="text-blue-300 font-medium mb-2 text-sm md:text-base">Transparent Pricing</div>
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-4 px-4" style={{ fontFamily: 'Syne, sans-serif' }}>SIMPLE, FLAT-RATE MOVING COSTS</h2>
            <p className="text-sm md:text-base text-gray-300 max-w-2xl mx-auto px-4">We keep pricing clear and honest. No hidden fees. We also offer FREE on-site estimates.</p>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-6 md:mb-8">
            {[
              { title: 'Local Move — 2 Men', subtitle: 'Distance Under 50 Miles', price: '$120/hr', details: 'Includes one truck + all necessary moving equipment. 3-hour minimum plus 1 hour travel time.' },
              { title: 'Local Move — 3 Men', subtitle: 'Distance Under 50 Miles', price: '$160/hr', details: 'Includes one truck + all necessary moving equipment. 3-hour minimum plus 1 hour travel time.' },
              { title: 'Long Distance', subtitle: 'Distance Over 50 Miles', price: '+$8/mile', details: 'Door-to-door pricing plus load/unload time at local rate. Dedicated truck, same day direct route.' },
              { title: 'Labor Only', subtitle: 'You Just Need The Guys', price: '$50/man/hr', details: 'All necessary moving equipment included. 3-hour minimum plus 1 hour travel time.' },
            ].map((plan, i) => (
              <ScrollReveal key={i} delay={(i % 4) as 0|1|2|3|4} className="bg-white text-[#00284A] rounded-xl p-6 md:p-8 shadow-xl hover:shadow-2xl transition">
                <h3 className="text-lg md:text-xl font-bold mb-2" style={{ fontFamily: 'Syne, sans-serif' }}>{plan.title}</h3>
                <p className="text-xs md:text-sm text-gray-600 mb-4">{plan.subtitle}</p>
                <div className="text-3xl md:text-4xl font-bold text-[#0162B3] mb-4 md:mb-6" style={{ fontFamily: 'Syne, sans-serif' }}>{plan.price}</div>
                <p className="text-xs md:text-sm text-gray-600 mb-4 md:mb-6 leading-relaxed">{plan.details}</p>
                <Link to="/contact" className="block w-full bg-[#0162B3] text-white py-3 rounded-full font-semibold hover:bg-[#004A87] transition text-sm md:text-base text-center shadow-lg">
                  Book This
                </Link>
              </ScrollReveal>
            ))}
          </div>
          <p className="text-center text-sm md:text-base text-gray-300 italic px-4">
            Highly recommend a FREE on-site estimate for the most accurate quote.{' '}
            <Link to="/contact" className="text-blue-300 hover:underline font-medium not-italic">Schedule Free Estimate →</Link>
          </p>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-12 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <ScrollReveal className="text-center mb-8 md:mb-16">
            <div className="text-[#0162B3] font-medium mb-2 text-sm md:text-base">What Our Customers Say</div>
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-[#00284A] mb-3 md:mb-4 px-4" style={{ fontFamily: 'Syne, sans-serif' }}>MOVES THAT SPEAK FOR THEMSELVES</h2>
            <p className="text-sm md:text-base text-gray-600 px-4">Our goal is 100% error-free, every time.</p>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-6 md:mb-8">
            {[
              { name: 'Scott and Dawn B.', initials: 'SB', review: "We had a change of plans and had to move quickly and these guys were very accommodating on such short notice. We can't thank them enough for their awesome service." },
              { name: 'Jimmy G.', initials: 'JG', review: "Very professional. Couldn't be happier with our move." },
              { name: 'Sharon Garrett', initials: 'SG', review: "Can't say enough good things about these guys. They did everything exactly as we asked and as efficiently as possible. We would gladly recommend them to anyone!" },
              { name: 'Pam O.', initials: 'PO', review: "These guys were great! They went above and beyond what we had expected. We will use them for everything from now on." },
            ].map((review, i) => (
              <ScrollReveal key={i} delay={(i % 4) as 0|1|2|3|4} className="bg-white border border-[#00284A] border-opacity-20 rounded-xl p-5 md:p-6 shadow-lg">
                <div className="flex items-center gap-3 mb-3 md:mb-4">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-[#00284A] text-white rounded-full flex items-center justify-center font-semibold text-sm md:text-base">{review.initials}</div>
                  <div className="font-semibold text-[#00284A] text-sm md:text-base">{review.name}</div>
                </div>
                <div className="flex gap-1 mb-3 md:mb-4">
                  {[...Array(5)].map((_, j) => <Star key={j} className="w-4 md:w-5 h-4 md:h-5 text-[#FDB915] fill-[#FDB915]" />)}
                </div>
                <p className="text-gray-600 text-xs md:text-sm leading-relaxed">{review.review}</p>
              </ScrollReveal>
            ))}
          </div>
          <div className="flex items-center justify-center gap-3">
            <Award className="w-6 md:w-8 h-6 md:h-8 text-[#0162B3]" />
            <span className="text-sm md:text-base text-gray-600">Verified on Angie's List</span>
          </div>
        </div>
      </section>

      {/* Get Started / Quote Section */}
      <section id="contact" className="py-12 md:py-20 bg-gray-100">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-8 md:mb-12">
            <div className="text-[#0162B3] font-medium mb-2 text-sm md:text-base">Get Started Today</div>
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-[#00284A] mb-3 md:mb-4 px-4" style={{ fontFamily: 'Syne, sans-serif' }}>GET YOUR FREE ESTIMATE IN MINUTES</h2>
          </div>
          <QuoteForm id="quote2" />
        </div>
      </section>

      {/* Location Section */}
      <section className="py-12 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="bg-gray-200 rounded-xl overflow-hidden shadow-xl h-64 md:h-96 order-2 md:order-1">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3323.6!2d-78.9656216!3d33.7606062!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89006d07dc59b3cf%3A0x352f702c952aeabf!2sMove%20Myrtle%20Beach!5e0!3m2!1sen!2sus!4v1" width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy" title="Move Myrtle Beach Location" />
            </div>
            <div className="space-y-4 md:space-y-6 order-1 md:order-2">
              <h2 className="text-2xl md:text-4xl font-bold text-[#00284A] mb-4 md:mb-6" style={{ fontFamily: 'Syne, sans-serif' }}>MOVE MYRTLE BEACH LLC</h2>
              <div className="space-y-3 md:space-y-4">
                {[
                  { icon: MapPin, label: 'Address', value: '3761 Renee Dr., Myrtle Beach, SC 29579' },
                  { icon: Mail, label: 'Email', value: 'contact@myrtlebeachmovingservices.com', href: 'mailto:contact@myrtlebeachmovingservices.com' },
                  { icon: Phone, label: 'Phone', value: '843-732-MOVE', href: 'tel:8437326683' },
                  { icon: Clock, label: 'Office Hours', value: '8am–6pm Monday–Saturday' },
                  { icon: Shield, label: 'License', value: 'PSC# 9843 — Fully Licensed in South Carolina' },
                ].map(({ icon: Icon, label, value, href }, i) => (
                  <div key={i} className="flex items-start gap-3 md:gap-4">
                    <Icon className="w-5 md:w-6 h-5 md:h-6 text-[#0162B3] flex-shrink-0 mt-1" />
                    <div>
                      <div className="font-semibold text-[#00284A] text-sm md:text-base">{label}</div>
                      {href ? <a href={href} className="text-gray-600 hover:text-[#0162B3] text-sm md:text-base break-all">{value}</a> : <div className="text-gray-600 text-sm md:text-base">{value}</div>}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router';
import { Phone, Shield, Award, Heart, Star, ChevronRight } from 'lucide-react';

export function AboutPage() {
  return (
    <>
      <Helmet>
        <title>About Us | Move Myrtle Beach — Licensed Local Movers</title>
        <meta name="description" content="Learn about Move Myrtle Beach LLC — Myrtle Beach's trusted, PSC-licensed local movers with 5-star reviews and zero hidden fees." />
      </Helmet>

      {/* Header */}
      <div className="bg-[#00284A] text-white py-12 md:py-16">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-blue-300 font-medium mb-2 text-sm">About Us</div>
          <h1 className="text-3xl md:text-5xl font-bold mb-3" style={{ fontFamily: 'Syne, sans-serif' }}>
            Myrtle Beach's Most Trusted Moving Company
          </h1>
          <p className="text-blue-200 text-base md:text-lg max-w-2xl">
            Fully licensed, locally owned, and built on a foundation of reliability, honesty, and hard work.
          </p>
        </div>
      </div>

      {/* Story Section */}
      <section className="py-12 md:py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
            <div>
              <h2 className="text-2xl md:text-4xl font-bold text-[#00284A] mb-6" style={{ fontFamily: 'Syne, sans-serif' }}>
                Our Story
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  <strong className="text-[#00284A]">Move Myrtle Beach LLC</strong> was founded with a simple mission: to give the Myrtle Beach area the professional, reliable moving service it deserves. Too many customers had been burned by brokers, no-shows, and movers who didn't care about their belongings. We set out to change that.
                </p>
                <p>
                  Unlike moving brokers who subcontract your move to strangers, we own our trucks and directly employ our crews. Every mover on our team is trained, background-checked, and held to our high standards of care and professionalism.
                </p>
                <p>
                  We serve Myrtle Beach and surrounding coastal communities with residential moving, commercial moving, climate-controlled storage, labor-only services, and expert packing — all backed by transparent, upfront pricing with zero hidden fees.
                </p>
                <p>
                  Our PSC license (#9843) means we're fully authorized and insured to operate in South Carolina, giving you complete peace of mind from the moment we arrive.
                </p>
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-white rounded-3xl overflow-hidden shadow-xl p-4 md:p-6">
              <img
                src="https://images.unsplash.com/photo-1601467995997-ac1ae9a8fff4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800"
                alt="Move Myrtle Beach professional movers at work"
                className="w-full h-auto object-cover rounded-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-12 md:py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-10 md:mb-14">
            <h2 className="text-2xl md:text-4xl font-bold text-[#00284A]" style={{ fontFamily: 'Syne, sans-serif' }}>What Sets Us Apart</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Shield, title: 'Fully Licensed', desc: 'PSC Licensed #9843 — fully insured and authorized to operate in South Carolina.' },
              { icon: Award, title: '5-Star Rated', desc: 'Consistent 5-star reviews on Google, Angi, HomeAdvisor, and BBB from real customers.' },
              { icon: Heart, title: 'We Actually Care', desc: 'Your belongings are treated like our own. We use moving pads, proper equipment, and take our time.' },
              { icon: Star, title: 'No Hidden Fees', desc: 'The price we quote is the price you pay. Transparent, flat-rate pricing every time.' },
            ].map(({ icon: Icon, title, desc }, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 shadow-md text-center">
                <div className="w-14 h-14 bg-[#0162B3] bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-7 h-7 text-[#0162B3]" />
                </div>
                <h3 className="font-bold text-[#00284A] mb-2" style={{ fontFamily: 'Syne, sans-serif' }}>{title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="py-12 md:py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-4xl font-bold text-[#00284A]" style={{ fontFamily: 'Syne, sans-serif' }}>What Our Customers Say</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { name: 'Scott and Dawn B.', initials: 'SB', review: "We had a change of plans and had to move quickly and these guys were very accommodating on such short notice. We can't thank them enough for their awesome service." },
              { name: 'Sharon Garrett', initials: 'SG', review: "Can't say enough good things about these guys. They did everything exactly as we asked and as efficiently as possible. We would gladly recommend them to anyone!" },
              { name: 'Jimmy G.', initials: 'JG', review: "Very professional. Couldn't be happier with our move." },
              { name: 'Pam O.', initials: 'PO', review: "These guys were great! They went above and beyond what we had expected. We will use them for everything from now on." },
            ].map((review, i) => (
              <div key={i} className="border border-gray-200 rounded-2xl p-6 shadow-sm">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-11 h-11 bg-[#00284A] text-white rounded-full flex items-center justify-center font-semibold">{review.initials}</div>
                  <span className="font-semibold text-[#00284A]">{review.name}</span>
                </div>
                <div className="flex gap-1 mb-3">
                  {[...Array(5)].map((_, j) => <Star key={j} className="w-4 h-4 text-[#FDB915] fill-[#FDB915]" />)}
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">{review.review}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 md:py-16 bg-[#00284A] text-white text-center px-4">
        <h2 className="text-2xl md:text-4xl font-bold mb-4" style={{ fontFamily: 'Syne, sans-serif' }}>Ready to Move with the Best?</h2>
        <p className="text-blue-200 mb-8 max-w-xl mx-auto">Get a free, no-obligation quote today and see why Myrtle Beach trusts us with their most important moves.</p>
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

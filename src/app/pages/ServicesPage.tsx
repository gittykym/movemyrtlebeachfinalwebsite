import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router';
import { Home, Warehouse, Users, Package, ChevronRight, Phone, CheckCircle } from 'lucide-react';

const services = [
  {
    icon: Home,
    title: 'Residential Moving',
    description: 'Moving your home is one of the biggest decisions you\'ll make. Our residential moving team handles every item — from fragile antiques to heavy appliances — with professional care. All furniture is wrapped in moving pads and carefully transported.',
    features: [
      'Full-service packing available',
      'Furniture wrapping & protection',
      'Appliance moving & disconnection',
      'Local & long-distance',
      'Flexible scheduling Mon–Sat',
    ],
    image: 'https://images.unsplash.com/photo-1601467995997-ac1ae9a8fff4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
    imageAlt: 'Professional residential movers Myrtle Beach SC',
  },
  {
    icon: Warehouse,
    title: 'Climate-Controlled Storage',
    description: 'Our brand new, state-of-the-art storage facility offers climate-controlled units with high ceilings, bright lighting, and 24/7 security. Perfect for short-term staging or long-term needs.',
    features: [
      'Climate controlled year-round',
      'Access 6am–10pm, 7 days a week',
      'High ceilings & wide aisles',
      'Security cameras & gated access',
      'Short & long-term options',
    ],
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
    imageAlt: 'Climate-controlled storage facility Myrtle Beach',
  },
  {
    icon: Users,
    title: 'Labor Only',
    description: 'Already have your own truck or POD? Our experienced labor crew handles all the heavy lifting. We load and/or unload your rental truck, container, or storage unit and bring all the equipment.',
    features: [
      'Loading & unloading service',
      'Works with any rental truck or POD',
      'All equipment & tools included',
      'Hourly billing — no surprises',
      '3-hour minimum',
    ],
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
    imageAlt: 'Labor only movers loading a truck in Myrtle Beach SC',
  },
  {
    icon: Package,
    title: 'Packing Services',
    description: 'Let our dedicated packing team take packing completely off your plate. We use only high-grade boxes and materials to protect your belongings, and we work quickly so your timeline stays on track.',
    features: [
      'High-grade boxes & materials',
      'Fragile item specialty packing',
      'Full-home or partial packing',
      'Labeling & inventory',
      'Unpacking service available',
    ],
    image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
    imageAlt: 'Professional packing service Myrtle Beach movers',
  },
];

export function ServicesPage() {
  return (
    <>
      <Helmet>
        <title>Moving Services | Move Myrtle Beach — Residential, Storage, Packing</title>
        <meta name="description" content="Move Myrtle Beach offers residential moving, climate-controlled storage, labor only, and packing services in Myrtle Beach, SC. PSC Licensed #9843." />
      </Helmet>

      {/* Header */}
      <div className="bg-[#00284A] text-white py-12 md:py-16">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-blue-300 font-medium mb-2 text-sm">What We Offer</div>
          <h1 className="text-3xl md:text-5xl font-bold mb-3" style={{ fontFamily: 'Syne, sans-serif' }}>
            A Complete Range of Moving Services
          </h1>
          <p className="text-blue-200 text-base md:text-lg max-w-2xl">
            Whether you're moving across the street or across the state, we have you covered — with transparent pricing and zero hidden fees.
          </p>
        </div>
      </div>

      {/* Services */}
      <div className="max-w-5xl mx-auto px-4 py-12 md:py-16 space-y-16 md:space-y-24">
        {services.map((service, i) => (
          <div key={i} className={`grid md:grid-cols-2 gap-10 md:gap-16 items-center ${i % 2 === 1 ? 'md:[&>div:first-child]:order-2' : ''}`}>
            <div>
              <div className="w-14 h-14 bg-[#0162B3] bg-opacity-10 rounded-full flex items-center justify-center mb-4">
                <service.icon className="w-7 h-7 text-[#0162B3]" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-[#00284A] mb-4" style={{ fontFamily: 'Syne, sans-serif' }}>
                {service.title}
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">{service.description}</p>
              <ul className="space-y-2 mb-8">
                {service.features.map((f, j) => (
                  <li key={j} className="flex items-center gap-2 text-sm text-gray-700">
                    <CheckCircle className="w-4 h-4 text-[#0162B3] flex-shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
              <Link to="/contact" className="inline-flex items-center gap-2 bg-[#0162B3] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#004A87] transition shadow-md">
                Get A Quote <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img src={service.image} alt={service.imageAlt} className="w-full h-64 md:h-80 object-cover" />
            </div>
          </div>
        ))}
      </div>

      {/* CTA */}
      <section className="py-12 md:py-16 bg-[#004a87] text-white text-center px-4">
        <h2 className="text-2xl md:text-4xl font-bold mb-4" style={{ fontFamily: 'Syne, sans-serif' }}>Not Sure Which Service You Need?</h2>
        <p className="text-blue-200 mb-8 max-w-xl mx-auto">Give us a call or fill out our quick quote form. We'll point you in the right direction with no pressure.</p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link to="/contact" className="bg-white text-[#00284A] px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition shadow-lg">
            Get A Free Quote
          </Link>
          <a href="tel:8437326683" className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-[#00284A] transition shadow-lg flex items-center gap-2">
            <Phone className="w-5 h-5" /> 843-732-MOVE
          </a>
        </div>
      </section>
    </>
  );
}

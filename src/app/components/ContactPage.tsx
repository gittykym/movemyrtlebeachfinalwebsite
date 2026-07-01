import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router';
import { ArrowLeft, Phone, Mail, MapPin, Clock } from 'lucide-react';
import { QuoteForm } from './QuoteForm';

export function ContactPage() {
  return (
    <>
      <Helmet>
        <title>Get a Free Quote | Move Myrtle Beach — 843-732-MOVE</title>
        <meta name="description" content="Get a free moving quote from Move Myrtle Beach. Call 843-732-MOVE or fill out our quick 2-step form. Serving Myrtle Beach, SC Mon–Sat 8am–6pm." />
      </Helmet>

      {/* Header */}
      <div className="bg-[#00284A] text-white py-12 md:py-16">
        <div className="max-w-5xl mx-auto px-4">
          <Link to="/" className="flex items-center gap-2 text-blue-300 hover:text-white transition mb-6 w-fit">
            <ArrowLeft className="w-4 h-4" /> Back to Home
          </Link>
          <h1 className="text-3xl md:text-5xl font-bold mb-3" style={{ fontFamily: 'Syne, sans-serif' }}>
            Get Your Free Quote
          </h1>
          <p className="text-blue-200 text-base md:text-lg">
            Fill out the form below and we'll get back to you within 1 business day.
          </p>
        </div>
      </div>

      {/* Quote Form */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <QuoteForm id="quote" />
        </div>
      </section>

      {/* Contact Info Strip */}
      <section className="py-10 md:py-14 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: Phone, label: 'Phone', value: '843-732-MOVE', href: 'tel:8437326683' },
              { icon: Mail, label: 'Email', value: 'contact@myrtlebeachmovingservices.com', href: 'mailto:contact@myrtlebeachmovingservices.com' },
              { icon: MapPin, label: 'Address', value: '3761 Renee Dr., Myrtle Beach, SC 29579' },
              { icon: Clock, label: 'Hours', value: 'Mon–Sat 8:00 AM – 6:00 PM' },
            ].map(({ icon: Icon, label, value, href }, i) => (
              <div key={i} className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-full bg-[#0162B3] flex items-center justify-center flex-shrink-0">
                  <Icon className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-xs text-gray-500 mb-0.5">{label}</p>
                  {href
                    ? <a href={href} className="text-[#00284A] font-semibold hover:text-[#0162B3] transition text-sm break-all">{value}</a>
                    : <p className="text-[#00284A] font-semibold text-sm">{value}</p>
                  }
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Map */}
      <div className="h-64 md:h-80">
        <iframe
          title="Move Myrtle Beach location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3323.6!2d-78.9656216!3d33.7606062!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89006d07dc59b3cf%3A0x352f702c952aeabf!2sMove%20Myrtle%20Beach!5e0!3m2!1sen!2sus!4v1"
          width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </>
  );
}

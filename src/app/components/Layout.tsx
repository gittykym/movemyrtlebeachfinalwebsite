import { useState } from 'react';
import { Link, Outlet, useLocation } from 'react-router';
import { Phone, Menu, X, ChevronDown, Home, Warehouse, Users, Package } from 'lucide-react';
import navLogo from '../../imports/mmb__logo-1.png';
import logo from '../../imports/mmb__logo.png';

const serviceLinks = [
  { to: '/services#residential', icon: Home, label: 'Residential Moving' },
  { to: '/services#storage', icon: Warehouse, label: 'Climate-Controlled Storage' },
  { to: '/services#labor', icon: Users, label: 'Labor Only' },
  { to: '/services#packing', icon: Package, label: 'Packing Services' },
];

export function Layout() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About Us' },
    { to: '/pricing', label: 'Pricing' },
    { to: '/contact', label: 'Contact Us' },
    { to: '/articles', label: 'Helpful Articles' },
  ];

  const isActive = (to: string) =>
    to === '/' ? location.pathname === '/' : location.pathname.startsWith(to);

  return (
    <div className="min-h-screen bg-white flex flex-col" style={{ fontFamily: 'Poppins, sans-serif' }}>
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 py-3">
          <div className="flex justify-between items-center">
            <Link to="/" className="flex items-center">
              <img src={navLogo} alt="Move Myrtle Beach" className="h-12 md:h-14 w-auto" />
            </Link>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-6 text-sm">
              {/* Home */}
              <Link to="/" className={`transition ${isActive('/') ? 'text-[#0162B3] font-semibold' : 'hover:text-[#0162B3]'}`}>Home</Link>
              <Link to="/about" className={`transition ${isActive('/about') ? 'text-[#0162B3] font-semibold' : 'hover:text-[#0162B3]'}`}>About Us</Link>

              {/* Services Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
              >
                <Link
                  to="/services"
                  className={`flex items-center gap-1 transition ${isActive('/services') ? 'text-[#0162B3] font-semibold' : 'hover:text-[#0162B3]'}`}
                >
                  Services <ChevronDown className={`w-4 h-4 transition-transform ${servicesOpen ? 'rotate-180' : ''}`} />
                </Link>
                {servicesOpen && (
                  <div className="absolute top-full left-0 pt-2 w-56 z-50">
                    <div className="bg-white rounded-xl shadow-xl border border-gray-100 py-2">
                      <Link
                        to="/services"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-[#0162B3] transition font-semibold border-b border-gray-100 mb-1"
                      >
                        All Services
                      </Link>
                      {serviceLinks.map(({ to, icon: Icon, label }) => (
                        <Link
                          key={to}
                          to={to}
                          className="flex items-center gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-[#0162B3] transition"
                        >
                          <Icon className="w-4 h-4 text-[#0162B3]" />
                          {label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {navLinks.filter(l => !['/', '/about'].includes(l.to)).map(link => (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`transition ${isActive(link.to) ? 'text-[#0162B3] font-semibold' : 'hover:text-[#0162B3]'}`}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Desktop CTAs */}
            <div className="hidden md:flex items-center gap-3">
              <a
                href="tel:8437326683"
                className="bg-[#0162B3] text-white px-5 py-2.5 rounded-full font-semibold hover:bg-[#004A87] transition flex items-center gap-2"
              >
                <Phone className="w-4 h-4" />
                843-732-MOVE
              </a>
              <Link
                to="/contact"
                className="bg-[#0162B3] text-white px-5 py-2.5 rounded-full font-semibold hover:bg-[#004A87] transition"
              >
                Get A Quote
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden absolute top-full left-0 right-0 mt-2 mx-4 bg-white rounded-3xl shadow-xl p-6 flex flex-col gap-3 z-50">
              <Link to="/" className={`py-2 transition ${isActive('/') ? 'text-[#0162B3] font-semibold' : 'hover:text-[#0162B3]'}`} onClick={() => setMobileMenuOpen(false)}>Home</Link>
              <Link to="/about" className={`py-2 transition ${isActive('/about') ? 'text-[#0162B3] font-semibold' : 'hover:text-[#0162B3]'}`} onClick={() => setMobileMenuOpen(false)}>About Us</Link>

              {/* Mobile Services Accordion */}
              <div>
                <button
                  className={`flex items-center justify-between w-full py-2 transition ${isActive('/services') ? 'text-[#0162B3] font-semibold' : 'hover:text-[#0162B3]'}`}
                  onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                >
                  Services <ChevronDown className={`w-4 h-4 transition-transform ${mobileServicesOpen ? 'rotate-180' : ''}`} />
                </button>
                {mobileServicesOpen && (
                  <div className="pl-4 mt-1 flex flex-col gap-2 border-l-2 border-[#0162B3]">
                    <Link to="/services" className="text-sm text-gray-700 hover:text-[#0162B3] py-1 font-semibold" onClick={() => setMobileMenuOpen(false)}>All Services</Link>
                    {serviceLinks.map(({ to, icon: Icon, label }) => (
                      <Link key={to} to={to} className="flex items-center gap-2 text-sm text-gray-700 hover:text-[#0162B3] py-1" onClick={() => setMobileMenuOpen(false)}>
                        <Icon className="w-3.5 h-3.5 text-[#0162B3]" />{label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {navLinks.filter(l => !['/', '/about'].includes(l.to)).map(link => (
                <Link key={link.to} to={link.to} className={`py-2 transition ${isActive(link.to) ? 'text-[#0162B3] font-semibold' : 'hover:text-[#0162B3]'}`} onClick={() => setMobileMenuOpen(false)}>
                  {link.label}
                </Link>
              ))}
              <a href="tel:8437326683" className="bg-[#0162B3] text-white px-5 py-2.5 rounded-full font-semibold text-center mt-2">
                843-732-MOVE
              </a>
            </div>
          )}
        </div>
      </nav>

      {/* Page Content */}
      <main className="flex-1">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="text-white py-12 md:py-16 bg-[#004a87]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-8 md:mb-12">
            {/* Column 1 */}
            <div>
              <img src={logo} alt="Move Myrtle Beach" className="h-32 md:h-48 w-auto mb-3 md:mb-4" />
              <p className="text-sm md:text-base text-gray-300 mb-4 md:mb-6">
                Myrtle Beach's trusted, fully licensed local movers.
              </p>
              <div className="flex flex-wrap gap-3 md:gap-4">
                <a href="https://www.facebook.com/movemyrtlebeach" target="_blank" rel="noopener noreferrer"
                  className="w-14 h-14 bg-[#2c3e50] rounded-full flex items-center justify-center hover:bg-[#0162B3] transition" aria-label="Facebook">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 1.848-5.978 5.858-5.978.401 0 .955.042 1.468.103a8.68 8.68 0 0 1 1.141.195v3.325a8.623 8.623 0 0 0-.653-.036 26.805 26.805 0 0 0-.733-.009c-.707 0-1.259.096-1.675.309a1.686 1.686 0 0 0-.679.622c-.258.42-.374.995-.374 1.752v1.297h3.919l-.386 3.667h-3.533v7.98H9.101z"/>
                  </svg>
                </a>
                <a href="https://www.google.com/maps/place/Move+Myrtle+Beach/@33.7606687,-78.9655374,17z/data=!4m6!3m5!1s0x89006d07dc59b3cf:0x352f702c952aeabf!8m2!3d33.7606062!4d-78.9656216!16s%2Fg%2F11fm4bl7hc?entry=ttu&g_ep=EgoyMDI2MDYwMy4xIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener noreferrer"
                  className="w-14 h-14 bg-[#2c3e50] rounded-full flex items-center justify-center hover:bg-[#0162B3] transition" aria-label="Google Reviews">
                  <span className="text-white font-bold text-2xl" style={{ fontFamily: 'Syne, sans-serif' }}>G</span>
                </a>
                <a href="https://www.angi.com/companylist/us/sc/myrtle-beach/move-myrtle-beach,-llc-reviews-9873355.htm" target="_blank" rel="noopener noreferrer"
                  className="w-14 h-14 bg-[#2c3e50] rounded-full flex items-center justify-center hover:bg-[#0162B3] transition" aria-label="Angi">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                </a>
                <a href="https://www.angi.com/companylist/us/sc/myrtle-beach/move-myrtle-beach,-llc-reviews-9873355.htm" target="_blank" rel="noopener noreferrer"
                  className="w-14 h-14 bg-[#2c3e50] rounded-full flex items-center justify-center hover:bg-[#0162B3] transition" aria-label="HomeAdvisor">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2L2 7v10l10 5 10-5V7L12 2zm0 2.18L20 8.5v7L12 19.82 4 15.5v-7L12 4.18zM12 7l-5 2.5V14l5 2.5 5-2.5V9.5L12 7zm0 2.09L15 10.5v3L12 15l-3-1.5v-3L12 9.09z"/>
                  </svg>
                </a>
              </div>
            </div>

            {/* Column 2 */}
            <div>
              <h4 className="text-base md:text-lg font-bold mb-3 md:mb-4" style={{ fontFamily: 'Syne, sans-serif' }}>QUICK LINKS</h4>
              <ul className="space-y-2 text-sm md:text-base">
                <li><Link to="/" className="text-gray-300 hover:text-[#0162B3] transition">Home</Link></li>
                <li><Link to="/about" className="text-gray-300 hover:text-[#0162B3] transition">About Us</Link></li>
                <li><Link to="/services" className="text-gray-300 hover:text-[#0162B3] transition">Services</Link></li>
                <li><Link to="/pricing" className="text-gray-300 hover:text-[#0162B3] transition">Pricing</Link></li>
                <li><Link to="/contact" className="text-gray-300 hover:text-[#0162B3] transition">Contact</Link></li>
                <li><Link to="/articles" className="text-gray-300 hover:text-[#0162B3] transition">Helpful Articles</Link></li>
              </ul>
            </div>

            {/* Column 3 */}
            <div>
              <h4 className="text-base md:text-lg font-bold mb-3 md:mb-4" style={{ fontFamily: 'Syne, sans-serif' }}>CONTACT INFO</h4>
              <ul className="space-y-2 text-gray-300 text-sm md:text-base">
                <li>3761 Renee Dr.</li>
                <li>Myrtle Beach, SC 29579</li>
                <li><a href="tel:8437326683" className="hover:text-[#0162B3]">843-732-MOVE</a></li>
                <li><a href="mailto:contact@myrtlebeachmovingservices.com" className="hover:text-[#0162B3] break-all">contact@myrtlebeachmovingservices.com</a></li>
                <li>8am–6pm Mon–Sat</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white border-opacity-20 pt-6 md:pt-8 text-center text-xs md:text-sm text-gray-400">
            © 2025 Move Myrtle Beach LLC. All Rights Reserved. | PSC Licensed #9843 | Web Design by{' '}
            <a href="https://www.facebook.com/mercadomediaagency"
              target="_blank" rel="noopener noreferrer" className="hover:text-white underline transition">
              Mercado Media
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

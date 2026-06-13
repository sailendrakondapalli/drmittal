import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Phone, ChevronDown } from 'lucide-react'

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Hair Transplant', href: '#hair-services' },
  { label: 'Skin & Laser', href: '#skin-services' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNav = (href) => {
    setMobileOpen(false)
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-100'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="flex items-center gap-3 cursor-pointer"
              onClick={() => handleNav('#home')}
            >
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-teal-600 to-blue-600 flex items-center justify-center shadow-lg">
                <span className="text-white font-black text-lg">M</span>
              </div>
              <div>
                <p className={`font-bold text-sm leading-tight ${scrolled ? 'text-gray-900' : 'text-white'}`}>
                  Mittals Hair & Skin
                </p>
                <p className={`text-xs ${scrolled ? 'text-teal-600' : 'text-teal-300'}`}>
                  Laser Clinic · Vijayawada
                </p>
              </div>
            </motion.div>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-6">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleNav(link.href)}
                  className={`text-sm font-medium transition-colors hover:text-teal-600 ${
                    scrolled ? 'text-gray-700' : 'text-white/90 hover:text-white'
                  }`}
                >
                  {link.label}
                </button>
              ))}
            </div>

            {/* CTA */}
            <div className="hidden lg:flex items-center gap-3">
              <a
                href="tel:+917989531117"
                className={`flex items-center gap-2 text-sm font-medium transition-colors ${
                  scrolled ? 'text-gray-700 hover:text-teal-600' : 'text-white/90'
                }`}
              >
                <Phone size={15} />
                +91 79895 31117
              </a>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => handleNav('#consultation')}
                className="bg-gradient-to-r from-teal-600 to-teal-700 text-white px-5 py-2.5 rounded-full text-sm font-semibold shadow-lg hover:shadow-teal-300/50 transition-all"
              >
                Free Consultation
              </motion.button>
            </div>

            {/* Mobile hamburger */}
            <button
              className={`lg:hidden p-2 rounded-lg ${scrolled ? 'text-gray-800' : 'text-white'}`}
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 z-40 lg:hidden"
              onClick={() => setMobileOpen(false)}
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-80 bg-white z-50 shadow-2xl lg:hidden overflow-y-auto"
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-teal-600 to-blue-600 flex items-center justify-center">
                      <span className="text-white font-black text-lg">M</span>
                    </div>
                    <div>
                      <p className="font-bold text-sm text-gray-900">Mittals Clinic</p>
                      <p className="text-xs text-teal-600">Vijayawada</p>
                    </div>
                  </div>
                  <button onClick={() => setMobileOpen(false)} className="p-2 text-gray-500">
                    <X size={20} />
                  </button>
                </div>

                <div className="flex flex-col gap-2">
                  {navLinks.map((link) => (
                    <button
                      key={link.href}
                      onClick={() => handleNav(link.href)}
                      className="text-left px-4 py-3 rounded-xl text-gray-700 font-medium hover:bg-teal-50 hover:text-teal-700 transition-colors"
                    >
                      {link.label}
                    </button>
                  ))}
                </div>

                <div className="mt-8 pt-6 border-t border-gray-100 flex flex-col gap-3">
                  <a
                    href="tel:+917989531117"
                    className="flex items-center gap-3 px-4 py-3 rounded-xl bg-gray-50 text-gray-700 font-medium"
                  >
                    <Phone size={16} className="text-teal-600" />
                    +91 79895 31117
                  </a>
                  <button
                    onClick={() => handleNav('#consultation')}
                    className="w-full bg-gradient-to-r from-teal-600 to-teal-700 text-white py-3 rounded-xl font-semibold"
                  >
                    Book Free Consultation
                  </button>
                  <a
                    href="https://wa.me/917989531117"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-green-500 text-white py-3 rounded-xl font-semibold text-center"
                  >
                    WhatsApp Now
                  </a>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}

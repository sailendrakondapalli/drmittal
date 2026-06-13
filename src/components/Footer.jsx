import { motion } from 'framer-motion'
import { Phone, Mail, MapPin, ArrowRight } from 'lucide-react'

function FacebookIcon({ size = 16, className = '' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  )
}

function InstagramIcon({ size = 16, className = '' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  )
}

function YoutubeIcon({ size = 16, className = '' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-1.96C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.4 19.54C5.12 20 12 20 12 20s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" /><polygon fill="white" points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" />
    </svg>
  )
}

const quickLinks = ['Home', 'About', 'Hair Transplant', 'Skin & Laser', 'Gallery', 'Testimonials', 'Contact']
const hairServices = ['FUE Method Surgery', 'Sapphire Method Surgery', 'DHI Advanced Surgery', 'Beard & Moustache Surgery', 'Eyebrow Restoration', 'PRP / GFC Treatment']
const skinServices = ['Skin Whitening', 'Acne Treatment', 'Hydra Facial', 'Laser Hair Removal', 'Eye & Lip Peels']

const sectionMap = {
  'Home': '#home',
  'About': '#about',
  'Hair Transplant': '#hair-services',
  'Skin & Laser': '#skin-services',
  'Gallery': '#gallery',
  'Testimonials': '#testimonials',
  'Contact': '#contact',
}

export default function Footer() {
  const scrollTo = (id) => {
    const el = document.querySelector(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer className="bg-gray-950 text-gray-300">
      {/* Top CTA Band */}
      <div className="bg-gradient-to-r from-teal-600 to-blue-700 py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl font-black text-white">Ready to Transform Your Look?</h3>
            <p className="text-teal-200 mt-1">Book a free consultation today – No commitment required.</p>
          </div>
          <div className="flex gap-3 flex-wrap">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => scrollTo('#consultation')}
              className="flex items-center gap-2 bg-white text-teal-700 px-6 py-3 rounded-full font-bold hover:bg-teal-50 transition-colors"
            >
              Book Free Consultation <ArrowRight size={16} />
            </motion.button>
            <a
              href="https://wa.me/917989531117"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-green-500 text-white px-6 py-3 rounded-full font-bold hover:bg-green-400 transition-colors"
            >
              WhatsApp Now
            </a>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-teal-500 to-blue-600 flex items-center justify-center shadow-lg">
                <span className="text-white font-black text-xl">M</span>
              </div>
              <div>
                <p className="font-black text-white text-sm">Mittals Hair & Skin</p>
                <p className="text-teal-400 text-xs">Laser Clinic · Vijayawada</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Premium hair transplant and skin laser clinic in Vijayawada, Andhra Pradesh. Trusted by 1000+ happy clients.
            </p>
            {/* Social */}
            <div className="flex gap-3">
              <a href="#" className="p-2.5 bg-gray-800 hover:bg-blue-600 text-gray-400 hover:text-white rounded-xl transition-all">
                <FacebookIcon size={16} />
              </a>
              <a href="#" className="p-2.5 bg-gray-800 hover:bg-pink-600 text-gray-400 hover:text-white rounded-xl transition-all">
                <InstagramIcon size={16} />
              </a>
              <a href="#" className="p-2.5 bg-gray-800 hover:bg-red-600 text-gray-400 hover:text-white rounded-xl transition-all">
                <YoutubeIcon size={16} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-white mb-5 text-sm uppercase tracking-widest">Quick Links</h4>
            <ul className="flex flex-col gap-2.5">
              {quickLinks.map((link) => (
                <li key={link}>
                  <button
                    onClick={() => scrollTo(sectionMap[link] || '#home')}
                    className="text-gray-400 hover:text-teal-400 text-sm transition-colors flex items-center gap-1.5 group"
                  >
                    <ArrowRight size={12} className="opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" />
                    {link}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold text-white mb-5 text-sm uppercase tracking-widest">Hair Services</h4>
            <ul className="flex flex-col gap-2.5 mb-6">
              {hairServices.map((s) => (
                <li key={s}>
                  <button
                    onClick={() => scrollTo('#hair-services')}
                    className="text-gray-400 hover:text-teal-400 text-sm transition-colors text-left"
                  >
                    {s}
                  </button>
                </li>
              ))}
            </ul>
            <h4 className="font-bold text-white mb-3 text-xs uppercase tracking-widest">Skin & Laser</h4>
            <ul className="flex flex-col gap-2">
              {skinServices.map((s) => (
                <li key={s}>
                  <button
                    onClick={() => scrollTo('#skin-services')}
                    className="text-gray-400 hover:text-blue-400 text-sm transition-colors text-left"
                  >
                    {s}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-white mb-5 text-sm uppercase tracking-widest">Contact Us</h4>
            <div className="flex flex-col gap-4">
              <div className="flex items-start gap-3">
                <MapPin size={15} className="text-teal-400 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm text-gray-300">Vijayawada, Andhra Pradesh</p>
                  <p className="text-xs text-gray-500">India – 520001</p>
                </div>
              </div>
              <a href="tel:+917989531117" className="flex items-center gap-3 hover:text-teal-400 transition-colors">
                <Phone size={15} className="text-teal-400 flex-shrink-0" />
                <span className="text-sm">+91 79895 31117</span>
              </a>
              <a href="mailto:info@mittalsclinic.com" className="flex items-center gap-3 hover:text-teal-400 transition-colors">
                <Mail size={15} className="text-teal-400 flex-shrink-0" />
                <span className="text-sm">info@mittalsclinic.com</span>
              </a>
              <a
                href="https://wa.me/917989531117"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-green-400 hover:text-green-300 transition-colors"
              >
                <span className="text-sm font-semibold">💬 WhatsApp Us Now</span>
              </a>
            </div>

            {/* Hours */}
            <div className="mt-6 p-4 bg-gray-800/60 rounded-xl">
              <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-2">Clinic Hours</p>
              <p className="text-sm text-gray-300">Mon – Sat: 9:00 AM – 7:00 PM</p>
              <p className="text-sm text-gray-300">Sunday: By Appointment Only</p>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-gray-500">
          <p>© 2026 Mittals Hair and Skin Laser Clinic – Vijayawada | All Rights Reserved</p>
          <div className="flex gap-4">
            <button className="hover:text-gray-300 transition-colors">Privacy Policy</button>
            <button className="hover:text-gray-300 transition-colors">Terms of Service</button>
          </div>
        </div>
      </div>
    </footer>
  )
}

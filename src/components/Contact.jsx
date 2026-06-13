import { motion } from 'framer-motion'
import { useInView } from '../hooks/useInView'
import { MapPin, Phone, Mail, MessageCircle, Clock, ExternalLink } from 'lucide-react'

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

const contactDetails = [
  {
    icon: MapPin,
    label: 'Address',
    value: 'Vijayawada, Andhra Pradesh',
    sub: 'India – 520001',
    color: 'bg-teal-100 text-teal-600',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+91 79895 31117',
    sub: 'Mon – Sat, 9am – 7pm',
    color: 'bg-blue-100 text-blue-600',
    href: 'tel:+917989531117',
  },
  {
    icon: Mail,
    label: 'Email',
    value: 'info@mittalsclinic.com',
    sub: 'Reply within 24 hours',
    color: 'bg-amber-100 text-amber-600',
    href: 'mailto:info@mittalsclinic.com',
  },
  {
    icon: MessageCircle,
    label: 'WhatsApp',
    value: 'Instant Chat Available',
    sub: 'Chat with our experts now',
    color: 'bg-green-100 text-green-600',
    href: 'https://wa.me/917989531117',
  },
]

export default function Contact() {
  const [ref, inView] = useInView(0.1)

  return (
    <section id="contact" className="py-20 lg:py-28 bg-gradient-to-br from-gray-50 to-teal-50/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
          ref={ref}
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-teal-100 text-teal-700 text-sm font-semibold mb-4">
            Get In Touch
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
            Visit Our{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-blue-600">
              Clinic in Vijayawada
            </span>
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            We'd love to meet you. Visit us, call us, or drop a message on WhatsApp — we're here for you.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Left: Contact Details */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="flex flex-col gap-6"
          >
            {/* Clinic Image */}
            <div className="rounded-3xl overflow-hidden shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&q=80"
                alt="Mittals Hair and Skin Laser Clinic"
                className="w-full h-56 object-cover"
                loading="lazy"
              />
              <div className="bg-white p-5">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-teal-600 to-blue-600 flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-black text-sm">M</span>
                  </div>
                  <div>
                    <p className="font-bold text-gray-900 text-sm">Mittals Hair and Skin Laser Clinic</p>
                    <p className="text-teal-600 text-xs">Best Hair Transplant Clinic in Vijayawada</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {contactDetails.map((item) => {
                const Icon = item.icon
                const content = (
                  <div className={`flex items-start gap-4 p-5 bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow ${item.href ? 'cursor-pointer hover:border-teal-200' : ''}`}>
                    <div className={`p-2.5 rounded-xl flex-shrink-0 ${item.color}`}>
                      <Icon size={18} />
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-gray-400 uppercase mb-1">{item.label}</p>
                      <p className="font-bold text-gray-900 text-sm">{item.value}</p>
                      <p className="text-gray-500 text-xs mt-0.5">{item.sub}</p>
                    </div>
                  </div>
                )
                return item.href ? (
                  <a key={item.label} href={item.href} target={item.href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer">
                    {content}
                  </a>
                ) : (
                  <div key={item.label}>{content}</div>
                )
              })}
            </div>

            {/* Social Links */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <p className="font-bold text-gray-900 mb-4">Follow Us</p>
              <div className="flex gap-3">
                <a
                  href="#"
                  className="flex items-center gap-2 px-4 py-2.5 bg-blue-600 text-white rounded-xl text-sm font-semibold hover:bg-blue-700 transition-colors"
                >
                  <FacebookIcon size={16} /> Facebook
                </a>
                <a
                  href="#"
                  className="flex items-center gap-2 px-4 py-2.5 bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-xl text-sm font-semibold hover:opacity-90 transition-opacity"
                >
                  <InstagramIcon size={16} /> Instagram
                </a>
                <a
                  href="#"
                  className="flex items-center gap-2 px-4 py-2.5 bg-red-600 text-white rounded-xl text-sm font-semibold hover:bg-red-700 transition-colors"
                >
                  <YoutubeIcon size={16} /> YouTube
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right: Google Map */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="rounded-3xl overflow-hidden shadow-2xl border border-gray-100"
          >
            <div className="bg-gray-200 h-full min-h-96 relative">
              <iframe
                title="Mittals Clinic Location – Vijayawada"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d122354.23697637284!2d80.5477513!3d16.5062095!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a35efa11a0e99f9%3A0xdba7c91e88c1a5d1!2sVijayawada%2C%20Andhra%20Pradesh!5e0!3m2!1sen!2sin!4v1716000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: '480px' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              {/* Overlay card */}
              <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-sm rounded-2xl p-4 shadow-lg">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-bold text-gray-900 text-sm">Mittals Hair & Skin Laser Clinic</p>
                    <p className="text-teal-600 text-xs flex items-center gap-1 mt-0.5">
                      <MapPin size={12} /> Vijayawada, Andhra Pradesh
                    </p>
                  </div>
                  <a
                    href="https://maps.google.com/?q=Vijayawada,Andhra+Pradesh"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-xs text-blue-600 font-semibold bg-blue-50 px-3 py-2 rounded-xl hover:bg-blue-100 transition-colors"
                  >
                    <ExternalLink size={12} /> Get Directions
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

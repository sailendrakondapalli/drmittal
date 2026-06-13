import { motion } from 'framer-motion'
import { useInView } from '../hooks/useInView'
import { useState } from 'react'
import { Send, CheckCircle, User, Phone, Mail, MessageSquare, ChevronDown, Gift, FileText, DollarSign, Clock } from 'lucide-react'

const treatments = [
  'FUE Hair Transplant',
  'Sapphire Hair Transplant',
  'DHI Hair Transplant',
  'Beard & Moustache Transplant',
  'Eyebrow Restoration',
  'PRP / GFC Treatment',
  'Skin Whitening',
  'Acne Treatment',
  'Hydra Facial',
  'Laser Hair Removal',
  'Eye & Lip Peels',
  'Other',
]

const benefits = [
  { icon: Gift, text: 'Free expert consultation' },
  { icon: FileText, text: 'Personalized treatment plan' },
  { icon: DollarSign, text: 'Transparent pricing' },
  { icon: Clock, text: 'Flexible scheduling' },
]

export default function ConsultationForm() {
  const [ref, inView] = useInView(0.15)
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [form, setForm] = useState({
    name: '', phone: '', email: '', treatment: '', message: '',
  })

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    // Simulate API call
    await new Promise((r) => setTimeout(r, 1500))
    setLoading(false)
    setSubmitted(true)
  }

  return (
    <section id="consultation" className="py-20 lg:py-28 bg-white">
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
            Free Consultation
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
            Book Your{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-blue-600">
              Free Consultation
            </span>
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            Take the first step towards your hair transformation. Our experts will guide you through the best treatment options.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
          {/* Left: Image + Benefits */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="flex flex-col gap-6"
          >
            <div className="rounded-3xl overflow-hidden shadow-2xl flex-1 min-h-64">
              <img
                src="https://images.unsplash.com/photo-1666214280557-f1b5022eb634?w=900&q=80"
                alt="Doctor consulting patient"
                className="w-full h-full object-cover"
                style={{ minHeight: '300px' }}
                loading="lazy"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              {benefits.map((b) => {
                const Icon = b.icon
                return (
                  <div key={b.text} className="flex items-center gap-3 p-4 bg-teal-50 rounded-2xl">
                    <div className="p-2 bg-teal-100 rounded-xl flex-shrink-0">
                      <Icon size={16} className="text-teal-600" />
                    </div>
                    <span className="text-sm font-medium text-gray-700">{b.text}</span>
                  </div>
                )
              })}
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="bg-gradient-to-br from-gray-50 to-teal-50/50 rounded-3xl p-8 border border-gray-100 shadow-lg"
          >
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center h-full text-center py-12"
              >
                <div className="w-20 h-20 bg-teal-100 rounded-full flex items-center justify-center mb-6">
                  <CheckCircle size={40} className="text-teal-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Consultation Booked!</h3>
                <p className="text-gray-500 mb-6">
                  Thank you! Our team will contact you within 24 hours to confirm your appointment.
                </p>
                <a
                  href="https://wa.me/917989531117?text=Hello%2C%20I%20just%20submitted%20the%20consultation%20form"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-green-500 text-white px-6 py-3 rounded-full font-semibold"
                >
                  Chat on WhatsApp
                </a>
              </motion.div>
            ) : (
              <>
                <h3 className="text-xl font-bold text-gray-900 mb-6">Fill Your Details</h3>
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                  {/* Name */}
                  <div className="relative">
                    <User size={16} className="absolute top-3.5 left-4 text-gray-400" />
                    <input
                      type="text"
                      name="name"
                      placeholder="Full Name *"
                      required
                      value={form.name}
                      onChange={handleChange}
                      className="w-full pl-11 pr-4 py-3 bg-white border border-gray-200 rounded-xl text-gray-800 placeholder-gray-400 focus:outline-none focus:border-teal-500 focus:ring-2 focus:ring-teal-100 transition-all text-sm"
                    />
                  </div>

                  {/* Phone */}
                  <div className="relative">
                    <Phone size={16} className="absolute top-3.5 left-4 text-gray-400" />
                    <input
                      type="tel"
                      name="phone"
                      placeholder="Phone Number *"
                      required
                      value={form.phone}
                      onChange={handleChange}
                      className="w-full pl-11 pr-4 py-3 bg-white border border-gray-200 rounded-xl text-gray-800 placeholder-gray-400 focus:outline-none focus:border-teal-500 focus:ring-2 focus:ring-teal-100 transition-all text-sm"
                    />
                  </div>

                  {/* Email */}
                  <div className="relative">
                    <Mail size={16} className="absolute top-3.5 left-4 text-gray-400" />
                    <input
                      type="email"
                      name="email"
                      placeholder="Email Address"
                      value={form.email}
                      onChange={handleChange}
                      className="w-full pl-11 pr-4 py-3 bg-white border border-gray-200 rounded-xl text-gray-800 placeholder-gray-400 focus:outline-none focus:border-teal-500 focus:ring-2 focus:ring-teal-100 transition-all text-sm"
                    />
                  </div>

                  {/* Treatment Select */}
                  <div className="relative">
                    <select
                      name="treatment"
                      required
                      value={form.treatment}
                      onChange={handleChange}
                      className="w-full pl-4 pr-10 py-3 bg-white border border-gray-200 rounded-xl text-gray-700 focus:outline-none focus:border-teal-500 focus:ring-2 focus:ring-teal-100 transition-all text-sm appearance-none"
                    >
                      <option value="">Treatment Interested In *</option>
                      {treatments.map((t) => (
                        <option key={t} value={t}>{t}</option>
                      ))}
                    </select>
                    <ChevronDown size={16} className="absolute top-3.5 right-4 text-gray-400 pointer-events-none" />
                  </div>

                  {/* Message */}
                  <div className="relative">
                    <MessageSquare size={16} className="absolute top-3.5 left-4 text-gray-400" />
                    <textarea
                      name="message"
                      placeholder="Your message or questions..."
                      rows={4}
                      value={form.message}
                      onChange={handleChange}
                      className="w-full pl-11 pr-4 py-3 bg-white border border-gray-200 rounded-xl text-gray-800 placeholder-gray-400 focus:outline-none focus:border-teal-500 focus:ring-2 focus:ring-teal-100 transition-all text-sm resize-none"
                    />
                  </div>

                  {/* Submit */}
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    disabled={loading}
                    className="flex items-center justify-center gap-2 bg-gradient-to-r from-teal-600 to-blue-600 hover:from-teal-500 hover:to-blue-500 text-white py-4 rounded-xl font-bold text-base shadow-lg disabled:opacity-70 transition-all"
                  >
                    {loading ? (
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    ) : (
                      <>
                        <Send size={18} />
                        Book Free Consultation
                      </>
                    )}
                  </motion.button>

                  <p className="text-xs text-gray-400 text-center">
                    By submitting, you agree to be contacted by our team. Your data is safe and secure.
                  </p>
                </form>
              </>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

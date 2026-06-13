import { motion } from 'framer-motion'
import { useInView } from '../hooks/useInView'
import { CheckCircle, CreditCard, Zap, Calendar, DollarSign, ArrowRight } from 'lucide-react'

const benefits = [
  { icon: CheckCircle, text: 'Zero down payment required' },
  { icon: CreditCard, text: 'Easy EMI options available' },
  { icon: Zap, text: 'Quick approval process' },
  { icon: DollarSign, text: 'Affordable monthly installments' },
  { icon: Calendar, text: 'Flexible payment plans' },
]

export default function EMISection() {
  const [ref, inView] = useInView(0.2)

  const scrollTo = (id) => {
    const el = document.querySelector(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="emi" className="relative py-20 lg:py-28 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=1920&q=80"
          alt="Luxury clinic background"
          className="w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-teal-950/92 via-gray-900/88 to-blue-950/90" />
      </div>

      <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-400/20 border border-amber-400/30 text-amber-300 text-sm font-semibold mb-6">
              <CreditCard size={14} />
              Easy Finance Available
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-4 leading-tight" style={{ fontFamily: "'Playfair Display', serif" }}>
              Zero Down Payment{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-300">
                EMI Available
              </span>
            </h2>

            <p className="text-xl text-amber-300 font-semibold mb-4">
              Get Hair Transplant Now – Pay Later
            </p>

            <p className="text-gray-300 text-lg leading-relaxed mb-8">
              Restore your hair today without financial stress. Our flexible EMI plans make
              world-class hair restoration accessible to everyone.
            </p>

            <motion.button
              whileHover={{ scale: 1.05, boxShadow: '0 20px 40px rgba(245,158,11,0.4)' }}
              whileTap={{ scale: 0.97 }}
              onClick={() => scrollTo('#consultation')}
              className="flex items-center gap-2 bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-400 hover:to-yellow-400 text-gray-900 px-8 py-4 rounded-full font-black text-base shadow-2xl transition-all"
            >
              Check EMI Eligibility <ArrowRight size={18} />
            </motion.button>
          </motion.div>

          {/* Right: Benefits Card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="glass rounded-3xl p-8 border border-white/10">
              <h3 className="text-2xl font-bold text-white mb-6">
                Why Choose Our EMI Plans?
              </h3>
              <div className="flex flex-col gap-4">
                {benefits.map((benefit, i) => {
                  const Icon = benefit.icon
                  return (
                    <motion.div
                      key={benefit.text}
                      initial={{ opacity: 0, x: 20 }}
                      animate={inView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: 0.3 + i * 0.1 }}
                      className="flex items-center gap-4 p-4 bg-white/5 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors"
                    >
                      <div className="p-2.5 bg-amber-400/20 rounded-xl flex-shrink-0">
                        <Icon size={18} className="text-amber-400" />
                      </div>
                      <span className="text-gray-200 font-medium">{benefit.text}</span>
                      <CheckCircle size={16} className="text-teal-400 ml-auto flex-shrink-0" />
                    </motion.div>
                  )
                })}
              </div>

              {/* Stats row */}
              <div className="grid grid-cols-3 gap-4 mt-6 pt-6 border-t border-white/10">
                {[
                  { value: '0%', label: 'Down Payment' },
                  { value: 'Easy', label: 'Approval' },
                  { value: 'Flexible', label: 'Tenure' },
                ].map((s) => (
                  <div key={s.label} className="text-center">
                    <p className="text-2xl font-black text-amber-400">{s.value}</p>
                    <p className="text-xs text-gray-400 mt-1">{s.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

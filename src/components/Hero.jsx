import { motion } from 'framer-motion'
import { CheckCircle, ArrowRight, MessageCircle } from 'lucide-react'

const stats = [
  { value: '1000+', label: 'Happy Clients' },
  { value: 'Advanced', label: 'Technology' },
  { value: 'High', label: 'Success Rate' },
  { value: 'Safe &', label: 'Sterile' },
]

export default function Hero() {
  const scrollTo = (id) => {
    const el = document.querySelector(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="home"
      className="relative flex items-center justify-center overflow-hidden w-full"
      style={{ minHeight: '100svh' }}
    >
      {/* ── Background: CSS bg-image so it always fills the section ── */}
      <div
        className="absolute inset-0 z-0 w-full h-full"
        style={{
          backgroundImage:
            'url(https://images.unsplash.com/photo-1666214280557-f1b5022eb634?w=1920&q=80)',
          backgroundSize: 'cover',
          backgroundPosition: 'center center',
          backgroundRepeat: 'no-repeat',
          backgroundAttachment: 'scroll', // 'fixed' breaks on iOS Safari
        }}
      />
      {/* Dark overlays */}
      <div className="absolute inset-0 z-0 bg-gradient-to-r from-gray-950/92 via-gray-900/80 to-teal-950/60" />
      <div className="absolute inset-0 z-0 bg-gradient-to-t from-gray-950/70 via-transparent to-transparent" />

      {/* ── Content ── */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-6 sm:pt-24 sm:pb-12 lg:pt-28 lg:pb-16">
        <div className="max-w-3xl">

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-teal-500/20 border border-teal-400/30 text-teal-300 text-xs sm:text-sm font-medium mb-3 sm:mb-5"
          >
            <CheckCircle size={12} />
            #1 Hair Transplant Clinic · Vijayawada
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-[2rem] leading-[1.15] sm:text-5xl lg:text-6xl font-black text-white mb-2 sm:mb-3"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Best Hair Transplant
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-400">
              Clinic in Vijayawada
            </span>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-sm sm:text-lg text-amber-400 font-semibold mb-2 sm:mb-3 leading-snug"
          >
            Advanced FUE, DHI & Sapphire Hair Transplant Surgery with Premium Hair &amp; Skin Laser Treatments.
          </motion.p>

          {/* Description — full on sm+, short on mobile */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="hidden sm:block text-base sm:text-lg text-gray-300 leading-relaxed mb-5 max-w-2xl"
          >
            Regain your hair. Restore your youth. Rebuild your confidence with scientifically advanced
            and safe procedures performed by experienced experts.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="sm:hidden text-xs text-gray-300 leading-relaxed mb-4"
          >
            Safe, proven procedures by experienced experts. Regain your confidence.
          </motion.p>

          {/* Buttons — row on all sizes */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="flex flex-row gap-2 sm:gap-4 mb-4 sm:mb-10"
          >
            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => scrollTo('#consultation')}
              className="flex items-center justify-center gap-1.5 bg-gradient-to-r from-teal-500 to-teal-600 text-white px-4 py-3 sm:px-7 sm:py-4 rounded-full font-bold text-sm sm:text-base shadow-xl transition-all flex-1 sm:flex-none"
            >
              Book Consultation
              <ArrowRight size={15} />
            </motion.button>

            <motion.a
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              href="https://wa.me/917989531117?text=Hello%2C%20I%20would%20like%20to%20know%20more%20about%20hair%20transplant"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-1.5 bg-green-500 hover:bg-green-400 text-white px-4 py-3 sm:px-7 sm:py-4 rounded-full font-bold text-sm sm:text-base shadow-xl transition-all flex-1 sm:flex-none"
            >
              <MessageCircle size={15} />
              WhatsApp
            </motion.a>
          </motion.div>

          {/* Stats — 4 cols, compact on mobile */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.45 }}
            className="grid grid-cols-4 gap-2 sm:gap-4"
          >
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 + i * 0.08 }}
                className="glass rounded-xl sm:rounded-2xl px-1 py-3 sm:p-4 text-center"
              >
                <p className="text-sm sm:text-xl font-black text-white leading-tight">{stat.value}</p>
                <p className="text-[9px] sm:text-xs text-teal-300 font-medium mt-0.5 leading-tight">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator — desktop only */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-5 left-1/2 -translate-x-1/2 z-10 hidden sm:block"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center pt-2"
        >
          <div className="w-1 h-2 bg-white/60 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  )
}

import { motion } from 'framer-motion'
import { useInView } from '../hooks/useInView'
import { ArrowRight, Sparkles } from 'lucide-react'

const treatments = [
  {
    image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=800&q=80',
    title: 'Skin Whitening',
    description: 'Korean skin whitening and advanced chemical peels for pigmentation correction and radiant skin.',
    gradient: 'from-pink-500 to-rose-500',
  },
  {
    image: 'https://images.unsplash.com/photo-1612908705673-cc5e9df0f5f6?w=800&q=80',
    title: 'Acne Treatment',
    description: 'Comprehensive acne and pimple treatment solutions for clear, healthy skin.',
    gradient: 'from-orange-500 to-amber-500',
  },
  {
    image: 'https://images.unsplash.com/photo-1519823551278-64ac92734fb1?w=800&q=80',
    title: 'Hydra Facial',
    description: 'Deep cleansing and rejuvenating facial treatments for hydrated, glowing skin.',
    gradient: 'from-blue-500 to-cyan-500',
  },
  {
    image: 'https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=800&q=80',
    title: 'Laser Hair Removal',
    description: 'Permanent hair removal using advanced laser technology for smooth, hair-free skin.',
    gradient: 'from-violet-500 to-purple-500',
  },
  {
    image: 'https://images.unsplash.com/photo-1614252369475-531eba835eb1?w=800&q=80',
    title: 'Eye & Lip Peels',
    description: 'Dark circles treatment and dark lip correction with specialized peel technology.',
    gradient: 'from-teal-500 to-emerald-500',
  },
]

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
}

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

export default function SkinServices() {
  const [ref, inView] = useInView(0.1)

  const scrollTo = (id) => {
    const el = document.querySelector(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="skin-services" className="py-20 lg:py-28 bg-gradient-to-br from-gray-50 to-blue-50/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
          ref={ref}
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-100 text-blue-700 text-sm font-semibold mb-4">
            <Sparkles size={14} />
            Premium Skin & Laser Treatments
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
            Glow Brighter with{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-600">
              Premium Skin Care
            </span>
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            State-of-the-art skin and laser treatments designed to restore radiance and boost your confidence.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {treatments.map((treatment, i) => (
            <motion.div
              key={treatment.title}
              variants={cardVariants}
              whileHover={{ y: -8 }}
              className={`group bg-white rounded-3xl overflow-hidden shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-300 cursor-default ${
                i === 4 ? 'sm:col-span-2 lg:col-span-1' : ''
              }`}
            >
              {/* Image */}
              <div className="relative h-52 overflow-hidden">
                <img
                  src={treatment.image}
                  alt={treatment.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className={`absolute bottom-4 left-4 right-4`}>
                  <span className={`inline-block px-3 py-1 rounded-full bg-gradient-to-r ${treatment.gradient} text-white text-xs font-bold`}>
                    Premium Treatment
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-700 transition-colors">
                  {treatment.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-4">{treatment.description}</p>
                <button
                  onClick={() => scrollTo('#consultation')}
                  className="flex items-center gap-1.5 text-blue-600 font-semibold text-sm hover:gap-3 transition-all"
                >
                  Learn More <ArrowRight size={14} />
                </button>
              </div>

              {/* Gradient bottom border */}
              <div className={`h-1 bg-gradient-to-r ${treatment.gradient}`} />
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-12"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => scrollTo('#consultation')}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-teal-600 text-white px-8 py-4 rounded-full font-bold text-base shadow-xl transition-all"
          >
            Explore All Treatments <ArrowRight size={18} />
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}

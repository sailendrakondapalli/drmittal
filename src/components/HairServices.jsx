import { motion } from 'framer-motion'
import { useInView } from '../hooks/useInView'
import { ArrowRight } from 'lucide-react'

const services = [
  {
    image: 'https://images.unsplash.com/photo-1626863905121-3b0c0ed7b94c?w=800&q=80',
    title: 'FUE Method Surgery',
    tag: 'Most Popular',
    tagColor: 'bg-teal-500',
    description:
      'Follicular Unit Extraction using advanced precision techniques for natural hairline restoration with minimal scarring.',
  },
  {
    image: 'https://images.unsplash.com/photo-1621798585011-d65c6c38e32c?w=800&q=80',
    title: 'Sapphire Method Surgery',
    tag: 'Advanced',
    tagColor: 'bg-blue-500',
    description:
      'Advanced sapphire blade technology ensuring minimal scarring, faster healing, and superior results.',
  },
  {
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&q=80',
    title: 'DHI Advanced Method Surgery',
    tag: 'Premium',
    tagColor: 'bg-amber-500',
    description:
      'Direct hair implantation technique delivering superior density, precision placement, and natural results.',
  },
  {
    image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=800&q=80',
    title: 'Beard & Moustache Surgery',
    tag: 'Facial Hair',
    tagColor: 'bg-emerald-500',
    description:
      'Complete facial hair restoration for a fuller, natural-looking beard and moustache with lasting results.',
  },
  {
    image: 'https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=800&q=80',
    title: 'Eyebrow Restoration',
    tag: 'Cosmetic',
    tagColor: 'bg-purple-500',
    description:
      'Permanent eyebrow transplant creating perfectly shaped, natural-looking brows tailored to your face.',
  },
  {
    image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=800&q=80',
    title: 'Hair Regrowth Treatments',
    tag: 'Non-Surgical',
    tagColor: 'bg-rose-500',
    description:
      'PRP, GFC, Stem Cell and QR678 advanced hair regrowth solutions for early-stage hair loss.',
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

export default function HairServices() {
  const [ref, inView] = useInView(0.1)

  const scrollTo = (id) => {
    const el = document.querySelector(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="hair-services" className="py-20 lg:py-28 bg-white">
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
            Hair Transplant Services
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
            Advanced Hair Transplant{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-blue-600">
              Procedures
            </span>
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            World-class hair restoration techniques performed by experienced professionals for permanent, natural results.
          </p>
        </motion.div>

        {/* Service Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service) => (
            <motion.div
              key={service.title}
              variants={cardVariants}
              whileHover={{ y: -8 }}
              className="group bg-white rounded-3xl overflow-hidden shadow-lg border border-gray-100 hover:shadow-2xl hover:border-teal-200 transition-all duration-300 cursor-default"
            >
              {/* Image */}
              <div className="relative h-52 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <span className={`absolute top-4 left-4 ${service.tagColor} text-white text-xs font-bold px-3 py-1 rounded-full`}>
                  {service.tag}
                </span>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-teal-700 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-4">{service.description}</p>
                <button
                  onClick={() => scrollTo('#consultation')}
                  className="flex items-center gap-1.5 text-teal-600 font-semibold text-sm hover:gap-3 transition-all"
                >
                  Book Consultation <ArrowRight size={14} />
                </button>
              </div>
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
            className="inline-flex items-center gap-2 bg-gradient-to-r from-teal-600 to-blue-600 text-white px-8 py-4 rounded-full font-bold text-base shadow-xl hover:shadow-teal-300/50 transition-all"
          >
            Book Free Consultation <ArrowRight size={18} />
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}

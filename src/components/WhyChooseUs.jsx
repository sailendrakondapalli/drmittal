import { motion } from 'framer-motion'
import { useInView } from '../hooks/useInView'
import { Users, Zap, Star, Shield } from 'lucide-react'

const cards = [
  {
    icon: Users,
    image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=800&q=80',
    title: '1000+ Happy Clients',
    description: 'Trusted by thousands across Andhra Pradesh for natural, permanent results.',
    color: 'from-teal-500 to-teal-600',
  },
  {
    icon: Zap,
    image: 'https://images.unsplash.com/photo-1631815587646-b85a1bb027e1?w=800&q=80',
    title: 'Advanced Technology',
    description: 'US & European imported technology ensuring high graft survival rates.',
    color: 'from-blue-500 to-blue-600',
  },
  {
    icon: Star,
    image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800&q=80',
    title: 'High Density Results',
    description: 'Expert techniques delivering natural hairline designs and optimal density.',
    color: 'from-amber-500 to-amber-600',
  },
  {
    icon: Shield,
    image: 'https://images.unsplash.com/photo-1504439468489-c8920d796a29?w=800&q=80',
    title: 'Safe & Sterile',
    description: 'Hygienic environment with personalized treatment planning for every client.',
    color: 'from-emerald-500 to-emerald-600',
  },
]

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
}

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

export default function WhyChooseUs() {
  const [ref, inView] = useInView(0.15)

  return (
    <section id="why-us" className="py-20 lg:py-28 bg-gradient-to-br from-gray-50 to-teal-50/30">
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
            Why Choose Us
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
            Why We Are the{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-blue-600">
              Best Choice
            </span>
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            Delivering world-class hair restoration with cutting-edge technology and a commitment to natural results.
          </p>
        </motion.div>

        {/* Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {cards.map((card) => {
            const Icon = card.icon
            return (
              <motion.div
                key={card.title}
                variants={cardVariants}
                whileHover={{ y: -8, boxShadow: '0 30px 60px rgba(0,0,0,0.12)' }}
                className="bg-white rounded-3xl overflow-hidden shadow-lg border border-gray-100 cursor-default"
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className={`absolute top-4 right-4 p-2.5 rounded-xl bg-gradient-to-br ${card.color} shadow-lg`}>
                    <Icon size={20} className="text-white" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{card.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{card.description}</p>
                </div>

                {/* Bottom accent */}
                <div className={`h-1 bg-gradient-to-r ${card.color}`} />
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}

import { motion } from 'framer-motion'
import { useInView } from '../hooks/useInView'
import { ZoomIn } from 'lucide-react'
import { useState } from 'react'

const galleryImages = [
  {
    before: 'https://images.unsplash.com/photo-1585747860715-2ba37e788b70?w=600&q=80',
    after: 'https://images.unsplash.com/photo-1492106087820-71f1a00d2b11?w=600&q=80',
    label: 'Hair Transplant Result 1',
  },
  {
    before: 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=600&q=80',
    after: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=600&q=80',
    label: 'Hair Transplant Result 2',
  },
  {
    before: 'https://images.unsplash.com/photo-1504257432389-52343af06ae3?w=600&q=80',
    after: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80',
    label: 'Hair Transplant Result 3',
  },
  {
    before: 'https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?w=600&q=80',
    after: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=600&q=80',
    label: 'Hair Transplant Result 4',
  },
  {
    before: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=600&q=80',
    after: 'https://images.unsplash.com/photo-1566753323558-f4e0952af115?w=600&q=80',
    label: 'Beard Transplant Result',
  },
  {
    before: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=600&q=80',
    after: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=600&q=80',
    label: 'Hairline Restoration',
  },
]

export default function Gallery() {
  const [ref, inView] = useInView(0.1)
  const [activeIdx, setActiveIdx] = useState(null)
  const [hoveredCard, setHoveredCard] = useState(null)

  return (
    <section id="gallery" className="py-20 lg:py-28 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
          ref={ref}
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-teal-500/20 border border-teal-500/30 text-teal-400 text-sm font-semibold mb-4">
            Results Gallery
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
            Real Results,{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-400">
              Real Transformations
            </span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            See the life-changing results our clients have experienced. Every transformation is a story of restored confidence.
          </p>
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative rounded-3xl overflow-hidden cursor-pointer bg-gray-800"
              onMouseEnter={() => setHoveredCard(i)}
              onMouseLeave={() => setHoveredCard(null)}
              onClick={() => setActiveIdx(i)}
            >
              {/* Before/After Toggle */}
              <div className="relative h-64 overflow-hidden">
                <motion.img
                  src={hoveredCard === i ? item.after : item.before}
                  alt={item.label}
                  className="w-full h-full object-cover object-top"
                  loading="lazy"
                  animate={{ scale: hoveredCard === i ? 1.1 : 1 }}
                  transition={{ duration: 0.5 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

                {/* Before/After Label */}
                <div className="absolute top-4 left-4">
                  <span className={`text-xs font-bold px-3 py-1 rounded-full ${hoveredCard === i ? 'bg-teal-500 text-white' : 'bg-white/20 text-white border border-white/30'}`}>
                    {hoveredCard === i ? 'AFTER' : 'BEFORE'}
                  </span>
                </div>

                {/* Zoom icon */}
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="p-2 bg-white/20 backdrop-blur-sm rounded-xl">
                    <ZoomIn size={16} className="text-white" />
                  </div>
                </div>

                {/* Label */}
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="text-white font-semibold text-sm">{item.label}</p>
                  <p className="text-gray-300 text-xs mt-0.5">Hover to see After result</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Lightbox */}
        {activeIdx !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={() => setActiveIdx(null)}
          >
            <div className="relative max-w-4xl w-full grid grid-cols-2 gap-4">
              <div className="rounded-2xl overflow-hidden">
                <p className="text-white text-center font-bold mb-2">Before</p>
                <img src={galleryImages[activeIdx].before} alt="Before" className="w-full rounded-2xl" />
              </div>
              <div className="rounded-2xl overflow-hidden">
                <p className="text-teal-400 text-center font-bold mb-2">After</p>
                <img src={galleryImages[activeIdx].after} alt="After" className="w-full rounded-2xl" />
              </div>
              <button
                className="absolute top-2 right-2 text-white bg-white/20 rounded-full p-2 hover:bg-white/40"
                onClick={() => setActiveIdx(null)}
              >
                ✕
              </button>
            </div>
          </motion.div>
        )}

        {/* Note */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.7 }}
          className="text-center text-gray-500 text-sm mt-8"
        >
          * Hover over images to see before & after results. Click to compare side by side.
        </motion.p>
      </div>
    </section>
  )
}

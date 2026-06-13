import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from '../hooks/useInView'
import { useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react'

const testimonials = [
  {
    photo: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&q=80',
    name: 'Sandeep R.',
    location: 'Vijayawada',
    rating: 5,
    review:
      'Zero pain procedure and EMI option helped me a lot. Doctor explained everything clearly. I am absolutely thrilled with the natural results I got at Mittals clinic.',
    treatment: 'FUE Hair Transplant',
  },
  {
    photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80',
    name: 'Arjun M.',
    location: 'Guntur',
    rating: 5,
    review:
      "The team's genuine care turned it into a life-changing experience. Seeing my hairline restored has completely reignited my self-assurance. Best decision I ever made.",
    treatment: 'DHI Advanced Surgery',
  },
  {
    photo: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&q=80',
    name: 'Eswar K.',
    location: 'Krishna District',
    rating: 5,
    review:
      "Walking into the clinic was the best decision I've ever made. The transformation isn't just aesthetic — it's given me a whole new sense of pride and happiness.",
    treatment: 'Sapphire Method',
  },
]

export default function Testimonials() {
  const [ref, inView] = useInView(0.2)
  const [current, setCurrent] = useState(0)
  const [direction, setDirection] = useState(1)

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1)
      setCurrent((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const goTo = (idx) => {
    setDirection(idx > current ? 1 : -1)
    setCurrent(idx)
  }

  const variants = {
    enter: (dir) => ({ opacity: 0, x: dir * 60 }),
    center: { opacity: 1, x: 0 },
    exit: (dir) => ({ opacity: 0, x: dir * -60 }),
  }

  return (
    <section id="testimonials" className="py-20 lg:py-28 bg-gradient-to-br from-teal-50 to-blue-50">
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
            Client Testimonials
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
            What Our{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-blue-600">
              Clients Say
            </span>
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            Real stories from real clients who transformed their lives at Mittals Clinic.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* Slider */}
          <div className="relative">
            <AnimatePresence custom={direction} mode="wait">
              <motion.div
                key={current}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.4, ease: 'easeInOut' }}
                className="bg-white rounded-3xl p-8 sm:p-12 shadow-2xl border border-gray-100"
              >
                <div className="flex flex-col sm:flex-row gap-8 items-start">
                  {/* Photo */}
                  <div className="flex-shrink-0">
                    <div className="relative">
                      <img
                        src={testimonials[current].photo}
                        alt={testimonials[current].name}
                        className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl object-cover shadow-lg"
                        loading="lazy"
                      />
                      <div className="absolute -bottom-2 -right-2 bg-teal-500 rounded-full p-1.5">
                        <Star size={12} className="text-white fill-white" />
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    {/* Quote icon */}
                    <Quote size={32} className="text-teal-200 mb-4" />

                    {/* Stars */}
                    <div className="flex gap-1 mb-4">
                      {Array(testimonials[current].rating).fill(0).map((_, i) => (
                        <Star key={i} size={16} className="text-amber-400 fill-amber-400" />
                      ))}
                    </div>

                    <p className="text-gray-700 text-lg leading-relaxed mb-6 italic">
                      "{testimonials[current].review}"
                    </p>

                    <div className="flex items-center gap-4">
                      <div>
                        <p className="font-bold text-gray-900">{testimonials[current].name}</p>
                        <p className="text-sm text-gray-500">{testimonials[current].location}</p>
                      </div>
                      <span className="ml-auto px-3 py-1 bg-teal-50 text-teal-700 text-xs font-semibold rounded-full">
                        {testimonials[current].treatment}
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Arrows */}
            <div className="absolute top-1/2 -translate-y-1/2 -left-4 sm:-left-6">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => goTo((current - 1 + testimonials.length) % testimonials.length)}
                className="p-3 bg-white rounded-2xl shadow-lg border border-gray-200 text-gray-700 hover:text-teal-600 hover:border-teal-200 transition-colors"
                aria-label="Previous"
              >
                <ChevronLeft size={20} />
              </motion.button>
            </div>
            <div className="absolute top-1/2 -translate-y-1/2 -right-4 sm:-right-6">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => goTo((current + 1) % testimonials.length)}
                className="p-3 bg-white rounded-2xl shadow-lg border border-gray-200 text-gray-700 hover:text-teal-600 hover:border-teal-200 transition-colors"
                aria-label="Next"
              >
                <ChevronRight size={20} />
              </motion.button>
            </div>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                className={`transition-all duration-300 rounded-full ${
                  i === current ? 'w-8 h-2.5 bg-teal-600' : 'w-2.5 h-2.5 bg-gray-300 hover:bg-teal-300'
                }`}
                aria-label={`Go to testimonial ${i + 1}`}
              />
            ))}
          </div>

          {/* Mini avatars */}
          <div className="flex justify-center mt-6 gap-4">
            {testimonials.map((t, i) => (
              <button key={i} onClick={() => goTo(i)} className="transition-all">
                <img
                  src={t.photo}
                  alt={t.name}
                  className={`w-10 h-10 rounded-full object-cover border-2 transition-all ${
                    i === current ? 'border-teal-500 scale-110' : 'border-gray-200 opacity-60'
                  }`}
                />
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

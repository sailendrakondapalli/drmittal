import { motion } from 'framer-motion'
import { useInView } from '../hooks/useInView'
import { CheckCircle, Award, Users, Star } from 'lucide-react'

const highlights = [
  { icon: Award, text: 'Certified Professional Cosmetologist' },
  { icon: Users, text: '1000+ Satisfied Clients' },
  { icon: Star, text: 'Expert in Hair & Skin Restoration' },
  { icon: CheckCircle, text: 'Advanced International Techniques' },
]

export default function DoctorProfile() {
  const [ref, inView] = useInView(0.2)

  return (
    <section id="about" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="relative"
          >
            {/* Background decoration */}
            <div className="absolute -top-6 -left-6 w-64 h-64 bg-teal-100 rounded-3xl -z-10" />
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-amber-100 rounded-3xl -z-10" />

            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=700&q=80"
                alt="Mittal Jain – Managing Director & Founder"
                className="w-full h-[520px] object-cover object-top"
                loading="lazy"
              />
              {/* Badge overlay */}
              <div className="absolute bottom-6 left-6 right-6 glass rounded-2xl p-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-teal-500 to-blue-600 flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-black text-lg">MJ</span>
                  </div>
                  <div>
                    <p className="text-white font-bold text-sm">Mittal Jain</p>
                    <p className="text-teal-300 text-xs">Managing Director & Founder</p>
                  </div>
                  <div className="ml-auto bg-amber-400 text-white text-xs font-bold px-3 py-1 rounded-full">
                    Expert
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.1 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-teal-100 text-teal-700 text-sm font-semibold mb-4">
              Meet Our Founder
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>
              Meet{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-blue-600">
                Mittal Jain
              </span>
            </h2>
            <p className="text-teal-600 font-semibold text-lg mb-6">Managing Director & Founder</p>

            <p className="text-gray-600 leading-relaxed mb-6 text-lg">
              A professional cosmetologist specializing in advanced hair restoration and skin care treatments
              with years of experience and over <strong className="text-gray-900">1000 satisfied clients</strong>.
              Mittal Jain has built Mittals Clinic into the region's most trusted destination for premium
              aesthetic treatments.
            </p>

            {/* Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
              {highlights.map((item) => {
                const Icon = item.icon
                return (
                  <div key={item.text} className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl">
                    <div className="p-2 bg-teal-100 rounded-lg flex-shrink-0">
                      <Icon size={16} className="text-teal-600" />
                    </div>
                    <span className="text-sm font-medium text-gray-700">{item.text}</span>
                  </div>
                )
              })}
            </div>

            {/* Hygiene note */}
            <div className="bg-gradient-to-br from-teal-50 to-blue-50 border border-teal-100 rounded-2xl p-6">
              <div className="flex items-start gap-3">
                <div className="p-2 bg-teal-500 rounded-xl flex-shrink-0 mt-0.5">
                  <Shield size={18} className="text-white" />
                </div>
                <div>
                  <p className="font-bold text-gray-900 mb-2">Clinic Hygiene & Safety</p>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Clinic hygiene is very important to ensure the safety and health of clients and staff.
                    A clean and sanitized environment is maintained at all times. Medical equipment and
                    surfaces are regularly disinfected, ensuring complete safety and confidence.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function Shield(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={props.size || 24}
      height={props.size || 24}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={props.className}
    >
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  )
}

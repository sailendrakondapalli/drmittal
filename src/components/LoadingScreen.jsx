import { motion } from 'framer-motion'

export default function LoadingScreen() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 z-[9999] bg-white flex flex-col items-center justify-center gap-8"
    >
      {/* Logo */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col items-center gap-4"
      >
        <div className="w-20 h-20 rounded-3xl bg-gradient-to-br from-teal-600 to-blue-600 flex items-center justify-center shadow-2xl">
          <span className="text-white font-black text-3xl">M</span>
        </div>
        <div className="text-center">
          <h1 className="text-xl font-black text-gray-900">Mittals Hair & Skin</h1>
          <p className="text-teal-600 text-sm font-medium">Laser Clinic · Vijayawada</p>
        </div>
      </motion.div>

      {/* Loading bar */}
      <div className="w-48 h-1.5 bg-gray-100 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: '0%' }}
          animate={{ width: '100%' }}
          transition={{ duration: 1.2, ease: 'easeInOut' }}
          className="h-full bg-gradient-to-r from-teal-500 to-blue-500 rounded-full"
        />
      </div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
        className="text-sm text-gray-400"
      >
        Loading premium experience...
      </motion.p>
    </motion.div>
  )
}

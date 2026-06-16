import { motion, useScroll, useSpring } from 'framer-motion'

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 200, damping: 40, restDelta: 0.001 })
  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-[3px] z-[999] origin-left"
      style={{
        scaleX,
        background: 'linear-gradient(90deg, #2E7D32, #4CAF50, #FFB300, #4CAF50)',
      }}
    />
  )
}

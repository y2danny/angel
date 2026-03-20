import { motion } from 'framer-motion'
import type { ReactNode } from 'react'

type Props = {
  children: ReactNode
  className?: string
  delay?: number
  id?: string
}

export function BentoCard({ children, className = '', delay = 0, id }: Props) {
  return (
    <motion.article
      id={id}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-32px' }}
      transition={{ duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -3, transition: { duration: 0.22, ease: 'easeOut' } }}
      className={`group relative overflow-hidden rounded-2xl border border-white/[0.07] bg-[#1a1d24] p-5 shadow-[0_16px_48px_-16px_rgba(0,0,0,0.55)] sm:p-6 ${className}`}
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background:
            'radial-gradient(600px circle at var(--mx,50%) var(--my,50%), rgba(251,113,133,0.06), transparent 40%)',
        }}
      />
      <div className="relative z-[1]">{children}</div>
    </motion.article>
  )
}

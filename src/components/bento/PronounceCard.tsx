import { useCallback, useEffect, useState } from 'react'
import { BentoCard } from './BentoCard'

type Props = {
  ipa: string
  hint: string
  ttsPhrase: string
}

export function PronounceCard({ ipa, hint, ttsPhrase }: Props) {
  const [spoke, setSpoke] = useState(false)

  useEffect(() => {
    return () => {
      if ('speechSynthesis' in window) window.speechSynthesis.cancel()
    }
  }, [])

  const play = useCallback(() => {
    if (!('speechSynthesis' in window)) return
    window.speechSynthesis.cancel()
    const u = new SpeechSynthesisUtterance(ttsPhrase)
    u.rate = 0.92
    u.onend = () => setSpoke(false)
    setSpoke(true)
    window.speechSynthesis.speak(u)
  }, [ttsPhrase])

  return (
    <BentoCard className="md:col-span-6 lg:col-span-4" delay={0.08}>
      <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-rose-300/90">
        Say it with me
      </p>
      <p className="mt-3 font-mono text-lg text-zinc-100 sm:text-xl">{ipa}</p>
      <p className="mt-2 text-sm leading-relaxed text-zinc-500">{hint}</p>
      {'speechSynthesis' in window ? (
        <button
          type="button"
          onClick={play}
          className="mt-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs font-medium text-zinc-300 transition hover:border-rose-400/30 hover:text-rose-100"
          aria-pressed={spoke}
        >
          <span aria-hidden>🔊</span>
          {spoke ? 'Playing…' : 'Let the robot pronounce it'}
        </button>
      ) : (
        <p className="mt-4 text-xs text-zinc-600">Your browser hides the robot voice. That’s OK.</p>
      )}
    </BentoCard>
  )
}

import { useCallback, useEffect, useMemo, useState } from 'react'
import type { LatLng } from '../../lib/geo'
import { haversineKm, projectLatLng } from '../../lib/geo'
import { BentoCard } from './BentoCard'

type Props = {
  home: LatLng
  cityLabel: string
}

type GeoState =
  | { status: 'idle' }
  | { status: 'loading' }
  | { status: 'ready'; visitor: LatLng }
  | { status: 'blocked' }
  | { status: 'error' }

const W = 280
const H = 140

export function DistanceCard({ home, cityLabel }: Props) {
  const [state, setState] = useState<GeoState>({ status: 'idle' })

  const request = useCallback(() => {
    if (!('geolocation' in navigator)) {
      setState({ status: 'error' })
      return
    }
    setState({ status: 'loading' })
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        setState({
          status: 'ready',
          visitor: { lat: pos.coords.latitude, lng: pos.coords.longitude },
        })
      },
      () => setState({ status: 'blocked' }),
      { enableHighAccuracy: false, maximumAge: 60_000, timeout: 12_000 },
    )
  }, [])

  useEffect(() => {
    const el = document.getElementById('distance-card')
    const move = (e: PointerEvent) => {
      if (!el) return
      const r = el.getBoundingClientRect()
      el.style.setProperty('--mx', `${((e.clientX - r.left) / r.width) * 100}%`)
      el.style.setProperty('--my', `${((e.clientY - r.top) / r.height) * 100}%`)
    }
    el?.addEventListener('pointermove', move)
    return () => el?.removeEventListener('pointermove', move)
  }, [])

  const homePt = useMemo(() => projectLatLng(home.lat, home.lng, W, H), [home.lat, home.lng])
  const visitorPt = useMemo(() => {
    if (state.status !== 'ready') return null
    return projectLatLng(state.visitor.lat, state.visitor.lng, W, H)
  }, [state])

  const km = useMemo(() => {
    if (state.status !== 'ready') return null
    return haversineKm(home, state.visitor)
  }, [home, state])

  const pathD = useMemo(() => {
    if (!visitorPt) return ''
    const mx = (homePt.x + visitorPt.x) / 2
    const my = Math.min(homePt.y, visitorPt.y) - 28
    return `M ${homePt.x} ${homePt.y} Q ${mx} ${my} ${visitorPt.x} ${visitorPt.y}`
  }, [homePt, visitorPt])

  return (
    <BentoCard className="md:col-span-12 lg:col-span-5" delay={0.06}>
      <div id="distance-card">
        <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-rose-300/90">
          Tiny geography
        </p>
        <div className="relative mt-3 overflow-hidden rounded-xl border border-white/[0.06] bg-[#12141a]">
          <svg
            viewBox={`0 0 ${W} ${H}`}
            className="h-auto w-full text-white/10"
            aria-hidden
          >
            <defs>
              <pattern id="grid" width="14" height="14" patternUnits="userSpaceOnUse">
                <path d="M 14 0 L 0 0 0 14" fill="none" stroke="currentColor" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width={W} height={H} fill="url(#grid)" opacity="0.35" />
            <ellipse cx={W * 0.48} cy={H * 0.55} rx={W * 0.22} ry={H * 0.35} fill="rgba(251,113,133,0.04)" />
            {visitorPt && pathD && (
              <path
                d={pathD}
                fill="none"
                stroke="rgba(251,113,133,0.55)"
                strokeWidth="1.5"
                strokeDasharray="4 5"
                strokeLinecap="round"
              />
            )}
            <circle cx={homePt.x} cy={homePt.y} r="5" fill="#fb7185" opacity="0.95" />
            <circle cx={homePt.x} cy={homePt.y} r="9" fill="#fb7185" opacity="0.2" />
            {visitorPt && (
              <>
                <circle cx={visitorPt.x} cy={visitorPt.y} r="4" fill="#a5b4fc" opacity="0.95" />
                <circle cx={visitorPt.x} cy={visitorPt.y} r="8" fill="#a5b4fc" opacity="0.2" />
              </>
            )}
          </svg>
        </div>

        <p className="mt-4 text-sm leading-relaxed text-zinc-400">
          {state.status === 'ready' && km !== null && (
            <>
              I’m usually anchored near <span className="text-zinc-200">{cityLabel}</span>. You’re
              roughly <span className="font-medium text-rose-200">{km.toLocaleString()} km</span> away
              — hello from the wire between us.
            </>
          )}
          {state.status !== 'ready' && (
            <>
              I’m currently residing in <span className="text-zinc-200">{cityLabel}</span>. If you’re
              curious, you can share your rough location once. I’ll estimate distance in the
              browser and <span className="text-zinc-500">nothing gets sent to a server</span>.
            </>
          )}
        </p>

        {state.status !== 'ready' && state.status !== 'loading' && (
          <button
            type="button"
            onClick={request}
            className="mt-4 rounded-full border border-rose-400/35 bg-rose-500/10 px-4 py-2 text-xs font-semibold text-rose-100 transition hover:border-rose-400/55 hover:bg-rose-500/15"
          >
            Share approximate location
          </button>
        )}
        {state.status === 'loading' && (
          <p className="mt-4 text-xs text-zinc-500">Checking where you are (vaguely)…</p>
        )}
        {state.status === 'blocked' && (
          <p className="mt-4 text-xs text-zinc-500">
            No worries browsers are picky. The map still shows my side of the story.
          </p>
        )}
        {state.status === 'error' && (
          <p className="mt-4 text-xs text-zinc-500">Geolocation isn’t available here.</p>
        )}
      </div>
    </BentoCard>
  )
}

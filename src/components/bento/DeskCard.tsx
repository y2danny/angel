import { BentoCard } from './BentoCard'

type Props = {
  imageSrc: string | null
  caption: string
}

function DeskIllustration() {
  return (
    <div
      className="relative flex aspect-[16/10] w-full items-end justify-center overflow-hidden bg-gradient-to-b from-[#161922] to-[#0c0e12] px-8 pb-6 pt-10"
      aria-hidden
    >
      <div className="absolute inset-0 opacity-[0.07] [background-image:linear-gradient(rgba(251,113,133,0.4)_1px,transparent_1px),linear-gradient(90deg,rgba(251,113,133,0.35)_1px,transparent_1px)] [background-size:24px_24px]" />
      <div className="relative flex w-full max-w-[min(100%,320px)] flex-col items-center gap-3">
        <div className="h-2 w-[85%] rounded-sm bg-zinc-700/50" />
        <div className="flex h-[42%] min-h-[72px] w-full items-stretch gap-2 rounded-lg border border-white/[0.08] bg-zinc-900/80 p-2 shadow-[0_0_40px_-8px_rgba(251,113,133,0.15)]">
          <div className="flex-1 rounded bg-[#0d1117] ring-1 ring-inset ring-white/5">
            <div className="m-2 space-y-1.5 opacity-40">
              <div className="h-1 w-3/4 rounded bg-emerald-500/40" />
              <div className="h-1 w-full rounded bg-zinc-600/60" />
              <div className="h-1 w-5/6 rounded bg-zinc-600/40" />
              <div className="h-1 w-2/3 rounded bg-rose-400/30" />
            </div>
          </div>
        </div>
        <div className="flex w-full items-center justify-between gap-2 px-1">
          <div className="h-3 w-[28%] rounded-sm bg-zinc-700/40" />
          <div className="h-3 w-[18%] rounded-sm bg-zinc-600/30" />
          <div className="h-3 w-[14%] rounded-full bg-rose-500/20 ring-1 ring-rose-400/25" />
        </div>
      </div>
    </div>
  )
}

export function DeskCard({ imageSrc, caption }: Props) {
  return (
    <BentoCard className="md:col-span-6 lg:col-span-6" delay={0.12}>
      <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-rose-300/90">
        Where the work happens
      </p>
      <div className="mt-3 overflow-hidden rounded-xl border border-white/[0.06] bg-[#0f1116]">
        {imageSrc ? (
          <img
            src={imageSrc}
            alt="My workspace"
            className="aspect-[16/10] w-full object-cover transition duration-500 group-hover:scale-[1.02]"
          />
        ) : (
          <DeskIllustration />
        )}
      </div>
      <p className="mt-4 text-sm leading-relaxed text-zinc-500">{caption}</p>
    </BentoCard>
  )
}

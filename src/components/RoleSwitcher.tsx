import type { RoleId } from '../content'

const options: { id: RoleId; label: string }[] = [
  { id: 'support', label: 'Technical Support' },
  { id: 'engineering', label: 'Frontend / AI data' },
]

type Props = {
  role: RoleId
  onChange: (r: RoleId) => void
}

export function RoleSwitcher({ role, onChange }: Props) {
  return (
    <div
      className="inline-flex rounded-full border border-white/[0.08] bg-[#12141a]/90 p-1 shadow-lg shadow-black/30 backdrop-blur-md"
      role="radiogroup"
      aria-label="Portfolio focus"
    >
      {options.map((o) => {
        const active = role === o.id
        return (
          <button
            key={o.id}
            type="button"
            role="radio"
            aria-checked={active}
            onClick={() => onChange(o.id)}
            className={[
              'rounded-full px-3 py-1.5 text-sm font-medium transition-all duration-200 sm:px-4',
              active && o.id === 'support' && 'bg-teal-500/20 text-teal-200 ring-1 ring-teal-400/40',
              active && o.id === 'engineering' && 'bg-violet-500/20 text-violet-200 ring-1 ring-violet-400/40',
              !active && 'text-zinc-400 hover:text-zinc-200',
            ]
              .filter(Boolean)
              .join(' ')}
          >
            {o.label}
          </button>
        )
      })}
    </div>
  )
}

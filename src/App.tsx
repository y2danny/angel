import { useMemo, useState } from 'react'
import {
  certifications,
  contact,
  education,
  expertise,
  experience,
  profile,
  resources,
  roles,
  softSkills,
  soul,
  stack,
  type RoleId,
} from './content'
import { RoleSwitcher } from './components/RoleSwitcher'
import { BentoCard } from './components/bento/BentoCard'
import { DeskCard } from './components/bento/DeskCard'
import { DistanceCard } from './components/bento/DistanceCard'
import { PronounceCard } from './components/bento/PronounceCard'

function App() {
  const [role, setRole] = useState<RoleId>('support')
  const r = roles[role]

  const accent = useMemo(
    () =>
      role === 'support'
        ? {
            text: 'text-teal-300',
            border: 'border-teal-500/35',
            bg: 'bg-teal-500/[0.07]',
            dot: 'bg-teal-400',
          }
        : {
            text: 'text-violet-300',
            border: 'border-violet-500/35',
            bg: 'bg-violet-500/[0.07]',
            dot: 'bg-violet-400',
          },
    [role],
  )

  return (
    <div className="min-h-svh bg-[#12141a] text-zinc-300">
      <div
        className="pointer-events-none fixed inset-0 opacity-40"
        aria-hidden
        style={{
          background:
            'radial-gradient(900px 500px at 15% -10%, rgba(251,113,133,0.12), transparent), radial-gradient(700px 400px at 100% 0%, rgba(99,102,241,0.08), transparent)',
        }}
      />

      <header className="sticky top-0 z-50 border-b border-white/[0.06] bg-[#12141a]/85 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <a href="#top" className="group text-left">
            <p className="font-display text-lg font-semibold tracking-tight text-zinc-50">
              {profile.name}
              <span className="ml-1 inline-block text-rose-400/90 transition group-hover:translate-y-[-2px]">
                ✦
              </span>
            </p>
            <p className="text-xs text-zinc-500 transition-colors group-hover:text-zinc-400">
              {profile.taglineByRole[role]}
            </p>
          </a>
          <div className="flex flex-wrap items-center gap-3 sm:gap-4">
            <nav className="flex flex-wrap gap-5 text-sm text-zinc-500">
              <a href="#top" className="transition hover:text-rose-200">
                Soul
              </a>
              <a href="#lens" className="transition hover:text-rose-200">
                Lens
              </a>
              <a href="#work" className="transition hover:text-rose-200">
                Work
              </a>
              <a href="#reach" className="transition hover:text-rose-200">
                Say hi
              </a>
            </nav>
            <RoleSwitcher role={role} onChange={setRole} />
          </div>
        </div>
      </header>

      <main id="top" className="relative mx-auto max-w-6xl px-4 pb-24 pt-10 sm:px-6 sm:pt-14">
        <p className="mb-6 text-center text-[11px] font-semibold uppercase tracking-[0.25em] text-rose-300/80 sm:text-left">
          People hire people
        </p>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-12 md:gap-5">
          <BentoCard className="md:col-span-12 lg:col-span-7" delay={0}>
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-rose-300/90">
              Hello
            </p>
            <h1 className="mt-2 font-display text-3xl font-semibold tracking-tight text-zinc-50 sm:text-4xl lg:text-[2.35rem] lg:leading-[1.15]">
              I’m {profile.name.split(' ')[0]}. {profile.taglineByRole[role]}
            </h1>
            <p className="mt-5 max-w-xl text-[15px] leading-relaxed text-zinc-400 sm:text-base">
              {soul.voice.helloByRole[role]}
            </p>
            <p className="mt-4 text-sm leading-relaxed text-zinc-500">
              <span className="text-rose-200/90">Currently framing the page for:</span>{' '}
              <span className="text-zinc-300">{r.label}</span>
              <span className="text-zinc-600"> </span>
            </p>
          </BentoCard>

          <DistanceCard
            home={{ lat: soul.home.latitude, lng: soul.home.longitude }}
            cityLabel={soul.home.cityLabel}
          />

          <PronounceCard
            ipa={soul.pronunciation.ipa}
            hint={soul.pronunciation.hint}
            ttsPhrase={soul.pronunciation.ttsPhrase}
          />

          <BentoCard className="md:col-span-6 lg:col-span-4" delay={0.1}>
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-rose-300/90">
              Teaching brain
            </p>
            <p className="mt-3 text-sm leading-relaxed text-zinc-400">{soul.voice.teaching}</p>
          </BentoCard>

          <BentoCard className="md:col-span-12 lg:col-span-4" delay={0.11}>
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-rose-300/90">
              Small truths
            </p>
            <p className="mt-3 text-sm leading-relaxed text-zinc-400">{soul.funFact.body}</p>
            <p className="mt-4 border-t border-white/[0.06] pt-4 text-sm leading-relaxed text-zinc-500">
              {soul.voice.play}
            </p>
          </BentoCard>

          <DeskCard imageSrc={soul.desk.imageSrc} caption={soul.desk.caption} />

          <BentoCard
            id="lens"
            className={`md:col-span-6 lg:col-span-6 scroll-mt-28 border ${accent.border} ${accent.bg}`}
            delay={0.14}
          >
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-zinc-500">
              Lens · {r.label}
            </p>
            <h2 className="mt-2 font-display text-xl font-semibold text-zinc-50 sm:text-2xl">
              {r.headline}
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-zinc-400">{r.subhead}</p>
            <div className="mt-5 rounded-xl border border-white/[0.06] bg-[#12141a]/60 p-4">
              <p className="text-xs font-semibold uppercase tracking-wider text-zinc-500">
                {r.callout.title}
              </p>
              <p className="mt-2 text-sm leading-relaxed text-zinc-400">{r.callout.body}</p>
            </div>
            {role === 'engineering' && (
              <div className="mt-4 text-sm">
                <p className="text-zinc-500">{resources.promptingNote}</p>
                <a
                  href={resources.rubricVideoUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-2 inline-flex font-medium text-rose-300 underline decoration-rose-500/30 underline-offset-4 hover:decoration-rose-300"
                >
                  {resources.rubricVideoLabel} →
                </a>
              </div>
            )}
          </BentoCard>

          <BentoCard className="md:col-span-12 scroll-mt-28" delay={0.16}>
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-rose-300/90">
              How this maps to the role
            </p>
            <ul className="mt-4 grid gap-3 sm:grid-cols-2">
              {r.pitch.map((line) => (
                <li key={line} className="flex gap-3 text-sm leading-relaxed text-zinc-400">
                  <span className={`mt-2 h-1.5 w-1.5 shrink-0 rounded-full ${accent.dot}`} aria-hidden />
                  <span>{line}</span>
                </li>
              ))}
            </ul>
            <div className="mt-6 rounded-xl border border-white/[0.06] bg-[#0f1116]/80 p-4">
              <p className="text-xs font-semibold uppercase tracking-wider text-zinc-500">
                Traits I’m leaning into here
              </p>
              <ul className="mt-3 grid gap-2 sm:grid-cols-2">
                {r.matchedSkills.map((s) => (
                  <li key={s} className="text-sm text-zinc-500">
                    <span className="text-rose-400/80">·</span> {s}
                  </li>
                ))}
              </ul>
            </div>
          </BentoCard>

          <div
            id="work"
            className="md:col-span-12 scroll-mt-28 pt-2"
          >
            <h2 className="mb-4 font-display text-lg font-semibold text-zinc-200 sm:text-xl">
              Work that shaped me
            </h2>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-5">
              {experience.map((job, i) => (
                <BentoCard key={job.company + job.range} delay={0.05 * i}>
                  <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <p className="font-medium text-zinc-100">{job.role}</p>
                      <p className="text-sm text-rose-300/70">{job.company}</p>
                    </div>
                    <p className="text-[10px] font-semibold uppercase tracking-wider text-zinc-600">
                      {job.range}
                    </p>
                  </div>
                  <ul className="mt-4 space-y-2 text-sm leading-relaxed text-zinc-500">
                    {job.highlights.map((h) => (
                      <li key={h}>— {h}</li>
                    ))}
                  </ul>
                </BentoCard>
              ))}
            </div>
          </div>

          <BentoCard className="md:col-span-12 lg:col-span-7" delay={0.08}>
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-rose-300/90">
              Tools & craft
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {stack.map((s) => (
                <span
                  key={s}
                  className="rounded-lg border border-white/[0.08] bg-[#0f1116] px-3 py-1 text-sm text-zinc-300"
                >
                  {s}
                </span>
              ))}
            </div>
            <p className="mt-6 text-xs font-semibold uppercase tracking-wider text-zinc-600">
              Domains
            </p>
            <ul className="mt-2 space-y-1 text-sm text-zinc-500">
              {expertise.map((e) => (
                <li key={e}>{e}</li>
              ))}
            </ul>
            <p className="mt-5 text-xs font-semibold uppercase tracking-wider text-zinc-600">
              How I tend to collaborate
            </p>
            <div className="mt-2 flex flex-wrap gap-2">
              {softSkills.map((s) => (
                <span
                  key={s}
                  className="rounded-full border border-white/[0.06] px-3 py-0.5 text-xs text-zinc-500"
                >
                  {s}
                </span>
              ))}
            </div>
          </BentoCard>

          <BentoCard className="md:col-span-12 lg:col-span-5" delay={0.1}>
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-rose-300/90">
              Learning
            </p>
            <p className="mt-3 text-sm font-medium text-zinc-200">{education.degree}</p>
            <p className="mt-1 text-sm text-zinc-500">{education.note}</p>
            <ul className="mt-4 space-y-2 border-t border-white/[0.06] pt-4 text-sm text-zinc-500">
              {certifications.map((c) => (
                <li key={c}>{c}</li>
              ))}
            </ul>
          </BentoCard>

          <BentoCard id="reach" className="md:col-span-12 scroll-mt-28" delay={0.06}>
            <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
              <div className="max-w-xl">
                <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-rose-300/90">
                  Say hi
                </p>
                <h2 className="mt-2 font-display text-xl font-semibold tracking-tight text-zinc-100 sm:text-2xl">
                  Let’s talk
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-zinc-500">{contact.invite}</p>
              </div>
              <nav
                className="flex flex-wrap gap-2 sm:gap-3 lg:shrink-0"
                aria-label="Contact links"
              >
                <a
                  href={`mailto:${contact.email}`}
                  className="inline-flex items-center justify-center rounded-full border border-rose-400/40 bg-rose-500/15 px-5 py-2.5 text-sm font-semibold text-rose-100 transition hover:border-rose-300/60 hover:bg-rose-500/25"
                >
                  Email
                </a>
                <a
                  href={contact.blog}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 px-5 py-2.5 text-sm font-medium text-zinc-200 transition hover:border-white/20 hover:bg-white/10"
                >
                  Hashnode
                </a>
                <a
                  href={contact.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 px-5 py-2.5 text-sm font-medium text-zinc-200 transition hover:border-white/20 hover:bg-white/10"
                >
                  GitHub
                </a>
              </nav>
            </div>
          </BentoCard>
        </div>
      </main>

      <footer className="border-t border-white/[0.06] py-8 text-center text-xs text-zinc-600">
        Made with care,  {profile.name}
      </footer>
    </div>
  )
}

export default App

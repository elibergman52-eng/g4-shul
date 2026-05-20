import TopNav from '@/components/TopNav'
import Footer from '@/components/Footer'
import PageHero from '@/components/PageHero'
import SplitCallout from '@/components/SplitCallout'
import Manifesto from '@/components/Manifesto'
import CardPair from '@/components/CardPair'
import PhotoTile from '@/components/PhotoTile'
import { ArrowRight } from '@/components/Icons'
import type { Metadata } from 'next'

export const metadata: Metadata = { title: 'Shiurim — G4 Shul' }

function ShiurBoard() {
  const items = [
    { day: 'Daily', when: '6:30am',  subject: 'Daf yomi',                  teacher: 'R. Naftali',   topic: 'Bava Kamma · daf 27',        level: 'Open',      featured: false },
    { day: 'Sun',   when: '8:30pm',  subject: 'Halacha — hilchos Shabbos', teacher: 'R. Yosef Dov', topic: 'Borer · the basics',          level: 'Open',      featured: false },
    { day: 'Mon',   when: '9:00pm',  subject: 'Tanya — Likutei Amarim',    teacher: 'R. Mendel',    topic: 'Perek alef — bina',           level: 'New cycle', featured: true  },
    { day: 'Tue',   when: '8:45pm',  subject: 'Gemara — Bava Kamma',       teacher: 'R. Naftali',   topic: 'Source sheet on the table',   level: 'Open',      featured: false },
    { day: 'Wed',   when: '9:00pm',  subject: 'Chassidus — maamarim',      teacher: 'R. Mendel',    topic: 'Basi LeGani 5710',           level: 'Open',      featured: false },
    { day: 'Thu',   when: '10:15pm', subject: 'Farbrengen',                 teacher: 'open',         topic: "Reb Mendel · l'chaim",        level: 'Optional',  featured: true  },
  ]
  return (
    <div style={{
      background: 'var(--ds-surface-1)', borderRadius: 'var(--ds-radius-xl)',
      overflow: 'hidden', position: 'relative', boxShadow: 'var(--ds-elev-2)', padding: 28,
    }}>
      <div style={{
        display: 'flex', justifyContent: 'space-between', alignItems: 'baseline',
        paddingBottom: 18, borderBottom: '1px solid var(--ds-hairline)', marginBottom: 8,
      }}>
        <div>
          <span className="ds-eyebrow">The full week</span>
          <div className="ds-display-md" style={{ fontSize: 32, letterSpacing: '-1.3px', marginTop: 8 }}>Six shiurim · seven days.</div>
        </div>
        <span className="ds-caption">English · source sheets on the table</span>
      </div>

      <div className="g4-shiur" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 14, marginTop: 20 }}>
        {items.map((s, i) => (
          <article key={i} style={{
            background: s.featured ? 'var(--ds-surface-2)' : 'var(--ds-canvas)',
            borderRadius: 'var(--ds-radius-lg)', padding: 22, minHeight: 200,
            display: 'flex', flexDirection: 'column', gap: 12,
            border: s.featured ? '0' : '1px solid var(--ds-hairline-soft)',
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
              <span className="ds-eyebrow" style={{ color: 'var(--ds-ink)' }}>{s.day}</span>
              <span className="ds-caption" style={{ fontVariantNumeric: 'tabular-nums', color: 'var(--ds-ink-muted)' }}>{s.when}</span>
            </div>
            <h3 className="ds-display-md" style={{ fontSize: 22, lineHeight: 1.15, letterSpacing: '-0.7px' }}>{s.subject}</h3>
            <p className="ds-body-sm" style={{ color: 'var(--ds-ink-muted)' }}>{s.topic}</p>
            <div style={{
              marginTop: 'auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center',
              paddingTop: 8, borderTop: '1px solid var(--ds-hairline-soft)',
            }}>
              <span className="ds-caption">{s.teacher}</span>
              <span className="ds-caption" style={{
                color: 'var(--ds-ink)', padding: '4px 10px',
                borderRadius: 9999, border: '1px solid var(--ds-hairline)',
              }}>{s.level}</span>
            </div>
          </article>
        ))}
      </div>
    </div>
  )
}

function CurrentlyLearning() {
  const tracks = [
    { sub: 'Daf yomi',        where: 'Bava Kamma · daf 27',      progress: 0.42, hebrew: 'בבא קמא' },
    { sub: 'Tanya',           where: 'Likutei Amarim · perek 1', progress: 0.02, hebrew: 'תניא' },
    { sub: 'Chassidus',       where: 'Basi LeGani 5710 · ois 4', progress: 0.66, hebrew: 'באתי לגני' },
    { sub: 'Hilchos Shabbos', where: 'Borer · introduction',     progress: 0.18, hebrew: 'הלכות שבת' },
  ]
  return (
    <section className="ds-container" style={{ paddingBottom: 100 }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 28 }}>
        <div>
          <div className="ds-eyebrow">Currently learning</div>
          <h2 className="ds-display-md" style={{ fontSize: 28, letterSpacing: '-1px', marginTop: 8 }}>Where we are this week.</h2>
        </div>
        <a href="#" className="ds-body-sm" style={{
          color: 'var(--ds-accent-blue)', textDecoration: 'none',
          display: 'inline-flex', gap: 6, alignItems: 'center',
        }}>Past cycles <ArrowRight size={12} /></a>
      </div>
      <div className="g4-currently" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 16 }}>
        {tracks.map((t, i) => (
          <div key={i} style={{
            padding: 22, background: 'var(--ds-surface-1)',
            borderRadius: 'var(--ds-radius-lg)', display: 'flex', flexDirection: 'column', gap: 14,
            minHeight: 180,
          }}>
            <div className="ds-hebrew" style={{ fontSize: 22, color: 'var(--ds-ink-muted)', lineHeight: 1, direction: 'rtl' }}>{t.hebrew}</div>
            <div className="ds-display-md" style={{ fontSize: 22, letterSpacing: '-0.8px' }}>{t.sub}</div>
            <div className="ds-caption" style={{ color: 'var(--ds-ink-muted)' }}>{t.where}</div>
            <div style={{ marginTop: 'auto' }}>
              <div style={{ height: 2, background: 'var(--ds-hairline)', borderRadius: 2, overflow: 'hidden' }}>
                <div style={{ width: `${t.progress * 100}%`, height: '100%', background: 'var(--ds-accent-blue)' }} />
              </div>
              <div className="ds-caption" style={{ marginTop: 8, color: 'var(--ds-ink-muted)', fontVariantNumeric: 'tabular-nums' }}>
                {Math.round(t.progress * 100)}% through cycle
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

function Teachers() {
  const t = [
    { initials: 'RM', name: 'R. Mendel',      role: 'Chassidus · Tanya · Thursday fabreng' },
    { initials: 'RN', name: 'R. Naftali',     role: 'Daf yomi · Gemara' },
    { initials: 'RY', name: 'R. Yosef Dov',   role: 'Halacha · hilchos Shabbos' },
    { initials: '+',  name: 'Guest maggidim', role: 'Most months. See the weekly email.' },
  ]
  return (
    <section className="ds-container" style={{ paddingBottom: 100 }}>
      <div className="ds-eyebrow">Who&rsquo;s teaching</div>
      <h2 className="ds-display-xl" style={{
        fontSize: 'clamp(40px, 5vw, 64px)', letterSpacing: '-3px',
        marginTop: 12, marginBottom: 32, lineHeight: 0.95,
      }}>Three rabbis,<br/>one back room.</h2>
      <div className="g4-currently" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 16 }}>
        {t.map((m, i) => (
          <div key={i} style={{
            padding: 22, background: 'var(--ds-surface-1)',
            borderRadius: 'var(--ds-radius-lg)', display: 'flex', flexDirection: 'column', gap: 14,
            minHeight: 200,
          }}>
            <div style={{
              width: 56, height: 56, borderRadius: 999, background: 'var(--ds-canvas)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              font: "500 22px 'Inter Tight'", letterSpacing: '-1px', color: 'var(--ds-ink)',
              border: '1px solid var(--ds-hairline)',
            }}>{m.initials}</div>
            <div className="ds-display-md" style={{ fontSize: 22, letterSpacing: '-0.8px' }}>{m.name}</div>
            <div className="ds-caption" style={{ color: 'var(--ds-ink-muted)', lineHeight: 1.5 }}>{m.role}</div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default function ShiurimPage() {
  return (
    <>
      <TopNav active="shiurim" />
      <main>
        <PageHero
          eyebrow="Learn"
          headline={<>A shiur<br/>every night.</>}
          sub="Drop in to any single session. Most run 45 minutes. All in English, with the source sheet on the table. No prior knowledge assumed; bring a question."
          primary="Recordings + source sheets"
          secondary="Print this week's sheet"
        />

        <section className="ds-container" style={{ paddingBottom: 70 }}>
          <ShiurBoard />
        </section>

        <CurrentlyLearning />
        <Teachers />

        <SplitCallout
          title={<>Source sheets,<br/>not Spotify.</>}
          body="Every shiur publishes a one-page sheet — the passage, the meforshim, a line of vocabulary, and a question to leave with. Most recordings make it up by Monday. None of them are slick. The shiur is the room; the recording is a courtesy."
          cta="Browse the archive"
          decoration={
            <div style={{
              position: 'relative', width: '100%', height: 360,
              background: 'var(--ds-grad-orange)', borderRadius: 'var(--ds-radius-xxl)',
              overflow: 'hidden', padding: 30,
              display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
            }}>
              <div aria-hidden style={{
                position: 'absolute', inset: 0,
                background: 'radial-gradient(70% 50% at 70% -10%, rgba(255,255,255,0.30), transparent 60%)',
                pointerEvents: 'none',
              }} />
              <div style={{ position: 'relative' }}>
                <span className="ds-eyebrow" style={{ color: 'rgba(255,255,255,0.75)' }}>Archive · since 2018</span>
              </div>
              <div style={{ position: 'relative', display: 'flex', alignItems: 'flex-end', gap: 28 }}>
                <div>
                  <div className="ds-display-xl" style={{
                    fontSize: 'clamp(56px, 7vw, 110px)', letterSpacing: '-5px', lineHeight: 0.85,
                  }}>1,840</div>
                  <p className="ds-caption" style={{ marginTop: 10, color: 'rgba(255,255,255,0.86)' }}>recorded shiurim</p>
                </div>
                <div style={{ paddingBottom: 8 }}>
                  <div className="ds-display-md" style={{ fontSize: 30, letterSpacing: '-1.2px' }}>312</div>
                  <p className="ds-caption" style={{ marginTop: 8, color: 'rgba(255,255,255,0.86)' }}>source sheets</p>
                </div>
              </div>
            </div>
          }
        />

        <Manifesto>
          Most shiurim here started because someone walked in and asked a question. If you&rsquo;ve
          got one we haven&rsquo;t covered — Gemara, halacha, machshava, the parsha — say something.
          Reb Mendel keeps a list. Some of them turn into Tuesday nights.
        </Manifesto>

        <CardPair cards={[
          {
            visual: (
              <PhotoTile tone="warm" label="recommended start">
                <div style={{ position: 'absolute', left: 24, top: 22 }}>
                  <span className="ds-eyebrow" style={{ color: 'rgba(255,255,255,0.7)' }}>New here?</span>
                </div>
                <div style={{ position: 'absolute', right: 24, bottom: 22, textAlign: 'right' }}>
                  <span className="ds-hebrew" style={{ fontSize: 28, color: 'rgba(255,255,255,0.6)', direction: 'rtl', display: 'block' }}>תניא</span>
                  <span className="ds-display-md" style={{ fontSize: 30, letterSpacing: '-1.2px', display: 'block', marginTop: 4 }}>start with Tanya.</span>
                </div>
              </PhotoTile>
            ),
            title: "Where to start if you've never learned chassidus",
            meta: "Monday nights, 9pm, perek alef just kicked off. Eight months, one perek a week. R. Mendel keeps a free shtender for whoever walks in. No prep required.",
            link: 'Print the perek-alef sheet',
          },
          {
            visual: (
              <PhotoTile tone="cool" label="for chavrusas">
                <div style={{ position: 'absolute', left: 24, top: 22 }}>
                  <span className="ds-eyebrow" style={{ color: 'rgba(255,255,255,0.7)' }}>Find a chavrusa</span>
                </div>
                <div style={{ position: 'absolute', right: 24, bottom: 22, textAlign: 'right' }}>
                  <span className="ds-display-md" style={{ fontSize: 28, letterSpacing: '-1.1px', display: 'block' }}>chavrusa board.</span>
                  <span className="ds-caption" style={{ color: 'rgba(255,255,255,0.6)' }}>34 people learning now</span>
                </div>
              </PhotoTile>
            ),
            title: "We run a chavrusa board — pinned by the door",
            meta: "Looking for someone to learn Gemara Sundays? Hilchos brachos before mincha? Stick a card on the corkboard, or tell Reb Mendel. He matches faster than the board.",
            link: 'Join the board',
          },
        ]} />
      </main>
      <Footer />
    </>
  )
}

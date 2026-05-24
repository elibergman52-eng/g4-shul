import TopNav from '@/components/TopNav'
import Footer from '@/components/Footer'
import PageHero from '@/components/PageHero'
import SplitCallout from '@/components/SplitCallout'
import Manifesto from '@/components/Manifesto'
import CardPair from '@/components/CardPair'
import PhotoTile from '@/components/PhotoTile'
import { ArrowRight } from '@/components/Icons'

/* ── Z'manim poster mockup ── */
function ZmanimPoster() {
  const left = [
    ['Shacharis I', '6:45'],
    ['Shacharis II', '7:30'],
    ['Daf yomi', '8:15'],
    ['Mincha', '7:42'],
    ['Maariv I', '8:30'],
    ['Maariv II', '9:45'],
  ]
  const right = [
    ['Candles · Fri', '7:24'],
    ['Mincha · Fri', '7:30'],
    ['Shacharis · Shabbos', '9:00'],
    ['Kiddush', 'after davening'],
    ['Mincha · Shabbos', '7:00'],
    ['Havdalah', '8:31'],
  ]
  return (
    <div className="g4-poster" style={{
      background: 'var(--ds-surface-1)', borderRadius: 'var(--ds-radius-xl)',
      overflow: 'hidden', position: 'relative', aspectRatio: '16 / 10',
      boxShadow: 'var(--ds-elev-2)',
    }}>
      {/* browser chrome row */}
      <div style={{
        display: 'flex', alignItems: 'center', gap: 10, padding: '12px 16px',
        borderBottom: '1px solid var(--ds-hairline-soft)',
      }}>
        <div style={{ display: 'flex', gap: 6 }}>
          {['#3a3a3a','#3a3a3a','#3a3a3a'].map((c,i) => (
            <span key={i} style={{ width: 10, height: 10, borderRadius: 999, background: c }} />
          ))}
        </div>
        <span className="ds-caption" style={{ marginLeft: 12 }}>g4shul.org / z&#39;manim</span>
        <span className="ds-caption" style={{ marginLeft: 'auto', color: 'var(--ds-ink-muted)' }}>this week — 18 → 24 kislev</span>
      </div>

      <div className="g4-poster-inner" style={{
        padding: '40px 50px 50px', display: 'grid', gridTemplateColumns: '1fr 1fr',
        gap: 60, height: 'calc(100% - 45px)',
      }}>
        {([['Weekday', left], ['Shabbos', right]] as [string, string[][]][]).map(([label, rows]) => (
          <div key={label} style={{ display: 'flex', flexDirection: 'column' }}>
            <div className="ds-eyebrow" style={{ color: 'var(--ds-ink-muted)' }}>{label}</div>
            <div className="ds-display-lg" style={{
              fontSize: 'clamp(36px, 4.6vw, 60px)', letterSpacing: '-2.8px',
              marginTop: 12, marginBottom: 24, lineHeight: 0.95,
            }}>
              {label === 'Weekday' ? 'In the room.' : 'Erev Shabbos.'}
            </div>
            <div style={{ borderTop: '1px solid var(--ds-hairline)', flex: 1 }}>
              {rows.map(([k, v], i) => (
                <div key={i} style={{
                  display: 'flex', justifyContent: 'space-between',
                  padding: '12px 0', borderBottom: '1px solid var(--ds-hairline-soft)',
                  alignItems: 'baseline',
                }}>
                  <span className="ds-body" style={{ color: 'var(--ds-ink)' }}>{k}</span>
                  <span className="ds-body-sm" style={{
                    color: 'var(--ds-ink-muted)', fontVariantNumeric: 'tabular-nums',
                  }}>{v}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div aria-hidden style={{
        position: 'absolute', right: -120, bottom: -120, width: 360, height: 360,
        background: 'radial-gradient(circle, rgba(255,122,61,0.18), transparent 70%)',
        pointerEvents: 'none',
      }} />
    </div>
  )
}

/* ── Chevra strip ── */
function ChevraStrip() {
  const names = ['Lubavitch', 'Beis Medrash', 'Chazak', '770 alumni', 'Bnei Yisroel', 'Yeshiva of LES']
  return (
    <section className="ds-container" style={{ paddingBottom: 96 }}>
      <p className="ds-caption" style={{ textAlign: 'center', color: 'var(--ds-ink-muted)' }}>
        kept by chevra from
      </p>
      <div style={{
        marginTop: 26, display: 'flex', flexWrap: 'wrap', justifyContent: 'center',
        gap: '20px 56px', alignItems: 'center',
      }}>
        {names.map((n, i) => (
          <span key={i} className="ds-body-sm" style={{
            color: 'rgba(255,255,255,0.55)',
            font: "500 18px 'Inter Tight'", letterSpacing: '-0.4px',
          }}>{n}</span>
        ))}
      </div>
    </section>
  )
}

/* ── Three pillars ── */
function ThreePillars() {
  const items = [
    { eyebrow: 'I.',   title: 'Torah.',   body: "A daf every morning. A shiur every night. A halacha chabura on Sundays. Show up once or show up daily — the room is open either way.", bg: 'var(--ds-grad-violet)' },
    { eyebrow: 'II.',  title: 'Chevra.',  body: "No member list. No annual drive. Just the same faces at maariv, at the kiddush, at the late shiur, until you realize you're one of them.", bg: 'var(--ds-grad-magenta)' },
    { eyebrow: 'III.', title: 'Fabreng.', body: "Thursday nights. L'chaims, divrei Torah, and whatever Reb Mendel decides to say after the third one. No RSVP. Bring a niggun.", bg: 'var(--ds-grad-orange)' },
  ]
  return (
    <section className="ds-container" style={{ paddingBottom: 100 }}>
      <div className="g4-pillars" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 }}>
        {items.map((p, i) => (
          <article key={i} className="ds-spotlight" style={{
            background: p.bg, padding: 30, minHeight: 360,
            display: 'flex', flexDirection: 'column', position: 'relative', overflow: 'hidden',
          }}>
            <div aria-hidden style={{
              position: 'absolute', inset: 0,
              background: 'radial-gradient(80% 60% at 80% -10%, rgba(255,255,255,0.25), transparent 60%)',
              pointerEvents: 'none',
            }} />
            <div className="ds-eyebrow" style={{ color: 'rgba(255,255,255,0.7)', position: 'relative' }}>{p.eyebrow}</div>
            <h3 className="ds-display-lg" style={{
              fontSize: 'clamp(44px, 5vw, 64px)', letterSpacing: '-3px',
              marginTop: 14, position: 'relative',
            }}>{p.title}</h3>
            <p className="ds-body-lg" style={{
              color: 'rgba(255,255,255,0.86)', marginTop: 22, maxWidth: 360,
              position: 'relative', flex: 1,
            }}>{p.body}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

/* ── Block map decoration ── */
function BlockMap() {
  return (
    <div style={{ position: 'relative', width: '100%', height: 320 }}>
      <svg viewBox="0 0 420 320" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}>
        <defs>
          <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
            <path d="M 20 0 L 0 0 0 20" fill="none" stroke="rgba(255,255,255,0.04)" strokeWidth="0.5"/>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)"/>
        <line x1="0" y1="160" x2="420" y2="160" stroke="rgba(255,255,255,0.15)" strokeWidth="22"/>
        <line x1="200" y1="0" x2="200" y2="320" stroke="rgba(255,255,255,0.10)" strokeWidth="16"/>
        <g transform="translate(232 100)">
          <rect width="80" height="44" rx="4" fill="#fff"/>
          <text x="40" y="30" textAnchor="middle" fill="#000"
                style={{ font: "500 14px 'Inter Tight'", letterSpacing: '-0.5px' }}>G4</text>
        </g>
        <g transform="translate(232 100)">
          <line x1="40" y1="44" x2="40" y2="60" stroke="rgba(255,255,255,0.5)" strokeWidth="1.2"/>
          <circle cx="40" cy="64" r="3" fill="#0099ff"/>
        </g>
        <text x="240" y="190" fill="rgba(255,255,255,0.7)"
              style={{ font: "500 12px 'Inter Tight'", letterSpacing: '0.6px', textTransform: 'uppercase' }}>
          East 14th St.
        </text>
        <text x="210" y="20" fill="rgba(255,255,255,0.4)"
              style={{ font: "500 11px 'Inter Tight'", letterSpacing: '0.5px', textTransform: 'uppercase' }}>
          2nd ave →
        </text>
      </svg>
    </div>
  )
}

export default function Home() {
  return (
    <>
      <TopNav active="home" />
      <main>
        <PageHero
          eyebrow="A working beis medrash · est. 2018"
          headline={<>Shul is the room.<br/>Torah is the work.<br/>Chevra is the reason.</>}
          sub="Three minyanim a day, a shiur every night, and a farbrengen most Thursdays. Come learn. Stay late. Eat the kugel."
          primary="Get the weekly email"
          secondary="See this week's z'manim"
          secondaryHref="/whats-on"
        />

        <section className="ds-container" style={{ paddingBottom: 60 }}>
          <ZmanimPoster />
        </section>

        <ChevraStrip />

        <ThreePillars />

        <SplitCallout
          title={<>One block.<br/>Three minyanim.<br/>A daf at 6:30.</>}
          body="241 East 14th St. The door's the one with the mezuzah and no sign. We've been here since 2018 — long enough for the floor to remember the niggunim."
          cta="Plan a visit"
          decoration={<BlockMap />}
        />

        <Manifesto>
          We are a working beis medrash on the lower east side — three minyanim a day, a shiur every night,
          and a chevra that shows up. Not a synagogue with programs. A room with a shtender, a kettle,
          and people who&rsquo;d rather learn than not.
        </Manifesto>

        <CardPair cards={[
          {
            visual: (
              <PhotoTile tone="candle" label="thu · 10:15pm">
                <div style={{ position: 'absolute', left: 24, top: 22 }}>
                  <span className="ds-eyebrow" style={{ color: 'rgba(255,255,255,0.7)' }}>This Thursday</span>
                </div>
                <div style={{ position: 'absolute', right: 24, bottom: 22 }}>
                  <span className="ds-display-md" style={{ fontSize: 38, letterSpacing: '-1.5px', color: 'var(--ds-ink)' }}>fabreng.</span>
                </div>
              </PhotoTile>
            ),
            title: "Yud-Tes Kislev — the Rosh Hashana of Chassidus",
            meta: "Thursday 10:15pm. After maariv. Niggun, l'chaim, a maamar from the Rebbe. Doors open after maariv. No RSVP.",
            link: 'See the full lineup',
            linkHref: '/whats-on',
          },
          {
            visual: (
              <PhotoTile tone="warm" label="mon · 9pm">
                <div style={{ position: 'absolute', left: 24, top: 22 }}>
                  <span className="ds-eyebrow" style={{ color: 'rgba(255,255,255,0.7)' }}>Starting this week</span>
                </div>
                <div style={{ position: 'absolute', right: 24, bottom: 22, textAlign: 'right' }}>
                  <span className="ds-display-md" style={{ fontSize: 30, letterSpacing: '-1.2px', color: 'var(--ds-ink)', display: 'block' }}>tanya.</span>
                  <span className="ds-caption" style={{ color: 'rgba(255,255,255,0.6)' }}>likutei amarim — perek alef</span>
                </div>
              </PhotoTile>
            ),
            title: "New cycle: Tanya — Likutei Amarim",
            meta: "R. Mendel. Mondays 9pm. Eight months, perek by perek, source sheets on the table. Drop in anytime — perek alef this Monday.",
            link: 'See all shiurim',
            linkHref: '/shiurim',
          },
        ]} />
      </main>
      <Footer />
    </>
  )
}

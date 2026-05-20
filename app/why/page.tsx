import TopNav from '@/components/TopNav'
import Footer from '@/components/Footer'
import PageHero from '@/components/PageHero'
import SplitCallout from '@/components/SplitCallout'
import Manifesto from '@/components/Manifesto'
import CardPair from '@/components/CardPair'
import PhotoTile from '@/components/PhotoTile'
import type { Metadata } from 'next'

export const metadata: Metadata = { title: 'Why we are — G4 Shul' }

function Stat({ n, l }: { n: string; l: string }) {
  return (
    <div>
      <div className="ds-display-md" style={{ fontSize: 32, letterSpacing: '-1.2px' }}>{n}</div>
      <div className="ds-caption" style={{ marginTop: 4 }}>{l}</div>
    </div>
  )
}

function OriginPoster() {
  return (
    <div style={{
      background: 'var(--ds-surface-1)', borderRadius: 'var(--ds-radius-xl)',
      overflow: 'hidden', position: 'relative', boxShadow: 'var(--ds-elev-2)',
      display: 'grid', gridTemplateColumns: '1fr 1.4fr', minHeight: 560,
    }}>
      <PhotoTile tone="embers" label="winter 2018 · 1am">
        <svg viewBox="0 0 200 280" style={{
          position: 'absolute', inset: 0, width: '100%', height: '100%', opacity: 0.5,
        }}>
          <g fill="none" stroke="rgba(255,200,140,0.6)" strokeWidth="1.2">
            <path d="M70 90 Q70 130 100 132 Q130 130 130 90 L70 90 Z"/>
            <line x1="100" y1="132" x2="100" y2="180"/>
            <line x1="80" y1="180" x2="120" y2="180"/>
            <line x1="0" y1="200" x2="200" y2="200" strokeOpacity="0.4"/>
            <path d="M30 170 L70 168 L70 200 L30 198 Z" strokeOpacity="0.5"/>
            <path d="M70 168 L110 170 L110 200 L70 200 Z" strokeOpacity="0.5"/>
            <line x1="40" y1="178" x2="62" y2="178" strokeOpacity="0.3"/>
            <line x1="40" y1="185" x2="62" y2="185" strokeOpacity="0.3"/>
            <line x1="78" y1="178" x2="102" y2="178" strokeOpacity="0.3"/>
            <line x1="78" y1="185" x2="102" y2="185" strokeOpacity="0.3"/>
          </g>
          <circle cx="155" cy="120" r="3" fill="#ffb069"/>
          <ellipse cx="155" cy="120" rx="20" ry="40" fill="#ffb069" opacity="0.15"/>
        </svg>
      </PhotoTile>

      <div style={{ padding: 50, display: 'flex', flexDirection: 'column' }}>
        <div className="ds-eyebrow">Origin</div>
        <h2 className="ds-display-xl" style={{
          fontSize: 'clamp(40px, 5vw, 68px)', letterSpacing: '-3.2px',
          marginTop: 18, lineHeight: 0.95,
        }}>
          Four guys.<br/>A back room.<br/>A kettle.
        </h2>
        <div style={{ marginTop: 28, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20, color: 'var(--ds-ink-muted)' }}>
          <p className="ds-body" style={{ lineHeight: 1.55 }}>
            In the winter of 2018, four friends started learning chassidus in the back room
            of an apartment on East 14th. There was no plan to start a shul. There was a
            shiur, and then a maariv minyan, and then a Thursday-night farbrengen, and then
            a daf in the morning, and then it wasn&rsquo;t a back room anymore.
          </p>
          <p className="ds-body" style={{ lineHeight: 1.55 }}>
            We never raised money. We never wrote a mission statement. The chevra grew the
            way good chevra grows: one person showed up, then brought a friend, then a son,
            then a chavrusa. The G stands for the four of them — and for the fifth, who
            came in late and made the kugel.
          </p>
        </div>
        <div style={{ marginTop: 'auto', display: 'flex', gap: 28, alignItems: 'baseline', paddingTop: 36 }}>
          <Stat n="2018" l="Started" />
          <Stat n="3" l="Daily minyanim" />
          <Stat n="7" l="Weekly shiurim" />
          <Stat n="~140" l="Regulars" />
        </div>
      </div>
    </div>
  )
}

function Beliefs() {
  const items = ['Show up.', 'Learn anyway.', 'Sing louder.', 'Stay late.', 'Make the kugel.', "Don't fundraise."]
  return (
    <section className="ds-container" style={{ paddingBottom: 100 }}>
      <p className="ds-caption" style={{ textAlign: 'center', color: 'var(--ds-ink-muted)' }}>the unwritten rules</p>
      <div style={{ marginTop: 28, display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '14px 14px' }}>
        {items.map((n, i) => (
          <span key={i} style={{
            padding: '12px 22px', borderRadius: 999,
            border: '1px solid var(--ds-hairline)',
            background: 'var(--ds-surface-1)',
            color: 'var(--ds-ink)',
            font: "500 18px 'Inter Tight'",
            letterSpacing: '-0.5px',
          }}>{n}</span>
        ))}
      </div>
    </section>
  )
}

function Values() {
  const v = [
    { n: '01', t: 'Beis medrash, not synagogue.', b: 'The room is a place to learn. Tefilla happens in it. Programs do not.' },
    { n: '02', t: 'No member list.', b: "You're in by virtue of being in the room. We don't track. We don't mail. We remember faces." },
    { n: '03', t: "Don't fundraise. Build.", b: 'We pay rent, electric, and Reb Mendel. The rest comes from a kiddush, a sponsored shiur, a stranger who said thank you.' },
    { n: '04', t: 'A niggun is a beis medrash sound.', b: "A late shiur ends in a niggun. A simcha starts with one. We don't apologize for the volume." },
  ]
  return (
    <section className="ds-container" style={{ paddingBottom: 100 }}>
      <div className="g4-2col" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px 60px' }}>
        {v.map(({ n, t, b }) => (
          <div key={n} style={{ paddingTop: 28, borderTop: '1px solid var(--ds-hairline)' }}>
            <span className="ds-eyebrow" style={{ color: 'var(--ds-ink-muted)' }}>{n}</span>
            <h3 className="ds-display-md" style={{ fontSize: 30, letterSpacing: '-1.2px', marginTop: 10, lineHeight: 1.1 }}>{t}</h3>
            <p className="ds-body-lg ds-ink-muted" style={{ marginTop: 14, maxWidth: 440, lineHeight: 1.45 }}>{b}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default function WhyPage() {
  return (
    <>
      <TopNav active="why" />
      <main>
        <PageHero
          eyebrow="Why we are"
          headline={<>A back room.<br/>A kettle.<br/>Eight years in.</>}
          sub="G4 is a working beis medrash, started by friends, kept alive by chevra. We don't run programs. We learn. We daven. We farbreng. Everything else follows."
          primary="Talk to the rabbi"
          secondary="Meet the chevra"
        />

        <section className="ds-container" style={{ paddingBottom: 80 }}>
          <OriginPoster />
        </section>

        <Beliefs />
        <Values />

        <SplitCallout
          title={<>Not a shul.<br/>A beis medrash.</>}
          body="The distinction matters. A shul is built around tefilla; a beis medrash is built around limud. Tefilla happens in it — three times a day — but the gravitational center is the shtender, not the bima."
          cta="See this week's shiurim"
          decoration={
            <div style={{
              position: 'relative', width: '100%', height: 320,
              background: 'var(--ds-grad-violet)', borderRadius: 'var(--ds-radius-xxl)',
              overflow: 'hidden', padding: 30,
              display: 'flex', flexDirection: 'column', justifyContent: 'flex-end',
            }}>
              <div aria-hidden style={{
                position: 'absolute', inset: 0,
                background: 'radial-gradient(80% 60% at 20% -10%, rgba(255,255,255,0.30), transparent 60%)',
                pointerEvents: 'none',
              }} />
              <div className="ds-eyebrow" style={{ color: 'rgba(255,255,255,0.75)', position: 'relative' }}>Torah</div>
              <div className="ds-display-lg" style={{
                fontSize: 'clamp(48px, 6vw, 84px)', letterSpacing: '-3.6px',
                position: 'relative', lineHeight: 0.9, marginTop: 12,
              }}>limud,<br/>chevrusa,<br/>chiyus.</div>
            </div>
          }
        />

        <Manifesto>
          We are not trying to grow. We are trying to keep the room honest. If you&rsquo;ve found us,
          you&rsquo;ve probably already heard about us — that&rsquo;s how it works around here. Come learn.
          Stay for maariv. Eat the kugel. If you&rsquo;re still here at 1am, you&rsquo;re chevra.
        </Manifesto>

        <CardPair cards={[
          {
            visual: (
              <PhotoTile tone="warm" label="reb mendel">
                <div style={{ position: 'absolute', left: 24, top: 22 }}>
                  <span className="ds-eyebrow" style={{ color: 'rgba(255,255,255,0.7)' }}>Meet the rabbi</span>
                </div>
                <div style={{ position: 'absolute', right: 24, bottom: 22, textAlign: 'right' }}>
                  <span className="ds-display-md" style={{ fontSize: 34, letterSpacing: '-1.4px', display: 'block' }}>R. Mendel.</span>
                  <span className="ds-caption" style={{ color: 'rgba(255,255,255,0.6)' }}>mara d&rsquo;asra · since 2019</span>
                </div>
              </PhotoTile>
            ),
            title: "R. Mendel — semicha at 23, in the room ever since.",
            meta: "Teaches Tanya Mondays, chassidus Wednesdays, and whatever needs to be said at the Thursday farbrengen. Available for shailos any time the door's open.",
            link: 'Read his story',
          },
          {
            visual: (
              <PhotoTile tone="cool" label="how we daven">
                <div style={{ position: 'absolute', left: 24, top: 22 }}>
                  <span className="ds-eyebrow" style={{ color: 'rgba(255,255,255,0.7)' }}>Nusach</span>
                </div>
                <div style={{ position: 'absolute', right: 24, bottom: 22, textAlign: 'right' }}>
                  <span className="ds-display-md" style={{ fontSize: 34, letterSpacing: '-1.4px', display: 'block' }}>Ari z&rdquo;l.</span>
                  <span className="ds-caption" style={{ color: 'rgba(255,255,255,0.6)' }}>sefardi nusach on request</span>
                </div>
              </PhotoTile>
            ),
            title: "Nusach Ari — primary. Ashkenaz minyan on Shabbos mornings.",
            meta: "Slow shacharis on Shabbos (~3 hours). Weekday minyanim are 30-45 minutes. We daven loud enough to hear, soft enough to think.",
            link: "See this week's minyanim",
            linkHref: '/whats-on',
          },
        ]} />
      </main>
      <Footer />
    </>
  )
}

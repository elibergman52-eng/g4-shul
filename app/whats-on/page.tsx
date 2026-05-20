'use client'

import { useState } from 'react'
import TopNav from '@/components/TopNav'
import Footer from '@/components/Footer'
import PageHero from '@/components/PageHero'
import SplitCallout from '@/components/SplitCallout'
import Manifesto from '@/components/Manifesto'
import CardPair from '@/components/CardPair'
import PhotoTile from '@/components/PhotoTile'
import { ArrowRight } from '@/components/Icons'

/* ── This week board ── */
function ThisWeek() {
  const days = [
    { d: 'MON', n: '18', sub: 'Tanya · 9pm',          tag: 'shiur',   accent: false },
    { d: 'TUE', n: '19', sub: 'Bava Kamma · 8:45pm',  tag: 'shiur',   accent: false },
    { d: 'WED', n: '20', sub: 'Maamarim · 9pm',        tag: 'shiur',   accent: false },
    { d: 'THU', n: '21', sub: 'Farbrengen · 10:15',    tag: 'fabreng', accent: true  },
    { d: 'FRI', n: '22', sub: 'Candles · 7:24',        tag: 'shabbos', accent: false },
    { d: 'SAT', n: '23', sub: 'Shacharis · 9am',       tag: 'shabbos', accent: false },
    { d: 'SUN', n: '24', sub: 'Halacha · 8:30pm',      tag: 'shiur',   accent: false },
  ]
  return (
    <div style={{
      background: 'var(--ds-surface-1)', borderRadius: 'var(--ds-radius-xl)',
      overflow: 'hidden', position: 'relative', boxShadow: 'var(--ds-elev-2)', padding: 24,
    }}>
      <div style={{
        display: 'flex', justifyContent: 'space-between', alignItems: 'baseline',
        paddingBottom: 18, borderBottom: '1px solid var(--ds-hairline)', marginBottom: 22,
      }}>
        <div>
          <span className="ds-eyebrow">Week 47 · 18 → 24 Kislev</span>
          <div className="ds-display-md" style={{ fontSize: 32, letterSpacing: '-1.3px', marginTop: 8 }}>The next 7 days.</div>
        </div>
        <span className="ds-caption">All times Eastern · 241 East 14th</span>
      </div>
      <div className="g4-week" style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: 10 }}>
        {days.map(day => (
          <div key={day.d} style={{
            padding: 16, borderRadius: 'var(--ds-radius-lg)',
            background: day.accent ? 'var(--ds-surface-2)' : 'transparent',
            border: day.accent ? '0' : '1px solid var(--ds-hairline-soft)',
            display: 'flex', flexDirection: 'column', gap: 10, minHeight: 150,
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
              <span className="ds-caption" style={{ textTransform: 'uppercase', letterSpacing: '0.6px', color: 'var(--ds-ink-muted)' }}>{day.d}</span>
              {day.accent && <span style={{ width: 6, height: 6, borderRadius: 999, background: 'var(--ds-gradient-coral)' }} />}
            </div>
            <div className="ds-display-md" style={{ fontSize: 32, letterSpacing: '-1.4px', lineHeight: 1 }}>{day.n}</div>
            <span className="ds-caption" style={{
              marginTop: 'auto',
              color: day.accent ? 'var(--ds-ink)' : 'var(--ds-ink-muted)',
              lineHeight: 1.35,
            }}>{day.sub}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

/* ── Tag filters ── */
function TagFilters() {
  const tags = ['All', 'Shiurim', 'Farbrengen', 'Shabbos', 'Yom Tov', 'Special', 'Kiddush']
  const [active, setActive] = useState('All')
  return (
    <section className="ds-container" style={{ paddingBottom: 100 }}>
      <p className="ds-caption" style={{ textAlign: 'center', color: 'var(--ds-ink-muted)', marginBottom: 22 }}>
        filter what&rsquo;s coming
      </p>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 8 }}>
        {tags.map(t => (
          <button key={t} onClick={() => setActive(t)} style={{
            background: active === t ? 'var(--ds-primary)' : 'var(--ds-surface-1)',
            color: active === t ? 'var(--ds-on-primary)' : 'var(--ds-ink-muted)',
            padding: '10px 16px', borderRadius: 999, border: 0, cursor: 'pointer',
            font: "500 14px 'Inter'", letterSpacing: '-0.14px',
            transition: 'background 150ms var(--ds-ease), color 150ms var(--ds-ease)',
          }}>{t}</button>
        ))}
      </div>
    </section>
  )
}

/* ── Month ahead ── */
function MonthAhead() {
  const TAG_COLOR: Record<string, string> = {
    fabreng: 'var(--ds-gradient-coral)',
    shabbos: 'var(--ds-gradient-violet)',
    shiur:   'var(--ds-gradient-orange)',
    special: 'var(--ds-gradient-magenta)',
  }
  const groups = [
    { week: 'This week', items: [
      { when: 'Thu 10:15p', t: 'Fabreng — Yud-Tes Kislev', tag: 'fabreng' },
      { when: 'Sat 9:00a',  t: 'Slow shacharis — kiddush sponsored by the Goldbergs', tag: 'shabbos' },
    ]},
    { week: 'Next week', items: [
      { when: 'Tue 8:00p',  t: "Hadran on Bava Kamma — siyum + l'chaim", tag: 'special' },
      { when: 'Thu 10:15p', t: 'Fabreng — open mic, bring a story', tag: 'fabreng' },
      { when: 'Sun 7:30p',  t: 'Chanukah live — niggun + sufganiyot', tag: 'special' },
    ]},
    { week: 'Later in kislev', items: [
      { when: 'Wed 6:30p',  t: 'Erev Chanukah — menorah at the door', tag: 'shabbos' },
      { when: 'Mon 9:00p',  t: 'Tanya — perek bes', tag: 'shiur' },
      { when: 'Thu 10:15p', t: 'Fabreng — Chanukah, night 5', tag: 'fabreng' },
    ]},
  ]
  return (
    <section className="ds-container" style={{ paddingBottom: 100 }}>
      <div className="ds-eyebrow">The month ahead</div>
      <h2 className="ds-display-xl" style={{
        fontSize: 'clamp(40px, 5vw, 64px)', letterSpacing: '-3px',
        marginTop: 12, marginBottom: 36, lineHeight: 0.95,
      }}>Past this week,<br/>before chanukah.</h2>

      <div className="g4-monthcol" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 40 }}>
        {groups.map(g => (
          <div key={g.week}>
            <div className="ds-eyebrow" style={{ marginBottom: 14 }}>{g.week}</div>
            <div>
              {g.items.map((it, i) => (
                <div key={i} style={{
                  padding: '18px 0', borderTop: '1px solid var(--ds-hairline-soft)',
                  display: 'grid', gridTemplateColumns: '90px 1fr auto', gap: 14, alignItems: 'baseline',
                }}>
                  <span className="ds-body-sm" style={{ color: 'var(--ds-ink-muted)', fontVariantNumeric: 'tabular-nums' }}>{it.when}</span>
                  <span className="ds-body" style={{ color: 'var(--ds-ink)', lineHeight: 1.4 }}>{it.t}</span>
                  <span style={{ width: 8, height: 8, borderRadius: 999, background: TAG_COLOR[it.tag], display: 'inline-block' }} />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default function WhatsOnPage() {
  return (
    <>
      <TopNav active="on" />
      <main>
        <PageHero
          eyebrow="What's going on"
          headline={<>This week,<br/>in the room.</>}
          sub="Three minyanim every weekday, six shiurim, one farbrengen, and one slow shacharis. Times are real. Show up to any of it."
          primary="Add to your calendar"
          secondary="Subscribe by email"
        />

        <section className="ds-container" style={{ paddingBottom: 70 }}>
          <ThisWeek />
        </section>

        <TagFilters />
        <MonthAhead />

        <SplitCallout
          title={<>Thursday night.<br/>10:15pm.<br/>Bring a niggun.</>}
          body="A fabreng most weeks. L'chaims, divrei Torah, a maamar, a niggun, and whatever Reb Mendel decides to say after the third one. No RSVP. No dress code. Show up."
          cta="See the next farbrengen"
          decoration={
            <div style={{
              position: 'relative', width: '100%', height: 360,
              background: 'var(--ds-grad-coral)', borderRadius: 'var(--ds-radius-xxl)',
              overflow: 'hidden', padding: 30,
              display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
            }}>
              <div aria-hidden style={{
                position: 'absolute', inset: 0,
                background: 'radial-gradient(70% 50% at 90% -10%, rgba(255,255,255,0.30), transparent 60%)',
                pointerEvents: 'none',
              }} />
              <div style={{ position: 'relative', display: 'flex', justifyContent: 'space-between' }}>
                <span className="ds-eyebrow" style={{ color: 'rgba(255,255,255,0.75)' }}>This Thursday · 10:15pm</span>
                <span className="ds-caption" style={{ color: 'rgba(255,255,255,0.75)' }}>Yud-Tes Kislev</span>
              </div>
              <div style={{ position: 'relative' }}>
                <div className="ds-display-xl" style={{
                  fontSize: 'clamp(48px, 6.5vw, 96px)', letterSpacing: '-4.5px', lineHeight: 0.86,
                }}>fabreng.</div>
                <p className="ds-body" style={{ color: 'rgba(255,255,255,0.86)', marginTop: 14, maxWidth: 380 }}>
                  The Rosh Hashana of Chassidus. Doors open after maariv.
                </p>
              </div>
            </div>
          }
        />

        <Manifesto>
          We don&rsquo;t run events. We run a beis medrash. But: a shul where six shiurim meet
          every week and a fabreng happens every Thursday — that&rsquo;s a lot of things going on,
          most of which are just &ldquo;the room being open.&rdquo; Come for any of it.
        </Manifesto>

        <CardPair cards={[
          {
            visual: (
              <PhotoTile tone="embers" label="last thursday">
                <div style={{ position: 'absolute', left: 24, top: 22 }}>
                  <span className="ds-eyebrow" style={{ color: 'rgba(255,255,255,0.7)' }}>Recap</span>
                </div>
                <div style={{ position: 'absolute', right: 24, bottom: 22, textAlign: 'right' }}>
                  <span className="ds-display-md" style={{ fontSize: 30, letterSpacing: '-1.2px', display: 'block' }}>fabreng · 12.4</span>
                  <span className="ds-caption" style={{ color: 'rgba(255,255,255,0.6)' }}>2 maamarim, 4 niggunim, 1 sunrise</span>
                </div>
              </PhotoTile>
            ),
            title: "Last week's farbrengen — a recap",
            meta: "Started at 10:15. Ended at 4. Reb Mendel said the Rebbe Rashab's maamar from 5677. Yossi sang Tzomah. Mendy sang Daled Bavos. Coffee at 2:30. Photos in the next email.",
            link: 'Read the full recap',
          },
          {
            visual: (
              <PhotoTile tone="warm" label="dec · jan">
                <div style={{ position: 'absolute', left: 24, top: 22 }}>
                  <span className="ds-eyebrow" style={{ color: 'rgba(255,255,255,0.7)' }}>Yom tov ahead</span>
                </div>
                <div style={{ position: 'absolute', right: 24, bottom: 22, textAlign: 'right' }}>
                  <span className="ds-display-md" style={{ fontSize: 32, letterSpacing: '-1.3px', display: 'block' }}>chanukah.</span>
                  <span className="ds-caption" style={{ color: 'rgba(255,255,255,0.6)' }}>dec 14 → dec 22</span>
                </div>
              </PhotoTile>
            ),
            title: "Chanukah — eight nights, eight reasons to come back",
            meta: "Menorah at the door each night. Nightly fabreng after maariv on nights 1, 4, and 8. Live music night 5. Sufganiyot every night until they run out, which they will.",
            link: 'See the chanukah schedule',
          },
        ]} />
      </main>
      <Footer />
    </>
  )
}

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

/* ── Product image panels ── */
function ProductImage({ kind }: { kind: string }) {
  const grads: Record<string, string> = {
    book:    'radial-gradient(120% 90% at 30% 110%, #20140a 0%, #120b04 50%, #0b0703 100%)',
    niggun:  'radial-gradient(120% 90% at 70% 0%, #1a142a 0%, #0c0a18 50%, #06040c 100%)',
    hat:     'radial-gradient(120% 90% at 50% 100%, #1a1a1a 0%, #0e0e0e 60%, #060606 100%)',
    kiddush: 'var(--ds-grad-magenta)',
    sefer:   'radial-gradient(120% 90% at 50% 0%, #2a1810 0%, #160b06 60%, #080403 100%)',
    mug:     'radial-gradient(120% 90% at 50% 0%, #14202a 0%, #0a1018 60%, #050810 100%)',
  }

  const art: Record<string, React.ReactNode> = {
    book: (
      <svg viewBox="0 0 200 220" style={{ position:'absolute', inset: 0, width:'100%', height:'100%' }}>
        <rect x="62" y="40" width="76" height="140" fill="#1a1a1a" stroke="rgba(255,255,255,0.15)" strokeWidth="1"/>
        <rect x="66" y="44" width="68" height="132" fill="#0e0e0e"/>
        <text x="100" y="100" textAnchor="middle" fill="rgba(255,255,255,0.85)"
              style={{ font: "500 14px 'Inter Tight'", letterSpacing: '-0.4px' }}>G4</text>
        <text x="100" y="118" textAnchor="middle" fill="rgba(255,255,255,0.55)"
              style={{ font: "500 10px 'Inter Tight'", letterSpacing: '0.4px', textTransform: 'uppercase' }}>shiurim</text>
        <text x="100" y="160" textAnchor="middle" fill="rgba(255,255,255,0.4)"
              style={{ font: "500 16px 'Frank Ruhl Libre'", direction: 'rtl' }}>שיעורים</text>
      </svg>
    ),
    niggun: (
      <svg viewBox="0 0 200 220" style={{ position:'absolute', inset: 0, width:'100%', height:'100%' }}>
        <rect x="58" y="48" width="84" height="120" rx="2" fill="#0c0a18" stroke="rgba(255,255,255,0.18)" strokeWidth="1"/>
        {[0,1,2,3,4].map(i => (
          <line key={i} x1="66" y1={70 + i*12} x2="134" y2={70 + i*12} stroke="rgba(255,255,255,0.18)" strokeWidth="0.6"/>
        ))}
        {([[78,76],[92,82],[106,88],[120,82],[88,118],[104,124],[120,118]] as [number,number][]).map(([cx,cy], i) => (
          <ellipse key={i} cx={cx} cy={cy} rx="3.5" ry="2.8" fill="rgba(255,255,255,0.5)" transform={`rotate(-15 ${cx} ${cy})`}/>
        ))}
        <text x="100" y="184" textAnchor="middle" fill="rgba(255,255,255,0.6)"
              style={{ font: "500 10px 'Inter Tight'", letterSpacing: '0.4px', textTransform: 'uppercase' }}>niggun book</text>
      </svg>
    ),
    sefer: (
      <svg viewBox="0 0 200 220" style={{ position:'absolute', inset: 0, width:'100%', height:'100%' }}>
        <g transform="translate(40 60)">
          <path d="M0 0 L55 4 L55 100 L0 96 Z" fill="#1a0f06" stroke="rgba(255,200,140,0.3)" strokeWidth="1"/>
          <path d="M55 4 L110 0 L110 96 L55 100 Z" fill="#150c05" stroke="rgba(255,200,140,0.3)" strokeWidth="1"/>
          {[0,1,2,3,4].map(i => (
            <line key={`l${i}`} x1="8" y1={20 + i*14} x2="48" y2={20 + i*14} stroke="rgba(255,200,140,0.35)" strokeWidth="0.4"/>
          ))}
          {[0,1,2,3,4].map(i => (
            <line key={`r${i}`} x1="62" y1={20 + i*14} x2="102" y2={20 + i*14} stroke="rgba(255,200,140,0.35)" strokeWidth="0.4"/>
          ))}
        </g>
        <text x="100" y="184" textAnchor="middle" fill="rgba(255,255,255,0.55)"
              style={{ font: "500 10px 'Inter Tight'", letterSpacing: '0.4px', textTransform: 'uppercase' }}>tanya · perek alef</text>
      </svg>
    ),
    hat: (
      <svg viewBox="0 0 200 220" style={{ position:'absolute', inset: 0, width:'100%', height:'100%' }}>
        <ellipse cx="100" cy="115" rx="60" ry="20" fill="none" stroke="rgba(255,255,255,0.25)" strokeWidth="1"/>
        <ellipse cx="100" cy="115" rx="60" ry="48" fill="#0a0a0a" stroke="rgba(255,255,255,0.4)" strokeWidth="1"/>
        <path d="M40 115 Q100 80 160 115" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="0.8"/>
        <path d="M40 115 Q100 100 160 115" fill="none" stroke="rgba(255,255,255,0.12)" strokeWidth="0.6"/>
        <text x="100" y="184" textAnchor="middle" fill="rgba(255,255,255,0.55)"
              style={{ font: "500 10px 'Inter Tight'", letterSpacing: '0.4px', textTransform: 'uppercase' }}>g4 yarmulke</text>
      </svg>
    ),
    mug: (
      <svg viewBox="0 0 200 220" style={{ position:'absolute', inset: 0, width:'100%', height:'100%' }}>
        <rect x="58" y="60" width="80" height="100" rx="4" fill="#0a0e14" stroke="rgba(255,255,255,0.35)" strokeWidth="1"/>
        <path d="M138 80 Q170 90 170 110 Q170 130 138 140" fill="none" stroke="rgba(255,255,255,0.35)" strokeWidth="1"/>
        <text x="98" y="120" textAnchor="middle" fill="rgba(255,255,255,0.7)"
              style={{ font: "500 16px 'Inter Tight'", letterSpacing: '-0.5px' }}>G4</text>
        <ellipse cx="98" cy="60" rx="40" ry="6" fill="rgba(255,200,140,0.18)"/>
      </svg>
    ),
    kiddush: (
      <svg viewBox="0 0 200 220" style={{ position:'absolute', inset: 0, width:'100%', height:'100%' }}>
        <g fill="none" stroke="rgba(255,255,255,0.7)" strokeWidth="1.2">
          <path d="M70 70 Q70 115 100 117 Q130 115 130 70 L70 70 Z"/>
          <line x1="100" y1="117" x2="100" y2="160"/>
          <line x1="78" y1="160" x2="122" y2="160"/>
        </g>
        <path d="M70 70 Q70 100 100 102 Q130 100 130 70 Z" fill="rgba(255,255,255,0.25)"/>
      </svg>
    ),
  }

  return (
    <div style={{
      position: 'relative', width: '100%', height: '100%',
      background: grads[kind] || grads.book, overflow: 'hidden',
    }}>
      {art[kind]}
    </div>
  )
}

function ProductCard({ kind, eyebrow, name, sub, price, cta }: {
  kind: string; eyebrow: string; name: string; sub: string; price: string; cta: string
}) {
  const [hover, setHover] = useState(false)
  return (
    <article
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        background: hover ? 'var(--ds-surface-2)' : 'var(--ds-surface-1)',
        borderRadius: 'var(--ds-radius-xl)', overflow: 'hidden',
        display: 'flex', flexDirection: 'column',
        transition: 'background 200ms var(--ds-ease)', cursor: 'pointer',
      }}>
      <div style={{ aspectRatio: '4 / 5', position: 'relative' }}>
        <ProductImage kind={kind} />
        <span className="ds-caption" style={{
          position: 'absolute', left: 16, top: 14, color: 'rgba(255,255,255,0.7)',
          textTransform: 'uppercase', letterSpacing: '0.6px', fontSize: 11,
        }}>{eyebrow}</span>
      </div>
      <div style={{ padding: 20, display: 'flex', flexDirection: 'column', gap: 6 }}>
        <h3 className="ds-display-md" style={{ fontSize: 22, letterSpacing: '-0.8px', lineHeight: 1.1 }}>{name}</h3>
        <p className="ds-caption" style={{ color: 'var(--ds-ink-muted)', lineHeight: 1.5 }}>{sub}</p>
        <div style={{
          marginTop: 12, paddingTop: 14, borderTop: '1px solid var(--ds-hairline-soft)',
          display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        }}>
          <span className="ds-body-sm" style={{ fontVariantNumeric: 'tabular-nums', color: 'var(--ds-ink)' }}>{price}</span>
          <span className="ds-body-sm" style={{ color: 'var(--ds-accent-blue)', display: 'inline-flex', gap: 6, alignItems: 'center' }}>
            {cta} <ArrowRight size={12} />
          </span>
        </div>
      </div>
    </article>
  )
}

function Products() {
  const items = [
    { kind: 'sefer',   eyebrow: 'Sefer',   name: 'Tanya — perek alef sheet', sub: 'A4 source sheet. Hebrew + English. The Monday-night cycle in one print.',        price: '$0 · download', cta: 'Print' },
    { kind: 'book',    eyebrow: 'Book',    name: 'G4 shiurim · vol. I',      sub: 'Eight years of transcribed Wednesday-night maamarim. Hand-bound. 384pp.',        price: '$36',           cta: 'Order' },
    { kind: 'niggun',  eyebrow: 'Music',   name: 'The niggun book',           sub: '120 niggunim in standard notation + transliteration. The book by the table.',     price: '$24',           cta: 'Order' },
    { kind: 'hat',     eyebrow: 'Wear',    name: 'G4 yarmulke · black wool',  sub: "Hand-stitched. The one Reb Mendel keeps trying to give away.",                    price: '$18',           cta: 'Order' },
    { kind: 'mug',     eyebrow: 'Wear',    name: 'Late shiur mug',            sub: '12oz. Black enamel. Says nothing on it. Holds the tea between 9 and 1.',         price: '$14',           cta: 'Order' },
    { kind: 'kiddush', eyebrow: 'Sponsor', name: 'Sponsor a kiddush',         sub: 'Herring, kugel, cake, a 3-line dedication printed in the weekly email.',          price: 'from $180',     cta: 'Pick a week' },
  ]
  return (
    <section className="ds-container" style={{ paddingBottom: 100 }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 30 }}>
        <div className="ds-eyebrow">In the room</div>
        <span className="ds-caption">6 items · pickup at the door · ships in 5 days</span>
      </div>
      <div className="g4-products" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 }}>
        {items.map((p, i) => <ProductCard key={i} {...p} />)}
      </div>
    </section>
  )
}

function Categories() {
  const c = [
    { t: 'Seforim',       n: '14'  },
    { t: 'Source sheets', n: '312' },
    { t: 'Niggunim',      n: '120' },
    { t: 'Wear',          n: '6'   },
    { t: 'Sponsorships',  n: '3'   },
  ]
  const [active, setActive] = useState('All')
  return (
    <section className="ds-container" style={{ paddingBottom: 100 }}>
      <p className="ds-caption" style={{ textAlign: 'center', color: 'var(--ds-ink-muted)', marginBottom: 24 }}>categories</p>
      <div className="g4-cats" style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: 14 }}>
        {c.map(({ t, n }) => (
          <button key={t} onClick={() => setActive(t)} style={{
            padding: 22, borderRadius: 'var(--ds-radius-lg)',
            background: active === t ? 'var(--ds-surface-2)' : 'var(--ds-surface-1)',
            color: 'var(--ds-ink)', border: 0, cursor: 'pointer',
            textAlign: 'left', transition: 'background 150ms var(--ds-ease)',
            display: 'flex', flexDirection: 'column', gap: 12,
          }}>
            <span className="ds-display-md" style={{ fontSize: 28, letterSpacing: '-1px', fontVariantNumeric: 'tabular-nums' }}>{n}</span>
            <span className="ds-caption" style={{ color: 'var(--ds-ink-muted)' }}>{t}</span>
          </button>
        ))}
      </div>
    </section>
  )
}

export default function StorePage() {
  return (
    <>
      <TopNav active="store" />
      <main>
        <PageHero
          eyebrow="Store"
          headline={<>Seforim,<br/>niggunim,<br/>the occasional hat.</>}
          sub="The shul publishes a small handful of things — transcribed shiurim, source sheets, a niggun book, the yarmulke we order in bulk. Every dollar goes back into the room."
          primary="Sponsor a kiddush"
          secondary="Pickup at the door"
        />

        <Products />
        <Categories />

        <SplitCallout
          title={<>Sponsor a kiddush.<br/>Feed the chevra.</>}
          body="A G4 kiddush is herring, kugel, a bottle, and a cake. From $180 a week. We print a three-line dedication in the weekly email and read it at the kiddush. Yahrzeits, simchas, refuahs — whatever you want noted."
          cta="Pick a week"
          decoration={
            <div style={{
              position: 'relative', width: '100%', height: 360,
              background: 'var(--ds-grad-violet)', borderRadius: 'var(--ds-radius-xxl)',
              overflow: 'hidden', padding: 30,
              display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
            }}>
              <div aria-hidden style={{
                position: 'absolute', inset: 0,
                background: 'radial-gradient(70% 50% at 10% -10%, rgba(255,255,255,0.30), transparent 60%)',
                pointerEvents: 'none',
              }} />
              <div style={{ position: 'relative', display: 'flex', justifyContent: 'space-between' }}>
                <span className="ds-eyebrow" style={{ color: 'rgba(255,255,255,0.75)' }}>Next available · Shabbos parshas vayeishev</span>
              </div>
              <div style={{ position: 'relative' }}>
                <div className="ds-display-xl" style={{ fontSize: 'clamp(56px, 7vw, 110px)', letterSpacing: '-5px', lineHeight: 0.85 }}>
                  $180<span style={{ fontSize: '0.45em', letterSpacing: '-0.5px', color: 'rgba(255,255,255,0.7)' }}> · per week</span>
                </div>
                <p className="ds-body" style={{ color: 'rgba(255,255,255,0.86)', marginTop: 14, maxWidth: 380 }}>
                  Bigger kiddush, hot food, or a shabbos lunch? See the tiers.
                </p>
              </div>
            </div>
          }
        />

        <Manifesto>
          We don&rsquo;t have a gift shop and we don&rsquo;t run a fundraiser. Everything here exists because
          someone in the room wanted it to. Buy a sefer if the price is right. Sponsor a kiddush
          if you&rsquo;ve got a reason. The room is open either way.
        </Manifesto>

        <CardPair cards={[
          {
            visual: (
              <PhotoTile tone="warm" label="bestseller">
                <div style={{ position: 'absolute', left: 24, top: 22 }}>
                  <span className="ds-eyebrow" style={{ color: 'rgba(255,255,255,0.7)' }}>Most ordered</span>
                </div>
                <div style={{ position: 'absolute', right: 24, bottom: 22, textAlign: 'right' }}>
                  <span className="ds-display-md" style={{ fontSize: 32, letterSpacing: '-1.3px', display: 'block' }}>shiurim · vol. I</span>
                  <span className="ds-caption" style={{ color: 'rgba(255,255,255,0.6)' }}>384pp · hand-bound · $36</span>
                </div>
              </PhotoTile>
            ),
            title: "G4 shiurim · volume I",
            meta: "Eight years of Wednesday-night maamarim, transcribed, edited, and bound. 384 pages. Reb Mendel insisted on a footnote count, not a chapter count. There are 1,047 footnotes.",
            link: 'Order — $36',
          },
          {
            visual: (
              <PhotoTile tone="cool" label="custom">
                <div style={{ position: 'absolute', left: 24, top: 22 }}>
                  <span className="ds-eyebrow" style={{ color: 'rgba(255,255,255,0.7)' }}>Dedicate</span>
                </div>
                <div style={{ position: 'absolute', right: 24, bottom: 22, textAlign: 'right' }}>
                  <span className="ds-display-md" style={{ fontSize: 32, letterSpacing: '-1.3px', display: 'block' }}>a shiur.</span>
                  <span className="ds-caption" style={{ color: 'rgba(255,255,255,0.6)' }}>any night · from $54</span>
                </div>
              </PhotoTile>
            ),
            title: "Dedicate a shiur — yahrzeit, simcha, refuah",
            meta: "Pick a night. Send the dedication. Reb Naftali reads it before the shiur and the chevra says amen. Recordings carry it in the file name forever.",
            link: 'Choose a night',
          },
        ]} />
      </main>
      <Footer />
    </>
  )
}

import React from 'react'
import Link from 'next/link'

const cols = [
  { head: 'Shul',    links: ["Z'manim", 'Shiurim', 'Calendar', 'Sponsor a kiddush'] },
  { head: 'Chevra',  links: ['Meet the rabbi', 'Membership', 'New here?', 'Visiting'] },
  { head: 'Contact', links: ['rabbi@g4shul.org', 'office@g4shul.org', '(347) 555-0184', '241 East 14th St.'] },
]

export default function Footer() {
  return (
    <footer style={{ borderTop: '1px solid var(--ds-hairline-soft)', paddingTop: 64 }}>
      <div className="ds-container g4-footer-grid" style={{
        display: 'grid', gridTemplateColumns: '1.4fr 1fr 1fr 1fr', gap: 32,
      }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <span style={{ font: "500 28px 'Inter Tight'", letterSpacing: '-1.4px', color: 'var(--ds-ink)' }}>G4</span>
            <span style={{ width: 1, height: 24, background: 'var(--ds-ink)', opacity: 0.4 }} />
            <span style={{ font: "500 16px 'Inter Tight'", color: 'var(--ds-ink)', letterSpacing: '-0.4px' }}>shul</span>
          </div>
          <p className="ds-caption" style={{ marginTop: 14, maxWidth: 240 }}>
            Torah · Chevra · Fabreng. A working beis medrash, open seven days a week.
          </p>
          <p className="ds-caption" style={{ marginTop: 16 }}>© 5786 · 2026</p>
        </div>

        {cols.map(c => (
          <div key={c.head}>
            <div className="ds-caption" style={{ color: 'var(--ds-ink)', fontWeight: 600 }}>{c.head}</div>
            <ul style={{ listStyle: 'none', padding: 0, margin: '14px 0 0', display: 'flex', flexDirection: 'column', gap: 8 }}>
              {c.links.map(l => (
                <li key={l}>
                  <a href="#" className="ds-caption" style={{ color: 'var(--ds-ink-muted)', textDecoration: 'none' }}>{l}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="ds-container" style={{
        marginTop: 80, paddingTop: 24, borderTop: '1px solid var(--ds-hairline-soft)',
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
      }}>
        <span className="ds-caption">A 501(c)(3) · EIN on request</span>
        <span className="ds-caption">Built in the room.</span>
      </div>

      {/* Giant outline wordmark */}
      <div aria-hidden style={{
        position: 'relative', width: '100%', overflow: 'hidden',
        marginTop: 40, lineHeight: 0.78, paddingBottom: 0,
      }}>
        <div style={{
          font: "500 clamp(160px, 28vw, 420px) 'Inter Tight'",
          letterSpacing: '-22px',
          color: 'transparent',
          WebkitTextStroke: '1px rgba(255,255,255,0.08)',
          whiteSpace: 'nowrap', textAlign: 'center',
          paddingLeft: '4vw', paddingRight: '4vw',
          marginBottom: '-8vw',
        }}>G4 shul</div>
      </div>
    </footer>
  )
}

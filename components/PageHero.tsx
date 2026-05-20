import React from 'react'
import Link from 'next/link'
import { ArrowRight } from './Icons'

interface PageHeroProps {
  eyebrow: string
  headline: React.ReactNode
  sub?: string
  primary?: string
  secondary?: string
  secondaryHref?: string
}

export default function PageHero({ eyebrow, headline, sub, primary, secondary, secondaryHref = '#' }: PageHeroProps) {
  return (
    <section className="ds-container" style={{ paddingTop: 80, paddingBottom: 60, position: 'relative' }}>
      <div className="ds-eyebrow" style={{ marginBottom: 30 }}>{eyebrow}</div>
      <h1 className="ds-display-xxl" style={{ maxWidth: 1100 }}>{headline}</h1>
      {sub && (
        <p className="ds-body-lg ds-ink-muted" style={{ maxWidth: 620, marginTop: 32, lineHeight: 1.35 }}>{sub}</p>
      )}
      <div style={{ display: 'flex', gap: 14, marginTop: 36, alignItems: 'center', flexWrap: 'wrap' }}>
        {primary && (
          <button className="ds-btn-primary" style={{ padding: '12px 18px' }}>
            {primary} <ArrowRight size={14} />
          </button>
        )}
        {secondary && (
          <Link href={secondaryHref} className="ds-body-sm" style={{
            color: 'var(--ds-ink-muted)', textDecoration: 'none',
            display: 'inline-flex', gap: 6, alignItems: 'center',
          }}>
            {secondary} <ArrowRight size={12} />
          </Link>
        )}
      </div>

      {/* faint diagonal echo */}
      <div aria-hidden style={{
        position: 'absolute', top: 0, right: 0, width: '38%', height: '100%',
        maskImage: 'linear-gradient(135deg, transparent 55%, black 80%)',
        WebkitMaskImage: 'linear-gradient(135deg, transparent 55%, black 80%)',
        background: 'repeating-linear-gradient(135deg, transparent 0 60px, rgba(255,255,255,0.025) 60px 61px)',
        pointerEvents: 'none',
      }} />
    </section>
  )
}

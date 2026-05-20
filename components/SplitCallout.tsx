import React from 'react'
import { ArrowRight } from './Icons'

interface SplitCalloutProps {
  title: React.ReactNode
  body: string
  cta?: string
  decoration?: React.ReactNode
}

export default function SplitCallout({ title, body, cta, decoration }: SplitCalloutProps) {
  return (
    <section className="ds-container" style={{ paddingTop: 80, paddingBottom: 80 }}>
      <div className="g4-split" style={{
        display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 60, alignItems: 'center', minHeight: 360,
      }}>
        <div>
          <h2 className="ds-display-lg" style={{
            fontSize: 'clamp(40px, 5.2vw, 68px)', letterSpacing: '-3.2px', lineHeight: 0.94,
          }}>{title}</h2>
          <p className="ds-body-lg ds-ink-muted" style={{ maxWidth: 440, marginTop: 24 }}>{body}</p>
          {cta && (
            <button className="ds-btn-primary" style={{ marginTop: 30, padding: '12px 18px' }}>
              {cta} <ArrowRight size={14} />
            </button>
          )}
        </div>
        <div style={{ position: 'relative', minHeight: 280 }}>
          {decoration}
        </div>
      </div>
    </section>
  )
}

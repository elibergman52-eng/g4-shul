import React from 'react'
import Link from 'next/link'
import { ArrowRight } from './Icons'

interface Card {
  visual: React.ReactNode
  title: string
  meta: string
  link: string
  linkHref?: string
}

function FeatureCard({ visual, title, meta, link, linkHref = '#' }: Card) {
  return (
    <article style={{
      background: 'var(--ds-surface-1)',
      borderRadius: 'var(--ds-radius-xl)',
      overflow: 'hidden',
      display: 'flex',
      flexDirection: 'column',
    }}>
      <div style={{ aspectRatio: '16 / 10', position: 'relative', overflow: 'hidden' }}>{visual}</div>
      <div style={{ padding: 24, display: 'flex', flexDirection: 'column', gap: 8 }}>
        <h3 className="ds-headline" style={{ fontSize: 18, letterSpacing: '-0.4px' }}>{title}</h3>
        <p className="ds-caption" style={{ color: 'var(--ds-ink-muted)', fontSize: 14, lineHeight: 1.5 }}>{meta}</p>
        <a href={linkHref} className="ds-body-sm" style={{
          color: 'var(--ds-accent-blue)', marginTop: 6, textDecoration: 'none',
          display: 'inline-flex', gap: 6, alignItems: 'center',
        }}>
          {link} <ArrowRight size={12} />
        </a>
      </div>
    </article>
  )
}

export default function CardPair({ cards }: { cards: Card[] }) {
  return (
    <section className="ds-container" style={{ paddingBottom: 100 }}>
      <div className="g4-2col" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20 }}>
        {cards.map((c, i) => <FeatureCard key={i} {...c} />)}
      </div>
    </section>
  )
}

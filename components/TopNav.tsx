'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { ArrowRight } from './Icons'

const PAGES = [
  { id: 'home',    label: 'Home',             href: '/' },
  { id: 'why',     label: 'Why we are',       href: '/why' },
  { id: 'on',      label: "What's going on",  href: '/whats-on' },
  { id: 'shiurim', label: 'Shiurim',          href: '/shiurim' },
  { id: 'store',   label: 'Store',            href: '/store' },
]

export default function TopNav({ active }: { active: string }) {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 4)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header style={{
      position: 'sticky', top: 0, zIndex: 50,
      background: scrolled ? 'rgba(9,9,9,0.72)' : 'transparent',
      backdropFilter: scrolled ? 'blur(20px)' : 'none',
      WebkitBackdropFilter: scrolled ? 'blur(20px)' : 'none',
      borderBottom: scrolled ? '1px solid var(--ds-hairline-soft)' : '1px solid transparent',
      transition: 'background 200ms var(--ds-ease), border-color 200ms var(--ds-ease)',
    }}>
      <div className="ds-container" style={{ height: 56, display: 'flex', alignItems: 'center', gap: 24 }}>
        <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: 8, textDecoration: 'none' }} aria-label="G4 shul">
          <span style={{ font: "500 22px 'Inter Tight'", letterSpacing: '-1.1px', color: 'var(--ds-ink)' }}>G4</span>
          <span style={{ width: 1, height: 18, background: 'var(--ds-ink)', opacity: 0.4 }} />
          <span style={{ font: "500 13px 'Inter Tight'", color: 'var(--ds-ink)', letterSpacing: '-0.3px' }}>shul</span>
        </Link>

        <nav style={{ display: 'flex', gap: 22, marginLeft: 'auto' }}>
          {PAGES.map(p => (
            <Link key={p.id} href={p.href} className="ds-body-sm" style={{
              color: p.id === active ? 'var(--ds-ink)' : 'var(--ds-ink-muted)',
              textDecoration: 'none',
              transition: 'color 150ms var(--ds-ease)',
            }}
              onMouseEnter={e => ((e.currentTarget as HTMLElement).style.color = 'var(--ds-ink)')}
              onMouseLeave={e => ((e.currentTarget as HTMLElement).style.color = p.id === active ? 'var(--ds-ink)' : 'var(--ds-ink-muted)')}>
              {p.label}
            </Link>
          ))}
        </nav>

        <div style={{ display: 'flex', gap: 8 }}>
          <button className="ds-btn-primary" style={{ padding: '8px 14px' }}>
            Get the weekly email <ArrowRight size={14} />
          </button>
        </div>
      </div>
    </header>
  )
}

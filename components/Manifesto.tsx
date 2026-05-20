import React from 'react'

export default function Manifesto({ children, align = 'left' }: { children: React.ReactNode; align?: 'left' | 'center' }) {
  return (
    <section className="ds-container" style={{ paddingTop: 60, paddingBottom: 100 }}>
      <p className="ds-display-md" style={{
        fontSize: 'clamp(22px, 2vw, 30px)',
        lineHeight: 1.32, letterSpacing: '-0.6px', fontWeight: 500,
        maxWidth: 720,
        marginLeft: align === 'center' ? 'auto' : 0,
        marginRight: align === 'center' ? 'auto' : 0,
        color: 'var(--ds-ink)',
      }}>{children}</p>
    </section>
  )
}

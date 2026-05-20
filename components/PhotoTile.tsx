import React from 'react'

const grads: Record<string, string> = {
  warm:   'radial-gradient(120% 90% at 30% 110%, #2a1a0a 0%, #181106 45%, #0e0904 100%)',
  cool:   'radial-gradient(120% 90% at 70% -10%, #142233 0%, #0c1420 50%, #060a10 100%)',
  coal:   'radial-gradient(120% 90% at 50% 100%, #1f1c18 0%, #131110 60%, #0b0a09 100%)',
  embers: 'radial-gradient(120% 90% at 30% 110%, #3a1a08 0%, #1e0d05 50%, #0c0604 100%)',
  candle: 'radial-gradient(60% 50% at 70% 70%, #ffb069 0%, #6a3814 40%, #1a0a04 80%)',
}

interface PhotoTileProps {
  tone?: keyof typeof grads
  label?: string
  children?: React.ReactNode
  style?: React.CSSProperties
}

export default function PhotoTile({ tone = 'warm', label, children, style }: PhotoTileProps) {
  return (
    <div style={{
      position: 'relative', width: '100%', height: '100%',
      background: grads[tone] || grads.warm,
      overflow: 'hidden', ...style,
    }}>
      {children}
      {label && (
        <span className="ds-caption" style={{
          position: 'absolute', left: 16, bottom: 14,
          color: 'rgba(255,255,255,0.55)',
          letterSpacing: '0.4px', textTransform: 'uppercase', fontSize: 11,
        }}>{label}</span>
      )}
    </div>
  )
}

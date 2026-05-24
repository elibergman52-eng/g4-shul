import React from 'react'

interface IconProps {
  size?: number
  className?: string
  style?: React.CSSProperties
}

const Icon = ({ d, size = 20, className, style }: { d: React.ReactNode } & IconProps) => (
  <svg
    width={size} height={size} viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round"
    className={className} style={style}
  >{d}</svg>
)

export const ArrowRight = (p: IconProps) => <Icon {...p} d={<><path d="M5 12h14"/><path d="M13 6l6 6-6 6"/></>} />
export const ArrowUpRight = (p: IconProps) => <Icon {...p} d={<><path d="M7 17 17 7"/><path d="M8 7h9v9"/></>} />
export const ArrowDown = (p: IconProps) => <Icon {...p} d={<><path d="M12 5v14"/><path d="M6 13l6 6 6-6"/></>} />
export const Calendar = (p: IconProps) => <Icon {...p} d={<><rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/></>} />
export const Clock = (p: IconProps) => <Icon {...p} d={<><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></>} />
export const Book = (p: IconProps) => <Icon {...p} d={<><path d="M4 4h12a4 4 0 0 1 4 4v12H8a4 4 0 0 1-4-4z"/><path d="M4 4v12"/></>} />
export const Users = (p: IconProps) => <Icon {...p} d={<><circle cx="9" cy="8" r="3.5"/><path d="M3 20c0-3.5 2.7-6 6-6s6 2.5 6 6"/><circle cx="17" cy="9" r="2.5"/><path d="M14 20c0-2.5 1.5-4.5 4-4.5s3 1.5 3 4.5"/></>} />
export const Mail = (p: IconProps) => <Icon {...p} d={<><rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6 9-6"/></>} />
export const Check = (p: IconProps) => <Icon {...p} d={<><path d="M5 12l5 5L20 7"/></>} />
export const Cart = (p: IconProps) => <Icon {...p} d={<><circle cx="9" cy="20" r="1.5"/><circle cx="17" cy="20" r="1.5"/><path d="M3 4h2l2.5 12h11l2.5-9H6"/></>} />
export const Play = (p: IconProps) => <Icon {...p} d={<><path d="M6 4l14 8-14 8z"/></>} />
export const Mic = (p: IconProps) => <Icon {...p} d={<><rect x="9" y="3" width="6" height="12" rx="3"/><path d="M5 11a7 7 0 0 0 14 0"/><path d="M12 18v3"/></>} />
export const Pin = (p: IconProps) => <Icon {...p} d={<><path d="M21 11.5a8.5 8.5 0 1 1-17 0c0-4 3-7.5 8.5-9 5.5 1.5 8.5 5 8.5 9z"/><circle cx="12" cy="11" r="3"/></>} />
export const Dot = (p: IconProps) => <Icon {...p} d={<><circle cx="12" cy="12" r="2.5" fill="currentColor"/></>} />
export const Menu = (p: IconProps) => <Icon {...p} d={<><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></>} />
export const X = (p: IconProps) => <Icon {...p} d={<><path d="M18 6 6 18"/><path d="M6 6l12 12"/></>} />

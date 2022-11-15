import './Card.scss'
import { CSSProperties, ReactNode } from 'react'

interface Props {
  className: string
  shadowColor: string
  children: ReactNode
}

export default function Card({ shadowColor, children, className }: Props) {
  const styleColor = { '--shadow-bg': shadowColor } as CSSProperties

  return (
    <div className={`card ${className}`} style={styleColor}>
      <div className="content">{children}</div>
    </div>
  )
}

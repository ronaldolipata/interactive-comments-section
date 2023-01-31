import { ReactNode } from 'react'

import './Card.css'

export interface CardProps {
  children: ReactNode
}

export default function Card({ children }: CardProps) {
  return <div className="cardContainer">{children}</div>
}

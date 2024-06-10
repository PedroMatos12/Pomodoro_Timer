import { ReactNode } from 'react'
import { ContainerStyles } from './container.styles'

interface ContainerProps {
  children: ReactNode
}

export function Container({ children }: ContainerProps) {
  return <ContainerStyles className="flexReset">{children}</ContainerStyles>
}

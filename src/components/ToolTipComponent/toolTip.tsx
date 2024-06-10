import { Tooltip } from '@chakra-ui/react'
import { ReactNode } from 'react'

interface ToolTipComponentsProps {
  children: ReactNode
  content: string
}

export function ToolTipComponent({
  children,
  content,
}: ToolTipComponentsProps) {
  return (
    <Tooltip
      hasArrow
      label={content}
      bg={'#121214'}
      color={'#fff'}
      placement="top"
      padding={'7px 13px'}
      marginBottom={'5px'}
      borderRadius={'6px'}
    >
      {children}
    </Tooltip>
  )
}

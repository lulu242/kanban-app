import React, { ReactNode } from 'react'

interface CardLabelProps {
  children?: ReactNode
  css?: string
}
const CardLabel:React.FC<CardLabelProps> = ({children, css}) => {
  return (
    <div className={`absolute bg-sky-500 w-[5px] h-[90%] top-[5%] left-0 rounded-lg ${css}`}>{children}</div>
  )
}

export default CardLabel
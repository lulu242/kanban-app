import React, { ReactNode } from 'react'
import { IoMdCheckboxOutline } from "react-icons/io";
import { LuCalendarClock } from "react-icons/lu";

interface CardDetailProps {
  children: ReactNode
  css?: string
  type?: 'checklist' | 'deadline' 
}

const CardDetail:React.FC<CardDetailProps> = ({children, css='flex items-center', type}) => {

  const icon = {
    checklist: <IoMdCheckboxOutline />,
    deadline: <LuCalendarClock />
  }

  return (
    <div className={css}>
      {type && icon[type]}
      {children}
    </div>
  )
}

export default CardDetail
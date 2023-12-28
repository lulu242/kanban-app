import React, { ReactNode, useContext } from 'react'
import { CardContext } from '../CardMain'
import { createPortal } from 'react-dom'

interface CardAddModalMainProps {
  children: ReactNode
}

const CardAddModalMain:React.FC<CardAddModalMainProps> = ({children}) => {
  const { isModalOpen } = useContext(CardContext)
  
  if(isModalOpen) {
    return  createPortal(<div className='w-100 h-100 bg-slate-500'>왜 안열려{children}</div>, document.body)
  }
  return null
}

export default CardAddModalMain
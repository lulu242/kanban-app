'use client'

import React, { FC, ReactNode, useContext } from 'react'
import { FiCreditCard } from "react-icons/fi";
import { CardContext } from '../CardMain';

interface CardAddModalTitleProps {
  children?: ReactNode
}

const CardAddModalTitle:FC<CardAddModalTitleProps> = ({children}) => {
  const {title, setTitle} = useContext(CardContext)

  const titleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value)
  }

  return (
    <div className='flex items-center gap-2 font-semibold'>
      <FiCreditCard size={20}/>
      <input value={title} className='border-none' onChange={titleChange}></input>
      {children}
    </div>
  )
}

export default CardAddModalTitle
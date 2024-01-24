'use client'

import React, { useContext } from 'react'
import { CardContext } from '../CardMain'
import { MdClose } from "react-icons/md";

const CardAddModalClose = () => {
  const { modalClose } = useContext(CardContext)
  return (
    <button onClick={modalClose} className='p-2 rounded-full hover:bg-gray-100 w-10 h-10'><MdClose size={25} /></button>
  )
}

export default CardAddModalClose
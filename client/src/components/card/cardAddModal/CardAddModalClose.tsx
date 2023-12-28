import React, { useContext } from 'react'
import { CardContext } from '../CardMain'

const CardAddModalClose = () => {
  const { modalClose } = useContext(CardContext)
  return (
    <div onClick={modalClose}>x</div>
  )
}

export default CardAddModalClose
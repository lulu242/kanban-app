import React from 'react'
import Button from './Button'

const Header = () => {
  return (
    <header className='bg-sky-900 flex justify-between p-3'>
      <h1 className='text-white font-bold text-2xl'>Kanban Board</h1>
      <Button label='로그아웃'/>
    </header>
  )
}

export default Header
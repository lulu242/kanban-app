import React from 'react'

interface ContainerProps {
  children: React.ReactNode
}
const Container: React.FC<ContainerProps> = ({children}) => {
  return (
    <div className='flex gap-5 flex-wrap max-w-[2520px] justify-center mx-auto xl:px-20 md:px-10 sm:px-2 px-4 py-6'>{children}</div>
  )
}

export default Container
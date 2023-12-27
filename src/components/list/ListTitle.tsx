import React, { ReactNode } from 'react'

interface ListTitleProps {
  children: ReactNode,
  css?: string
}

const ListTitle:React.FC<ListTitleProps> = ({children, css}) => {
  return (
    <div className={`font-bold text-lg bg-sky-500 px-5 py-3 rounded-t-xl`}>{children}</div>
  )
}

export default ListTitle
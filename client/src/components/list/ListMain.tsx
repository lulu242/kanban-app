'use client'

import React, { ReactNode, useState } from 'react'

interface ListMainProps {
children: ReactNode
css?: string
}

export const ListContext = React.createContext({
  title: '',
  setTitle: (newInput: string) => {}
});


const ListMain:React.FC<ListMainProps> = ({children, css}) => {
  const [title, setTitle] = useState<string>('')
  return (
    <ListContext.Provider value={{title, setTitle}}>
      <div className={`bg-gray-100 rounded-xl`}>{children}</div>
    </ListContext.Provider>
  )
}

export default ListMain
'use client'

import React, { Children, FC, ReactNode, useState } from 'react';


interface CardMainProps {
  children: ReactNode;
  css?: string;
}

export const CardContext = React.createContext({
  title: '',
  setTitle: (newInput: string) => {},
  isModalOpen: false,
  modalOpen: () => {},
  modalClose: () => {}
});

const CardMain: React.FC<CardMainProps> = ({ children, css = 'max-w-[300px] bg-white rounded-md shadow-sm p-3 border-2 border-white hover:border-sky-500 cursor-pointer mx-5 my-3 break-words'}) => {
  const [title, setTitle] = useState<string>('');
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false)

  const modalOpen = () => {
    setIsModalOpen(true)
  }

  const modalClose = () => {
    setIsModalOpen(false)
  }

  return (
    <CardContext.Provider value={{ title, setTitle, isModalOpen, modalOpen, modalClose }}>
      <div className={`${css} relative`}>
        {children}
      </div>
    </CardContext.Provider>
  );
};

export default CardMain;

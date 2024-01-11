'use client';

import React, { ReactNode, useContext } from 'react';
import { CardContext } from '../CardMain';
import { createPortal } from 'react-dom';

interface CardAddModalMainProps {
  children: ReactNode;
}

const CardAddModalMain: React.FC<CardAddModalMainProps> = ({ children }) => {
  const { isModalOpen } = useContext(CardContext);

  if (isModalOpen) {
    return createPortal(
      <div className='w-screen h-screen bg-black/20 absolute top-0 flex justify-center items-center'>
        <div className="max-w-[1000px] min-w-[330px] h-100 bg-white rounded-md shadow-lg p-2">{children}</div>
      </div>,
      document.body
    );
  }
  return null;
};

export default CardAddModalMain;

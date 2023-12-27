import React, { ReactNode, useContext } from 'react';

interface CartTitlePros {
  children?: ReactNode;
  css?: string
}

const CardTitle: React.FC<CartTitlePros> = ({ children, css }) => {
  return (
      <div className={css}>{children}</div>
  );
};

export default CardTitle;

// 추가 버튼의 경우 Card css
// max-w-[300px] rounded-md p-3  border-white hover:bg-gray-300 cursor-pointer mx-5 my-3 break-words 
// CardTitle css
// css='flex items-center gap-2'


import React, { FC, MouseEvent } from 'react';

interface buttonProps {
  label: string;
  css?: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  type?: 'button' | 'submit' | 'reset';
}

const Button: FC<buttonProps> = ({ label, css , onClick, type = 'button' }) => {
  return (
    <button className={css || 'bg-white text-sky-900 font-semibold rounded-3xl px-2 text-sm hover:opacity-80'} onClick={onClick} type={type}>
      {label}
    </button>
  );
};

export default Button;

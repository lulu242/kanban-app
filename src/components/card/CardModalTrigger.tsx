import React, { ReactNode, useContext } from 'react';
import { CardContext } from './CardMain';

interface CardModalTriggerPros {
  children?: ReactNode;
  css?: string
}

const CardModalTrigger: React.FC<CardModalTriggerPros> = ({ children, css }) => {
  const { modalOpen } = useContext(CardContext)

  return (
      <button className={css} onClick={modalOpen}>{children}</button>
  );
};

export default CardModalTrigger;

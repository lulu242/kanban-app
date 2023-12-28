'use client';

import CardModalTrigger from '@/components/card/CardModalTrigger';
import { Card } from '@/components/card';
import ListMain from '@/components/list/ListMain';
import ListTitle from '@/components/list/ListTitle';
import { FaPlus } from 'react-icons/fa6';
import CardAddModalMain from '@/components/card/cardAddModal/CardAddModalMain';
import CardAddModalClose from '@/components/card/cardAddModal/CardAddModalClose';

export default function Home() {
  return (
    <div className="flex gap-5 ">
      <ListMain>
        <ListTitle>할거임</ListTitle>
        <Card>
          <CardModalTrigger>
            <Card.Title>
              ddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            </Card.Title>
            <Card.Label></Card.Label>
            <div className="flex gap-3">
              <Card.Detail type="checklist">1/4</Card.Detail>
              <Card.Detail type="deadline">11.22-12.12</Card.Detail>
            </div>
          </CardModalTrigger>
          <CardAddModalMain>
            <CardAddModalClose></CardAddModalClose>
          </CardAddModalMain>
        </Card>
        
        <Card css="max-w-[300px] rounded-md p-3 border-white hover:bg-gray-300 cursor-pointer mx-5 my-3 break-words">
          <Card.Title css="flex items-center gap-2">
            <FaPlus />
            카드 추가하기
          </Card.Title>
        </Card>
      </ListMain>

      <ListMain>
        <ListTitle>하는 중 임</ListTitle>
        <Card>
          <CardModalTrigger>
            <Card.Title>
             aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaadddddddaaaaaaaa
            </Card.Title>
            <Card.Label></Card.Label>
            <div className="flex gap-3">
              <Card.Detail type="checklist">1/4</Card.Detail>
              <Card.Detail type="deadline">11.22-12.12</Card.Detail>
            </div>
          </CardModalTrigger>
          <CardAddModalMain>
            <CardAddModalClose></CardAddModalClose>
          </CardAddModalMain>
        </Card>
        
        <Card css="max-w-[300px] rounded-md p-3 border-white hover:bg-gray-300 cursor-pointer mx-5 my-3 break-words">
          <Card.Title css="flex items-center gap-2">
            <FaPlus />
            카드 추가하기
          </Card.Title>
        </Card>
      </ListMain>
    </div>
  );
}

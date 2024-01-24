import CardModalTrigger from '@/components/card/CardModalTrigger';
import { Card } from '@/components/card';
import ListMain from '@/components/list/ListMain';
import ListTitle from '@/components/list/ListTitle';
import { FaPlus } from 'react-icons/fa6';
import CardAddModalMain from '@/components/card/cardAddModal/CardAddModalMain';
import CardAddModalClose from '@/components/card/cardAddModal/CardAddModalClose';
import Container from '@/components/Container';
import CardAddModalTitle from '@/components/card/cardAddModal/CardAddModalTitle';
import { DATA } from '@/testdata';
import Header from '@/components/Header';

export default function Home() {
  return (
    <>
      <Header />
      <Container>
        {DATA.map((list) => (
          <ListMain key={list.id}>
            <ListTitle>{list.title}</ListTitle>
            {list.cards.map((card) => (
              <Card key={card.id}>
                <CardModalTrigger>
                  <Card.Title>{card.title}</Card.Title>
                  <Card.Label></Card.Label>
                  <div className="flex gap-3">
                    <Card.Detail type="checklist">1/4</Card.Detail>
                    <Card.Detail type="deadline">{card.deadlind}</Card.Detail>
                  </div>
                </CardModalTrigger>
                <CardAddModalMain>
                  <div className="flex justify-between items-center">
                    <CardAddModalTitle />
                    <CardAddModalClose />
                  </div>
                </CardAddModalMain>
              </Card>
            ))}
          </ListMain>
        ))}
      </Container>
    </>
  );
}

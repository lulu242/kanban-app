import CardDetail from "./CardDetail";
import CardLabel from "./CardLabel";
import CardMain from "./CardMain";
import CardModalTrigger from "./CardModalTrigger";
import CardTitle from "./CardTitle";
import CardAddModalMain from "./cardAddModal/CardAddModalMain";

export const Card = Object.assign(CardMain, {
  Title: CardTitle,
  Detail: CardDetail,
  Label: CardLabel,
  ModalTrigger: CardModalTrigger,
  Modal: CardAddModalMain
})
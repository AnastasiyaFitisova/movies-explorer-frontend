import { useState } from "react";
import  useWindowSize  from "./UseResize"
import {
  MOBILE_WIDTH,
  CARDS_DESCTOP,
  CARDS_MOBILE,
  MORE_CARDS_DESCTOP,
  MORE_CARDS_MOBILE,
} from '../utils/constants'

function UsePagination() {

  const windowWidth = useWindowSize()

  const [cardsPerPage, setCardsPerPage] = useState(0);
  const [addCards, setAddCards] = useState(0);

  function addCardsPerPage() {
    if (windowWidth.width > MOBILE_WIDTH) {
      setCardsPerPage(CARDS_DESCTOP);
      setAddCards(MORE_CARDS_DESCTOP);
    } else if (
      windowWidth.width === MOBILE_WIDTH) {
      setCardsPerPage(CARDS_MOBILE);
      setAddCards(MORE_CARDS_MOBILE);
    } 
  };


  function addMoreCards() {
    setCardsPerPage((current) => current + addCards)
  };

  return {
    cardsPerPage,
    addMoreCards,
    addCardsPerPage,
  };

};

export default UsePagination;
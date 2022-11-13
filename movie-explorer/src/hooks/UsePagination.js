import { useState } from "react";
import  useWindowSize  from "./UseResize"

function UsePagination() {

  const windowWidth = useWindowSize()

  const mobileWidth = 320;

  const cardsDesctop = 7;
  const cardsMobile = 5;

  const moreCardsDesctop = 7;
  const moreCardsMobile = 5;

  const [cardsPerPage, setCardsPerPage] = useState(0);
  const [addCards, setAddCards] = useState(0);

  function addCardsPerPage() {
    if (windowWidth.width > mobileWidth) {
      setCardsPerPage(cardsDesctop);
      setAddCards(moreCardsDesctop);
    } else if (
      windowWidth.width === mobileWidth) {
      setCardsPerPage(cardsMobile);
      setAddCards(moreCardsMobile);
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
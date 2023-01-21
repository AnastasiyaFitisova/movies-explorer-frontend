import React from 'react';
import { useLocation } from "react-router-dom";
import usePagination from '../../hooks/UsePagination';
import useWindowSize from '../../hooks/UseResize';
import MoviesCard from '../MoviesCard/MoviesCard';
import './MoviesCardList.css';


function MoviesCardList({ cards, isNotFound, isFailed, onSave, onDelete, isLiked}) {

  const location = useLocation();

  const moviesPage = location.pathname === "/movies"

  const {  cardsPerPage, addMoreCards, addCardsPerPage,} = usePagination();
  const windowWidth = useWindowSize();

  React.useEffect(() => {
    addCardsPerPage();
  }, [windowWidth.width]);

  return (
    <section className="movies-list">
      {isFailed ?
        (<p style={{ color: 'red', width: '100%', textAlign: 'center' }}>Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз</p>)
        : isNotFound ? (<p style={{ color: 'red', width: '100%', textAlign: 'center' }}>Ничего не найдено</p>)
          : (moviesPage?
            (<ul className="movies__cardholder">
              {cards.slice(0, cardsPerPage).map((card) => {
                return (
                  <MoviesCard
                    key={card.id}
                    card={card}
                    onSave={onSave}
                    onDelete={onDelete}
                    isLiked={isLiked}
                  />
                )
              }
              )}
            </ul>) : (
              <ul className="movies__cardholder">
              {cards.map((card) => {
                return (
                  <MoviesCard
                    key={card.movieId}
                    card={card}
                    onDelete={onDelete}
                    isLiked={isLiked}
                  />
                )
              }
              )}
            </ul>
            )
          )}
       {moviesPage ? <div className="movies__button-box">
        <button 
        className={cards.length <= cardsPerPage ? "movies__button_disabled" : "movies__button"}
        onClick={addMoreCards}>Еще</button>
      </div> : ""}
    </section>
  )
}

export default MoviesCardList;
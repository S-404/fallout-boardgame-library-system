import React from 'react';
import "./deck.scss"
import CardsController from "../../store/cardsController";
import {observer} from "mobx-react-lite";

const Deck = observer ( ({backImg, name, menu, deck}) => {

    const {selectEncounterCard} = CardsController

    const onClickHandler = () => {
        selectEncounterCard(deck)
    }

    if (!deck.length) return null

    return (

        <div className='board__deck'>
            <span className='deck__name'>{name + '-' + deck.length}</span>
            <div className='deck__image-div' onClick={onClickHandler}>
                <img className='image-div__img' src={backImg} alt={name}/>
            </div>
            <div className='deck__menu'>{menu}</div>
        </div>
    );
});

export default Deck;
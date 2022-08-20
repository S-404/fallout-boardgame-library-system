import React from 'react';
import Marker from "./Marker";
import CardsController from "../../../store/cardsController";
import {observer} from "mobx-react-lite";

const CardMenu = observer (({card, collection}) => {

    const {stagedCards, addCardFrom, stageCardFrom,putInTrashFrom} = CardsController


    const trashButtonHandler = () => {
        putInTrashFrom(card, collection)
    }
    const stageButtonHandler = () => {
        stageCardFrom(card, collection)
    }
    const addButtonHandler = () => {
        addCardFrom(card, collection)
    }

    return (
        <div className='card__card-menu'>

            <button onClick={trashButtonHandler}>trash</button>

            {collection !== stagedCards ?
                <button onClick={stageButtonHandler}>stage</button>
                : null}


            {card.type !== 'quest' ?
                <button onClick={addButtonHandler}>add</button>
                : null}

            <Marker/>

        </div>
    );
});

export default CardMenu;
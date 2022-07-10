import React, {useContext} from 'react';
import {Context} from "../../../store/context";
import Marker from "./Marker";

const CardMenu = ({card, collection}) => {

    const {stagedCards, addCardFrom, stageCardFrom, moveCardToTrashFrom} = useContext(Context)


    const trashButtonHandler = () => {
        moveCardToTrashFrom(card, collection)
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
};

export default CardMenu;
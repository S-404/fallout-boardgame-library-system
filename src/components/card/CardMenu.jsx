import React, {useContext} from 'react';
import {Context} from "../../store/context";

const CardMenu = ({title, card, collection}) => {

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
        <div>

            <button onClick={trashButtonHandler}>trash</button>

            {collection !== stagedCards ?
                <button onClick={stageButtonHandler}>stage</button>
                : null}


            {card.type !== 'quest' ?
                <button onClick={addButtonHandler}>add</button>
                : null}

        </div>
    );
};

export default CardMenu;
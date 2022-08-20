import React from 'react';
import CardsController from "../../../store/cardsController";
import {observer} from "mobx-react-lite";

const TrashListItem = observer ( ({card}) => {

    const {selectCardFrom, trash} = CardsController

    const onClickHandler = () => {
        selectCardFrom(card, trash)
    }

    return (
        <div>
            <span>{card.num}</span>
            <button onClick={onClickHandler}>select</button>
        </div>
    );
});

export default TrashListItem;
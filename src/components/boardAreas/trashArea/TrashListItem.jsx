import React ,{useContext} from 'react';

import {Context} from "../../../store/context";

const TrashListItem = ({card}) => {

    const {selectCardFrom,trash} = useContext(Context)

    const onClickHandler = () =>{
        selectCardFrom(card,trash)
    }

    return (
        <div>
            <span>{card.num}</span>
            <button onClick={onClickHandler}>select</button>
        </div>
    );
};

export default TrashListItem;
import React, {useContext} from 'react';
import {Context} from "../../store/context";

const StagedCardsArea = () => {
    const {stagedCards} = useContext(Context)
    return (
        <div>
            {stagedCards.map(card=>(
                <div key={card.id}>{card.num}</div>
            ))}
        </div>
    );
};

export default StagedCardsArea;
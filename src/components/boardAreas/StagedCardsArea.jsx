import React, {useContext} from 'react';
import {Context} from "../../store/context";
import Card from "../card/Card";

const StagedCardsArea = () => {
    const {stagedCards} = useContext(Context)
    return (
        <div className='board-container__staged-cards'>
            {stagedCards.map(card=>(
                <Card
                    key={card.id}
                    card={card}
                    collection={stagedCards}
                    title={card.num}
                />
            ))}
        </div>
    );
};

export default StagedCardsArea;
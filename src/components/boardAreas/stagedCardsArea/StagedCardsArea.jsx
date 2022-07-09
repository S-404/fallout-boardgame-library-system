import React, {useContext} from 'react';
import {Context} from "../../../store/context";
import Card from "../../card/Card";

const StagedCardsArea = () => {
    const {stagedCards} = useContext(Context)
    return (
        <>
            {stagedCards.map(card=>(
                <Card
                    key={card.id}
                    card={card}
                    collection={stagedCards}
                    title={card.num}
                />
            ))}
        </>
    );
};

export default StagedCardsArea;
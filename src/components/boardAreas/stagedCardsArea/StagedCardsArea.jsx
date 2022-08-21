import React from 'react';
import Card from "../../card/Card";
import CardsController from "../../../store/cardsController";
import {observer} from "mobx-react-lite";

const StagedCardsArea = observer(() => {
    const {stagedCards} = CardsController
    return (
        <>
            {stagedCards.map(card => (
                <Card
                    key={card.id}
                    card={card}
                    collection={stagedCards}
                    title={card.name}
                />
            ))}
        </>
    );
});

export default StagedCardsArea;
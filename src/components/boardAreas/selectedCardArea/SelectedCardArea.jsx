import React from 'react';
import Card from "../../card/Card";
import CardsController from "../../../store/cardsController";
import {observer} from "mobx-react-lite";

const SelectedCardArea = observer ( () => {

    const {selectedCard} = CardsController

    if (!selectedCard[0]?.id) return null

    return (
        <>
            <Card
                card={selectedCard[0]}
                collection={selectedCard}
                title={`${selectedCard[0].num} - Selected`}
            />
        </>
    );
});

export default SelectedCardArea;
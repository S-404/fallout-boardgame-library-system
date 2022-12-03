import React from 'react';
import Deck from "../../deck/Deck";
import vault84CardBack from '../../../assets/vault84CardBack.png'
import settlementCardBack from '../../../assets/settlementCardBack.png'
import wastelandCardBack from '../../../assets/wastelandCardBack.png'
import CardsController from "../../../store/cardsController";
import {observer} from "mobx-react-lite";


const EncounterCardsArea = observer(() => {
    const {wastelandDeck, settlementDeck, vault84Deck} = CardsController
    return (
        <div className='decks-area__encounter-cards'>
            <Deck
                name='Wasteland'
                backImg={wastelandCardBack}
                deck={wastelandDeck}
            />
            <Deck
                name='Settlement'
                backImg={settlementCardBack}
                deck={settlementDeck}
            />
            <Deck
                name='vault84'
                backImg={vault84CardBack}
                deck={vault84Deck}
            />
        </div>
    );
});

export default EncounterCardsArea;
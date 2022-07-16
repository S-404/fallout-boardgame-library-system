import React , {useContext} from 'react';
import Deck from "../../deck/Deck";
import vault84CardBack from '../../../assets/vault84CardBack.png'
import settlementCardBack from '../../../assets/settlementCardBack.png'
import wastelandCardBack from '../../../assets/wastelandCardBack.png'

import {Context} from "../../../store/context";

const EncounterCardsArea = () => {
    const {wastelandDeck,settlementDeck,vault84Deck} = useContext(Context)
    return (
        <div className='decks__encounter-cards'>
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
};

export default EncounterCardsArea;
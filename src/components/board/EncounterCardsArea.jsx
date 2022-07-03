import React , {useContext} from 'react';
import Deck from "../deck/Deck";
import vaultCardBack from '../../assets/vaultCardBack.png'
import settlementCardBack from '../../assets/settlementCardBack.png'
import wastelandCardBack from '../../assets/wastelandCardBack.png'

import {Context} from "../../store/context";

const EncounterCardsArea = () => {
    const {wastelandDeck,settlementDeck,vaultDeck} = useContext(Context)
    return (
        <div className='decks__encounter-cards'>
            <Deck name='Wasteland' backImg={wastelandCardBack} deck={wastelandDeck}/>
            <Deck name='Settlement' backImg={settlementCardBack} deck={settlementDeck}/>
            <Deck name='Vault' backImg={vaultCardBack} deck={vaultDeck}/>
        </div>
    );
};

export default EncounterCardsArea;
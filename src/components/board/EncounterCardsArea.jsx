import React from 'react';
import Deck from "../deck/Deck";
import vaultCardBack from '../../assets/vaultCardBack.png'
import settlementCardBack from '../../assets/settlementCardBack.png'
import wastelandCardBack from '../../assets/wastelandCardBack.png'

const EncounterCardsArea = () => {
    return (
        <div className='decks__encounter-cards'>
            <Deck name='Wasteland' backImg={wastelandCardBack}/>
            <Deck name='Settlement' backImg={settlementCardBack}/>
            <Deck name='Vault' backImg={vaultCardBack}/>
        </div>
    );
};

export default EncounterCardsArea;
import React from 'react';
import LibraryArea from "./LibraryArea";
import TrashArea from "./TrashArea";
import EncounterCardsArea from "./EncounterCardsArea";
import './board.scss'


const Board = () => {
    return (
        <div className='board-container'>
            <div className='board-container__decks'>
                <LibraryArea/>
                <EncounterCardsArea/>
            </div>

            <TrashArea/>

            <ul>
                на руках
            </ul>


        </div>
    );
};

export default Board;
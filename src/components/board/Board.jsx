import React from 'react';
import QuestCardsArea from "./QuestCardsArea";
import TrashArea from "./TrashArea";
import EncounterCardsArea from "./EncounterCardsArea";
import './board.scss'


const Board = () => {
    return (
        <div className='board-container'>
            <div className='board-container__decks'>
                <QuestCardsArea/>
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
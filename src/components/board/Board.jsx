import React from 'react';
import QuestCardsArea from "./QuestCardsArea";
import TrashArea from "./TrashArea";
import EncounterCardsArea from "./EncounterCardsArea";
import './board.scss'
import StagedCardsArea from "./StagedCardsArea";


const Board = () => {
    return (
        <div className='board-container'>
            <div className='board-container__decks'>
                <QuestCardsArea/>
                <EncounterCardsArea/>
            </div>
            <StagedCardsArea/>
            <TrashArea/>

            <ul>
                на руках
            </ul>


        </div>
    );
};

export default Board;
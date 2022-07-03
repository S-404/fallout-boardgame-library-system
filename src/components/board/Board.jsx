import React from 'react';
import QuestCardsArea from "../boardAreas/QuestCardsArea";
import TrashArea from "../boardAreas/TrashArea";
import EncounterCardsArea from "../boardAreas/EncounterCardsArea";
import './board.scss'
import StagedCardsArea from "../boardAreas/StagedCardsArea";
import SelectedCardArea from "../boardAreas/SelectedCardArea";


const Board = () => {
    return (
        <div className='board-container'>
            <div className='board-container__decks'>
                <QuestCardsArea/>
                <EncounterCardsArea/>
                <SelectedCardArea/>
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
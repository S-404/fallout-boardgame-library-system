import React from 'react';
import QuestCardsArea from "../boardAreas/questCardsArea/QuestCardsArea";
import TrashArea from "../boardAreas/trashArea/TrashArea";
import EncounterCardsArea from "../boardAreas/encounterCardsArea/EncounterCardsArea";
import './board.scss'
import StagedCardsArea from "../boardAreas/stagedCardsArea/StagedCardsArea";
import SelectedCardArea from "../boardAreas/selectedCardArea/SelectedCardArea";


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
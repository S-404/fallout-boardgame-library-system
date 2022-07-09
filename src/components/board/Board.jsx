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
            </div>

            <div className='board-container__cards'>

                <div className='cards__selected-card'>
                    <h4 className='cards__header'>Selected:</h4>
                    <SelectedCardArea/>
                </div>

                <div className='cards__staged-cards'>
                    <h4 className='cards__header'>Staged:</h4>
                    <StagedCardsArea/>
                </div>

            </div>

            <TrashArea/>

        </div>
    );
};

export default Board;
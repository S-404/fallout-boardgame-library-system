import React, {useState} from 'react';
import Deck from "../deck/Deck";
import questImg from '../../assets/questCardBack.png'

const LibraryArea = () => {
    return (
        <div>
            <div>
                <Deck
                name={'Quests'}
                backImg={questImg}
                menu={''}
                />
            </div>
        </div>
    );
};

export default LibraryArea;
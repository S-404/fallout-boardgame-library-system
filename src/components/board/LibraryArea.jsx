import React, {useState} from 'react';
import Deck from "../deck/Deck";
import questImg from '../../assets/questCardBack.png'

const LibraryArea = () => {

    const [cardNum, setCardNum] = useState(0)

    const onInputChange = (e) => {
        setCardNum(e.target.value)
    }

    const libraryMenu = () => {
        return (
            <div className='menu__menu-inputs'>
                <input
                    className='menu-inputs__input'
                    type='number'
                    value={cardNum}
                    onChange={onInputChange}
                />
                <div className='menu-inputs__buttons'>
                    <button>Add</button>
                    <button>Stage</button>
                </div>

            </div>
        )
    }

    return (
        <Deck
            name={'Quests'}
            backImg={questImg}
            menu={libraryMenu()}
        />
    );
};

export default LibraryArea;
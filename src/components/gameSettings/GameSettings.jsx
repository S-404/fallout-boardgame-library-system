import React from 'react';
import MyInput from "../UI/myInput/MyInput";
import MySelect from "../UI/mySelect/MySelect";
import CardsController from "../../store/cardsController";
import {observer} from "mobx-react-lite";

const GameSettings = observer( () => {

    const {playersQty, setPlayersQty} = CardsController

    const inputPlayersQtyHandler = (e) => {
        const newValue = +e.target.value
        if (newValue >= 1 && newValue <= 4)
            setPlayersQty(newValue)
    }

    const scenarios = [
        {name: 'first', value: 'first'},
        {name: 'second', value: 'second'},
        {name: 'third', value: 'third'},
        {name: 'fourth', value: 'fourth'},
    ]

    return (
        <div>
            <div>
                <MyInput
                    type='number'
                    min={1}
                    max={4}
                    value={playersQty}
                    onChange={inputPlayersQtyHandler}
                    labeltext={'players qty'}
                />
                <MySelect
                    title={'Scenario'}
                    options={scenarios}
                />
            </div>
        </div>
    );
});

export default GameSettings;
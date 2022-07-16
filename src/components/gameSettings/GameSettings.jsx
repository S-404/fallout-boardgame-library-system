import React, {useContext} from 'react';
import MyInput from "../UI/myInput/MyInput";
import {Context} from "../../store/context";
import MySelect from "../UI/mySelect/MySelect";

const GameSettings = () => {

    const {playersQty, setPlayersQty} = useContext(Context)

    const inputPlayersQtyHandler = (e) => {
        const newValue = +e.target.value
        if (newValue >= 1 && newValue <= 4)
            setPlayersQty(newValue)
    }

    const scenarios = [
        {name:'first', value: 'first'},
        {name:'second', value: 'second'},
        {name:'third', value: 'third'},
        {name:'fourth', value: 'fourth'},
    ]

    return (
        <div>
            game settings
            <button>1</button>
            <button>2</button>
            <button>3</button>
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
};

export default GameSettings;
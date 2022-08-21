import React from 'react';
import MySelect from "../UI/mySelect/MySelect";
import {observer} from "mobx-react-lite";
import SettingsController from "../../store/settingsController";
import CardsController from "../../store/cardsController";

const GameSettings = observer(() => {

    const {playersQty, setPlayersQty, scenario, setScenario, expansion1, setExpansion1, setSettingsModal} = SettingsController
    const {startScenario} = CardsController

    const selectScenarioHandler = (e) => {
        setScenario(e.target.value)

    }
    const selectPlayersQtyHandler = (e) => {
        console.log(e.target.value)
        setPlayersQty(e.target.value)
    }

    const buttonStartHandler = () => {
        console.log('start scenario ' + scenario + ', for ' + playersQty + ' players')
        startScenario({
            scenario,
            withExpansion1: expansion1
        })
        setSettingsModal(false)
    }

    const scenariosOptions = [
        {name: 'first', value: 0},
        {name: 'second', value: 1},
        {name: 'third', value: 2},
        {name: 'fourth', value: 3}
    ]

    const playersQtyOptions = [
        {name: '1 player', value: 1},
        {name: '2 players', value: 2},
        {name: '3 players', value: 3},
        {name: '4 players', value: 4}
    ]

    return (
        <div>
            <div>
                <MySelect
                    title={'Players Qty'}
                    options={playersQtyOptions}
                    onChange={selectPlayersQtyHandler}
                    value={playersQty}
                />
                <MySelect
                    title={'Scenario'}
                    options={scenariosOptions}
                    onChange={selectScenarioHandler}
                    value={scenario}
                />
                <div>
                    <label>with expansion</label>
                    <input
                        type='checkbox'
                        checked={expansion1}
                        onChange={setExpansion1}
                    />

                </div>
                <button
                    onClick={buttonStartHandler}
                >Start
                </button>
            </div>
        </div>
    );
});

export default GameSettings;
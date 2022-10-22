import React from 'react';
import MySelect from "../UI/mySelect/MySelect";
import {observer} from "mobx-react-lite";
import SettingsController from "../../store/settingsController";
import CardsController from "../../store/cardsController";
import MyCheckbox from "../UI/myCheckbox/MyCheckbox";
import Button from '@mui/material/Button';

const GameSettings = observer(() => {

    const {
        playersQty,
        setPlayersQty,
        scenario,
        setScenario,
        expansion1,
        setExpansion1,
        setSettingsModal,
        scenariosOptions,
        playersQtyOptions
    } = SettingsController
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

                <MyCheckbox
                    labelText='with expansion1'
                    isChecked={expansion1}
                    onChange={setExpansion1}
                />

                <Button
                    variant="contained"
                    onClick={buttonStartHandler}
                >
                    Start
                </Button>
            </div>
        </div>
    );
});

export default GameSettings;
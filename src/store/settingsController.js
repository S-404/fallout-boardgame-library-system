import {makeAutoObservable} from "mobx";
import scenariosOptionsData from '../store/collection/scenariosOptions.json'
import playersQtyOptionsData from '../store/collection/playersQtyOptions.json'

class SettingsController {

    playersQty = 2
    scenario = 0
    expansion1 = true
    settingsModal = true

    scenariosOptions = scenariosOptionsData
    playersQtyOptions = playersQtyOptionsData

    constructor() {
        makeAutoObservable(this)
    }

    setSettingsModal = (newValue) => {
        this.settingsModal = newValue
    }

    setPlayersQty = (newValue) => {
        this.playersQty = newValue
    }
    setScenario = (newValue) => {
        this.scenario = newValue
    }
    setExpansion1 = () => {
        this.expansion1 = !this.expansion1
    }
}

export default new SettingsController()
import {makeAutoObservable} from "mobx";


class SettingsController {

    playersQty = 2
    scenario = 0
    expansion1 = true
    settingsModal = true

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
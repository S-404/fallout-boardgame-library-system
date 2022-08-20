import {makeAutoObservable} from "mobx";


class SettingsController {

    playersQty = 2
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
}

export default new SettingsController()
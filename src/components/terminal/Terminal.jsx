import React from 'react';
// import './terminal.css'
import MyNavbar from "../UI/myNavbar/MyNavbar";
import Board from "../board/Board";
import MyModal from "../UI/myModal/MyModal";
import GameSettings from "../gameSettings/GameSettings";
import SettingsController from "../../store/settingsController";
import {observer} from "mobx-react-lite";

const Terminal = observer(() => {
    const {settingsModal, setSettingsModal} = SettingsController

    return (
        <div>
            <div className="overlay"/>
            {/*<div className="scanline"></div>*/}
            <div className="wrapper">
                <div className="content clearfix">
                    <MyNavbar/>
                    <p className="clear"><br/></p>
                    <Board/>
                    <MyModal
                        visible={settingsModal}
                        setVisible={setSettingsModal}
                        children={<GameSettings/>}
                        title={'Settings'}
                    />
                </div>
            </div>
        </div>
    );
});

export default Terminal;
import React, {useContext} from 'react';
import {Context} from "../../../store/context";

const MyNavbar = () => {

    const {setSettingsModal} = useContext(Context)

    return (
        <div>
            <div className="my-navbar">

                <div>
                    <h4><b>F</b>allout <b>B</b>oard <b>G</b>ame <b>L</b>ibrary <b>S</b>ystem</h4>
                </div>

                <button
                    onClick={() => setSettingsModal(true)}
                >
                    settings
                </button>

            </div>

        </div>)
};

export default MyNavbar;
import React from 'react';
// import './terminal.css'
import MyNavbar from "../UI/MyNavbar";
import Board from "../board/Board";
const Terminal = () => {
    return (
        <div>
            <div className="overlay"></div>
            {/*<div className="scanline"></div>*/}
            <div className="wrapper">
                <div className="content clearfix">

                    <MyNavbar/>
                    <p className="clear"><br/></p>
                    <Board/>

                </div>
            </div>
        </div>
    );
};

export default Terminal;
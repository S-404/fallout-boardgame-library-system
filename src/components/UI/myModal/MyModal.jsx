import React from 'react';
import './myModal.scss'
import MyCloseButton from "../myCloseButton/MyCloseButton";

const MyModal = ({children, visible, setVisible, title}) => {
    return (
        <div className={`my-modal ${visible?'active':''}`}>
            <div
            className='my-modal__content'
            onClick={(e)=>e.stopPropagation()}
            >
                <div className='content__header'>
                    <h3>{title}</h3>
                    <div onClick={()=>setVisible(false)}>
                        <MyCloseButton/>
                    </div>

                </div>
                <div className='content__body'>
                    {children}
                </div>
            </div>
        </div>
    );
};

export default MyModal;
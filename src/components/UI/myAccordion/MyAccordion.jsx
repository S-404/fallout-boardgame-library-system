import React from 'react';
import './myAccordion.scss'

const MyAccordion = ({items}) => {
    if (!items?.length) return null
    return (
        <div className="accordion">
            <div className="row">
                <div className="col">
                    <div className="tabs">
                        {items.map(item=>(
                            <div key={item.id} className="tab">
                                <input type="checkbox" id={`chck${item.id}`}/>
                                <label className="tab-label" htmlFor={`chck${item.id}`}>{item.title}</label>
                                <div className="tab-content">
                                    {item.content}
                                </div>
                            </div>
                        ))}

                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyAccordion;
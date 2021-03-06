import React from 'react';

const MySelect = ({title, options}) => {
    return (
        <div>
            {title??<label htmlFor={title}>{title}</label>}

            <select name={title} id={title}>
                {options.map(option=>(
                    <option
                        key={`select_option_${option.value}`}
                        value={option.value}
                    >
                        {option.name}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default MySelect;
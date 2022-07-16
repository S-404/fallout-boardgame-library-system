import React from 'react';
import './myInput.css'
const MyInput = React.forwardRef((props,ref) => {
    return (
        <div className='my-input'>
            <input
                ref={ref}
                className='my-input__input'
                id={`my-input__${props.labeltext}`}
                {...props}
            />
            {
                props.labeltext && props.value?
                    <label
                        className='my-input__label'
                    >
                        {props.labeltext}
                    </label>
                    :
                    null
            }
        </div>
    );
});

export default MyInput;
import React from 'react';

const Button = (props) => {
    return (
        <button 
            onClick={props.onClick}
            style={{ backgroundColor: props.color}}
            className='btn'>
                {props.label}
        </button>
    );
}

Button.defaultProps = {
    color: 'steelblue',
    label: 'Text'
}

export default Button;
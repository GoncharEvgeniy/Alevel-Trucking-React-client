import React from 'react';

const inputField = ({label, type}) => {
    return (
        <div>
            <label>{label}</label>
            <input
                className="form-control"
                placeholder={label}
                type={type}
            />
        </div>
    )
};

export default inputField
import React from 'react';

const inputField = ({label, type, input, meta: {touched, error, warning} }) => {
    return (
        <div>
            <label htmlFor="Input">{label}</label>
            <input
                id="Input"
                {...input}
                className="form-control"
                placeholder={label}
                type={type}
            />
            {touched
                && (error && <span className="text text-danger">{error}</span>)
                || (warning && <span className="text text-danger">{warning}</span>)
            }
        </div>
    )
};

export default inputField
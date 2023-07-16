import React from 'react';

type ButtonProps = {
    onClick?: () => void;
    variant: string;
    size?: string;
    children: React.ReactNode;
};

function Button({onClick, variant, size, children}: ButtonProps) {
    return (
        <button className={`btn btn-${variant} btn-${size}`} type="button" onClick={onClick}>
            {children}
        </button>
    );
}

Button.defaultProps = {
    size: '',
    onClick: () => {},
};

export {Button};
export type {ButtonProps};

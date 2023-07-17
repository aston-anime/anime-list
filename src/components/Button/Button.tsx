import React from 'react';

type ButtonProps = {
    onClick?: () => void;
    variant: string;
    size?: string;
    className?: string;
    children: React.ReactNode;
};

function Button({onClick, variant, size, className, children}: ButtonProps) {
    return (
        <button
            className={`btn btn-${variant} btn-${size} ${className}`}
            type="button"
            onClick={onClick}
        >
            {children}
        </button>
    );
}

Button.defaultProps = {
    size: '',
    onClick: () => {},
    className: '',
};

export {Button};
export type {ButtonProps};

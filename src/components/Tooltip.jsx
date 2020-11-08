import React from 'react';

export default function Tooltip({ id, align, position, children }) {
    return (
        <div 
        id={id}
        className={`tooltip tooltip--${position} ${align ? `tooltip--align-${align}` : ''} `}
        role="tooltip">
            { children }
        </div>
    )
}
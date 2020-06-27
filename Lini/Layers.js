import React from 'react';
import PropTypes from 'prop-types';

export default function LiniLayers({ size, ...props }) {
    let className = 'Component Lini LiniLayers';
    if (props.className) {
        className += ' ' + props.className;
    }
    return (
        <span {...props} className={className}>
            <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 20 20">
                <path d="M10 12a.502.502 0 01-.194-.039l-9.5-4a.501.501 0 010-.922l9.5-4a.502.502 0 01.388 0l9.5 4a.501.501 0 010 .922l-9.5 4A.502.502 0 0110 12zM1.788 7.5L10 10.957 18.212 7.5 10 4.043 1.788 7.5z" />
                <path d="M10 15a.502.502 0 01-.194-.039l-9.5-4a.5.5 0 01.388-.922L10 13.957l9.306-3.918a.5.5 0 11.388.922l-9.5 4A.502.502 0 0110 15z" />
                <path d="M10 18a.502.502 0 01-.194-.039l-9.5-4a.5.5 0 01.388-.922L10 16.957l9.306-3.918a.5.5 0 11.388.922l-9.5 4A.502.502 0 0110 18z" />
            </svg>
        </span>
    );
}

LiniLayers.propTypes = {
    size: PropTypes.number.isRequired,
};

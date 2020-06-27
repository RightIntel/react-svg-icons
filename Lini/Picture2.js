import React from 'react';
import PropTypes from 'prop-types';

export default function LiniPicture2({ size, ...props }) {
    let className = 'Component Lini LiniPicture2';
    if (props.className) {
        className += ' ' + props.className;
    }
    return (
        <span {...props} className={className}>
            <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 20 20">
                <path d="M18.5 20h-17C.673 20 0 19.327 0 18.5v-17C0 .673.673 0 1.5 0h17c.827 0 1.5.673 1.5 1.5v17c0 .827-.673 1.5-1.5 1.5zM1.5 1a.5.5 0 00-.5.5v17a.5.5 0 00.5.5h17a.5.5 0 00.5-.5v-17a.5.5 0 00-.5-.5h-17z" />
                <path d="M13 9c-1.103 0-2-.897-2-2s.897-2 2-2 2 .897 2 2-.897 2-2 2zm0-3c-.551 0-1 .449-1 1s.449 1 1 1 1-.449 1-1-.449-1-1-1z" />
                <path d="M17.5 2h-15a.5.5 0 00-.5.5v12a.5.5 0 00.5.5h15a.5.5 0 00.5-.5v-12a.5.5 0 00-.5-.5zM3 11.69l3.209-3.611c.082-.092.189-.144.302-.145s.221.048.305.138L12.349 14H3v-2.31zM17 14h-3.283L7.548 7.39a1.398 1.398 0 00-2.086.025L3 10.185V3h14v11z" />
            </svg>
        </span>
    );
}

LiniPicture2.propTypes = {
    size: PropTypes.number.isRequired,
};

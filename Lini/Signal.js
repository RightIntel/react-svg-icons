import React from 'react';
import PropTypes from 'prop-types';

export default function LiniSignal({ size, ...props }) {
    let className = 'Component Lini LiniSignal';
    if (props.className) {
        className += ' ' + props.className;
    }
    return (
        <span {...props} className={className}>
            <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 20 20">
                <path d="M2.5 19h-2a.5.5 0 01-.5-.5v-3a.5.5 0 01.5-.5h2a.5.5 0 01.5.5v3a.5.5 0 01-.5.5zM1 18h1v-2H1v2zM6.5 19h-2a.5.5 0 01-.5-.5v-5a.5.5 0 01.5-.5h2a.5.5 0 01.5.5v5a.5.5 0 01-.5.5zM5 18h1v-4H5v4zM10.5 19h-2a.5.5 0 01-.5-.5v-8a.5.5 0 01.5-.5h2a.5.5 0 01.5.5v8a.5.5 0 01-.5.5zM9 18h1v-7H9v7zM14.5 19h-2a.5.5 0 01-.5-.5v-12a.5.5 0 01.5-.5h2a.5.5 0 01.5.5v12a.5.5 0 01-.5.5zM13 18h1V7h-1v11zM18.5 19h-2a.5.5 0 01-.5-.5v-17a.5.5 0 01.5-.5h2a.5.5 0 01.5.5v17a.5.5 0 01-.5.5zM17 18h1V2h-1v16z" />
            </svg>
        </span>
    );
}

LiniSignal.propTypes = {
    size: PropTypes.number.isRequired,
};

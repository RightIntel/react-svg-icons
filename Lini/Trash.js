import React from 'react';
import PropTypes from 'prop-types';

export default function LiniTrash({ size, ...props }) {
    let className = 'Component Lini LiniTrash';
    if (props.className) {
        className += ' ' + props.className;
    }
    return (
        <span {...props} className={className}>
            <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 20 20">
                <path d="M18.5 2h-5.75L11.4.2A.5.5 0 0011 0H9a.5.5 0 00-.4.2L7.25 2H1.5a.5.5 0 000 1h17a.5.5 0 000-1zM9.25 1h1.5l.75 1h-3l.75-1zM17.582 4.007a.5.5 0 00-.575.411l-2.336 14.014a.725.725 0 01-.671.569H6a.724.724 0 01-.671-.569L2.993 4.418a.5.5 0 00-.986.164l2.336 14.014A1.718 1.718 0 006.001 20h8a1.72 1.72 0 001.658-1.404l2.336-14.014a.5.5 0 00-.411-.575z" />
            </svg>
        </span>
    );
}

LiniTrash.propTypes = {
    size: PropTypes.number.isRequired,
};

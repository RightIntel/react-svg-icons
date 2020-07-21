import React from 'react';
import PropTypes from 'prop-types';

export default function LiniUserLock({ size, ...props }) {
    let className = 'Component Lini LiniUserLock';
    if (props.className) {
        className += ' ' + props.className;
    }
    return (
        <span {...props} className={className}>
            <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 20 20">
                <path d="M9.5 11C6.467 11 4 8.533 4 5.5S6.467 0 9.5 0 15 2.467 15 5.5 12.533 11 9.5 11zm0-10C7.019 1 5 3.019 5 5.5S7.019 10 9.5 10 14 7.981 14 5.5 11.981 1 9.5 1zM11.5 20h-10C.673 20 0 19.327 0 18.5c0-.068.014-1.685 1.225-3.3.705-.94 1.67-1.687 2.869-2.219C5.558 12.33 7.377 12 9.5 12c1.104 0 2.135.09 3.064.267a.501.501 0 01-.187.983 15.495 15.495 0 00-2.877-.249c-3.516 0-6.101.968-7.475 2.8C1.012 17.152 1 18.488 1 18.501a.5.5 0 00.5.5h10a.5.5 0 010 1zM19 14.086V13.5c0-1.378-1.122-2.5-2.5-2.5S14 12.122 14 13.5v.586c-.582.206-1 .762-1 1.414v3c0 .827.673 1.5 1.5 1.5h4c.827 0 1.5-.673 1.5-1.5v-3c0-.652-.418-1.208-1-1.414zM16.5 12c.827 0 1.5.673 1.5 1.5v.5h-3v-.5c0-.827.673-1.5 1.5-1.5zm2.5 6.5a.5.5 0 01-.5.5h-4a.5.5 0 01-.5-.5v-3a.5.5 0 01.5-.5h4a.5.5 0 01.5.5v3z" />
            </svg>
        </span>
    );
}

LiniUserLock.propTypes = {
    size: PropTypes.number.isRequired,
};
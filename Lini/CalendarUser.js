import React from 'react';
import PropTypes from 'prop-types';

export default function LiniCalendarUser({ size, ...props }) {
    let className = 'Component Lini LiniCalendarUser';
    if (props.className) {
        className += ' ' + props.className;
    }
    return (
        <span {...props} className={className}>
            <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 20 20">
                <path d="M18.5 2H16v-.5a.5.5 0 00-1 0V2H5v-.5a.5.5 0 00-1 0V2H1.5C.673 2 0 2.673 0 3.5v14c0 .827.673 1.5 1.5 1.5h17c.827 0 1.5-.673 1.5-1.5v-14c0-.827-.673-1.5-1.5-1.5zm.5 15.5a.5.5 0 01-.5.5h-17a.5.5 0 01-.5-.5v-14a.5.5 0 01.5-.5H4v1.5a.5.5 0 001 0V3h10v1.5a.5.5 0 001 0V3h2.5a.5.5 0 01.5.5v14z" />
                <path d="M10 11c-1.654 0-3-1.346-3-3s1.346-3 3-3 3 1.346 3 3-1.346 3-3 3zm0-5c-1.103 0-2 .897-2 2s.897 2 2 2 2-.897 2-2-.897-2-2-2zM13.5 16h-7c-.425 0-.796-.177-1.019-.486s-.273-.717-.139-1.12c.033-.098.842-2.393 4.658-2.393s4.626 2.296 4.658 2.393c.134.403.084.811-.139 1.12S13.925 16 13.5 16zm-7.211-1.286c-.03.091-.029.172.003.215s.11.071.208.071h7c.098 0 .176-.027.208-.071s.033-.124.003-.215c-.011-.029-.175-.442-.679-.847-.704-.567-1.752-.866-3.032-.866s-2.327.3-3.032.866c-.504.406-.668.818-.679.847z" />
            </svg>
        </span>
    );
}

LiniCalendarUser.propTypes = {
    size: PropTypes.number.isRequired,
};

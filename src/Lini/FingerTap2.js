import React from 'react';
import PropTypes from 'prop-types';

export default function LiniFingerTap2({ size, ...props }) {
    let className = 'Component Lini LiniFingerTap2';
    if (props.className) {
        className += ' ' + props.className;
    }
    return (
        <span {...props} className={className}>
            <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 20 20">
                <path d="M14 17.5a.5.5 0 11-1 0 .5.5 0 011 0z" />
                <path d="M16 10.5a1.502 1.502 0 00-2.053-1.394 1.501 1.501 0 00-2-1A1.502 1.502 0 0010 7.086V4.5C10 3.673 9.327 3 8.5 3S7 3.673 7 4.5v5.966L5.594 9.353c-.304-.241-.694-.361-1.098-.339s-.779.186-1.053.46a1.508 1.508 0 00-.003 2.12l3.479 3.523c-.54.227-.919.762-.919 1.383v2c0 .827.673 1.5 1.5 1.5h7c.827 0 1.5-.673 1.5-1.5v-2a1.5 1.5 0 00-.719-1.28c.328-.636.719-1.798.719-3.72v-1zm-11.85-.318a.653.653 0 01.823-.044l2.216 1.754a.499.499 0 00.81-.392v-7a.5.5 0 011 0v5a.5.5 0 001 0v-1a.5.5 0 011 0v1a.5.5 0 001 0 .5.5 0 011 0v1a.5.5 0 001 0 .5.5 0 011 0v1c0 2.102-.516 3.139-.748 3.5H8.208l-4.057-4.108a.512.512 0 01-.002-.71zM15 18.5a.5.5 0 01-.5.5h-7a.5.5 0 01-.5-.5v-2a.5.5 0 01.5-.5h7a.5.5 0 01.5.5v2z" />
                <path d="M12.5 6a.5.5 0 01-.5-.5v-1C12 2.57 10.43 1 8.5 1S5 2.57 5 4.5v1a.5.5 0 01-1 0v-1C4 2.019 6.019 0 8.5 0S13 2.019 13 4.5v1a.5.5 0 01-.5.5z" />
            </svg>
        </span>
    );
}

LiniFingerTap2.propTypes = {
    size: PropTypes.number.isRequired,
};

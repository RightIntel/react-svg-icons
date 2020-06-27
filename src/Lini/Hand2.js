import React from 'react';
import PropTypes from 'prop-types';

export default function LiniHand2({ size, ...props }) {
    let className = 'Component Lini LiniHand2';
    if (props.className) {
        className += ' ' + props.className;
    }
    return (
        <span {...props} className={className}>
            <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 20 20">
                <path d="M14 17.5a.5.5 0 11-1 0 .5.5 0 011 0z" />
                <path d="M16 7.5a1.502 1.502 0 00-2-1.414V4.5a1.502 1.502 0 00-2.053-1.394 1.501 1.501 0 00-2.894 0A1.502 1.502 0 007 4.5v5.966L5.594 9.353c-.304-.241-.695-.361-1.098-.339s-.779.186-1.053.46a1.508 1.508 0 00-.003 2.12l3.479 3.523c-.54.227-.919.762-.919 1.383v2c0 .827.673 1.5 1.5 1.5h7c.827 0 1.5-.673 1.5-1.5v-2a1.5 1.5 0 00-.719-1.28c.328-.636.719-1.798.719-3.72v-4zM4.15 10.182a.653.653 0 01.823-.044l2.216 1.754a.499.499 0 00.81-.392v-7a.5.5 0 011 0v5a.5.5 0 001 0v-6a.5.5 0 011 0v6a.5.5 0 001 0v-5a.5.5 0 011 0v6a.5.5 0 001 0v-3a.5.5 0 011 0v4c0 2.102-.516 3.139-.748 3.5H8.208l-4.057-4.108a.505.505 0 01-.002-.71zM15 18.5a.5.5 0 01-.5.5h-7a.5.5 0 01-.5-.5v-2a.5.5 0 01.5-.5h7a.5.5 0 01.5.5v2z" />
            </svg>
        </span>
    );
}

LiniHand2.propTypes = {
    size: PropTypes.number.isRequired,
};

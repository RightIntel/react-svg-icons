import React from 'react';
import PropTypes from 'prop-types';

export default function LiniPushpin({ size, ...props }) {
    let className = 'Component Lini LiniPushpin';
    if (props.className) {
        className += ' ' + props.className;
    }
    return (
        <span {...props} className={className}>
            <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 20 20">
                <path d="M18 6.793L12.707 1.5c-.188-.188-.44-.292-.707-.292s-.519.104-.707.292L11 1.793c-.29.29-.5.797-.5 1.207v1a.916.916 0 01-.207.5L7.5 7.293A.916.916 0 017 7.5H6c-.41 0-.917.21-1.207.5l-.293.293a1 1 0 000 1.414l1.553 1.553-4.95 6.435a.5.5 0 00.702.7l6.435-4.95 1.553 1.553c.188.188.44.292.707.292s.519-.104.707-.292l.293-.293c.29-.29.5-.797.5-1.207v-1c0-.142.106-.399.207-.5L15 9.205a.916.916 0 01.5-.207h1c.41 0 .917-.21 1.207-.5L18 8.205c.188-.188.292-.44.292-.707s-.104-.519-.292-.707zM4.234 15.266l2.533-3.293.76.76-3.293 2.533zM17 7.793a.916.916 0 01-.5.207h-1c-.41 0-.917.21-1.207.5L11.5 11.293c-.29.29-.5.797-.5 1.207v1a.916.916 0 01-.207.5l-.292.292H10.5v.001L5.207 9l.293-.293A.916.916 0 016 8.5h1c.41 0 .917-.21 1.207-.5L11 5.207c.29-.29.5-.797.5-1.207V3c0-.142.106-.399.207-.5L12 2.207 17.293 7.5 17 7.793z" />
            </svg>
        </span>
    );
}

LiniPushpin.propTypes = {
    size: PropTypes.number.isRequired,
};
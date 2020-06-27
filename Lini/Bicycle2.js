import React from 'react';
import PropTypes from 'prop-types';

export default function LiniBicycle2({ size, ...props }) {
    let className = 'Component Lini LiniBicycle2';
    if (props.className) {
        className += ' ' + props.className;
    }
    return (
        <span {...props} className={className}>
            <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 20 20">
                <path d="M5.5 9.002c-.828 0-1.502-.674-1.502-1.502S4.672 5.998 5.5 5.998s1.502.674 1.502 1.502S6.328 9.002 5.5 9.002zm0-2.004a.502.502 0 100 1.005.502.502 0 000-1.005zM9.5 17a.5.5 0 01-.5-.5v-2.998c0-.772.581-1.543 1.324-1.756l1.5-.429-3.26-2.173-1.71 1.71A.5.5 0 016.5 11H4.498a.5.5 0 010-1h1.795l1.854-1.854a.5.5 0 01.631-.063l3.668 2.445c.55.367.548.797.522.966s-.156.579-.791.761l-1.577.452c-.313.09-.599.468-.599.795V16.5a.5.5 0 01-.5.5z" />
                <path d="M15 20c-2.206 0-4-1.794-4-4s1.794-4 4-4 4 1.794 4 4-1.794 4-4 4zm0-7c-1.654 0-3 1.346-3 3s1.346 3 3 3 3-1.346 3-3-1.346-3-3-3zM3.999 20C1.794 20 0 18.206 0 16.001s1.794-3.999 3.999-3.999 3.999 1.794 3.999 3.999S6.204 20 3.999 20zm0-6.998C2.345 13.002 1 14.347 1 16.001S2.345 19 3.999 19s2.999-1.345 2.999-2.999-1.345-2.999-2.999-2.999z" />
            </svg>
        </span>
    );
}

LiniBicycle2.propTypes = {
    size: PropTypes.number.isRequired,
};
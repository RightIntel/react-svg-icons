import React from 'react';
import PropTypes from 'prop-types';

export default function LiniLicense2({ size, ...props }) {
    let className = 'Component Lini LiniLicense2';
    if (props.className) {
        className += ' ' + props.className;
    }
    return (
        <span {...props} className={className}>
            <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 20 20">
                <path d="M18.5 18h-17C.673 18 0 17.327 0 16.5v-13C0 2.673.673 2 1.5 2h17c.827 0 1.5.673 1.5 1.5v13c0 .827-.673 1.5-1.5 1.5zM1.5 3a.5.5 0 00-.5.5v13a.5.5 0 00.5.5h17a.5.5 0 00.5-.5v-13a.5.5 0 00-.5-.5h-17z" />
                <path d="M9.5 6h-6a.5.5 0 010-1h6a.5.5 0 010 1zM9.5 9h-6a.5.5 0 010-1h6a.5.5 0 010 1zM9.5 11h-6a.5.5 0 010-1h6a.5.5 0 010 1zM9.5 13h-6a.5.5 0 010-1h6a.5.5 0 010 1zM8.5 15h-5a.5.5 0 010-1h5a.5.5 0 010 1zM17.943 6.544l-.813-.591-.311-.956h-1.005l-.813-.591-.813.591h-1.005l-.311.956-.813.591.311.956-.311.956.813.591.132.406c-.002.016-.002.031-.002.047v5a.5.5 0 00.854.354l1.146-1.146 1.146 1.146a.494.494 0 00.545.108.5.5 0 00.309-.462v-5A.708.708 0 0017 9.453l.132-.406.813-.591-.311-.956.311-.956zm-4.71.382l.488-.355.187-.574h.604L15 5.642l.488.355h.604l.187.574.488.355-.187.574.187.574-.488.355-.187.574h-.604L15 9.358l-.488-.355h-.604l-.187-.574-.488-.355.187-.574-.187-.574zm2.121 5.72a.5.5 0 00-.707 0l-.646.646v-3.29h.187l.813.591.813-.591h.187v3.29l-.646-.646z" />
            </svg>
        </span>
    );
}

LiniLicense2.propTypes = {
    size: PropTypes.number.isRequired,
};
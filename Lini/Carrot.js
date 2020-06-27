import React from 'react';
import PropTypes from 'prop-types';

export default function LiniCarrot({ size, ...props }) {
    let className = 'Component Lini LiniCarrot';
    if (props.className) {
        className += ' ' + props.className;
    }
    return (
        <span {...props} className={className}>
            <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 20 20">
                <path d="M19.923 19.233c-.186-.328-2.39-4.199-5.077-8.02-1.649-2.345-3.157-4.217-4.482-5.563C8.609 3.867 7.182 3.001 6 3.001c-.35 0-.687.052-1 .153V.501a.5.5 0 00-1 0v1.926L2.949.282a.5.5 0 10-.898.44l1.278 2.609L.72 2.053a.5.5 0 00-.44.898l2.145 1.051H.5a.5.5 0 000 1h2.655a3.235 3.235 0 00-.155 1c0 1.182.867 2.609 2.649 4.364 1.347 1.326 3.218 2.834 5.563 4.482a108.211 108.211 0 008.042 5.089.5.5 0 00.245.064h.008a.5.5 0 00.416-.767zm-8.135-5.205a62.903 62.903 0 01-2.649-1.96l.715-.715a.5.5 0 00-.707-.707l-.792.792C4.646 8.388 4 6.761 4 6c0-1.178.822-2 2-2 .467 0 1.259.243 2.506 1.286l-1.36 1.36a.5.5 0 00.708.707l1.397-1.397c1.215 1.164 2.779 2.989 4.774 5.826.276.393.547.786.811 1.176l-.689.689a.5.5 0 00.708.707l.549-.549c1.1 1.663 2.048 3.205 2.704 4.302a104.773 104.773 0 01-6.319-4.078z" />
            </svg>
        </span>
    );
}

LiniCarrot.propTypes = {
    size: PropTypes.number.isRequired,
};

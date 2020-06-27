import React from 'react';
import PropTypes from 'prop-types';

export default function LiniBabyBottle({ size, ...props }) {
    let className = 'Component Lini LiniBabyBottle';
    if (props.className) {
        className += ' ' + props.className;
    }
    return (
        <span {...props} className={className}>
            <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 20 20">
                <path d="M8.5 17h-1a.5.5 0 010-1h1a.5.5 0 010 1zM8.5 15h-1a.5.5 0 010-1h1a.5.5 0 010 1zM9.5 13h-2a.5.5 0 010-1h2a.5.5 0 010 1z" />
                <path d="M13.9 6.055a4.501 4.501 0 00-1.998-2.861A2.502 2.502 0 009.5 0a2.503 2.503 0 00-2.402 3.194A4.497 4.497 0 005.1 6.055C4.467 6.231 4 6.812 4 7.5v1c0 .652.418 1.208 1 1.414V17.5C5 18.878 6.122 20 7.5 20h4c1.378 0 2.5-1.122 2.5-2.5V9.914c.582-.206 1-.762 1-1.414v-1c0-.689-.467-1.27-1.1-1.445zM7.945 3.864a.503.503 0 00.222-.677A1.502 1.502 0 019.5 1a1.502 1.502 0 011.333 2.187.5.5 0 00.222.677A3.504 3.504 0 0112.855 6h-6.71a3.5 3.5 0 011.8-2.136zM11.5 19h-4c-.827 0-1.5-.673-1.5-1.5V10h7v7.5c0 .827-.673 1.5-1.5 1.5zM14 8.5a.5.5 0 01-.5.5h-8a.5.5 0 01-.5-.5v-1a.5.5 0 01.5-.5h8a.5.5 0 01.5.5v1z" />
            </svg>
        </span>
    );
}

LiniBabyBottle.propTypes = {
    size: PropTypes.number.isRequired,
};

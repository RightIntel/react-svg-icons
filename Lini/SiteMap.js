import React from 'react';
import PropTypes from 'prop-types';

export default function LiniSiteMap({ size, ...props }) {
    let className = 'Component Lini LiniSiteMap';
    if (props.className) {
        className += ' ' + props.className;
    }
    return (
        <span {...props} className={className}>
            <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 20 20">
                <path d="M17 13.05V11.5c0-.827-.673-1.5-1.5-1.5H10V7.95c1.14-.232 2-1.242 2-2.45C12 4.122 10.878 3 9.5 3S7 4.122 7 5.5c0 1.207.86 2.217 2 2.45V10H3.5c-.827 0-1.5.673-1.5 1.5v1.55c-1.14.232-2 1.242-2 2.45C0 16.878 1.122 18 2.5 18S5 16.878 5 15.5c0-1.207-.86-2.217-2-2.45V11.5a.5.5 0 01.5-.5H9v2.05c-1.14.232-2 1.242-2 2.45C7 16.878 8.122 18 9.5 18s2.5-1.122 2.5-2.5c0-1.207-.86-2.217-2-2.45V11h5.5a.5.5 0 01.5.5v1.55c-1.14.232-2 1.242-2 2.45 0 1.378 1.122 2.5 2.5 2.5s2.5-1.122 2.5-2.5c0-1.207-.86-2.217-2-2.45zM8 5.5C8 4.673 8.673 4 9.5 4s1.5.673 1.5 1.5S10.327 7 9.5 7 8 6.327 8 5.5zm-4 10c0 .827-.673 1.5-1.5 1.5S1 16.327 1 15.5 1.673 14 2.5 14s1.5.673 1.5 1.5zm7 0c0 .827-.673 1.5-1.5 1.5S8 16.327 8 15.5 8.673 14 9.5 14s1.5.673 1.5 1.5zm5.5 1.5c-.827 0-1.5-.673-1.5-1.5s.673-1.5 1.5-1.5 1.5.673 1.5 1.5-.673 1.5-1.5 1.5z" />
            </svg>
        </span>
    );
}

LiniSiteMap.propTypes = {
    size: PropTypes.number.isRequired,
};

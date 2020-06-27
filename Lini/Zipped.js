import React from 'react';
import PropTypes from 'prop-types';

export default function LiniZipped({ size, ...props }) {
    let className = 'Component Lini LiniZipped';
    if (props.className) {
        className += ' ' + props.className;
    }
    return (
        <span {...props} className={className}>
            <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 20 20">
                <path d="M6.5 8C5.673 8 5 7.327 5 6.5S5.673 5 6.5 5 8 5.673 8 6.5 7.327 8 6.5 8zm0-2a.5.5 0 100 1 .5.5 0 000-1zM12.5 8c-.827 0-1.5-.673-1.5-1.5S11.673 5 12.5 5s1.5.673 1.5 1.5S13.327 8 12.5 8zm0-2a.5.5 0 100 1 .5.5 0 000-1zM14.5 12a.5.5 0 01-.5-.5v-1a.5.5 0 011 0v1a.5.5 0 01-.5.5zM13.5 13a.5.5 0 01-.5-.5v-1a.5.5 0 011 0v1a.5.5 0 01-.5.5zM11.5 13a.5.5 0 01-.5-.5v-1a.5.5 0 011 0v1a.5.5 0 01-.5.5zM9.5 13a.5.5 0 01-.5-.5v-1a.5.5 0 011 0v1a.5.5 0 01-.5.5zM7.5 13a.5.5 0 01-.5-.5v-1a.5.5 0 011 0v1a.5.5 0 01-.5.5zM12.5 12a.5.5 0 01-.5-.5v-1a.5.5 0 011 0v1a.5.5 0 01-.5.5zM10.5 12a.5.5 0 01-.5-.5v-1a.5.5 0 011 0v1a.5.5 0 01-.5.5zM8.5 12a.5.5 0 01-.5-.5v-1a.5.5 0 011 0v1a.5.5 0 01-.5.5zM6.5 12a.5.5 0 01-.5-.5v-1a.5.5 0 011 0v1a.5.5 0 01-.5.5z" />
                <path d="M16.218 3.782C14.424 1.988 12.038 1 9.5 1s-4.923.988-6.717 2.782S.001 7.962.001 10.499c0 2.538.988 4.923 2.782 6.717s4.18 2.782 6.717 2.782 4.923-.988 6.718-2.782C18.012 15.422 19 13.036 19 10.499s-.988-4.923-2.782-6.717zM17.867 12H17v-1h.985a8.64 8.64 0 01-.117 1zM4.5 11a.5.5 0 010 1H4v-1h.5zM3 12H1.133a8.427 8.427 0 01-.117-1h1.985v1zm6.5 7c-3.817 0-7.055-2.529-8.125-6H4.5c.827 0 1.5-.673 1.5-1.5S5.327 10 4.5 10H1.015c.26-4.455 3.966-8 8.485-8s8.225 3.545 8.485 8H16.5a.5.5 0 00-.5.5v2a.5.5 0 00.5.5h1.125c-1.07 3.471-4.307 6-8.125 6z" />
                <path d="M15.5 13a.5.5 0 01-.5-.5v-1a.5.5 0 011 0v1a.5.5 0 01-.5.5z" />
            </svg>
        </span>
    );
}

LiniZipped.propTypes = {
    size: PropTypes.number.isRequired,
};

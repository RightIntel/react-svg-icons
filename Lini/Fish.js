import React from 'react';
import PropTypes from 'prop-types';

export default function LiniFish({ size, ...props }) {
    let className = 'Component Lini LiniFish';
    if (props.className) {
        className += ' ' + props.className;
    }
    return (
        <span {...props} className={className}>
            <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 20 20">
                <path d="M9.5 9c-.132 0-.261-.053-.353-.147S9 8.631 9 8.5a.498.498 0 01.5-.5.5.5 0 010 1zM9.5 11a.498.498 0 01-.5-.5.498.498 0 01.5-.5.498.498 0 01.5.5.498.498 0 01-.5.5zM9.5 13c-.132 0-.261-.053-.353-.147S9 12.631 9 12.5a.498.498 0 01.5-.5.498.498 0 01.5.5.5.5 0 01-.5.5zM11.5 10c-.132 0-.261-.053-.353-.147S11 9.631 11 9.5a.498.498 0 01.5-.5.498.498 0 01.5.5.5.5 0 01-.5.5zM11.5 12c-.132 0-.261-.053-.353-.147S11 11.631 11 11.5a.498.498 0 01.5-.5.498.498 0 01.5.5.5.5 0 01-.5.5zM13.5 11c-.132 0-.261-.053-.353-.147S13 10.631 13 10.5a.498.498 0 01.5-.5.5.5 0 010 1zM6 9.5C6 8.673 5.327 8 4.5 8S3 8.673 3 9.5 3.673 11 4.5 11 6 10.327 6 9.5zm-1.5.5a.5.5 0 110-1 .5.5 0 010 1z" />
                <path d="M19.909 14.213c-.014-.02-1.387-1.992-1.892-3.718.499-1.834 1.868-3.677 1.882-3.695a.502.502 0 00-.547-.778c-.12.037-2.813.877-4.851 2.706-.376-.351-.82-.737-1.323-1.125-.072-.056-.145-.11-.218-.164-.116-.899.127-1.744.724-2.515a4.496 4.496 0 011.072-.996.5.5 0 00-.195-.925c-.044-.005-1.083-.131-2.507.072-1.812.258-3.435.938-4.71 1.969a8.293 8.293 0 00-1.188-.037h-.011c-2.582.118-4.102 1.52-4.931 2.705C.29 9.033.019 10.345.008 10.401a.497.497 0 000 .196c.011.055.281 1.368 1.206 2.689.828 1.182 2.343 2.581 4.916 2.704l.02.001a8.527 8.527 0 002.24-.211c1.345.957 2.508 1.206 3.351 1.206.156 0 .302-.009.436-.023.984-.104 1.56-.518 1.622-.565a.5.5 0 00.116-.677c-.232-.349-.801-1.364-.901-2.202l.165-.125c.504-.387.947-.773 1.323-1.124 2.038 1.83 4.73 2.669 4.851 2.706a.5.5 0 00.556-.765zM12.166 4.07c.371-.054.714-.083 1.016-.097a5.607 5.607 0 00-.262.308c-.59.75-.919 1.586-.976 2.46a13.107 13.107 0 00-1.729-.919 10.358 10.358 0 00-1.504-.525c1.221-.763 2.508-1.09 3.455-1.227zM2.054 12.741a7.102 7.102 0 01-1.041-2.242 7.03 7.03 0 011.021-2.213c.945-1.349 2.238-2.107 3.85-2.258C6.615 7.397 7 8.936 7 10.499s-.385 3.102-1.116 4.471c-1.6-.15-2.887-.898-3.83-2.23zM12.8 15.802c-.554.211-1.656.411-3.14-.401.185-.069.37-.143.556-.223a13.208 13.208 0 001.904-1.03c.162.642.459 1.253.681 1.655zm-.249-3.184c-1.32 1.012-3.319 2.205-5.554 2.364a10.526 10.526 0 000-8.964c2.235.159 4.234 1.352 5.554 2.364A17.279 17.279 0 0114.84 10.5a17.21 17.21 0 01-2.289 2.118zm2.665-1.05c.418-.437.654-.73.674-.755a.5.5 0 000-.625c-.02-.025-.257-.319-.674-.755.974-.861 2.129-1.489 3.015-1.894-.449.775-.956 1.801-1.216 2.841a.496.496 0 00.002.251c.268.996.798 2.052 1.255 2.851-.892-.404-2.067-1.038-3.056-1.913z" />
            </svg>
        </span>
    );
}

LiniFish.propTypes = {
    size: PropTypes.number.isRequired,
};
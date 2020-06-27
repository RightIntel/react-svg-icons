import React from 'react';
import PropTypes from 'prop-types';

export default function LiniLayersCrossed({ size, ...props }) {
    let className = 'Component Lini LiniLayersCrossed';
    if (props.className) {
        className += ' ' + props.className;
    }
    return (
        <span {...props} className={className}>
            <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 20 20">
                <path d="M19.306 13.039L10 16.957l-5.562-2.342 1.487-1.289 3.881 1.634a.502.502 0 00.388 0l9.5-4a.5.5 0 00-.388-.922L10 13.956l-3.232-1.361 1.487-1.289 1.551.653a.502.502 0 00.388 0l9.5-4a.501.501 0 000-.922L15.31 5.191l1.518-1.315a.5.5 0 10-.655-.755l-1.89 1.638-4.088-1.721a.502.502 0 00-.388 0l-9.5 4a.501.501 0 000 .922l6.921 2.914-1.487 1.289-5.046-2.125a.5.5 0 10-.388.922l4.591 1.933-1.487 1.289-2.716-1.144a.5.5 0 10-.388.922l2.262.952-1.395 1.209a.5.5 0 10.655.756l1.768-1.532 6.211 2.615a.502.502 0 00.388 0l9.5-4a.5.5 0 00-.388-.922zM18.212 7.5L10 10.957l-.903-.38 5.37-4.654L18.211 7.5zm-16.424 0L10 4.043l3.44 1.448-5.37 4.654L1.789 7.5z" />
            </svg>
        </span>
    );
}

LiniLayersCrossed.propTypes = {
    size: PropTypes.number.isRequired,
};

import React from 'react';
import PropTypes from 'prop-types';

export default function LiniAnchor({ size, ...props }) {
    let className = 'Component Lini LiniAnchor';
    if (props.className) {
        className += ' ' + props.className;
    }
    return (
        <span {...props} className={className}>
            <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 20 20">
                <path d="M9.5 6C8.122 6 7 4.878 7 3.5S8.122 1 9.5 1 12 2.122 12 3.5 10.878 6 9.5 6zm0-4C8.673 2 8 2.673 8 3.5S8.673 5 9.5 5 11 4.327 11 3.5 10.327 2 9.5 2zM18.974 14.342l-1-3a.499.499 0 00-.974.159v3c0 2.635-1.645 4.475-4 4.475-.7 0-1.469-.283-2.058-.756-.607-.488-.942-1.099-.942-1.719v-9.5h1.5a.5.5 0 000-1h-4a.5.5 0 000 1H9v9.5c0 .621-.334 1.231-.942 1.719-.589.473-1.359.756-2.058.756-2.355 0-4-1.84-4-4.475v-3a.501.501 0 00-.974-.159l-1 3a.5.5 0 10.948.316L1 14.58c.017 1.459.49 2.795 1.336 3.771.909 1.048 2.21 1.624 3.663 1.624.934 0 1.912-.356 2.684-.977.332-.267.605-.565.816-.885.21.32.483.618.816.885.772.621 1.751.977 2.684.977 1.453 0 2.754-.577 3.663-1.624.847-.976 1.32-2.312 1.336-3.771l.026.078a.499.499 0 10.948-.316z" />
            </svg>
        </span>
    );
}

LiniAnchor.propTypes = {
    size: PropTypes.number.isRequired,
};

import React from 'react';
import PropTypes from 'prop-types';

export default function LiniPlaneCrossed({ size, ...props }) {
    let className = 'Component Lini LiniPlaneCrossed';
    if (props.className) {
        className += ' ' + props.className;
    }
    return (
        <span {...props} className={className}>
            <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 20 20">
                <path d="M18.825 13.12l-6.593-5.651 4.654-5.651a.5.5 0 10-.772-.636l-4.135 5.02c-.064-1.932-.276-3.419-.633-4.432C10.829.306 10.057-.001 9.499-.001S8.169.306 7.652 1.77c-.421 1.192-.64 3.041-.653 5.498L.173 13.119a.5.5 0 00-.175.38v2a.5.5 0 00.748.434l6.077-3.473-4.711 5.721a.5.5 0 10.772.636l4.319-5.244.216 2.164-2.182 1.336a.5.5 0 00-.239.426v2a.5.5 0 00.621.485l3.879-.97 3.879.97a.501.501 0 00.621-.485v-2a.5.5 0 00-.239-.426l-2.182-1.336.342-3.421 6.331 3.618a.5.5 0 00.748-.434v-2a.5.5 0 00-.175-.38zM7.729 11.056a.499.499 0 00-.477.01L1 14.639v-.908l6.825-5.85A.5.5 0 008 7.501c0-4.798.808-6.5 1.5-6.5.687 0 1.488 1.677 1.5 6.392l-3.118 3.786a.491.491 0 00-.153-.122zM18 14.638l-6.252-3.572a.499.499 0 00-.745.385l-.45 4.5a.5.5 0 00.236.476L13 17.781v1.079l-3.379-.845a.501.501 0 00-.242 0L6 18.86v-1.079l2.211-1.354a.497.497 0 00.236-.476L8.1 12.486l3.495-4.244 6.404 5.489v.908z" />
            </svg>
        </span>
    );
}

LiniPlaneCrossed.propTypes = {
    size: PropTypes.number.isRequired,
};

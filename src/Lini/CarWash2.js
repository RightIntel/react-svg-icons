import React from 'react';
import PropTypes from 'prop-types';

export default function LiniCarWash2({ size, ...props }) {
    let className = 'Component Lini LiniCarWash2';
    if (props.className) {
        className += ' ' + props.className;
    }
    return (
        <span {...props} className={className}>
            <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 20 20">
                <path d="M20.001 15.51L20 15.476c-.006-.258-.094-1.833-1.276-2.424-.171-.085-.525-.262-3.883-.524-.122-.28-.327-.731-.576-1.203-.779-1.478-1.27-1.817-1.572-1.943-1.057-.442-4.242-.542-6.314-.024-1.297.324-2.459 1.088-3.36 2.209a7.113 7.113 0 00-.924 1.483 4.572 4.572 0 00-.803.817C.435 14.982.001 16.54.001 18.499a.498.498 0 00.5.5h1.035a.5.5 0 00.495-.429c.028-.197.076-.388.141-.57.413 1.164 1.525 2 2.828 2s2.415-.836 2.828-2c.065.183.113.373.141.57a.5.5 0 00.495.429h6.071a.5.5 0 00.495-.429c.017-.119.042-.236.073-.35a2.507 2.507 0 002.395 1.779 2.505 2.505 0 002.011-3.991.5.5 0 00.491-.5zm-13.38-5.181c1.914-.479 4.898-.353 5.686-.024.038.016.39.192 1.069 1.48.122.23.233.458.328.66a222.89 222.89 0 00-2.05-.132A377.704 377.704 0 005.52 12h-.021a6.5 6.5 0 00-1.717.215c.583-.73 1.502-1.552 2.839-1.886zM5 19a2.002 2.002 0 01-1.985-2.244A3 3 0 015 16a3 3 0 011.985.756A2.002 2.002 0 015 19zm9.126-1H8.873a4 4 0 00-7.748 0h-.116c.105-2.387 1.013-4.995 4.479-5 .197.008 3.083.131 6.058.309 5.681.34 6.588.575 6.728.638.398.199.577.677.658 1.053h-.934a4.002 4.002 0 00-3.874 2.999zm3.372 1a1.504 1.504 0 01-1.083-2.543 2.98 2.98 0 011.307-.444A1.5 1.5 0 0119 17.498c0 .828-.674 1.502-1.502 1.502zM15.492 6.009c-.83 0-1.504-.675-1.504-1.504s.675-1.504 1.504-1.504 1.504.675 1.504 1.504-.675 1.504-1.504 1.504zm0-2.009a.504.504 0 100 1.009.504.504 0 000-1.009zM18.498 6a.5.5 0 110-1 .5.5 0 010 1zM6.5 6c-.132 0-.261-.053-.353-.147S6 5.631 6 5.5a.498.498 0 01.5-.5.498.498 0 01.5.5.5.5 0 01-.5.5z" />
                <path d="M6 3a3.004 3.004 0 00-2.801 4.081 4.007 4.007 0 00-2.814 5.634.501.501 0 00.666.238.5.5 0 00.237-.666A3.003 3.003 0 013.771 8.01c.129.142.272.273.429.391a.498.498 0 00.7-.1.5.5 0 00-.099-.7 2.002 2.002 0 011.2-3.6 2.002 2.002 0 011.6 3.2.5.5 0 00.799.601c.393-.523.6-1.145.6-1.8 0-1.654-1.346-3-3-3zM1.5 6.009a.501.501 0 01-.353-.853.498.498 0 01.853.353.502.502 0 01-.5.5zM2.5 4C1.673 4 1 3.327 1 2.5S1.673 1 2.5 1 4 1.673 4 2.5 3.327 4 2.5 4zm0-2a.5.5 0 100 1 .5.5 0 000-1zM16.496 10a.5.5 0 110-1 .5.5 0 010 1z" />
                <path d="M15.492 6.992c-.31 0-.617.041-.912.12A2.494 2.494 0 0012.5 6a2.51 2.51 0 00-2.159 1.239.5.5 0 00.863.505A1.506 1.506 0 0112.5 7c.446 0 .858.196 1.138.522a3.521 3.521 0 00-.469.349.5.5 0 10.663.749 2.51 2.51 0 014.027 2.714.5.5 0 00.943.333 3.512 3.512 0 00-3.309-4.674z" />
            </svg>
        </span>
    );
}

LiniCarWash2.propTypes = {
    size: PropTypes.number.isRequired,
};
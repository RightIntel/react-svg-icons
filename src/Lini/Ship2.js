import React from 'react';
import PropTypes from 'prop-types';

export default function LiniShip2({ size, ...props }) {
    let className = 'Component Lini LiniShip2';
    if (props.className) {
        className += ' ' + props.className;
    }
    return (
        <span {...props} className={className}>
            <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 20 20">
                <path d="M18.5 20c-.707 0-1.29-.583-1.854-1.146-.38-.38-.854-.854-1.146-.854-.276 0-.696.431-1.066.811C13.892 19.368 13.277 20 12.5 20c-.767 0-1.349-.614-1.863-1.156-.393-.415-.8-.844-1.137-.844-.355 0-.813.471-1.217.886C7.75 19.434 7.199 20 6.5 20c-.707 0-1.29-.583-1.854-1.146-.38-.38-.854-.854-1.146-.854s-.766.473-1.146.854C1.79 19.418 1.208 20 .5 20a.5.5 0 010-1c.293 0 .766-.473 1.146-.854C2.21 17.582 2.792 17 3.5 17s1.29.583 1.854 1.146c.38.38.854.854 1.146.854.276 0 .696-.431 1.066-.811C8.108 17.632 8.723 17 9.5 17c.767 0 1.349.614 1.863 1.156.393.415.8.844 1.137.844.355 0 .813-.471 1.217-.886C14.25 17.566 14.801 17 15.5 17c.707 0 1.29.583 1.854 1.146.38.38.854.854 1.146.854a.5.5 0 010 1z" />
                <path d="M18.5 16c-.293 0-.766-.473-1.146-.854-.42-.42-.85-.85-1.335-1.042.051-.757.244-2.595.966-5.483.01-.04.015-.08.015-.121 0-.464-.397-.851-1.37-1.338a13.156 13.156 0 00-.63-.293V5c0-.416-.378-.665-1.076-.979a23.344 23.344 0 00-1.759-.68c-.847-.296-1.7-.566-2.165-.71V.501a.5.5 0 00-1 0v2.13c-.464.142-1.315.407-2.159.69a31.9 31.9 0 00-1.748.63c-.68.275-1.094.474-1.094.9V6.87c-.232.101-.442.199-.63.293-.973.487-1.37.874-1.37 1.338a.49.49 0 00.015.121c.722 2.888.915 4.726.966 5.483-.485.192-.915.623-1.335 1.042-.38.38-.854.854-1.146.854a.5.5 0 000 1c.707 0 1.29-.583 1.854-1.146.38-.38.854-.854 1.146-.854s.766.473 1.146.854c.564.564 1.146 1.146 1.854 1.146.699 0 1.25-.566 1.783-1.114.404-.415.862-.886 1.217-.886.337 0 .744.429 1.137.844.514.542 1.096 1.156 1.863 1.156.777 0 1.392-.631 1.934-1.189.37-.38.79-.811 1.066-.811.293 0 .766.473 1.146.854.564.564 1.146 1.146 1.854 1.146a.5.5 0 000-1zM11.579 4.196c1.664.572 2.234.867 2.421.985v1.281c-.26-.1-.537-.203-.832-.308A65.669 65.669 0 0010 5.125V3.677c.417.131.99.316 1.579.518zM5 5.082c.533-.276 2.301-.881 4-1.407v1.451c-.609.181-1.894.574-3.168 1.029A38.74 38.74 0 005 6.463v-1.38zm8.717 10.032c-.404.415-.862.886-1.217.886-.337 0-.744-.429-1.137-.844C10.849 14.614 10.267 14 9.5 14c-.777 0-1.392.631-1.934 1.189-.37.38-.79.811-1.066.811-.293 0-.766-.473-1.146-.854-.43-.43-.871-.871-1.37-1.056-.047-.767-.233-2.608-.957-5.544.118-.115.497-.398 1.667-.886l.001-.001c.45-.187 1.016-.405 1.73-.655A65.54 65.54 0 019.5 6.02c.417.122 1.724.511 3.071.983.715.25 1.282.468 1.733.656l.004.002c1.169.487 1.548.77 1.666.885-.724 2.938-.91 4.779-.957 5.546-.481.182-.895.607-1.299 1.022z" />
            </svg>
        </span>
    );
}

LiniShip2.propTypes = {
    size: PropTypes.number.isRequired,
};

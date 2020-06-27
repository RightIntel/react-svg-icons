import React from 'react';
import PropTypes from 'prop-types';

export default function LiniHat({ size, ...props }) {
    let className = 'Component Lini LiniHat';
    if (props.className) {
        className += ' ' + props.className;
    }
    return (
        <span {...props} className={className}>
            <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 20 20">
                <path d="M17.35 10.408L18 5.533V5.5c0-.816-.438-1.951-2.524-2.719C14.089 2.27 12.196 2 10 2s-4.09.27-5.476.781C2.438 3.549 2 4.684 2 5.5v.033l.65 4.875C.937 11.228 0 12.315 0 13.5c0 1.283 1.097 2.451 3.088 3.289C4.942 17.57 7.397 18 10 18s5.057-.43 6.912-1.211C18.904 15.95 20 14.782 20 13.5c0-1.184-.937-2.272-2.65-3.092zm-.954-.414C15.173 10.608 12.696 11 10 11s-5.173-.392-6.396-1.006l-.555-4.163C4.546 6.634 7.423 7 10 7c2.594 0 5.458-.367 6.951-1.169l-.555 4.163zM5.581 11.626l-1.239 1.567c-.204-.098-.307-.181-.343-.229l-.243-1.82c.515.189 1.132.351 1.824.482zm1.135.177a24.44 24.44 0 001.852.161l-1.31 1.893a16.24 16.24 0 01-1.472-.225 10.282 10.282 0 01-.437-.099l1.368-1.73zm3.044.196L10 12c.524 0 1.038-.014 1.537-.041l-1.312 2.04L10 14c-.543 0-1.078-.016-1.593-.046l1.353-1.955zm3.03-.139a20.304 20.304 0 001.687-.245l-1.285 2.188c-.546.073-1.137.127-1.754.16l1.352-2.102zm3.041-.577c.143-.044.281-.091.412-.139L16 12.964c-.078.103-.465.366-1.514.609l1.345-2.29zM4.87 3.719C6.129 3.255 7.951 3 10 3s3.872.255 5.13.719c.598.22 1.275.563 1.627 1.059-.325.239-.976.526-2.041.765-1.313.295-2.988.457-4.717.457-1.703 0-3.359-.158-4.663-.445-1.239-.273-1.825-.578-2.094-.777.352-.496 1.03-.838 1.627-1.058zm11.653 12.149C14.789 16.598 12.472 17 10 17s-4.789-.402-6.523-1.132C1.903 15.205 1 14.342 1 13.5c0-.711.643-1.436 1.79-2.044l.211 1.583c.028.666.778 1.159 2.291 1.508 1.263.292 2.936.452 4.709.452s3.445-.161 4.709-.452c1.512-.349 2.262-.843 2.291-1.508l.211-1.583c1.146.608 1.79 1.333 1.79 2.043 0 .842-.903 1.705-2.477 2.368z" />
            </svg>
        </span>
    );
}

LiniHat.propTypes = {
    size: PropTypes.number.isRequired,
};

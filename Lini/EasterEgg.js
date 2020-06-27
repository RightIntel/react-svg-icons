import React from 'react';
import PropTypes from 'prop-types';

export default function LiniEasterEgg({ size, ...props }) {
    let className = 'Component Lini LiniEasterEgg';
    if (props.className) {
        className += ' ' + props.className;
    }
    return (
        <span {...props} className={className}>
            <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 20 20">
                <path d="M7 8.5a.5.5 0 11-1 0 .5.5 0 011 0zM9 8.5a.5.5 0 11-1 0 .5.5 0 011 0zM11 8.5a.5.5 0 11-1 0 .5.5 0 011 0zM13 8.5a.5.5 0 11-1 0 .5.5 0 011 0zM15 8.5a.5.5 0 11-1 0 .5.5 0 011 0z" />
                <path d="M16.934 7.092a14.536 14.536 0 00-3.187-4.743c-.865-.865-2.018-1.342-3.247-1.342s-2.381.477-3.247 1.342a14.52 14.52 0 00-3.187 4.743A14.113 14.113 0 003 12.5c0 2.003.78 3.887 2.197 5.303S8.497 20 10.5 20s3.887-.78 5.303-2.197S18 14.503 18 12.5c0-1.874-.359-3.694-1.066-5.408zm-1.08 8.554c-.273-.273-.646-.646-1.354-.646s-1.081.374-1.354.646c-.245.245-.365.354-.646.354s-.401-.108-.646-.354c-.273-.273-.646-.646-1.354-.646s-1.081.374-1.354.646c-.245.245-.365.354-.646.354s-.401-.108-.646-.354C7.581 15.373 7.208 15 6.5 15s-1.081.374-1.354.646c-.082.082-.15.149-.216.202A6.493 6.493 0 014.174 14H6.89c.036.002.073.003.109.003V14H9.89c.036.002.073.003.109.003V14h1v.003c.037 0 .073-.001.109-.003h2.891v.003c.037 0 .073-.001.109-.003h2.716a6.464 6.464 0 01-.756 1.848 2.827 2.827 0 01-.216-.202zM5.432 6.525l.844.422c.141.07.306.07.447 0l1.776-.888 1.776.888c.141.07.306.07.447 0l1.776-.888 1.776.888a.502.502 0 00.448 0l.844-.422A13.145 13.145 0 0116.76 10l-12.524.003c.233-1.21.635-2.378 1.194-3.478zM15 12.003c0 .526-.408.958-.925.997h-1.342a1.992 1.992 0 00-.003-1.999H14v.002c.551 0 1 .449 1 1zM9.925 13A1.002 1.002 0 019 12.003c0-.551.449-1 1-1v-.001h1v.002c.551 0 1 .449 1 1 0 .526-.408.958-.925.997h-1.15zm-3 0A1.002 1.002 0 016 12.003c0-.551.449-1 1-1v-.001h1.27A1.988 1.988 0 008.267 13H6.925zM4 12.5c0-.503.029-1.003.085-1.497h1.184A1.994 1.994 0 005.267 13H4.019A6.37 6.37 0 014 12.5zm11.733.5a1.986 1.986 0 00-.004-2h1.185c.056.495.085.996.085 1.5 0 .168-.006.335-.019.5h-1.248zM7.961 3.055c.677-.677 1.578-1.049 2.539-1.049s1.863.373 2.539 1.049A13.766 13.766 0 0115.08 5.65l-.581.29-1.776-.888a.502.502 0 00-.447 0L10.5 5.94l-1.776-.888a.502.502 0 00-.447 0l-1.776.888-.581-.29a13.766 13.766 0 012.041-2.595zM10.5 19a6.49 6.49 0 01-4.988-2.337c.132-.1.242-.21.341-.309.245-.245.365-.354.646-.354s.401.108.646.354c.273.273.646.646 1.354.646s1.081-.374 1.354-.646c.245-.245.365-.354.646-.354s.401.108.646.354c.273.273.646.646 1.354.646s1.081-.374 1.354-.646c.245-.245.365-.354.646-.354s.401.108.646.354c.099.099.209.209.341.309A6.49 6.49 0 0110.498 19z" />
            </svg>
        </span>
    );
}

LiniEasterEgg.propTypes = {
    size: PropTypes.number.isRequired,
};